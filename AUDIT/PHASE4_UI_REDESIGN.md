# Phase 4 UI creative redesign

## Outcome and rollback

Implemented on `phase-4-ui-redesign`, starting from clean `phase-4-ui` at `66c3fa285683f9c0aae54608c1e2a7a36517c74a`. The original branch remains the rollback point. Earlier audits, commits, source and licenses are retained. This is a browser-verified implementation checkpoint with a native presentation port; native Windows rendering and acceptance remain unverified. No Phase 5 or packaging work was performed.

## Design direction

The previous design gave the frame, branding, sidebar and composer competing visual weight. Saturated purple occupied large surfaces, the empty-state illustration dominated the screen, and the wide rail/sidebar consumed reading space. This redesign uses a quiet charcoal workspace with violet reserved for selection, focus and the primary action.

| Element | Previous | Redesign |
| --- | --- | --- |
| Title bar | 62px, large spaced wordmark | 48px, compact wordmark and quieter actions |
| Navigation rail | 94px, large buttons | 66px, 18-20px icon graphics in comfortable targets |
| Conversation sidebar | 344px | 272px with a compact heading and grouped controls |
| Frame | Rounded neon outer boundary | Edge-to-edge shell with understated dividers |
| Chat empty-state graphic | 200px | 44px identity detail and a typographic heading |
| Reading width | 1100px | 800px for long text and code |
| Session rows | 70px minimum | 48px minimum with existing indicators/actions |
| Composer | Wide capsule | Two-row writing surface, tools below text, trailing send |

The system uses charcoal canvas/surface/panel steps, restrained borders, muted secondary text and a violet accent. Spacing follows 4/8/12/16/24/32. Browser body text is 13-14px; native prose geometry is 15px/24px. Corners are generally 6-12px rather than uniformly pill-shaped. Menus and dialogs share neutral surfaces, compact rows and consistent focus outlines. Scrollbars are understated. Motion is limited to short color/border transitions, respecting reduced motion. Native high contrast and browser forced colors remain supported by source; native accessibility needs Windows proof.

Home is deliberately empty, with no cards, statistics, fabricated assistant or voice interface. Chat is organized as a separate conversation-list surface and borderless reading canvas. No fake sessions, messages or tasks were added to make screenshots look populated. The existing replaceable logo slot remains pending an approved standalone brand asset.

## Production owners and integration

The existing browser renderer under `ui/preview/` was reconstructed in place. Its controls and IDs still invoke the same navigation and explicit native handoffs. This is not a new application or frontend framework.

Native changes are confined to WorkspaceWindow presentation, native chat geometry/composer/welcome and localized welcome copy. Session rows still use the existing session keys, reconciliation and WorkspaceSessionMenuController. Pin/unpin, rename, archive, read/unread, fork, copy, reset, compact, export and delete retain their existing operation owner and protections. Session storage, provider sending/streaming, Markdown/code rendering, tool output, persistence and scroll/follow behavior are retained. No synthetic conversation backend was introduced.

The two-panel toggle remains gated to Chat. Home retains the existing conversation without displaying it. Scheduling still invokes the existing Cron page; Usage, Pair device and connection timeline invoke their existing routes. Notifications retain the real active/undismissed count; a separate unread field is still unavailable upstream. The status indicator remains driven by the connection presenter, with healthy/intermediate/disconnected colors. The full separate Settings host, its guarded history and existing backend remain intact. Model, reasoning, placement and sandbox options remain in native chat. No Gateway, authentication, agent personality/runtime, memory, permissions, tool execution, voice engine, pairing or scheduling backend was changed.

`ui/shared/tokens.json` generates browser CSS, native resource brushes and `Presentation/MorpheusLayout.cs`. Native title-bar, rail and sidebar dimensions are assigned from these generated constants; ChatVisuals uses their reading width and composer radius. This shares actual design values rather than relying on a disconnected visual mockup. SVG assets are reused. DOM and WinUI/Reactor controls remain separate renderers, not a shared interactive tree. Native menus, window controls, option placement and disconnected-chat fallback keep their platform-specific behavior; exact parity with browser pixels is not claimed.

