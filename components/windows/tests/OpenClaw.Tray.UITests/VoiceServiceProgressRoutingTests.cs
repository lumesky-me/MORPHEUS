using System.Buffers.Binary;
using System.Collections.Concurrent;
using NAudio.Wave;
using OpenClaw.Shared;
using OpenClaw.Shared.Audio;
using OpenClaw.Shared.Capabilities;
using OpenClaw.TestSupport;
using OpenClawTray.Services;

namespace OpenClaw.Tray.UITests;

public sealed class VoiceServiceProgressRoutingTests
{
    private static readonly TimeSpan Deadline = TimeSpan.FromSeconds(10);
    private const int ListenTimeoutMs = 30000;

    [Fact]
    public async Task DecodedPreviewNeverFinalizesOrDuplicatesTheUtterance()
    {
        await using var harness = new Harness(holdFirstTranscription: true, preview: true);
        var preview = new TaskCompletionSource<string>(TaskCreationOptions.RunContinuationsAsynchronously);
        int finals = 0;
        harness.Service.UtteranceCompleted += _ => Interlocked.Increment(ref finals);
        var listen = harness.ListenA(text => preview.TrySetResult(text), _ => { });
        await harness.FirstListening.Task.WaitAsync(Deadline);
        harness.CaptureA.EmitSamples(20 * 512, 2000);
        harness.CaptureA.EmitSamples(29 * 512, 0);
        Assert.Equal("synthetic decoded preview", await preview.Task.WaitAsync(Deadline));
        Assert.False(listen.IsCompleted);
        Assert.Equal(0, finals);
        harness.Transcriber.ReleaseFirst();
        var result = await listen.WaitAsync(Deadline);
        Assert.Equal("A partial from shutdown", result.Text);
        Assert.Equal(1, finals);
    }

    [Theory]
    [InlineData(0.9f, 29)]
    [InlineData(1.5f, 47)]
    public async Task NativeListen_UsesConfiguredSilenceBeforeFinalizing(float silence, int chunks)
    {
        await using var harness = new Harness(holdFirstTranscription: false, silence: silence);
        var listen = harness.ListenA(_ => { }, _ => { });
        await harness.FirstListening.Task.WaitAsync(Deadline);
        harness.CaptureA.EmitSamples(20 * 512, 2000);
        harness.CaptureA.EmitSamples((chunks - 1) * 512, 0);
        Assert.False(listen.IsCompleted);
        harness.CaptureA.EmitSamples(512, 0);
        var result = await listen.WaitAsync(Deadline);
        Assert.False(string.IsNullOrWhiteSpace(result.Text));
    }

    [Fact]
    public async Task PerCaptureSilenceOverridePreservesConfiguredDefault()
    {
        await using var harness = new Harness(holdFirstTranscription: false, silence: 0.9f);
        var started = new TaskCompletionSource(TaskCreationOptions.RunContinuationsAsynchronously);
        var listen = harness.Service.ListenOnceAsync(new SttListenArgs { TimeoutMs = ListenTimeoutMs },
            CancellationToken.None, null, null, silenceTimeoutSeconds: 1.5f,
            onRecordingStarted: () => started.TrySetResult());
        await started.Task.WaitAsync(Deadline);
        harness.CaptureA.EmitSamples(20 * 512, 2000);
        harness.CaptureA.EmitSamples(29 * 512, 0);
        Assert.False(listen.IsCompleted);
        harness.CaptureA.EmitSamples(18 * 512, 0);
        var result = await listen.WaitAsync(Deadline);
        Assert.False(string.IsNullOrWhiteSpace(result.Text));
    }

    [Fact]
    public async Task ShortAndLongSpeechWithOrdinaryPauseProduceOneFinal()
    {
        await using var harness = new Harness(holdFirstTranscription: false);
        int finals = 0;
        harness.Service.UtteranceCompleted += _ => Interlocked.Increment(ref finals);
        var listen = harness.ListenA(_ => { }, _ => { });
        await harness.FirstListening.Task.WaitAsync(Deadline);
        harness.CaptureA.EmitSamples(10 * 512, 2000);
        harness.CaptureA.EmitSamples(5 * 512, 0);
        Assert.False(listen.IsCompleted);
        Assert.False(harness.Transcriber.FirstStarted.Task.IsCompleted);
        harness.CaptureA.EmitSamples(100 * 512, 2000);
        harness.CaptureA.EmitSamples(29 * 512, 0);
        await listen.WaitAsync(Deadline);
        Assert.Equal(1, finals);
    }

