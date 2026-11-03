using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.Web.WebView2.Core;
using System.Text.Json;

namespace OpenClawTray.Controls;

/// <summary>Hosts the packaged, approved dashboard without a second application shell.</summary>
public sealed class DashboardHome : Grid, IDisposable
{
    private readonly WebView2 _view = new();
    private readonly TextBlock _error = new() { Text = "Home dashboard could not load.", Visibility = Visibility.Collapsed };
    private bool _active;
    private bool _started;
    private bool _disposed;
    public DashboardHome()
    {
        Children.Add(_view);
        Children.Add(_error);
        Loaded += OnLoaded;
    }
    private async void OnLoaded(object sender, RoutedEventArgs args)
    {
        if (_started || _disposed) return;
        _started = true;
        try
        {
            await _view.EnsureCoreWebView2Async();
            if (_disposed) return;
            var core = _view.CoreWebView2;
            core.SetVirtualHostNameToFolderMapping("morpheus-home.local",
                System.IO.Path.Combine(AppContext.BaseDirectory, "Dashboard"), CoreWebView2HostResourceAccessKind.DenyCors);
            core.Settings.AreDefaultContextMenusEnabled = false;
            core.Settings.IsStatusBarEnabled = false;
            core.PermissionRequested += (_, e) => e.State = CoreWebView2PermissionState.Deny;
            core.NewWindowRequested += (_, e) => e.Handled = true;
            core.NavigationStarting += (_, e) =>
            {
                if (e.Uri != "https://morpheus-home.local/native-home.html") e.Cancel = true;
            };
            core.WebMessageReceived += (_, e) =>
            {
                if (e.Source == "https://morpheus-home.local/native-home.html") PublishVisibility();
            };
            core.Navigate("https://morpheus-home.local/native-home.html");
        }
        catch (Exception)
        {
            if (!_disposed) _error.Visibility = Visibility.Visible;
        }
    }
    public void SetActive(bool active)
    {
        _active = active;
        PublishVisibility();
    }
    private void PublishVisibility()
    {
        if (!_disposed && _view.CoreWebView2 is { } core)
            core.PostWebMessageAsJson(JsonSerializer.Serialize(new { type = "home-visibility", active = _active }));
    }
    public void Dispose()
    {
        if (_disposed) return;
        _disposed = true;
        Loaded -= OnLoaded;
        _view.Close();
    }
}
