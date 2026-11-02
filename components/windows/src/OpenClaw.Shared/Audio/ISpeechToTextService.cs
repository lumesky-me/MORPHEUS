using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace OpenClaw.Shared.Audio;

/// <summary>The model and transcription I/O used by audio capture pipelines.</summary>
public interface ISpeechToTextService : IDisposable
{
    bool IsModelLoaded { get; }
    void LoadModel(string modelPath);
    Task<List<TranscriptionResult>> TranscribeAsync(
        float[] samples, string language = "auto", CancellationToken cancellationToken = default);

    /// <summary>Optional decoded-segment previews. Final-only engines keep their existing implementation.
    /// Callbacks must finish before the returned task completes.
    /// Previews never authorize a chat submission; only the returned final list does.</summary>
    async Task<List<TranscriptionResult>> TranscribeAsync(float[] samples, string language,
        Action<TranscriptionResult>? onSegment, CancellationToken cancellationToken)
    {
        var results = await TranscribeAsync(samples, language, cancellationToken).ConfigureAwait(false);
        foreach (var result in results) onSegment?.Invoke(result);
        return results;
    }
}