    [Fact]
    public async Task CancelledFlush_DoesNotReachReplacementPreviewOrFinishReplacementListen()
    {
        await using var harness = new Harness(holdFirstTranscription: true);
        var legacyTexts = new ConcurrentQueue<string>();
        harness.Service.TranscriptionReceived += legacyTexts.Enqueue;
        var aPreview = "A initial";
        var bPreview = "B initial";
        var bLevel = 0f;
        var a = harness.ListenA(text =>
        {
            if (!harness.CancelA.IsCancellationRequested) aPreview = text;
        }, _ => { });
        await harness.FirstListening.Task.WaitAsync(Deadline);
        harness.CaptureA.EmitSamples(6400, 2000);
        harness.CancelA.Cancel();
        await harness.Transcriber.FirstStarted.Task.WaitAsync(Deadline);
        Assert.False(harness.Transcriber.FirstToken.CanBeCanceled);
        Assert.True(harness.CaptureA.StopCount > 0);

        var b = harness.ListenB(text => bPreview = text, level => bLevel = level);
        await harness.SecondListening.Task.WaitAsync(Deadline);
        harness.CaptureB.EmitSamples(6400, 1000);
        Assert.InRange(bLevel, 0.1f, 1f);
        var ownLevel = bLevel;
        harness.CaptureA.EmitLateSamples(512, 3000);
        Assert.Equal(ownLevel, bLevel);

        harness.Transcriber.ReleaseFirst();
        var aResult = await a.WaitAsync(Deadline);
        Assert.Equal("A partial from shutdown", aResult.Text);
        Assert.Equal("A initial", aPreview);
        Assert.Equal("B initial", bPreview);
        Assert.Equal(ownLevel, bLevel);
        Assert.Contains("A partial from shutdown", legacyTexts);
        Assert.False(b.IsCompleted);

        harness.CaptureB.EmitSamples(32768, 0);
        var bResult = await b.WaitAsync(Deadline);
        Assert.Equal("B own transcription", bPreview);
        Assert.Equal("B own transcription", bResult.Text);
        Assert.Equal(0, bLevel);
        Assert.Contains("B own transcription", legacyTexts);
    }

    [Fact]
    public async Task ConcurrentCaptures_KeepAudioLevelsScopedToTheirOwnCaller()
    {
        await using var harness = new Harness(holdFirstTranscription: false);
        var aLevel = 0f;
        var bLevel = 0f;
        _ = harness.ListenA(_ => { }, level => aLevel = level);
        await harness.FirstListening.Task.WaitAsync(Deadline);
        _ = harness.ListenB(_ => { }, level => bLevel = level);
        await harness.SecondListening.Task.WaitAsync(Deadline);

        harness.CaptureB.EmitSamples(6400, 1000);
        Assert.InRange(bLevel, 0.1f, 1f);
        Assert.Equal(0, aLevel);
        var bOwnLevel = bLevel;
        harness.CaptureA.EmitSamples(6400, 2000);
        Assert.True(aLevel > bOwnLevel);
        Assert.Equal(bOwnLevel, bLevel);
    }

    [Fact]
    public async Task LegacyListen_CancellationRetainsBufferedResultAndGlobalProgress()
    {
        await using var harness = new Harness(holdFirstTranscription: false);
        var texts = new ConcurrentQueue<string>();
        var levels = new ConcurrentQueue<float>();
        harness.Service.TranscriptionReceived += texts.Enqueue;
        harness.Service.AudioLevelChanged += levels.Enqueue;
        var listen = harness.ListenLegacy();
        await harness.FirstListening.Task.WaitAsync(Deadline);
        harness.CaptureA.EmitSamples(6400, 2000);
        harness.CancelA.Cancel();

        var result = await listen.WaitAsync(Deadline);
        Assert.Equal("A partial from shutdown", result.Text);
        Assert.Equal("A partial from shutdown", Assert.Single(texts));
        Assert.Contains(levels, level => level > 0);
        Assert.False(harness.Transcriber.FirstToken.CanBeCanceled);
    }

    private sealed class Harness : IAsyncDisposable
    {
        private readonly TempDirectory _directory = new();
        private readonly List<Task<SttListenResult>> _listens = [];
        private int _listening;
        public CancellationTokenSource CancelA { get; } = new();
        public CancellationTokenSource CancelB { get; } = new();
        public TaskCompletionSource FirstListening { get; } = new(TaskCreationOptions.RunContinuationsAsynchronously);
        public TaskCompletionSource SecondListening { get; } = new(TaskCreationOptions.RunContinuationsAsynchronously);
        public ControlledCapture CaptureA { get; } = new();
        public ControlledCapture CaptureB { get; } = new();
        public ControlledTranscriber Transcriber { get; }
        public VoiceService Service { get; }

