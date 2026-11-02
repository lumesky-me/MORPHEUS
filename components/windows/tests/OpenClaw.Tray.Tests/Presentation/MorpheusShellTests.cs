using OpenClawTray.Presentation;

namespace OpenClaw.Tray.Tests.Presentation;

public sealed class MorpheusShellTests
{
    [Theory]
    [InlineData("Home", false)]
    [InlineData("Chat", true)]
    [InlineData("Settings", false)]
    [InlineData("Notifications", false)]
    public void OnlyChatIsAVisibleConversation(string page, bool visible) =>
        Assert.Equal(visible, ChatVisibilityPolicy.IsWorkspaceChatVisible(false, true, false, Enum.Parse<WorkspacePageId>(page)));

    [Fact]
    public void SeparateSettingsHistory_NeverGoesBackToASecondHome()
    {
        var history = new WorkspaceNavigationHistory(WorkspaceDestination.Settings("settings"));
        Assert.False(history.CanGoBack);
        history.Navigate(WorkspaceDestination.Settings("voice"));
        Assert.True(history.GoBack());
        Assert.Equal(WorkspaceDestination.Settings("settings"), history.Current);
        Assert.False(history.GoBack());
        Assert.True(history.GoForward());
        Assert.Equal(WorkspaceDestination.Settings("voice"), history.Current);
    }

    [Fact]
    public void SettingsHostRoutesBackToPrimaryAndOwnsItsLifecycle()
    {
        // Retirement: replace source guards with native multi-window fixture proof on a Windows host.
        var root = Path.Combine(TestRepositoryPaths.GetRepositoryRoot(), "src", "OpenClaw.Tray.WinUI");
        var manager = File.ReadAllText(Path.Combine(root, "Services", "WindowManager.cs"));
        Assert.Contains("ShowSeparateSettings(settingsTag ?? destination.CompanionTag", manager);
        Assert.Contains("openWorkspaceRoute: destination => ShowWorkspace(destination, activate: true, preserveCurrent: false)", manager);
        Assert.Contains("_settingsWorkspaceWindow.Activated += OnMainWindowActivated", manager);
        Assert.Contains("_callbacks.ApplyTheme(_settingsWorkspaceWindow)", manager);
        Assert.Contains("_settingsWorkspaceWindow?.UpdateConnectionStatus(snapshot, status)", manager);
        Assert.Contains("TryClose(\"Settings window\"", manager);
        var settingsRoute = manager[manager.IndexOf("private void ShowSeparateSettings", StringComparison.Ordinal)..];
        Assert.True(settingsRoute.IndexOf("tag == \"command-center\"", StringComparison.Ordinal) <
            settingsRoute.IndexOf("new WorkspaceWindow", StringComparison.Ordinal));
        Assert.Contains("_workspaceWindow?.OpenCommandCenter();", settingsRoute);
        var workspace = File.ReadAllText(Path.Combine(root, "Windows", "WorkspaceWindow.xaml.cs"));
        Assert.Contains("_openWorkspaceRoute(destination);", workspace);
        Assert.Contains("_settingsWorkspaceWindow is null || _settingsWorkspaceWindow.IsClosed", manager);
        Assert.DoesNotContain("new OpenClawGatewayClient", workspace);
        Assert.Contains("new SettingsShellView", workspace);
        Assert.Contains("_navigation = new(WorkspaceDestination.Settings(\"settings\"))", workspace);
    }
}
