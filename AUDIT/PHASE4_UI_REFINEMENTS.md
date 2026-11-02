# Focused UI refinements: responsive Chat, crest and caption controls

Continues on `phase-4-ui-redesign` from `57379a330d490aaa4cf55a954f6d69659e4c49fb`. The approved charcoal/violet design, empty Home, typography, conversation artwork, native Settings host and all prior commits remain intact.

## Responsive behavior

The former docked list stayed open through medium widths; below 700px it overlaid Chat but did not automatically close. The shared breakpoint is now 1024 logical pixels:

- At 1024px and wider, the list is docked. Explicit wide-layout collapse preference is retained.
- Below 1024px, it automatically closes. The existing two-panel toggle opens the same list as an overlay, without reducing conversation width.
- The browser overlay has a scrim, Escape dismissal, an inert background conversation and focus return to the toggle. Resizing and Home/Chat navigation retain draft text and the existing DOM/state.
- Native WorkspaceWindow observes root-size changes and uses the existing WinUI LeftMinimal overlay below the same generated breakpoint. Its prior 800px minimum is reduced to 500px, not increased. Session rows, keys, menu controller, Pin and provider selection remain unchanged. Caption, session and composer behavior on Windows remains unverified here.

`ui/shared/tokens.json` generates the breakpoint into native MorpheusLayout and browser layout.js. No new chat pipeline, session storage or connection logic was added.

## Approved crest assets

The user-supplied crest was used as the source for an image-tool transparency extraction, removing the outer tile/background and reducing surrounding glow. The checked-in `Assets/Morpheus/crest-master.png` is a prepared derivative, not a lossless copy of the original attachment. No alternative symbol was designed. Review this prepared silhouette if an exact original vector asset becomes available.

`prepare-crest-icons.py` performs the requested PNG scaling and ICO packaging using Pillow as development tooling only. Browser launch still requires only Python's standard library. Prepared transparent PNGs are 16, 24, 32, 48, 64, 128, 256 and 512px. The ICO contains 16, 24, 32, 48, 64, 128 and 256px frames. Transparency and small-file dimensions were checked.

Updated resource paths:

- Browser header: `assets/crest-64.png`; tab/favicon: `/favicon.ico` and `assets/crest-32.png`.
- Native title bar: `Assets/Morpheus/crest-64.png`.
- Existing `Assets/openclaw.ico` filename: shared by the executable ApplicationIcon, Workspace SetIcon/taskbar path and installer SetupIconFile. Keeping this internal name preserves existing resource contracts.
- Existing Windows package Square44, Square150, StoreLogo, Wide310 and LockScreen logo files, plus target-size 24/32/48/256 variants, now use the same crest at their original dimensions.

Other MORPHY/conversation artwork was not replaced. Native installation, shortcut/taskbar icon selection and Windows icon-cache behavior require a new Windows build and native validation; pulling the browser preview alone does not update an already installed desktop application.

## Window controls

The browser caption buttons now use consistent SVG glyph geometry in centered 30-32px targets inside the existing 48px title bar. They stay visible at narrow widths, have balanced spacing and declarative hover/pressed colors, and remain disabled representations with no simulated OS actions.

Native Windows retains one set of OS-owned caption controls through the existing TitleBar/SetTitleBar path. PreferredHeightOption.Tall requests the native 48px caption region to match the existing header, rather than leaving a shorter native strip above blank content. No custom duplicate native minimize/maximize/close controls were added. Windows caption behavior and DPI alignment cannot be demonstrated on this Linux host.

## Validation

- Focused portable regression selection: **933 passed, 0 failed, 0 skipped**. Includes session selection/history, context-menu operations and Pin, composer/provider, voice protections, connection status, native shell source contracts and branding contracts. These tests do not prove native pointer interactions.
- Browser refinement checks pass at **500, 650, 800, 1024 and 1280px**. They exercise automatic collapse, requested overlay, unchanged conversation bounds, Escape/scrim dismissal, draft retention, New Chat overlay dismissal/focus, composer/control bounds, caption centering and disabled semantics, loaded crest PNGs/favicon, and no console/page errors.
- Existing browser interaction checks also pass across six viewports, covering Home, Chat, search, New Chat composition, menus, utility/native handoffs and file allowlisting.
- Inspected [500px Chat](evidence/phase4-refinement/chat-500.png), with all caption and composer controls visible; medium/wide and overlay captures are adjacent. The compact design remains intact. Original redesign screenshots are untouched.
- ICO frame dimensions and transparent PNG corners verified. Generated-theme check, Python syntax, changed C# syntax parsing and XAML well-formedness pass. Syntax parsing is not Windows type checking.
- No Gateway, provider, memory, authentication, permissions, tool execution or Phase 3 voice implementation was changed. No real model/physical audio was invoked. Browser session/backend functionality is still unavailable and explicitly represented as a native handoff.
- Existing Linux/native MakePri/XAML build limitations, broad-suite failures and earlier audit findings remain unresolved. No unrelated full audit, Phase 5 testing or release packaging was attempted.

## Refresh the existing Windows preview

In the terminal running the preview, press **Ctrl+C**, then **Y** if asked. From your existing MORPHEUS directory:

```powershell
git fetch origin refs/heads/phase-4-ui-redesign:refs/remotes/origin/phase-4-ui-redesign
git switch phase-4-ui-redesign
git pull --ff-only origin phase-4-ui-redesign
.\scripts\start-ui-preview.cmd
```

Open `http://127.0.0.1:4173/` on your PC and press **Ctrl+F5**. Reopen the browser tab if its favicon remains cached. Keep the terminal running while testing; closing the website alone does not stop the server. If Git reports local changes or another error, preserve those files rather than resetting them.

## Files and publication

Changes are limited to browser layout/title-bar/asset serving, generated geometry, Workspace native presentation, crest PNG/ICO/package resources, focused checks and documentation. The source-inventory verifier adds a separate refinement delta layer, preserving previous manifests and notices. A publication note is added after the implementation checkpoint; final remote SHA is reported in the delivery message. No force push or merge into main.
