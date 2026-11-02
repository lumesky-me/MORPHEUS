> Current design: the creative redesign uses a charcoal workspace, compact navigation, a 272px conversation sidebar and restrained violet accents. The previous screenshot-led version is preserved on `phase-4-ui`. Browser/native platform limitations below still apply.

# MORPHEUS UI preview

The Phase 4 preview follows the approved Chat screenshot and the **corrected Home screenshot supplied last**: rounded purple frame, inset navigation rail, corner lighting and an empty Home canvas. It is a local visual development surface. Windows remains the production application.

## Open it on your Windows PC

This cloud session has no preview-sharing tool, configured hosting connection or deployment credentials. Its loopback URL is not a public access link. The supported delivery is a local Windows launch; the underlying Python server and browser rendering were verified on Linux, while the Windows command wrapper has not been executed on Windows here.

If Git and Python 3 are already installed, open PowerShell and run:

```powershell
git clone --branch phase-4-ui-redesign --single-branch https://github.com/lumesky-me/MORPHEUS.git
Set-Location MORPHEUS
.\scripts\start-ui-preview.cmd
```

For an existing checkout, use the existing `phase-4-ui-redesign` working directory and run only the last command. Preserve local changes before switching branches or pulling. Alternatively, download and extract the [branch ZIP](https://github.com/lumesky-me/MORPHEUS/archive/refs/heads/phase-4-ui-redesign.zip), then double-click `scripts\start-ui-preview.cmd`. Git is not needed for the ZIP workflow.

If Python 3 is missing, install it, reopen PowerShell, then rerun the launcher:

```powershell
winget install --exact --id Python.Python.3.13
```

The launcher starts the existing allowlisted server and opens your default browser at **http://127.0.0.1:4173/** on your own PC. No Node, .NET, Gateway, model setup or API key is required. If the browser does not open automatically, enter that address manually after the server prints its ready message. If port 4173 is occupied, run `.\scripts\start-ui-preview.cmd --port 4174` and use the printed URL.

Keep the terminal open. Stop with Ctrl+C; restart with the same launcher. Saved HTML/CSS/JS changes appear after browser refresh. No automatic hot-reload loop is installed.

## Open the preview

From the MORPHEUS repository root, with Python 3 installed:

```sh
python scripts/generate-ui-theme.py --check
python scripts/ui-preview.py
```

Open **http://127.0.0.1:4173/** on the machine running the server. Port 4173 is the default; `--port 4174` selects another local port. A task-owned server is running at the default address in this development workspace; that does not make it accessible from your PC. A browser on another machine needs the environment's approved localhost forwarding or a local checkout; no public deployment URL is claimed.

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

The header/favicon now use the supplied MORPHEUS crest, prepared as transparent PNG assets and a multi-resolution ICO. Master and PNGs are in `Assets/Morpheus/crest-*.png`; `Assets/openclaw.ico` and the existing Windows package logo filenames carry the same crest. The original placeholder SVG is retained for provenance but is no longer used for branding. Existing MORPHY conversation artwork is unchanged. `scripts/prepare-crest-icons.py` regenerates icon sizes from the checked-in transparent master using Pillow (development tooling only). Browser launch needs no Pillow.

At widths of 1024px and above the session list is docked. Below 1024px it collapses automatically; the two-panel button opens it as an overlay, without shrinking Chat. Escape or the backdrop closes it. Wide-layout collapse preference and draft text survive resizing. Native WinUI uses the same generated breakpoint with LeftMinimal overlay; its minimum width is reduced to 500 rather than increased. Native caption buttons retain OS ownership and request the 48px Tall title bar. Browser caption glyphs are centered disabled representations. Native resizing, DPI, icon cache and caption behavior still require Windows validation.

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
