namespace OpenClaw.Shared.Audio;

/// <summary>Owns only speech synthesis/playback cancellation, never an agent run.</summary>
public sealed class SpeechPlaybackLifetime : IDisposable
{
    private readonly object _gate = new();
    private CancellationTokenSource _generation = new();
    private bool _disposed;

    public CancellationTokenSource Begin(bool interrupt, CancellationToken caller)
    {
        CancellationTokenSource? previous = null;
        CancellationTokenSource operation;
        lock (_gate)
        {
            ObjectDisposedException.ThrowIf(_disposed, this);
            caller.ThrowIfCancellationRequested();
            if (interrupt)
            {
                previous = _generation;
                _generation = new();
            }
            operation = CancellationTokenSource.CreateLinkedTokenSource(caller, _generation.Token);
        }
        CancelAndDispose(previous);
        return operation;
    }

    public void Stop()
    {
        CancellationTokenSource previous;
        lock (_gate)
        {
            if (_disposed) return;
            previous = _generation;
            _generation = new();
        }
        CancelAndDispose(previous);
    }

    public void Dispose()
    {
        CancellationTokenSource previous;
        lock (_gate)
        {
            if (_disposed) return;
            _disposed = true;
            previous = _generation;
        }
        CancelAndDispose(previous);
    }

    private static void CancelAndDispose(CancellationTokenSource? source)
    {
        if (source is null) return;
        try { source.Cancel(); }
        finally { source.Dispose(); }
    }
}
