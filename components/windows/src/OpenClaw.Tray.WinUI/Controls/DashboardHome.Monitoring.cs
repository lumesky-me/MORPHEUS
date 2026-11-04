using Microsoft.UI.Xaml.Controls;
using OpenClaw.Shared;
using OpenClawTray.Helpers;
using System.Diagnostics;
using System.Text.Json;
namespace OpenClawTray.Controls;

public sealed partial class DashboardHome
{
    private bool _monitorStarted;
    private bool PermissionsConnected => Owner.GatewayClient?.IsConnectedToGateway == true;
    private void StartMonitoring()
    {
        if (_monitorStarted) return;
        _monitorStarted = true;
        _ = MonitorAsync();
    }
    private async Task MonitorAsync()
    {
        var gpu = new Dictionary<string, PerformanceCounter>();
        try
        {
            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(1));
            while (await timer.WaitForNextTickAsync(_lifetime.Token))
            {
                if (!_active) continue;
                var status = Owner.ActiveNodeService?.DashboardDeviceStatus;
                var metrics = await Task.Run(async () =>
                {
                    object? cpu = status is null ? null : await status.GetCpuInfoAsync();
                    object? ram = status?.GetMemoryInfo();
                    double? gpuPercent = null;
                    try
                    {
                        if (gpu.Count == 0)
                        {
                            foreach (var name in new PerformanceCounterCategory("GPU Engine").GetInstanceNames().Where(n => n.Contains("engtype_3D")))
                            {
                                var counter = new PerformanceCounter("GPU Engine", "Utilization Percentage", name);
                                counter.NextValue();gpu[name] = counter;
                            }
                        }
                        else gpuPercent = Math.Clamp(gpu.GroupBy(pair => pair.Key.Contains("luid_") ? pair.Key[pair.Key.IndexOf("luid_")..] : pair.Key).Max(group => group.Sum(pair => (double)pair.Value.NextValue())), 0, 100);
                    }
                    catch { foreach (var c in gpu.Values) c.Dispose();gpu.Clear(); }
                    return new { type = "dashboard-metrics", timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds(), cpu, ram, gpu = gpuPercent };
                }, _lifetime.Token);
                DispatcherQueue.TryEnqueue(() =>
                {
                    if (_disposed) return;
                    Post(metrics);
                    Post(new { type = "dashboard-permissions", connected = PermissionsConnected, preset = PermissionsConnected ? SystemRunPermissionPresets.Detect(Owner.Settings.SnapshotSystemRunSettings())?.ToString() : null });
                });
            }
        }
        catch (OperationCanceledException) { }
        catch (Exception ex) { DispatcherQueue.TryEnqueue(() => Post(new { type = "dashboard-error", message = ex.Message })); }
        finally { foreach (var c in gpu.Values) c.Dispose(); }
    }
    private async Task ApplyPresetAsync(string? value)
    {
        if (value is not ("Strict" or "Open")) return;
        if (!await _commands.WaitAsync(0)) return;
        try
        {
            if (!PermissionsConnected) throw new InvalidOperationException("Permissions unavailable while Gateway is disconnected.");
            var preset = Enum.Parse<SystemRunAccessPreset>(value);
            var dialog = new ContentDialog
            {
                Title = LocalizationHelper.GetString($"SandboxPage_Preset{preset}.Text"),
                Content = LocalizationHelper.GetString($"SandboxPage_Preset{preset}Details") + "\n\n" + LocalizationHelper.GetString("SandboxPage_PresetHelp.Text"),
                PrimaryButtonText = LocalizationHelper.GetString("SandboxPage_ApplyPreset"),
                CloseButtonText = LocalizationHelper.GetString("CancelButton.Content"),
                DefaultButton = ContentDialogButton.Close, XamlRoot = XamlRoot
            };
            if (await dialog.ShowAsync() != ContentDialogResult.Primary || !_active || _disposed || !PermissionsConnected) return;
            Owner.Settings.ApplySystemRunPreset(preset);Owner.Settings.Save();
            ((OpenClawTray.Services.IAppCommands)Owner).NotifySettingsSaved();
        }
        finally { _commands.Release(); }
    }
}