## Preview

On Windows, use the existing launcher from the redesigned branch:

```powershell
git clone --branch phase-4-ui-redesign --single-branch https://github.com/lumesky-me/MORPHEUS.git
Set-Location MORPHEUS
.\scripts\start-ui-preview.cmd
```

An existing updated redesign checkout needs only the last command. Python 3 is required; no Node, .NET, model or API key is needed for this visual preview. Open `http://127.0.0.1:4173/` on the machine running it. Stop with Ctrl+C and restart with the same command. Saved browser files refresh directly from disk; automatic hot reload is not installed. See [UI_PREVIEW.md](../UI_PREVIEW.md).

There is no configured external preview-sharing or hosting connection. The cloud loopback URL is not a remote access link. The server remains allowlisted and local-only. No authenticated Gateway, credentials, chats, files or automation endpoint is exposed.

Browser navigation, sidebar controls, search presentation, new composition, draft retention, keyboard menus and handoff dialogs are interactive. There is no browser backend adapter: real sessions/context-menu operations, model replies, streaming, microphone, attachments, scheduling, usage, pairing, notification feed and Settings require the native runtime. These limitations are explicit in the UI. The connection indicator is red, honestly disconnected. Existing native functionality is preserved, not simulated as success.

## Validation and visual inspection

- Focused portable Tray run: **870 passed, 0 failed, 0 skipped**. Selection covers navigation/history, session selection, context-menu operations/Pin, connection presentation, notifications, composer/send/provider, voice protections and localization. See `evidence/phase4-redesign/portable.log`.
- Browser interaction run passes at 1492×1054, 1440×900, 1280×800, 1000×700, 600×800 and 390×844. It checks empty default Home, Chat/sidebar gating, draft retention, search, native handoffs, exact utilities menu, keyboard activation, no page/console errors, no failed JS/CSS/SVG assets and file allowlisting. Small viewports also test the collapsed reading view and composer bounds.
- Inspected [desktop Chat](evidence/phase4-redesign/chat-preview.png), [Home](evidence/phase4-redesign/home-preview.png) and narrow viewport output. Desktop chrome is smaller, controls align on consistent spacing, and the composer is centered in the reading column. The narrow sidebar overlays content intentionally; the header toggle exposes the reading view rather than squeezing text into the remaining strip.
- Shared-token generator `--check`, changed XML/resource well-formedness, C# syntax parsing and `git diff --check` pass. Syntax parsing is not native type checking. The full earlier source inventory remains intact through a separate redesign delta layer, preserving the previous Phase 4 manifest.
- Native WinUI compilation/runtime proof remains blocked by the Linux host and unavailable Windows MakePri/XAML tooling, as evidenced in the prior Phase 4 build report. The Windows launcher itself is not executed on Windows here. No claim of native rendered-pixel, DPI, physical voice or live-model proof is made.
- Unrelated full repository suites/audits were not repeated. Previous full-suite failures, dependency findings, Windows regressions and Gateway packaging limitations remain open; focused passing results do not erase them.

## Remaining limitations

Native Windows screenshot, DPI, keyboard/accessibility, high contrast and resize proof is still required. Validate the native menu/session operations, long streamed conversations, code/tool displays and preserved voice path on an isolated Windows profile. Native compositor option rows intentionally remain richer than the preview. Settings and Cron retain their full existing native views rather than being cosmetically replaced with inert web pages. The logo slot and notification unread distinction remain known limitations. No live backend or real model was invoked during this design task.

## Git delivery

Repository: https://github.com/lumesky-me/MORPHEUS

Development branch: `phase-4-ui-redesign`. The implementation commit and remote verification are recorded in the final delivery and the subsequent publication note. The previous `phase-4-ui` branch is not modified. No history rewrite, force push or merge into main is authorized or performed.
