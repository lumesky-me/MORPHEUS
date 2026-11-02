# Phase 4 interactive preview launch

Continued from `phase-4-ui` at `1da98561b332766b413e2f7006ef6c9b71606209`. No UI design, native Windows integration or prior audit was changed.

No approved preview-sharing tool or configured hosting connection/deployment credentials was available. Cloud runtime status reported no capabilities, secrets or outbound identities; no hosting-specific variable names were configured. No public URL is claimed and no Gateway was exposed. The cloud localhost server is not an access link for a remote PC.

Use the Windows instructions at the beginning of [UI_PREVIEW.md](../UI_PREVIEW.md). `scripts/start-ui-preview.cmd` uses Python 3 to run the existing server and open the default browser. It avoids PowerShell script execution-policy changes. The server now prints readiness after binding, reports occupied ports clearly and handles favicon requests without a spurious browser error. Browser verification can write fresh evidence to a separate directory using `MORPHEUS_PREVIEW_EVIDENCE`.

The task-owned server was restarted on `http://127.0.0.1:4173/` and tested with Chromium. Fresh [Home](evidence/phase4-launch/home-preview.png) and [Chat](evidence/phase4-launch/chat-preview.png) screenshots are 1492×1054; smaller viewport screenshots are also retained. The existing interaction check passed, with additional assertions for failed JS/CSS/SVG responses and browser console errors. File allowlist checks and the occupied-port failure check passed. Python syntax compilation passed. No unrelated repository-wide or native suite was rerun.

Working browser behavior: empty Home default, Home/Chat navigation, sidebar toggle and retention, draft preservation, search presentation, New Chat composition, More dropdown, modals and responsive resizing. Native actions remain explicit handoffs. No backend adapter exists in this preview: real sessions, session context-menu operations, AI replies, microphone, attachments, native notifications/settings/scheduler/pairing/usage/timeline and OS window controls require native testing. The status dot honestly remains disconnected.

The Windows command wrapper and default-browser launch have not been executed on Windows in this Linux environment. The underlying Python server and rendered UI have been exercised. Fonts use the existing system font stack, with no external font download. Saved browser assets refresh directly from disk; automatic hot reload is not enabled.

All launch changes are confined to preview scripts, launch documentation and fresh evidence. Previous commits, source, audit reports, security restrictions and the approved design remain preserved. Stop with Ctrl+C and restart with the same Windows launcher.
