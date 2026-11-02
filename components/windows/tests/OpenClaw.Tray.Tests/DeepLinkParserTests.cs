using OpenClaw.Shared;
using OpenClawTray.Services;

namespace OpenClaw.Tray.Tests;

public class DeepLinkParserTests
{
    #region ParseDeepLink

    [Fact]
    public void ParseDeepLink_Settings()
    {
        var result = DeepLinkParser.ParseDeepLink("morpheus://settings");
        Assert.NotNull(result);
        Assert.Equal("settings", result.Path);
        Assert.Empty(result.Query);
        Assert.Empty(result.Parameters);
    }

    [Fact]
    public void ParseDeepLink_Dashboard()
    {
        var result = DeepLinkParser.ParseDeepLink("morpheus://dashboard");
        Assert.NotNull(result);
        Assert.Equal("dashboard", result.Path);
    }

    [Fact]
    public void ParseDeepLink_DashboardSubpath()
    {
        var result = DeepLinkParser.ParseDeepLink("morpheus://dashboard/sessions");
        Assert.NotNull(result);
        Assert.Equal("dashboard/sessions", result.Path);
    }

    [Theory]
    [InlineData("morpheus://dashboard/channels", "dashboard/channels")]
    [InlineData("morpheus://dashboard/skills", "dashboard/skills")]
    [InlineData("morpheus://dashboard/cron", "dashboard/cron")]
    public void ParseDeepLink_DashboardKnownSubpaths(string uri, string expectedPath)
    {
        var result = DeepLinkParser.ParseDeepLink(uri);
        Assert.NotNull(result);
        Assert.Equal(expectedPath, result.Path);
    }

    [Fact]
    public void ParseDeepLink_SendWithMessage()
    {
        var result = DeepLinkParser.ParseDeepLink("morpheus://send?message=hello");
        Assert.NotNull(result);
        Assert.Equal("send", result.Path);
        Assert.Equal("hello", result.Parameters["message"]);
    }

    [Fact]
    public void ParseDeepLink_SendWithEncodedMessage()
    {
        var result = DeepLinkParser.ParseDeepLink("morpheus://send?message=hello%20world");
        Assert.NotNull(result);
        Assert.Equal("hello world", result.Parameters["message"]);
    }

    [Fact]
    public void ParseDeepLink_MultipleQueryParams()
    {
        var result = DeepLinkParser.ParseDeepLink("morpheus://agent?message=hi&key=abc");
        Assert.NotNull(result);
        Assert.Equal("agent", result.Path);
        Assert.Equal("hi", result.Parameters["message"]);
        Assert.Equal("abc", result.Parameters["key"]);
    }

    [Fact]
    public void ParseDeepLink_ActivityWithFilter()
    {
        var result = DeepLinkParser.ParseDeepLink("morpheus://activity?filter=nodes");
        Assert.NotNull(result);
        Assert.Equal("activity", result.Path);
        Assert.Equal("nodes", result.Parameters["filter"]);
    }

    [Fact]
    public void ParseDeepLink_History()
    {
        var result = DeepLinkParser.ParseDeepLink("morpheus://history");
        Assert.NotNull(result);
        Assert.Equal("history", result.Path);
    }

    [Theory]
    [InlineData("morpheus://setup", "setup")]
    [InlineData("morpheus://healthcheck", "healthcheck")]
    [InlineData("morpheus://check-updates", "check-updates")]
    [InlineData("morpheus://logs", "logs")]
    [InlineData("morpheus://log-folder", "log-folder")]
    [InlineData("morpheus://config", "config")]
    [InlineData("morpheus://diagnostics", "diagnostics")]
    [InlineData("morpheus://support-context", "support-context")]
    [InlineData("morpheus://debug-bundle", "debug-bundle")]
    [InlineData("morpheus://browser-setup", "browser-setup")]
    [InlineData("morpheus://port-diagnostics", "port-diagnostics")]
    [InlineData("morpheus://capability-diagnostics", "capability-diagnostics")]
    [InlineData("morpheus://node-inventory", "node-inventory")]
    [InlineData("morpheus://channel-summary", "channel-summary")]
    [InlineData("morpheus://activity-summary", "activity-summary")]
    [InlineData("morpheus://extensibility-summary", "extensibility-summary")]
    [InlineData("morpheus://restart-ssh-tunnel", "restart-ssh-tunnel")]
    public void ParseDeepLink_TrayUtilityEntrypoints(string uri, string expectedPath)
    {
        var result = DeepLinkParser.ParseDeepLink(uri);
        Assert.NotNull(result);
        Assert.Equal(expectedPath, result.Path);
    }

