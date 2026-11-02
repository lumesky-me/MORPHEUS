# MORPHEUS UI preview

The Phase 4 preview follows the approved Chat screenshot and the **corrected Home screenshot supplied last**: rounded purple frame, inset navigation rail, corner lighting and an empty Home canvas. It is a local visual development surface. Windows remains the production application.

## Open the preview

From the MORPHEUS repository root, with Python 3 installed:

```sh
python scripts/generate-ui-theme.py --check
python scripts/ui-preview.py
```

Open **http://127.0.0.1:4173/** on the machine running the server. Port 4173 is the default; `--port 4174` selects another local port. The server is running at the default address in this development workspace. A browser on another machine needs the environment's approved localhost forwarding or a local checkout; no public deployment URL is claimed.

Files are read from disk on each request with caching disabled. Refresh the browser after editing HTML, CSS or JS. After changing `ui/shared/tokens.json`, run `python scripts/generate-ui-theme.py` and refresh. There is no bundler or new frontend framework.

Home opens by default. Choose Chat to inspect the conversation panel, empty-state ring and composer. The header's two-panel button toggles the conversation sidebar only in Chat. Home never displays conversation history. Draft text survives navigation between the two views.

## Sharing with Windows

| Concern | Browser | Native Windows |
| --- | --- | --- |
| Palette | Generated `ui/preview/tokens.css` | Generated `Themes/MorpheusResources.xaml`, scoped to the workspace |
| Artwork | Explicit `/assets/` allowlist | Same SVG files in `Assets/Morpheus/` |
| Shell | `ui/preview/index.html`, `style.css`, `app.js` | Existing `Windows/WorkspaceWindow.xaml` and code-behind |
| Navigation and sessions | Local visual navigation; no session backend | Existing `WorkspaceNavigationHistory`, `WorkspaceProjection`, `WorkspaceSessionMenuController`, ChatPage and provider |
| Chat rendering and composer | Presentation controls with explicit native handoffs | Existing Reactor chat, controller, attachments, permission cards and Phase 3 voice path |
| Settings | Explanation of the Windows handoff | Complete existing SettingsShellView in a separate native host |

WinUI and Reactor cannot render in a browser. The DOM is a small companion renderer, not a replacement runtime. Native controls and browser controls are distinct implementations; there is no shared interactive component tree. Shared palette/artwork reduce drift; geometry is aligned in the native and CSS views and still needs native screenshot comparison. No Electron, Tauri, desktop WebView migration, new session database or model router was introduced.

The approved standalone logo was not found in the repository. `components/windows/src/OpenClaw.Tray.WinUI/Assets/Morpheus/logo-slot.svg` is an explicitly neutral, replaceable asset. Replace that file with an approved SVG, preserving the filename/view box, to update both surfaces. A different image format also requires updating the two image references. The ring/crescent is reconstructed vector artwork, not the final brand logo.

## Real behavior and limitations

The browser has **no Gateway connection**, credentials, private conversations, notification feed, model, microphone, filesystem picker or desktop automation bridge. The connection dot is red because no native connection exists. There are no fabricated sessions, replies or notification counts. Send retains the draft and explains that it was not sent. Settings, cron, notifications, pairing, usage, timeline, attachments and microphone open identified development handoffs.

In Windows, these controls invoke the existing owners. The full Settings implementation remains available in its own window. Right-click Settings, or focus it and press Shift+F10, for the retained documentation, support, community, release notes and About links. The exact three-entry More menu stays separate. Conversation context menus remain attached to actual session rows; they are not reproduced as inert browser menus.

Native notifications expose an active/undismissed count. The existing service has no separate read/unread field, so the implementation does not falsely label that count unread. A true unread-notification distinction remains an upstream integration decision.

Native chat retains its existing model/reasoning, placement and sandbox controls. Its composer consequently has more options than the minimal browser reference. The preview does not establish pixel identity with Windows. Native Windows window controls, multi-window focus, session context-menu invocation, live streaming, tool output, attachments, voice and accessibility require Windows validation.

## Visual and functional checks

With the server running, install Playwright as development tooling and use an installed Chromium:

```sh
python -m pip install playwright
python -m playwright install chromium
python scripts/test-ui-preview.py
```

The test uses an available `chromium` executable or Playwright's installed browser. `MORPHEUS_PREVIEW_CHROMIUM` may select a specific executable. It captures Home and Chat at 1492×1054 plus smaller Chat viewports, checks navigation and handoffs, and verifies that non-preview repository paths return 404. Screenshots and results are in `AUDIT/evidence/phase4/`.

The server binds only to loopback and serves an explicit file allowlist. Its content security policy disallows network connections and framing. It does not serve the repository root. Stop it with Ctrl+C in its terminal.

For a static export, run:

```sh
python scripts/build-ui-preview.py
```

`artifacts/ui-preview/` contains only allowlisted UI files and shared SVGs. It is ignored by Git. This is suitable for a separately reviewed static-hosting step, but no hosting was deployed. Never publish an authenticated Gateway as part of this preview.

See [Phase 4 results](AUDIT/PHASE4_UI_RESULTS.md) for test failures, native build blockers, preserved history and publication status.
