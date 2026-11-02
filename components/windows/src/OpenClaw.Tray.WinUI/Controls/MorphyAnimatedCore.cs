using System;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Automation;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Media;
using Microsoft.UI.Xaml.Media.Animation;
using Microsoft.UI.Xaml.Media.Imaging;
using Windows.UI.ViewManagement;

namespace OpenClawTray.Controls;

/// <summary>Home-only artwork. Shared SVG layers stay independent of chat and Gateway state.</summary>
public sealed class MorphyAnimatedCore : UserControl, IDisposable
{
    private readonly UISettings _settings = new();
    private readonly Storyboard _motion = new();
    private bool _active;
    private bool _loaded;

    public MorphyAnimatedCore()
    {
        IsHitTestVisible = false;
        var artwork = new Grid { Width = 480, Height = 480 };
        var stationary = Layer("base");
        artwork.Children.Add(stationary);
        AddOrbit(artwork, "outer", 64, 360);
        AddOrbit(artwork, "middle", 46, -360);
        AddOrbit(artwork, "inner", 32, 360);
        var breathe = new DoubleAnimation
        {
            From = .86, To = 1, Duration = new Duration(TimeSpan.FromSeconds(8)),
            AutoReverse = true, RepeatBehavior = RepeatBehavior.Forever,
            EasingFunction = new SineEase { EasingMode = EasingMode.EaseInOut }
        };
        Storyboard.SetTarget(breathe, stationary);
        Storyboard.SetTargetProperty(breathe, "Opacity");
        _motion.Children.Add(breathe);
        var stack = new StackPanel { Width = 480, Spacing = 4 };
        stack.Children.Add(artwork);
        stack.Children.Add(new TextBlock
        {
            Text = "MORPHY", FontSize = 13, CharacterSpacing = 400,
            HorizontalAlignment = HorizontalAlignment.Center
        });
        Content = new Viewbox { Child = stack, Stretch = Stretch.Uniform, MaxWidth = 480, MaxHeight = 510, Margin = new Thickness(24) };
        AutomationProperties.SetName(this, "MORPHY");
        Loaded += OnLoaded;
        Unloaded += OnUnloaded;
    }

    public void SetActive(bool active)
    {
        _active = active;
        UpdateMotion();
    }

    private static Image Layer(string name) => new()
    {
        Width = 480, Height = 480,
        Source = new SvgImageSource(new Uri($"ms-appx:///Assets/Morpheus/morphy-core-{name}.svg"))
    };

    private void AddOrbit(Grid host, string name, double seconds, double angle)
    {
        var image = Layer(name);
        var rotation = new RotateTransform { CenterX = 240, CenterY = 240 };
        image.RenderTransform = rotation;
        host.Children.Add(image);
        var animation = new DoubleAnimation
        {
            From = 0, To = angle, Duration = new Duration(TimeSpan.FromSeconds(seconds)),
            RepeatBehavior = RepeatBehavior.Forever
        };
        Storyboard.SetTarget(animation, rotation);
        Storyboard.SetTargetProperty(animation, "Angle");
        _motion.Children.Add(animation);
    }

    private void OnLoaded(object sender, RoutedEventArgs args)
    {
        _loaded = true;
        _settings.AnimationsEnabledChanged += OnAnimationsChanged;
        UpdateMotion();
    }

    private void OnUnloaded(object sender, RoutedEventArgs args)
    {
        _loaded = false;
        _settings.AnimationsEnabledChanged -= OnAnimationsChanged;
        _motion.Stop();
    }

    public void Dispose()
    {
        _active = false;
        _loaded = false;
        _settings.AnimationsEnabledChanged -= OnAnimationsChanged;
        _motion.Stop();
        Loaded -= OnLoaded;
        Unloaded -= OnUnloaded;
    }

    private void OnAnimationsChanged(UISettings sender, object args) =>
        DispatcherQueue.TryEnqueue(UpdateMotion);

    private void UpdateMotion()
    {
        _motion.Stop();
        if (_loaded && _active && _settings.AnimationsEnabled) _motion.Begin();
    }
}
