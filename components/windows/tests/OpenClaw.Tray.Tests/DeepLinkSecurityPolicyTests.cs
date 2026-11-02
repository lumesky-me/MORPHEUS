using OpenClaw.Shared;
using OpenClawTray.Services;

namespace OpenClaw.Tray.Tests;

public class DeepLinkSecurityPolicyTests
{
    [Theory]
    [InlineData("agent")]
    [InlineData("voice")]
    [InlineData("voice-start")]
    [InlineData("voice-stop")]
    [InlineData("ssh-restart")]
    [InlineData("restart-ssh")]
    [InlineData("restart-ssh-tunnel")]
    public void IsStateChangingPath_RejectsUnsafeActions(string path)
    {
        Assert.True(DeepLinkSecurityPolicy.IsStateChangingPath(path));
    }

    [Theory]
    [InlineData("settings")]
    [InlineData("dashboard")]
    [InlineData("dashboard/sessions")]
    [InlineData("config")]
    [InlineData("support-context")]
    public void IsStateChangingPath_AllowsBenignActions(string path)
    {
        Assert.False(DeepLinkSecurityPolicy.IsStateChangingPath(path));
    }

    [Theory]
    [InlineData("morpheus://agent?message=hello%20world&token=secret", "morpheus://agent?<redacted>")]
    [InlineData("morpheus://send/private-message?message=secret", "morpheus://send/...?<redacted>")]
    [InlineData("morpheus://dashboard/sessions?filter=abc", "morpheus://dashboard/...?<redacted>")]
    [InlineData("morpheus://settings", "morpheus://settings")]
    public void RedactForLog_RemovesQueryAndPathPayloads(string uri, string expected)
    {
        Assert.Equal(expected, DeepLinkSecurityPolicy.RedactForLog(uri));
    }

    [Fact]
    public void RedactForLog_DoesNotEchoInvalidInput()
    {
        Assert.Equal("<invalid-deep-link>", DeepLinkSecurityPolicy.RedactForLog("https://example.com/?token=secret"));
    }

    [Fact]
    public void RequiresConfirmation_OnlyForStateChangingActions()
    {
        Assert.True(DeepLinkSecurityPolicy.RequiresConfirmation(
            DeepLinkParser.ParseDeepLink("morpheus://agent?message=ping")));
        Assert.False(DeepLinkSecurityPolicy.RequiresConfirmation(
            DeepLinkParser.ParseDeepLink("morpheus://dashboard/sessions")));
    }

    [Fact]
    public void BuildPipeName_IsDeterministicAndScoped()
    {
        var first = DeepLinkSecurityPolicy.BuildPipeName(@"C:\Users\alice\AppData\Local\Morpheus", "S-1-5-21-alice", 2);
        var second = DeepLinkSecurityPolicy.BuildPipeName(@"C:\Users\alice\AppData\Local\Morpheus", "S-1-5-21-alice", 2);
        var differentUser = DeepLinkSecurityPolicy.BuildPipeName(@"C:\Users\alice\AppData\Local\Morpheus", "S-1-5-21-bob", 2);
        var differentSession = DeepLinkSecurityPolicy.BuildPipeName(@"C:\Users\alice\AppData\Local\Morpheus", "S-1-5-21-alice", 3);
        var differentDataDir = DeepLinkSecurityPolicy.BuildPipeName(@"D:\isolated\Morpheus", "S-1-5-21-alice", 2);

        Assert.Equal(first, second);
        Assert.NotEqual(first, differentUser);
        Assert.NotEqual(first, differentSession);
        Assert.NotEqual(first, differentDataDir);
        Assert.StartsWith("Morpheus-DeepLink-", first);
        Assert.DoesNotContain("S-1-5-21-alice", first);
        Assert.DoesNotContain("Users", first);
    }

    [Fact]
    public void IsIpcPayloadWithinLimit_EnforcesUtf8ByteLimit()
    {
        var maxPayload = new string('a', DeepLinkSecurityPolicy.MaxIpcMessageBytes);
        var oversizedPayload = new string('a', DeepLinkSecurityPolicy.MaxIpcMessageBytes + 1);

        Assert.True(DeepLinkSecurityPolicy.IsIpcPayloadWithinLimit(maxPayload));
        Assert.False(DeepLinkSecurityPolicy.IsIpcPayloadWithinLimit(oversizedPayload));
        Assert.False(DeepLinkSecurityPolicy.IsIpcPayloadWithinLimit(""));
        Assert.False(DeepLinkSecurityPolicy.IsIpcPayloadWithinLimit(null));
    }
}
