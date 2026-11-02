namespace OpenClaw.Shared.Audio;

/// <summary>Shared endpoint defaults. Supported finite saved settings remain valid, including the intentional 30-second PTT limit.</summary>
public static class SpeechEndpointPolicy
{
    public const float DefaultSilenceSeconds = 0.9f;
    public static float Normalize(float seconds) =>
        float.IsFinite(seconds) && seconds >= 0.1f && seconds <= 60f ? seconds : DefaultSilenceSeconds;
    public static int SilenceChunks(float seconds, double chunkSeconds) =>
        Math.Max(1, checked((int)Math.Ceiling(Normalize(seconds) / chunkSeconds)));
}