    [Fact]
    public void ParseDeepLink_TrailingSlash_IsStripped()
    {
        var result = DeepLinkParser.ParseDeepLink("morpheus://settings/");
        Assert.NotNull(result);
        Assert.Equal("settings", result.Path);
    }

    [Theory]
    [InlineData("morpheus://send/?message=hello", "send")]
    [InlineData("morpheus://agent/?message=hi&key=abc", "agent")]
    [InlineData("morpheus://activity/?filter=nodes", "activity")]
    public void ParseDeepLink_TrailingSlashBeforeQuery_IsStripped(string uri, string expectedPath)
    {
        // Windows canonicalizes morpheus://send?... to morpheus://send/?...
        // before handing it to us. The slash sits before the `?`, so a naïve
        // TrimEnd before query split fails to strip it. Regression test for
        // the off-by-one fix in DeepLinkParser.ParseDeepLink.
        var result = DeepLinkParser.ParseDeepLink(uri);
        Assert.NotNull(result);
        Assert.Equal(expectedPath, result!.Path);
    }

    [Fact]
    public void ParseDeepLink_CaseInsensitiveScheme()
    {
        var result = DeepLinkParser.ParseDeepLink("MORPHEUS://dashboard");
        Assert.NotNull(result);
        Assert.Equal("dashboard", result.Path);
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("   ")]
    public void ParseDeepLink_NullOrEmpty_ReturnsNull(string? uri)
    {
        Assert.Null(DeepLinkParser.ParseDeepLink(uri));
    }

    [Fact]
    public void ParseDeepLink_NoProtocol_ReturnsNull()
    {
        Assert.Null(DeepLinkParser.ParseDeepLink("settings"));
    }

    [Fact]
    public void ParseDeepLink_WrongProtocol_ReturnsNull()
    {
        Assert.Null(DeepLinkParser.ParseDeepLink("https://settings"));
    }

    [Fact]
    public void ParseDeepLink_EmptyPath()
    {
        var result = DeepLinkParser.ParseDeepLink("morpheus://");
        Assert.NotNull(result);
        Assert.Equal("", result.Path);
    }

    [Fact]
    public void ParseDeepLink_MalformedQuery_IgnoresKeyOnly()
    {
        var result = DeepLinkParser.ParseDeepLink("morpheus://send?message");
        Assert.NotNull(result);
        Assert.Empty(result.Parameters);
    }

    #endregion

    #region GetQueryParam

    [Fact]
    public void GetQueryParam_ExtractsValue()
    {
        Assert.Equal("hello", DeepLinkParser.GetQueryParam("message=hello", "message"));
    }

    [Fact]
    public void GetQueryParam_CaseInsensitiveKey()
    {
        Assert.Equal("hello", DeepLinkParser.GetQueryParam("MESSAGE=hello", "message"));
    }

    [Fact]
    public void GetQueryParam_UrlDecodes()
    {
        Assert.Equal("hello world", DeepLinkParser.GetQueryParam("msg=hello%20world", "msg"));
    }

