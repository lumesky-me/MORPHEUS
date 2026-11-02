using OpenClaw.Shared;

namespace OpenClawTray.Services;

internal static class ChatNotificationSpeechText
{
    public static bool ShouldSpeak(OpenClawNotification notification, string? sessionKey)
        => notification.IsChat && !string.IsNullOrWhiteSpace(sessionKey)
            && string.Equals(notification.SessionKey, sessionKey, StringComparison.Ordinal);

    public static string Resolve(OpenClawNotification notification)
    {
        ArgumentNullException.ThrowIfNull(notification);
        return string.IsNullOrEmpty(notification.FullMessage)
            ? notification.Message
            : notification.FullMessage;
    }
}
