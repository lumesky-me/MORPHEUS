# Phase 4 UI reconstruction results

## Status and starting point

This is an implementation checkpoint with a working browser visual preview. **Native Windows acceptance remains blocked/unverified.** No release packaging or Phase 5 work was started.

Work began from a clean `phase-3-voice` at `e127aa55ccb641e2333cd156078b687be4f6fb3a`, also verified on GitHub. Branch `phase-4-ui` preserves that base and all earlier commits, including the two Phase 3 commits `fd5a1da9f773fc11b8d6ed1422de060f95a9280b` and `e127aa55ccb641e2333cd156078b687be4f6fb3a`, Phase 2 `5e4b8657a9d721b0eca5fa7c19b73e378cac5da5` and Phase 1 `55266b410071a61f94de7bb5818d87be6d5d91e5`. No history was rewritten.

The final Home reference is the user's corrected image, with a rounded frame, inset rail and corner lighting. The first Home image was superseded. Chat uses the original approved Chat reference. Screenshot sample conversations, green status and badge count were not copied as application data.

## Implemented presentation

- Shared native title bar with spaced MORPHEUS wordmark, replaceable logo slot, two-panel conversation toggle, original notification flyout and native caption controls.
- Purple workspace theme, rounded frame and conversation panel, inset navigation rail, bottom connection indicator and Settings action. High-contrast resources are retained; color alone is not the accessible status label.
- Distinct Home and Chat destinations. Home is the default and contains background artwork only. It hides the retained chat surface without deleting messages, resetting memory or creating another session. The chat destination remembers its canonical session.
- Chat sidebar retains the existing NavigationView session reconciliation, search command catalog, New Chat action and session-bound context menus. Search and add controls move beside Chats. Session rows have rounded presentation and retain real titles, pin/unread/working indicators and metadata/tooltips.
- Empty Chat uses shared reconstructed ring/crescent artwork, MORPHEUS and localized START A CONVERSATION. The actual timeline replaces this when messages exist. No redundant New Chat/three-dot canvas header was added.
- Existing native composer remains the functional owner for typing, multiline input, keyboard handling, attachment pickers, microphone, sending, cancellation and errors. Model/reasoning, placement and sandbox controls are retained, so the native composer remains richer than the minimal reference.
- Local browser renderer with shared generated palette and actual native SVG assets, responsive shell, navigation, sidebar controls, exact More dropdown and identified native handoffs. No large frontend dependency or desktop framework migration.

## Existing action mapping

| Old control or capability | Phase 4 destination and owner |
| --- | --- |
| Home/chat combined route | Empty Home plus explicit Chat route; WorkspaceNavigationHistory retains one conversation destination |
| Session list and row context menu | Existing WorkspaceWindow reconciliation and `_sessionMenu.CreateFlyout(session)` with original session key |
| Session creation and switching | Existing NewSessionAsync, SelectSession, ChatPage and provider APIs |
| Search / command center | Chats search button and existing keyboard command search; visible Home rail anchor when the pane is hidden |
| Back/forward arrows | Hidden from chrome; original keyboard history handling remains |
| Assistant selection / administration | Existing Settings agent/session administration and command catalog remain; the assistant dropdown is hidden from the shell |
| Model selection | Existing native composer model control and full Settings providers; none in the top bar |
| Notifications | Header button, existing NotificationFlyoutContent, NotificationsPage and live AppNotificationService events |
| Owner Connected entry | Bottom status-dot details using GatewayStatusContent; Connection settings and reconnect remain available |
| Usage / Pair device / Timeline | Exactly three More entries, invoking original Usage, Channels and connection timeline routes |
| Scheduled Tasks | Existing Cron page through the Settings host, retaining scheduler creation/edit/execution mechanisms |
| Settings | Full retained SettingsShellView in a separate WorkspaceWindow host owned by WindowManager |
| Help / About links | Right-click Settings or Shift+F10: documentation, official support, community, release notes and About |
| Get apps | Removed from the dropdown; link-launching and application services are retained |
| Voice and speech output | Existing Phase 3 pipeline, composer, provider and TTS owners; no speech-engine changes |

The existing notification badge counts active/undismissed notifications. There is no upstream unread field. The implementation preserves real data and does not fabricate unread semantics. A genuine unread distinction remains unresolved.

The session menu owner still supports Pin/Unpin, rename, read/unread, archive/unarchive, fork, copy key/ID/Markdown, reset, compact, export and delete under its existing availability and main-session protections. Portable menu/operation tests exercise the underlying decisions and fixture-backed actions. Native right-click invocation itself has not been demonstrated here.

## Settings host and preservation

Inspection found that the actual Phase 3 source embedded Settings as a sibling inside WorkspaceWindow; it did not contain the separate Settings window described in the brief. Phase 4 reuses the complete view in a second native host rather than replacing its settings implementation.

WindowManager owns host reuse, activation, status/theme updates and shutdown. Settings routes back to Home, Chat, sessions and notifications forward to the primary window; the Settings host does not mount a second conversation. Native setup Settings destinations use that same host and its readiness wait. Main-window close does not reset an active Settings scope. The Settings owner disposes its view and resets its scope on close. These changes have portable source-contract coverage and need multi-window Windows runtime proof.

No Gateway, agent runtime, authentication, model-provider protocol, chat persistence, permission/sandbox, memory or speech-engine implementation was changed. The existing provider send path, idempotency/cancellation protections, tool output and Phase 3 opt-in voice auto-send remain in place. Other agents and personality files were not edited. No paid model call, physical microphone capture, speaker playback or model download occurred.

