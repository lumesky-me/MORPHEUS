using OpenClaw.Shared.Audio;
namespace OpenClaw.Shared.Tests;

public class VoicePolicyTests
{
    [Theory]
    [InlineData(0.9f, 29)]
    [InlineData(1.5f, 47)]
    [InlineData(2f, 63)]
    public void EndpointNeverCutsBeforeConfiguredSilence(float seconds, int chunks)
        => Assert.Equal(chunks, SpeechEndpointPolicy.SilenceChunks(seconds, 0.032));

    [Theory]
    [InlineData(float.NaN)]
    [InlineData(float.PositiveInfinity)]
    [InlineData(0f)]
    [InlineData(-1f)]
    public void InvalidTimeoutUsesDefault(float seconds)
        => Assert.Equal(0.9f, SpeechEndpointPolicy.Normalize(seconds));

    [Fact]
    public void AlreadyCanceledInterruptCannotStopCurrentSpeech()
    {
        using var lifetime = new SpeechPlaybackLifetime();
        using var existing = lifetime.Begin(false, CancellationToken.None);
        using var caller = new CancellationTokenSource();
        caller.Cancel();
        Assert.Throws<OperationCanceledException>(() => lifetime.Begin(true, caller.Token));
        Assert.False(existing.IsCancellationRequested);
    }

    [Fact]
    public void StopCancelsPendingSynthesisAndQueuedPlaybackWithoutCancelingTask()
    {
        using var task = new CancellationTokenSource();
        using var lifetime = new SpeechPlaybackLifetime();
        using var synthesis = lifetime.Begin(false, task.Token);
        using var queued = lifetime.Begin(false, task.Token);
        lifetime.Stop();
        Assert.True(synthesis.IsCancellationRequested);
        Assert.True(queued.IsCancellationRequested);
        Assert.False(task.IsCancellationRequested);
        using var next = lifetime.Begin(false, task.Token);
        Assert.False(next.IsCancellationRequested);
    }

    [Fact]
    public void InterruptCancelsEarlierSpeechAndCallerCancelRemainsScoped()
    {
        using var lifetime = new SpeechPlaybackLifetime();
        using var old = lifetime.Begin(false, CancellationToken.None);
        using var caller = new CancellationTokenSource();
        using var current = lifetime.Begin(true, caller.Token);
        Assert.True(old.IsCancellationRequested);
        Assert.False(current.IsCancellationRequested);
        caller.Cancel();
        Assert.True(current.IsCancellationRequested);
        using var next = lifetime.Begin(false, CancellationToken.None);
        Assert.False(next.IsCancellationRequested);
    }
}
