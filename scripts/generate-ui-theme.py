#!/usr/bin/env python3
"""Generate shared browser/native presentation resources. --check detects drift."""
import json,sys
from pathlib import Path
r=Path(__file__).resolve().parents[1]; t=json.loads((r/'ui/shared/tokens.json').read_text())
css='/* Generated from ui/shared/tokens.json. */\n:root{'+''.join(f'--{k}:{v if isinstance(v,str) else str(v)+"px"};' for k,v in t.items())+'}\n'
brush=''.join(f'<SolidColorBrush x:Key="Morpheus{k.title()}Brush" Color="{v}"/>' for k,v in t.items() if isinstance(v,str))
aliases={'CardBackgroundFillColorDefault':'panel','ControlStrokeColorDefault':'border','SystemAccentColorLight2':'highlight','TextFillColorPrimary':'text','TextFillColorSecondary':'muted'}
brush+=''.join(f'<Color x:Key="{key}">{t[value]}</Color>' for key,value in aliases.items())
brush+=f'<SolidColorBrush x:Key="AccentFillColorDefaultBrush" Color="{t["accent"]}"/>'
hc=''.join(f'<StaticResource x:Key="{key}" ResourceKey="{"SystemColorWindowColor" if key=="CardBackgroundFillColorDefault" else "SystemColorWindowTextColor"}"/>' for key in aliases)
hc+=''.join(f'<SolidColorBrush x:Key="Morpheus{key}Brush" Color="{{ThemeResource SystemColorWindowTextColor}}"/>' for key in ('Healthy','Warning','Critical'))
hc+='<SolidColorBrush x:Key="AccentFillColorDefaultBrush" Color="{ThemeResource SystemColorHighlightColor}"/><SolidColorBrush x:Key="MorpheusAccentBrush" Color="{ThemeResource SystemColorHighlightColor}"/><SolidColorBrush x:Key="MorpheusHighlightBrush" Color="{ThemeResource SystemColorWindowTextColor}"/>'
xaml='''<!-- Generated from ui/shared/tokens.json. -->
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
<ResourceDictionary.ThemeDictionaries><ResourceDictionary x:Key="Default">'''+brush+'''
<LinearGradientBrush x:Key="MorpheusCanvasBrush" StartPoint="0,0" EndPoint="1,1"><GradientStop Color="#15141c" Offset="0"/><GradientStop Color="#17151f" Offset="0.5"/><GradientStop Color="#101014" Offset="1"/></LinearGradientBrush>
</ResourceDictionary><ResourceDictionary x:Key="HighContrast">'''+hc+'''
<SolidColorBrush x:Key="MorpheusBackgroundBrush" Color="{ThemeResource SystemColorWindowColor}"/>
<SolidColorBrush x:Key="MorpheusCanvasBrush" Color="{ThemeResource SystemColorWindowColor}"/>
<SolidColorBrush x:Key="MorpheusSurfaceBrush" Color="{ThemeResource SystemColorWindowColor}"/>
<SolidColorBrush x:Key="MorpheusBorderBrush" Color="{ThemeResource SystemColorWindowTextColor}"/>
<SolidColorBrush x:Key="MorpheusTextBrush" Color="{ThemeResource SystemColorWindowTextColor}"/>
</ResourceDictionary></ResourceDictionary.ThemeDictionaries>
<Style x:Key="MorpheusRailButton" TargetType="Button"><Setter Property="Width" Value="40"/><Setter Property="Height" Value="40"/><Setter Property="CornerRadius" Value="8"/><Setter Property="Background" Value="Transparent"/><Setter Property="BorderThickness" Value="0"/><Setter Property="Foreground" Value="{ThemeResource MorpheusTextBrush}"/></Style>
<Style x:Key="MorpheusRailSelectedButton" TargetType="Button" BasedOn="{StaticResource MorpheusRailButton}"><Setter Property="Background" Value="{ThemeResource MorpheusAccentBrush}"/></Style>
</ResourceDictionary>
'''
geometry='// Generated from ui/shared/tokens.json.\nnamespace OpenClawTray.Presentation;\ninternal static class MorpheusLayout\n{\n'+''.join(f'    internal const double {key[0].upper()+key[1:]} = {value};\n' for key,value in t.items() if isinstance(value,(int,float)))+'}\n'
breakpoint_js=f'// Generated from ui/shared/tokens.json.\nexport const sidebarBreakpoint = {t["sidebarBreakpoint"]};\n'
files={r/'ui/preview/layout.js':breakpoint_js,r/'components/windows/src/OpenClaw.Tray.WinUI/Presentation/MorpheusLayout.cs':geometry,r/'ui/preview/tokens.css':css,r/'components/windows/src/OpenClaw.Tray.WinUI/Themes/MorpheusResources.xaml':xaml}
for p,content in files.items():
    if '--check' in sys.argv:
        if not p.exists() or p.read_text()!=content: raise SystemExit(f'Regenerate UI theme: {p}')
    else:p.write_text(content)