        public Harness(bool holdFirstTranscription, float silence = 0.9f, bool preview = false)
        {
            Transcriber = new ControlledTranscriber(holdFirstTranscription, preview);
            var captures = new ConcurrentQueue<IAudioCapture>([CaptureA, CaptureB]);
            var logger = new OpenClaw.Shared.NullLogger();
            Service = new VoiceService(logger, new SettingsManager(_directory.Path) { SttSilenceTimeout = silence }, Transcriber,
                new WhisperModelManager(_directory.Path, logger),
                backend => new AudioPipeline(logger, backend,
                    () => captures.TryDequeue(out var capture) ? capture : throw new InvalidOperationException("Unexpected capture."),
                    (delay, token) => Task.Delay(delay, token), Deadline, () => "No synthetic audio"));
            Service.PipelineStateChanged += state =>
            {
                if (state != AudioPipelineState.Listening) return;
                if (Interlocked.Increment(ref _listening) == 1) FirstListening.TrySetResult();
                else SecondListening.TrySetResult();
            };
        }

        public Task<SttListenResult> ListenA(Action<string> text, Action<float> level) =>
            Track(Service.ListenOnceAsync(new SttListenArgs { TimeoutMs = ListenTimeoutMs }, CancelA.Token, text, level));
        public Task<SttListenResult> ListenB(Action<string> text, Action<float> level) =>
            Track(Service.ListenOnceAsync(new SttListenArgs { TimeoutMs = ListenTimeoutMs }, CancelB.Token, text, level));
        public Task<SttListenResult> ListenLegacy() =>
            Track(Service.ListenOnceAsync(new SttListenArgs { TimeoutMs = ListenTimeoutMs }, CancelA.Token));
        private Task<SttListenResult> Track(Task<SttListenResult> task)
        {
            _listens.Add(task);
            return task;
        }

        public async ValueTask DisposeAsync()
        {
            Transcriber.ReleaseFirst();
            CancelA.Cancel();
            CancelB.Cancel();
            foreach (var task in _listens)
            {
                try { await task.WaitAsync(Deadline); }
                catch (Exception error) when (error is OperationCanceledException or TimeoutException) { }
            }
            await Service.DisposeAsync();
            CancelA.Dispose();
            CancelB.Dispose();
            _directory.Dispose();
        }
    }

    private sealed class ControlledTranscriber(bool holdFirst, bool preview) : ISpeechToTextService
    {
        private readonly TaskCompletionSource<List<TranscriptionResult>> _first =
            new(TaskCreationOptions.RunContinuationsAsynchronously);
        private int _calls;
        public TaskCompletionSource FirstStarted { get; } = new(TaskCreationOptions.RunContinuationsAsynchronously);
        public CancellationToken FirstToken { get; private set; }
        public bool IsModelLoaded => true;
        public void LoadModel(string modelPath) => throw new InvalidOperationException("Synthetic transcriber is already ready.");
        public Task<List<TranscriptionResult>> TranscribeAsync(float[] samples, string language = "auto",
            CancellationToken cancellationToken = default)
        {
            if (Interlocked.Increment(ref _calls) == 1)
            {
                FirstToken = cancellationToken;
                FirstStarted.TrySetResult();
                if (holdFirst) return _first.Task;
                return Task.FromResult(Result("A partial from shutdown"));
            }
            return Task.FromResult(Result("B own transcription"));
        }
        public async Task<List<TranscriptionResult>> TranscribeAsync(float[] samples, string language,
            Action<TranscriptionResult>? onSegment, CancellationToken cancellationToken)
        {
            if (preview) onSegment?.Invoke(Result("synthetic decoded preview")[0]);
            var results = await TranscribeAsync(samples, language, cancellationToken);
            foreach (var result in results) onSegment?.Invoke(result);
            return results;
        }
        public void ReleaseFirst() => _first.TrySetResult(Result("A partial from shutdown"));
        private static List<TranscriptionResult> Result(string text) =>
            [new() { Text = text, Language = "en", Start = TimeSpan.Zero, End = TimeSpan.FromSeconds(1) }];
        public void Dispose() { }
    }

    private sealed class ControlledCapture : IAudioCapture
    {
        private EventHandler<WaveInEventArgs>? _data;
        private EventHandler<WaveInEventArgs>? _lastData;
        public WaveFormat WaveFormat { get; } = new(16000, 16, 1);
        public int StopCount { get; private set; }
        public event EventHandler<WaveInEventArgs>? DataAvailable
        {
            add { _data += value; _lastData = value; }
            remove { _data -= value; }
        }
        public event EventHandler<StoppedEventArgs>? RecordingStopped;
        public void StartRecording() { }
        public void StopRecording()
        {
            StopCount++;
            RecordingStopped?.Invoke(this, new StoppedEventArgs());
        }
        public void Dispose() { }
        public void EmitSamples(int count, short value) => Emit(_data, count, value);
        public void EmitLateSamples(int count, short value) => Emit(_lastData, count, value);
        private void Emit(EventHandler<WaveInEventArgs>? handler, int count, short value)
        {
            var bytes = new byte[count * 2];
            for (var i = 0; i < count; i++) BinaryPrimitives.WriteInt16LittleEndian(bytes.AsSpan(i * 2, 2), value);
            handler?.Invoke(this, new WaveInEventArgs(bytes, bytes.Length));
        }
    }
}