    [Fact]
    public void GetQueryParam_MissingKey_ReturnsNull()
    {
        Assert.Null(DeepLinkParser.GetQueryParam("message=hello", "missing"));
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    public void GetQueryParam_NullOrEmptyQuery_ReturnsNull(string? query)
    {
        Assert.Null(DeepLinkParser.GetQueryParam(query, "key"));
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    public void GetQueryParam_NullOrEmptyKey_ReturnsNull(string? key)
    {
        Assert.Null(DeepLinkParser.GetQueryParam("message=hello", key!));
    }

    [Fact]
    public void GetQueryParam_MultipleParams_FindsCorrect()
    {
        Assert.Equal("bar", DeepLinkParser.GetQueryParam("foo=baz&key=bar&x=1", "key"));
    }

    [Fact]
    public void GetQueryParam_ValueWithEquals()
    {
        Assert.Equal("a=b", DeepLinkParser.GetQueryParam("token=a=b", "token"));
    }

    #endregion

    #region DeepLinkHandler

    [Theory]
    [InlineData("morpheus://settings", "hub:settings")]
    [InlineData("morpheus://setup", "setup")]
    [InlineData("morpheus://chat", "hub:chat")]
    [InlineData("morpheus://commandcenter", "hub:connection")]
    [InlineData("morpheus://history", "hub:channels")]
    [InlineData("morpheus://logs", "log-file")]
    [InlineData("morpheus://log-folder", "log-folder")]
    [InlineData("morpheus://config", "config-folder")]
    [InlineData("morpheus://diagnostics", "diagnostics-folder")]
    [InlineData("morpheus://support-context", "copy:SupportContext")]
    [InlineData("morpheus://debug-bundle", "copy:DebugBundle")]
    [InlineData("morpheus://browser-setup", "copy:BrowserSetupGuidance")]
    [InlineData("morpheus://port-diagnostics", "copy:PortDiagnostics")]
    [InlineData("morpheus://capability-diagnostics", "copy:CapabilityDiagnostics")]
    [InlineData("morpheus://node-inventory", "copy:NodeInventory")]
    [InlineData("morpheus://channel-summary", "copy:ChannelSummary")]
    [InlineData("morpheus://activity-summary", "copy:ActivitySummary")]
    [InlineData("morpheus://extensibility-summary", "copy:ExtensibilitySummary")]
    [InlineData("morpheus://check-updates", "check-updates")]
    [InlineData("morpheus://restart-ssh-tunnel", "restart-ssh")]
    public void PlanRoute_ReturnsExpectedRoute(string uri, string expected)
    {
        var route = DeepLinkHandler.PlanRoute(uri, "morpheus");
        var actual = route switch
        {
            ActivationRoute.OpenHub r => $"hub:{r.Page}",
            ActivationRoute.OpenSetup => "setup",
            ActivationRoute.OpenLogFile => "log-file",
            ActivationRoute.OpenLogFolder => "log-folder",
            ActivationRoute.OpenConfigFolder => "config-folder",
            ActivationRoute.OpenDiagnosticsFolder => "diagnostics-folder",
            ActivationRoute.CopyDiagnostics r => $"copy:{r.Kind}",
            ActivationRoute.CheckForUpdates => "check-updates",
            ActivationRoute.RestartSshTunnel => "restart-ssh",
            _ => route?.GetType().Name,
        };

        Assert.Equal(expected, actual);
    }

    [Theory]
    [InlineData("morpheus://activity", "channels")]
    [InlineData("morpheus://activity?filter=usage", "usage")]
    [InlineData("morpheus://activity?filter=session", "sessions")]
    [InlineData("morpheus://activity?filter=node", "instances")]
    [InlineData("morpheus://history", "channels")]
    [InlineData("morpheus://notification-history", "channels")]
    [InlineData("morpheus://commandcenter", "connection")]
    [InlineData("morpheus://command-center", "connection")]
    public void PlanRoute_HubAliases_ReturnExpectedPage(string uri, string expectedHubTag)
    {
        var route = Assert.IsType<ActivationRoute.OpenHub>(
            DeepLinkHandler.PlanRoute(uri, "morpheus"));
        Assert.Equal(expectedHubTag, route.Page);
    }

    [Fact]
    public void PlanRoute_DashboardSubpath_PreservesPath()
    {
        var route = Assert.IsType<ActivationRoute.OpenDashboard>(
            DeepLinkHandler.PlanRoute("morpheus://dashboard/skills", "morpheus"));
        Assert.Equal("skills", route.Path);
    }

    [Fact]
    public void PlanRoute_Activity_RedirectsByFilter()
    {
        Assert.Equal("instances", PlanHubPage("morpheus://activity?filter=node"));
        Assert.Equal("sessions", PlanHubPage("morpheus://activity?filter=session"));
        Assert.Equal("channels", PlanHubPage("morpheus://activity"));
    }

    [Fact]
    public void PlanRoute_Agent_PreservesMessage()
    {
        var route = Assert.IsType<ActivationRoute.SendMessage>(
            DeepLinkHandler.PlanRoute("morpheus://agent?message=ping", "morpheus"));
        Assert.Equal("ping", route.Message);
    }

    [Fact]
    public void PlanRoute_HealthCheck_ReturnsHealthRoute()
    {
        Assert.IsType<ActivationRoute.RunHealthCheck>(
            DeepLinkHandler.PlanRoute("morpheus://healthcheck", "morpheus"));
    }

    private static string? PlanHubPage(string uri) =>
        Assert.IsType<ActivationRoute.OpenHub>(
            DeepLinkHandler.PlanRoute(uri, "morpheus")).Page;

    #endregion
}
