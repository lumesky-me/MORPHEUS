# MORPHY Home core and emblem update

Scope: add one decorative core to the existing Home area and replace the approved branding assets. Chat, navigation, title bar dimensions, backend and voice behavior are unchanged.

## Implementation

- Four shared SVG layers in `Assets/Morpheus/morphy-core-*.svg`: stationary dark orb/emblem/halo plus three independent arc layers. Broad translucent strokes provide bloom without per-frame blur filters.
- Browser uses CSS transform rotations (64/46/32 seconds; middle reversed) and an 8-second opacity breath. `prefers-reduced-motion` disables motion. Hidden Home pauses animation.
- Native `Controls/MorphyAnimatedCore.cs` uses the same SVG artwork with WinUI transform/opacity storyboards. `WorkspaceWindow` owns Home activation. Leaving Home stops motion, unloading/closing removes the Windows settings subscription, and `UISettings.AnimationsEnabled` disables animation, including live preference changes.
- The core scales within available Home width/height. Its central emblem never rotates. No timer, network request, dashboard panel or new interaction was introduced.
- New purple title-bar emblem: transparent PNG prepared from the supplied reference using image editing, then exported with the existing icon script. This is a prepared derivative, not a lossless extraction or claimed exact vector tracing. The reference's wide symmetric silhouette and purple highlights are retained. Existing filenames and header dimensions are unchanged. PNG sizes 16/24/32/48/64/128/256/512 and multi-size ICO/package assets were refreshed. Home ring assets were preserved through this branding update.

## Evidence

- [Home desktop](evidence/morphy-core/home-desktop.png), [narrow Home](evidence/morphy-core/home-mobile.png), [short window](evidence/morphy-core/home-short.png).
- [Sampled animation recording](evidence/morphy-core/home-motion.mp4).
- [16/24/32px logo comparison](evidence/morphy-core/logo-sizes.png).
- `scripts/test-ui-home-core.py`: all assets load, all three ring transforms advance, emblem transform remains stationary, five viewport bounds (1280x800 through 390x650 and 700x350), repeated Home/Chat navigation preserves the draft, hidden Home pauses, live reduced-motion disables animations, no JavaScript errors.
- Existing `scripts/test-ui-preview.py`: preview regression passes, including navigation, draft retention, native handoffs, six widths and server allowlisting. Its obsolete empty-Home expectation now checks that Home contains only the core.
- Native source contract similarly permits only the core in Home while retaining navigation and Chat-owner protections.
- RGBA transparency and ICO frame sizes checked; small-size comparison visually inspected.
- C# syntax and SVG/XAML XML validation are separate from Windows compilation/runtime proof.

## Platform limits

This Linux host cannot run WinUI or Windows package tooling. Full native build and Windows documentation validation are blocked by unavailable PowerShell/Windows tooling. Native animation smoothness, OS animation preference behavior, taskbar and desktop shortcut appearance require an actual Windows build/install. Existing shortcuts and Windows icon caches may retain the prior installed executable icon until that build is installed/refreshed. A browser refresh only updates the browser preview.

The full portable suites retain unrelated failures; logs and final counts accompany this report. They are not reported as a green Windows build. No real model, Gateway, voice or OS-desktop tests were exercised for this decorative UI change.

## Preview on Windows

Stop the existing preview with Ctrl+C (then Y if prompted). In `MORPHEUS-preview-refined`, update the existing branch and run `scripts\start-ui-preview.cmd --port 4174`. Open http://127.0.0.1:4174/ and press Ctrl+F5. Home should show the animated core and the title bar should show the new purple emblem.

## Portable closeout results

Shared suite: 4,484 passed, 335 failed, 25 skipped, matching the previously recorded Linux baseline counts. Initial Tray run: 4,674 passed, 169 failed, 3 skipped; one failure was the now-obsolete empty-Home assertion. The Home expectation was updated; a forced fresh portable build succeeded with zero warnings/errors and the focused Home/navigation suite passed 130/130 with zero skips (`focused.log`). Full native build cannot execute here (`build.log`); C# syntax parsing is clean, not a native build substitute.

Final full Tray rerun: **4,675 passed, 168 failed, 3 skipped** (`tray-final.log`). The extra empty-Home failure is resolved; the remaining failure count matches the earlier recorded baseline. Focused Home/navigation: **130 passed, 0 failed, 0 skipped**. Browser Home and existing preview regressions pass.