## Browser sharing and safety

Launch `python scripts/ui-preview.py` from the repository root, then open **http://127.0.0.1:4173/**. The server is loopback-only and has an explicit file allowlist. It never exposes profile files, Gateway credentials, private conversations or automation endpoints. No public website or authenticated Gateway was deployed.

`ui/shared/tokens.json` generates browser CSS and native workspace resources. Both renderers use the same SVG asset files. WinUI/Reactor controls cannot render in a browser, so the DOM and native controls remain separate small presentation implementations. This is shared styling/artwork, not a claim of a shared interactive component tree. Detailed launch, iteration, static-export and testing instructions are in [UI_PREVIEW.md](../UI_PREVIEW.md).

Browser-only native actions display handoff explanations. There is no fake connection, session persistence, model response, microphone or OS window control. Window caption buttons are disabled in the browser. Sending retains the draft and reports that it was not sent. The red indicator means there is no native connection in the preview.

## Visual evidence

The Playwright run captures [Home](evidence/phase4/home-preview.png) and [Chat](evidence/phase4/chat-preview.png) at 1492×1054, matching the reference dimensions, plus 1000×700, 600×800 and 390×844 Chat captures. These are browser screenshots, not Windows screenshots.

Observed alignment: shared title bar, inset left rail, bottom status/settings grouping, framed empty Home, Chats panel, central ring/wordmark and bottom composer follow the references. Differences are explicit: neutral replaceable logo rather than the approved standalone mark; simplified vector lighting; no fabricated example conversations or count 2; red disconnected indicator; native composer retains additional functional options. Native font rasterization, native pixel spacing and caption behavior remain unverified.

## Validation

The final focused Tray selection passed **1094 tests, 0 failed, 0 skipped**. Shared speech/redaction passed **148 tests, 0 failed, 0 skipped**. The full Tray suite ran **4845 tests: 4674 passed, 168 failed, 3 skipped**. The full Shared suite ran **4844 tests: 4484 passed, 335 failed, 25 skipped**. These selections overlap and must not be added together. After final source review corrected cold command-center routing through the primary workspace, the rebuilt affected shell/navigation selection passed **147 tests, 0 failed, 0 skipped**. Full-suite results above predate that narrow final routing fix.

Final counters and failure names are recorded in `evidence/phase4/validation.json`. Captured logs preserve failed as well as passing runs; trailing whitespace is normalized. Browser checks cover empty Home, default route, Chat navigation, sidebar persistence and Home gating, draft retention, exact More labels, native handoffs, search presentation, responsive overflow, no JavaScript page errors and file-serving restrictions.

The full required portable suites were executed. They are **not globally green**. The focused native-handoff failures were rerun against an isolated copy of the preserved Phase 3 commit: all 11 failures in that selection reproduce on the baseline. The separate baseline selection also reproduces the Windows-path-specific WindowManager test failure. This does not establish that every broad-suite failure is historical; unrelated failures are retained for later review rather than fixed in a UI task.

The documented full build is unavailable because PowerShell is absent. The direct native project build with supported Windows targeting fails when Windows `MakePri.exe` cannot execute on Linux and Windows XAML compiler output is unavailable. No native check was bypassed to claim success. Changed C# syntax and XML well-formedness checks are secondary checks, not native type checking or rendering proof. Core was not rebuilt because Core source was unchanged.

## Remaining acceptance work

1. Build on Windows with the existing prerequisites, then run native UI/fixture proof in a disposable MORPHEUS profile. Validate both caption controls and separate Settings focus, ownership, native setup handoff, closing either host and shutdown.
2. Exercise real session load/create/switch/search and every permitted context-menu operation, including Pin, against actual session IDs. Verify text, streaming, tool activity, attachments, cancellation, history and Phase 3 microphone/TTS behavior on Windows. No real model result is claimed by the browser or portable tests.
3. Compare native Home/Chat pixels to the approved references and browser captures. Verify keyboard accessibility, high contrast, resize and localized layouts. Resolve any native resource/type or SVG issues that Linux cannot compile.
4. Supply the approved standalone logo asset. Decide whether a true unread notification model is needed; the active-count badge is the existing supported behavior.
5. Review the full-suite failures and inherited Phase 1 findings, including Windows regressions, dependency advisories and Gateway packaging limits. None have been concealed or marked resolved.

The browser is ready for visual iteration. Final native acceptance criteria remain open; this checkpoint is not a release-ready claim.

## Git and excluded files

Repository: https://github.com/lumesky-me/MORPHEUS

Branch: `phase-4-ui`. Implementation commit and final publication receipt are recorded after validation in this report's final checkpoint note and the adjacent machine-readable receipt.

All earlier audit reports and evidence remain intact. Original upstream paths, licenses and notices are checked by `scripts/verify-import.py`; a separate Phase 4 delta layer preserves historical Phase 1 and Phase 3 manifests. New SVG artwork and preview source introduce no third-party engine or runtime dependency. Playwright is existing development tooling, not an application dependency.

Excluded from Git: static export under `artifacts/ui-preview/`, test bin/obj/TRX output, temporary profiles, browser caches and temporary baseline verification files. A task-generated mutation of an already tracked upstream `.mono` cache file was restored to its starting bytes; no imported path was removed. `.gitignore` also ignores future `.mono` cache files. Curated screenshots, validation logs, manifests and source generators are deliberately retained.
