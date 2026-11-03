using OpenClaw.Chat;
using OpenClaw.Shared;
using Microsoft.UI.Xaml;
using System.Text.Json;

namespace OpenClawTray.Controls;

public sealed partial class DashboardHome
{
    private IChatDataProvider? _provider;
    private string? _sessionKey;
    private readonly SemaphoreSlim _commands = new(1, 1);
    private readonly CancellationTokenSource _lifetime = new();
    private App Owner => (App)Application.Current;
    private void Post(object value)
    {
        if (!_disposed && _view.CoreWebView2 is { } core)
            core.PostWebMessageAsJson(JsonSerializer.Serialize(value));
    }
    private async void HandleMessage(string json)
    {
        try
        {
            using var doc = JsonDocument.Parse(json);
            var root = doc.RootElement;
            if (!root.TryGetProperty("type", out var kind)) return;
            var type = kind.GetString();
            if (type == "home-ready")
            {
                PublishVisibility();
                Owner.ChatProviderChanged -= ProviderChanged;
                Owner.ChatProviderChanged += ProviderChanged;
                Owner.DashboardSpeakingChanged -= SpeakingChanged;
                Owner.DashboardSpeakingChanged += SpeakingChanged;
                await BindConversationAsync();
                StartMonitoring();
                return;
            }
            if (_active && type == "dashboard-preset") { await ApplyPresetAsync(root.GetProperty("preset").GetString()); return; }
            if (_active && type == "dashboard-voice") { await ToggleVoiceAsync(); return; }
            if (!_active || type is not ("dashboard-send" or "dashboard-stop")) return;
            if (!await _commands.WaitAsync(0)) return;
            try
            {
                if (_provider is null || _sessionKey is null) throw new InvalidOperationException("Dashboard conversation is unavailable.");
                if (type == "dashboard-stop") await _provider.StopResponseAsync(_sessionKey, _lifetime.Token);
                else
                {
                    var text = root.GetProperty("text").GetString()?.Trim();
                    if (string.IsNullOrWhiteSpace(text) || text.Length > 32000) return;
                    await _provider.SendMessageAsync(_sessionKey, text, _lifetime.Token);
                    Post(new { type = "dashboard-submitted" });
                }
            }
            finally { _commands.Release(); }
        }
        catch (OperationCanceledException) { }
        catch (Exception ex) { Post(new { type = "dashboard-error", message = ex.Message }); }
    }
    private async void ProviderChanged(object? sender, EventArgs args)
    {
        try { await BindConversationAsync(); }
        catch (Exception ex) { Post(new { type = "dashboard-error", message = ex.Message }); }
    }
    private async Task BindConversationAsync()
    {
        _voice?.Cancel();
        await _commands.WaitAsync(_lifetime.Token);
        try
        {
            if (_provider is not null) _provider.Changed -= ConversationChanged;
            _provider = Owner.ChatProvider;
            _sessionKey = null;
            if (_provider is null) { Post(new { type = "dashboard-error", message = "Gateway is disconnected." }); return; }
            var provider = _provider;
            var snapshot = await provider.LoadAsync(_lifetime.Token);
            var existing = snapshot.Threads.FirstOrDefault(t => t.Title == "dashboard");
            if (existing is not null) _sessionKey = existing.Id;
            else
            {
                if (!snapshot.ComposeTarget.IsReady || Owner.GatewayClient is not { } gateway)
                    throw new InvalidOperationException("Gateway is not ready to create dashboard.");
                var created = await gateway.CreateSessionAsync(new SessionCreateRequest { Key = "dashboard", AgentId = snapshot.ComposeTarget.AgentId, SucceedsParent = false });
                if (!created.IsSupported || !created.Ok || string.IsNullOrEmpty(created.Key))
                    throw new InvalidOperationException(created.Error ?? "Gateway could not create dashboard.");
                _sessionKey = created.Key;
                if (!await gateway.PatchSessionAsync(_sessionKey, new SessionPatch { Label = "dashboard" }))
                    throw new InvalidOperationException("Dashboard was created but could not be named.");
            }
            Owner.DashboardSessionKey = _sessionKey;
            await Owner.ChatProvider!.LoadHistoryAsync(_sessionKey!, cancellationToken: _lifetime.Token);
            provider.Changed += ConversationChanged;
            PublishConversation(await provider.LoadAsync(_lifetime.Token));
        }
        finally { _commands.Release(); }
    }
    private void ConversationChanged(object? sender, ChatDataChangedEventArgs args) => DispatcherQueue.TryEnqueue(() =>
    {
        if (!_disposed && ReferenceEquals(sender, _provider)) PublishConversation(args.Snapshot);
    });
    private void PublishConversation(ChatDataSnapshot snapshot)
    {
        if (_sessionKey is null) return;
        snapshot.Timelines.TryGetValue(_sessionKey, out var timeline);
        var responses = timeline?.Entries.Where(e => e.Kind == ChatTimelineItemKind.Assistant)
            .Select(e => new { id = e.Id, text = e.Text, streaming = e.IsStreaming }).ToArray();
        Post(new { type = "dashboard-state", ready = snapshot.ComposeTarget.IsReady, thinking = timeline?.TurnActive == true, responses });
    }
    private void SpeakingChanged(bool active) => Post(new { type = "dashboard-speaking", active });
    private void DisconnectConversation()
    {
        _voice?.Cancel();
        if (Owner.DashboardSessionKey == _sessionKey) Owner.DashboardSessionKey = null;
        _lifetime.Cancel();
        Owner.ChatProviderChanged -= ProviderChanged;
        Owner.DashboardSpeakingChanged -= SpeakingChanged;
        if (_provider is not null) _provider.Changed -= ConversationChanged;
    }
}
