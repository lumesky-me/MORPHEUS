using OpenClaw.Shared.Capabilities;
namespace OpenClawTray.Controls;

public sealed partial class DashboardHome
{
    private CancellationTokenSource? _voice;
    private async Task ToggleVoiceAsync()
    {
        if (_voice is not null) { _voice.Cancel(); return; }
        var service = Owner.VoiceServiceInstance;
        if (Owner.Settings.NodeSttEnabled != true || service is null || !service.IsModelDownloaded)
            throw new InvalidOperationException("Enable speech input and download its model in existing Voice settings first.");
        if (_provider is not { } provider || _sessionKey is not { } session)
            throw new InvalidOperationException("Dashboard conversation is unavailable.");
        if (!await _commands.WaitAsync(0)) return;
        using var capture = CancellationTokenSource.CreateLinkedTokenSource(_lifetime.Token);
        _voice = capture;
        bool Current() => !_disposed && _active && ReferenceEquals(provider, _provider) && ReferenceEquals(provider, Owner.ChatProvider) && session == _sessionKey;
        void Update(string state, string? transcript = null) => DispatcherQueue.TryEnqueue(() =>
        {
            if (Current()) Post(new { type = "dashboard-voice-state", state, transcript });
        });
        bool detectedSpeech = false;
        void SpeechChanged(bool speaking) { detectedSpeech = speaking; if (Current()) capture.CancelAfter(speaking ? Timeout.Infinite : 10000); }
        Owner.StopChatSpeaking();
        service.SpeakingChanged += SpeechChanged;
        try
        {
            Update("starting");
            var result = await service.ListenOnceAsync(new SttListenArgs { TimeoutMs = 120000 }, capture.Token,
                text => Update("listening", text), null, silenceTimeoutSeconds: 10,
                onRecordingStarted: () => { capture.CancelAfter(detectedSpeech ? Timeout.Infinite : 10000); Update("listening"); });
            if (!Current() || string.IsNullOrWhiteSpace(result.Text)) return;
            // A user stop may flush finalized speech. Navigation/provider changes never submit it.
            await provider.SendMessageAsync(session, result.Text, _lifetime.Token);
            Update("thinking", "");
        }
        catch (Exception ex) when (capture.IsCancellationRequested || ex is TimeoutException)
        {
            if (Current()) Post(new { type = "dashboard-error", message = "Voice capture ended without a submitted utterance." });
        }
        finally
        {
            service.SpeakingChanged -= SpeechChanged;
            _voice = null;
            Update("idle", "");
            _commands.Release();
        }
    }
}
