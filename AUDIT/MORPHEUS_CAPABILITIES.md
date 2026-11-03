# MORPHEUS existing capabilities audit

Audit date: 2026-11-03. Source revision: `37b85f107fc94d463b0a990df0dfa12ccd1a1708` on `phase-4-ui-redesign`.

## Executive summary

MORPHEUS contains a substantial inherited agent/Gateway and native Windows implementation. The browser preview is a visual shell: it does not authenticate to a Gateway, send model requests, operate native sessions, or capture/synthesize speech. A visible button is not evidence of operational connectivity. The native app has many registered Settings routes and tool capabilities that the compact navigation does not display.

This is a read-only source and existing-evidence audit. No application files, settings, credentials, permissions or dependencies were changed; no capabilities were activated and no test suites were run. The report samples implementation owners, registrations, configuration boundaries and existing tests/results across all requested subsystems. It does not claim line-by-line review of roughly 65,000 imported files, every extension's runtime readiness, or an exhaustive catalog of every provider/model variant.

**Counting method:** each numbered row below is one independently useful user-facing capability or configuration family. Provider brands, individual tool functions and session-menu actions are grouped rather than counted separately. Missing requested behaviors are counted as capability entries, not as delivered features. There are **82 entries**. Status is assigned to the exact scope described in the row, not to every underlying implementation.

## Implementation-status table

| Status | Count | Meaning in this audit |
|---|---:|---|
| WORKING | 7 | Relevant historical behavior evidence exists for the explicitly scoped preview behavior; not native acceptance. |
| IMPLEMENTED, UNTESTED | 56 | Code/interface exists; end-to-end current MORPHEUS use is not established. |
| PARTIALLY IMPLEMENTED | 4 | A required integration or platform-parity piece is missing. |
| BACKEND ONLY | 11 | Backend/plugin family exists; no dedicated current MORPHEUS UI path verified. |
| PREVIEW ONLY | 0 | Browser-only behavior without native confirmation (verified browser rows use WORKING with explicit browser scope). |
| NOT IMPLEMENTED | 3 | Requested/planned behavior absent from the inspected current MORPHEUS path. |
| BLOCKED | 1 | Known environment/dependency prevents acceptance. |

“Code exists” means implementation is present, not enabled or configured. For NOT IMPLEMENTED rows the cited file is the boundary showing the gap, not an implementation of the missing feature. Native registration establishes a route, not successful runtime execution. BACKEND ONLY does not mean inaccessible through all Core interfaces: CLI/config/agent tools may expose it after setup.

## Full categorized inventory

All source references are exact repository-relative paths. Directory references explicitly identify broad subsystem families; file references identify specific owners. Tests recorded below are historical evidence, not fresh current-head results. Where a portable suite passed but physical Windows/provider behavior was not tested, the overall capability remains IMPLEMENTED, UNTESTED.

### MORPHEUS surfaces

#### 1. Home Ultron rendering

**Status:** WORKING. **Origin:** MORPHEUS (Ultron MIT for Home). **Underlying code:** Present; see scope/limitations.

Shows the imported purple Three.js scene. **Use:** Open Home.

- **Windows UI:** No parity claim; native differs.
- **Browser preview:** Yes, presentation only.
- **Setup/permissions:** Local checkout, Python; WebGL for Ultron.
- **Verification:** AUDIT/evidence/ultron/verification.log; historical focused proof, not a fresh run.
- **Evidence:** `ui/preview/ultron/orbScene.ts`.

#### 2. Approved camera lock

**Status:** WORKING. **Origin:** MORPHEUS (Ultron MIT for Home). **Underlying code:** Present; see scope/limitations.

Always uses the exported angle, target and zoom; no user camera controls. **Use:** Open or refresh Home.

- **Windows UI:** No parity claim; native differs.
- **Browser preview:** Yes, presentation only.
- **Setup/permissions:** Local checkout, Python; WebGL for Ultron.
- **Verification:** AUDIT/evidence/ultron/locked-camera/verification.log; historical focused proof, not a fresh run.
- **Evidence:** `ui/preview/ultron/approvedCamera.ts`.

#### 3. Empty Chat MORPHY artwork

**Status:** WORKING. **Origin:** MORPHEUS (Ultron MIT for Home). **Underlying code:** Present; see scope/limitations.

Shows the existing inline SVG rings and emblem in empty Chat. **Use:** Open Chat before messages exist.

- **Windows UI:** No parity claim; native differs.
- **Browser preview:** Yes, presentation only.
- **Setup/permissions:** Local checkout, Python; WebGL for Ultron.
- **Verification:** AUDIT/evidence/ultron/verification.log; historical focused proof, not a fresh run.
- **Evidence:** `ui/preview/index.html`.

#### 4. Browser draft retention

**Status:** WORKING. **Origin:** MORPHEUS (Ultron MIT for Home). **Underlying code:** Present; see scope/limitations.

Keeps typed text across Home/Chat navigation. **Use:** Type a draft, switch pages and return.

- **Windows UI:** No parity claim; native differs.
- **Browser preview:** Yes, presentation only.
- **Setup/permissions:** Local checkout, Python; WebGL for Ultron.
- **Verification:** AUDIT/evidence/morphy-core/browser.log; historical focused proof, not a fresh run.
- **Evidence:** `ui/preview/app.js`.

#### 5. Orb click feedback

**Status:** WORKING. **Origin:** MORPHEUS (Ultron MIT for Home). **Underlying code:** Present; see scope/limitations.

Brief decorative illumination, without starting voice. **Use:** Click the MORPHY center in Chat.

- **Windows UI:** No parity claim; native differs.
- **Browser preview:** Yes, presentation only.
- **Setup/permissions:** Local checkout, Python; WebGL for Ultron.
- **Verification:** Historical click/keyboard check in conversation; screenshot AUDIT/evidence/morphy-core-inline/click-pulse.png; historical focused proof, not a fresh run.
- **Evidence:** `ui/preview/app.js`.

#### 6. Responsive preview layout

**Status:** WORKING. **Origin:** MORPHEUS (Ultron MIT for Home). **Underlying code:** Present; see scope/limitations.

Adapts the sidebar and composer to small windows. **Use:** Resize the browser.

- **Windows UI:** No parity claim; native differs.
- **Browser preview:** Yes, presentation only.
- **Setup/permissions:** Local checkout, Python; WebGL for Ultron.
- **Verification:** AUDIT/evidence/morphy-core/regression.log; historical focused proof, not a fresh run.
- **Evidence:** `ui/preview/style.css`.

#### 7. Local preview serving

**Status:** WORKING. **Origin:** MORPHEUS (Ultron MIT for Home). **Underlying code:** Present; see scope/limitations.

Serves an explicit file allowlist on localhost. **Use:** Run scripts/start-ui-preview.cmd.

- **Windows UI:** No parity claim; native differs.
- **Browser preview:** Yes, presentation only.
- **Setup/permissions:** Local checkout, Python; WebGL for Ultron.
- **Verification:** AUDIT/evidence/morphy-core/regression.log; historical focused proof, not a fresh run.
- **Evidence:** `scripts/ui-preview.py`.

#### 8. Home activity visuals

**Status:** PARTIALLY IMPLEMENTED. **Origin:** MORPHEUS. **Underlying code:** Present; see scope/limitations.

Has idle/speaking/thinking/processing presentation inputs and central surge loops. **Use:** Future owner calls setActivity; production preview initializes idle.

- **Windows UI:** No shared native Home event adapter.
- **Browser preview:** Idle only; other states test-injected.
- **Setup/permissions:** Real voice/request lifecycle bridge required.
- **Verification:** AUDIT/evidence/ultron/looping-core/verification.log; subsequent outer-shell pause is source-reviewed, not a recorded runtime rerun.
- **Evidence:** `ui/preview/ultron/orbScene.ts`.

#### 9. Native Home artwork

**Status:** IMPLEMENTED, UNTESTED. **Origin:** MORPHEUS. **Underlying code:** Present; see scope/limitations.

Native WinUI core uses SVG image layers and storyboards. **Use:** Launch native Home.

- **Windows UI:** Yes, separate older control.
- **Browser preview:** No; browser uses inline SVG/Ultron.
- **Setup/permissions:** Windows build.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Controls/MorphyAnimatedCore.cs`.

#### 10. Brand/icon packaging

**Status:** PARTIALLY IMPLEMENTED. **Origin:** MORPHEUS. **Underlying code:** Present; see scope/limitations.

Supplies header, favicon and Windows icon assets. **Use:** Preview refresh; rebuild/install native app for OS icons.

- **Windows UI:** References exist; installed icons unverified.
- **Browser preview:** Yes.
- **Setup/permissions:** Windows icon cache/install validation.
- **Verification:** AUDIT/evidence/morphy-core/branding.log verifies PNG/ICO exports, not installed shortcuts.
- **Evidence:** `scripts/prepare-crest-icons.py`.

#### 11. Separate Settings and navigation

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS. **Underlying code:** Present; see scope/limitations.

Keeps Settings in a separate native window with retained Chat. **Use:** Use Settings rail button.

- **Windows UI:** Wired.
- **Browser preview:** Dialog handoff only.
- **Setup/permissions:** Windows app.
- **Verification:** AUDIT/evidence/morphy-core/focused.log: 130 portable contracts passed; no live native proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Windows/WorkspaceWindow.xaml.cs`.

### Chat, sessions and workspaces

#### 12. Text conversation and generation

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS integration. **Underlying code:** Present; see scope/limitations.

Sends messages through the existing provider/Gateway path. **Use:** Type and Send.

- **Windows UI:** Wired or registered native route.
- **Browser preview:** No real operations; draft UI only.
- **Setup/permissions:** Paired Gateway, configured model/provider.
- **Verification:** 851 focused portable composer/controller/picker/session/localization checks in AUDIT/evidence/phase4-composer/validation.json; does not establish this full native user journey.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Chat/ChatComposerController.cs`.

#### 13. Stop generation

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS integration. **Underlying code:** Present; see scope/limitations.

Cancels an active request through the existing controller. **Use:** Use Stop during a turn.

- **Windows UI:** Wired or registered native route.
- **Browser preview:** No real operations; draft UI only.
- **Setup/permissions:** Active connected turn; already performed tool actions are not undone.
- **Verification:** 851 focused portable composer/controller/picker/session/localization checks in AUDIT/evidence/phase4-composer/validation.json; does not establish this full native user journey.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Chat/ChatComposerController.cs`.

#### 14. Multiline composer and attachment flow

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS integration. **Underlying code:** Present; see scope/limitations.

Supports drafts, multiline input and attachments. **Use:** Use composer and paperclip.

- **Windows UI:** Wired or registered native route.
- **Browser preview:** No real operations; draft UI only.
- **Setup/permissions:** File access; selected model must support attachment type.
- **Verification:** 851 focused portable composer/controller/picker/session/localization checks in AUDIT/evidence/phase4-composer/validation.json; does not establish this full native user journey.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Chat/ReactorChatComposer.cs`.

#### 15. Model selection

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS integration. **Underlying code:** Present; see scope/limitations.

Selects real configured model entries. **Use:** Open native model picker.

- **Windows UI:** Wired or registered native route.
- **Browser preview:** No real operations; draft UI only.
- **Setup/permissions:** Provider catalog and credentials.
- **Verification:** 851 focused portable composer/controller/picker/session/localization checks in AUDIT/evidence/phase4-composer/validation.json; does not establish this full native user journey.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Chat/ChatModelPicker.cs`.

#### 16. Reasoning/effort selection

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS integration. **Underlying code:** Present; see scope/limitations.

Offers effort levels supported by the model. **Use:** Open reasoning picker.

- **Windows UI:** Wired or registered native route.
- **Browser preview:** No real operations; draft UI only.
- **Setup/permissions:** Compatible model.
- **Verification:** 851 focused portable composer/controller/picker/session/localization checks in AUDIT/evidence/phase4-composer/validation.json; does not establish this full native user journey.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Chat/ChatReasoningPicker.cs`.

#### 17. Session history and switching

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS integration. **Underlying code:** Present; see scope/limitations.

Restores canonical conversation selection and history. **Use:** Select a session in Chat.

- **Windows UI:** Wired or registered native route.
- **Browser preview:** No real operations; draft UI only.
- **Setup/permissions:** Gateway/session access.
- **Verification:** 851 focused portable composer/controller/picker/session/localization checks in AUDIT/evidence/phase4-composer/validation.json; does not establish this full native user journey.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Windows/WorkspaceWindow.xaml.cs`.

#### 18. Session management

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS integration. **Underlying code:** Present; see scope/limitations.

Pin, rename, read/unread, archive, fork, reset, compact, export and delete through existing owner. **Use:** Open native session context menu.

- **Windows UI:** Wired or registered native route.
- **Browser preview:** No real operations; draft UI only.
- **Setup/permissions:** Gateway; main-session/disconnected restrictions apply.
- **Verification:** 851 focused portable composer/controller/picker/session/localization checks in AUDIT/evidence/phase4-composer/validation.json; does not establish this full native user journey.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Presentation/WorkspaceSessionMenu.cs`.

#### 19. Agent workspace files

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS integration. **Underlying code:** Present; see scope/limitations.

Browse/manage agent workspace content through the existing page. **Use:** Settings/command search: agent Workspace.

- **Windows UI:** Wired or registered native route.
- **Browser preview:** No real operations; draft UI only.
- **Setup/permissions:** Agent workspace and allowed file access.
- **Verification:** 851 focused portable composer/controller/picker/session/localization checks in AUDIT/evidence/phase4-composer/validation.json; does not establish this full native user journey.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/WorkspacePage.xaml.cs`.

#### 20. Agent event history

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS integration. **Underlying code:** Present; see scope/limitations.

Inspect agent event activity. **Use:** Settings/command search: Agent Events.

- **Windows UI:** Wired or registered native route.
- **Browser preview:** No real operations; draft UI only.
- **Setup/permissions:** Gateway and agent selection.
- **Verification:** 851 focused portable composer/controller/picker/session/localization checks in AUDIT/evidence/phase4-composer/validation.json; does not establish this full native user journey.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/AgentEventsPage.xaml.cs`.

### Voice

#### 21. Microphone dictation

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS Phase 3. **Underlying code:** Present; see scope/limitations.

Captures audio and places recognized text in the draft. **Use:** Native Chat microphone.

- **Windows UI:** Yes for implemented rows; no Home adapter.
- **Browser preview:** No real microphone/STT/TTS.
- **Setup/permissions:** Microphone permission, capture device, STT model.
- **Verification:** AUDIT/PHASE3_IMPLEMENTATION_RESULTS.md and evidence/phase3/closeout.log: 762 portable checks passed; physical audio/provider acceptance remains unverified.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Chat/ChatComposerController.cs`.

#### 22. Voice autosend

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS Phase 3. **Underlying code:** Present; see scope/limitations.

Opt-in final transcript submission into the canonical existing conversation. **Use:** Set MORPHEUS_VOICE_AUTOSEND=1 and use native microphone.

- **Windows UI:** Yes for implemented rows; no Home adapter.
- **Browser preview:** No real microphone/STT/TTS.
- **Setup/permissions:** Materialized session, no conflicting draft/attachments; Gateway/model.
- **Verification:** AUDIT/PHASE3_IMPLEMENTATION_RESULTS.md and evidence/phase3/closeout.log: 762 portable checks passed; physical audio/provider acceptance remains unverified.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Chat/ChatComposerController.cs`.

#### 23. Endpoint detection and transcription progress

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS Phase 3. **Underlying code:** Present; see scope/limitations.

Detects speech end and shows buffered decode progress. **Use:** Use voice capture.

- **Windows UI:** Yes for implemented rows; no Home adapter.
- **Browser preview:** No real microphone/STT/TTS.
- **Setup/permissions:** Local STT engine; not true while-speaking interim STT.
- **Verification:** AUDIT/PHASE3_IMPLEMENTATION_RESULTS.md and evidence/phase3/closeout.log: 762 portable checks passed; physical audio/provider acceptance remains unverified.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Services/VoiceService.cs`.

#### 24. Spoken assistant responses

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS Phase 3. **Underlying code:** Present; see scope/limitations.

Synthesizes final assistant text through configured TTS and playback. **Use:** Enable voice response settings.

- **Windows UI:** Yes for implemented rows; no Home adapter.
- **Browser preview:** No real microphone/STT/TTS.
- **Setup/permissions:** TTS model/provider, speaker; provider keys where needed.
- **Verification:** AUDIT/PHASE3_IMPLEMENTATION_RESULTS.md and evidence/phase3/closeout.log: 762 portable checks passed; physical audio/provider acceptance remains unverified.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Services/TextToSpeech/TextToSpeechService.cs`.

#### 25. Stop/mute speech

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS Phase 3. **Underlying code:** Present; see scope/limitations.

Cancels synthesis, queued and active audio separately from agent work. **Use:** Native speaker stop/mute.

- **Windows UI:** Yes for implemented rows; no Home adapter.
- **Browser preview:** No real microphone/STT/TTS.
- **Setup/permissions:** Native playback.
- **Verification:** AUDIT/PHASE3_IMPLEMENTATION_RESULTS.md and evidence/phase3/closeout.log: 762 portable checks passed; physical audio/provider acceptance remains unverified.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Services/TextToSpeech/TextToSpeechService.cs`.

#### 26. Voice settings and provider choices

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw + MORPHEUS Phase 3. **Underlying code:** Present; see scope/limitations.

Configures voice recognition and synthesis readiness/options. **Use:** Settings: Voice.

- **Windows UI:** Yes for implemented rows; no Home adapter.
- **Browser preview:** No real microphone/STT/TTS.
- **Setup/permissions:** Whisper/local voice models or external provider setup.
- **Verification:** AUDIT/PHASE3_IMPLEMENTATION_RESULTS.md and evidence/phase3/closeout.log: 762 portable checks passed; physical audio/provider acceptance remains unverified.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/VoiceSettingsPage.xaml.cs`.

#### 27. True live streaming STT

**Status:** NOT IMPLEMENTED. **Origin:** OpenClaw + MORPHEUS Phase 3. **Underlying code:** Absent for this requested behavior; boundary cited.

Would transcribe during speech rather than buffered post-endpoint decode. **Use:** No verified current entry point.

- **Windows UI:** Yes for implemented rows; no Home adapter.
- **Browser preview:** No real microphone/STT/TTS.
- **Setup/permissions:** Needs different streaming contract.
- **Verification:** AUDIT/PHASE3_IMPLEMENTATION_RESULTS.md and evidence/phase3/closeout.log: 762 portable checks passed; physical audio/provider acceptance remains unverified.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Services/VoiceService.cs`.

#### 28. Hands-free wake word/full duplex

**Status:** NOT IMPLEMENTED. **Origin:** OpenClaw + MORPHEUS Phase 3. **Underlying code:** Absent for this requested behavior; boundary cited.

Would support wake activation and acoustic echo-safe simultaneous talk/listen. **Use:** No MORPHEUS implementation established.

- **Windows UI:** Yes for implemented rows; no Home adapter.
- **Browser preview:** No real microphone/STT/TTS.
- **Setup/permissions:** Wake-word and AEC/barge-in work required.
- **Verification:** AUDIT/PHASE3_IMPLEMENTATION_RESULTS.md and evidence/phase3/closeout.log: 762 portable checks passed; physical audio/provider acceptance remains unverified.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Chat/ChatComposerController.cs`.

#### 29. Home voice/request connection

**Status:** PARTIALLY IMPLEMENTED. **Origin:** OpenClaw + MORPHEUS Phase 3. **Underlying code:** Present; see scope/limitations.

Would drive the Home core from real capture, playback and generation. **Use:** No production Home entry point.

- **Windows UI:** Yes for implemented rows; no Home adapter.
- **Browser preview:** No real microphone/STT/TTS.
- **Setup/permissions:** Adapter to native state owners required.
- **Verification:** AUDIT/PHASE3_IMPLEMENTATION_RESULTS.md and evidence/phase3/closeout.log: 762 portable checks passed; physical audio/provider acceptance remains unverified.
- **Evidence:** `ui/preview/app.js`.

### Gateway and native settings

#### 30. Gateway connection/pairing

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Connects companion to an authorized Gateway. **Use:** Settings: Connection.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Reachable Gateway, pairing credentials/device approval.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/ConnectionPage.xaml.cs`.

#### 31. Local model management

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Configures local AI model/runtime integration. **Use:** Settings: Local AI.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Supported local runtime/models, sufficient hardware.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/LocalAiPage.xaml.cs`.

#### 32. Channel integration

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Configures messaging connections. **Use:** Settings: Channels.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Channel plugin, account credentials and platform permissions.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/ChannelsPage.xaml.cs`.

#### 33. Devices and instances

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Lists/manages connected instances. **Use:** Settings: Instances.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Gateway and node access.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/InstancesPage.xaml.cs`.

#### 34. Configuration editing

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Edits Gateway configuration through its native page. **Use:** Settings: Config.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Gateway config permissions; validation/reload requirements.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/ConfigPage.xaml.cs`.

#### 35. Usage/cost reporting

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Shows provider/Gateway usage data. **Use:** More: Usage or Settings route.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Gateway usage records; provider accounting may vary.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/UsagePage.xaml.cs`.

#### 36. Routing bindings

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Connects accounts/channels to agent routes. **Use:** Settings: Bindings.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Configured channels and agents.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/BindingsPage.xaml.cs`.

#### 37. Permission management

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Controls sensitive node capabilities. **Use:** Settings: Permissions.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Explicit authorization; OS permissions still apply.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/PermissionsPage.xaml.cs`.

#### 38. Sandbox/exec policy

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Controls execution isolation and allowed actions. **Use:** Settings: Sandbox.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Supported Windows/WSL execution environment.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/SandboxPage.xaml.cs`.

#### 39. Skills management

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Lists/configures agent skills. **Use:** Settings/command search: Skills.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Installed skills and their dependencies.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/SkillsPage.xaml.cs`.

#### 40. Scheduled jobs

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Creates/manages schedules through existing Cron UI/service. **Use:** Command search: Cron/Scheduled Tasks or registered agent Cron route.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Gateway running, job permissions, timezone/delivery configuration.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/CronPage.xaml.cs`.

#### 41. Notifications

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Shows current active/undismissed notifications. **Use:** Native title-bar bell.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Native notifications; no distinct upstream unread flag proven.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/NotificationsPage.xaml.cs`.

#### 42. Diagnostics/debug utilities

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Shows technical connection/runtime diagnostics. **Use:** Diagnostics route when enabled.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Diagnostic visibility setting; redact exports.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/DebugPage.xaml.cs`.

#### 43. General application settings

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw; MORPHEUS routes/layout. **Underlying code:** Present; see scope/limitations.

Manages application preferences. **Use:** Settings page.

- **Windows UI:** Registered in HubPageRegistry; runtime reachability unverified.
- **Browser preview:** Handoff dialogs only.
- **Setup/permissions:** Native app.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Pages/SettingsPage.xaml.cs`.

### Automation and node capabilities

#### 44. Browser automation

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw. **Underlying code:** Present; see scope/limitations.

Proxies browser control through an authenticated node/Gateway browser path. **Use:** Agent tool or authorized node/MCP invocation.

- **Windows UI:** Permission settings exist; execution normally via tools, not dedicated Home buttons.
- **Browser preview:** No.
- **Setup/permissions:** Browser control enabled, paired Gateway, browser backend/profile.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Shared/Capabilities/BrowserProxyCapability.cs`.

#### 45. Screen capture/recording

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw. **Underlying code:** Present; see scope/limitations.

Requests screenshot or screen recording. **Use:** screen.snapshot / screen.record via node tools.

- **Windows UI:** Permission settings exist; execution normally via tools, not dedicated Home buttons.
- **Browser preview:** No.
- **Setup/permissions:** Screen permission, actual capture handler and interactive Windows desktop.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Shared/Capabilities/ScreenCapability.cs`.

#### 46. Camera capture

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw. **Underlying code:** Present; see scope/limitations.

Requests camera operations through native capability handlers. **Use:** Camera node commands.

- **Windows UI:** Permission settings exist; execution normally via tools, not dedicated Home buttons.
- **Browser preview:** No.
- **Setup/permissions:** Camera enabled, device access and OS permission.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Shared/Capabilities/CameraCapability.cs`.

#### 47. Canvas rendering

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw. **Underlying code:** Present; see scope/limitations.

Presents agent-driven canvas content. **Use:** Canvas node tools.

- **Windows UI:** Permission settings exist; execution normally via tools, not dedicated Home buttons.
- **Browser preview:** No.
- **Setup/permissions:** Canvas enabled and native host.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Shared/Capabilities/CanvasCapability.cs`.

#### 48. System command execution

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw. **Underlying code:** Present; see scope/limitations.

Executes permitted system actions. **Use:** Authorized system tools.

- **Windows UI:** Permission settings exist; execution normally via tools, not dedicated Home buttons.
- **Browser preview:** No.
- **Setup/permissions:** Run-system-tools toggle, policy/approval and supported host.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Shared/Capabilities/SystemCapability.cs`.

#### 49. Device information

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw. **Underlying code:** Present; see scope/limitations.

Exposes platform/device status including battery where available. **Use:** Device node tools.

- **Windows UI:** Permission settings exist; execution normally via tools, not dedicated Home buttons.
- **Browser preview:** No.
- **Setup/permissions:** Platform providers and node authorization.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Shared/Capabilities/DeviceCapability.cs`.

#### 50. Location

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw. **Underlying code:** Present; see scope/limitations.

Requests location data. **Use:** Location node tool.

- **Windows UI:** Permission settings exist; execution normally via tools, not dedicated Home buttons.
- **Browser preview:** No.
- **Setup/permissions:** Location permission and platform availability.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Shared/Capabilities/LocationCapability.cs`.

#### 51. Ollama node chat/catalog

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw. **Underlying code:** Present; see scope/limitations.

Lists models and calls a configured local Ollama service. **Use:** ollama.models / ollama.chat.

- **Windows UI:** Permission settings exist; execution normally via tools, not dedicated Home buttons.
- **Browser preview:** No.
- **Setup/permissions:** Ollama service/models and node capability.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Shared/Capabilities/OllamaCapability.cs`.

#### 52. STT node API

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw. **Underlying code:** Present; see scope/limitations.

Bounded transcription/listening and engine readiness. **Use:** stt.transcribe / stt.listen / stt.status.

- **Windows UI:** Permission settings exist; execution normally via tools, not dedicated Home buttons.
- **Browser preview:** No.
- **Setup/permissions:** Native capture handlers and STT setup.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Shared/Capabilities/SttCapability.cs`.

#### 53. TTS node API

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw. **Underlying code:** Present; see scope/limitations.

Speech synthesis/playback and readiness through node interface. **Use:** tts commands.

- **Windows UI:** Permission settings exist; execution normally via tools, not dedicated Home buttons.
- **Browser preview:** No.
- **Setup/permissions:** Native TTS handlers/provider.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Shared/Capabilities/TtsCapability.cs`.

### Core agent tools

#### 54. Agent delegation/subagents

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Spawns child tasks and manages delegated work. **Use:** Ask configured agent to delegate.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Tool policy, agent permissions, provider capacity.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/sessions-spawn-tool.ts`.

#### 55. Session tools

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Lists, searches, reads and sends to allowed sessions. **Use:** Agent session tools.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Session visibility/ownership restrictions.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/sessions-tool.ts`.

#### 56. Terminal tools

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Runs shell/terminal work through authorized runtime. **Use:** Agent terminal tool.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Execution policy, sandbox and approvals.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/terminal-tool.ts`.

#### 57. Computer control

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Routes computer actions/observations through supported node backends. **Use:** Agent computer tool.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Configured computer backend, desktop permissions and policy.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/computer-tool.ts`.

#### 58. Screen observation tool

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Lets an agent request screen information. **Use:** Agent screen tool.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Screen backend and authorization.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/screen-tool.ts`.

#### 59. Agent scheduling

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Creates/manages automations without a dashboard panel. **Use:** Agent cron tool.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Gateway scheduler and delivery permissions.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/cron-tool.ts`.

#### 60. Image understanding

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Processes images through configured model/tool support. **Use:** Attach an image or request image analysis.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Vision-capable provider and media policy.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/image-tool.ts`.

#### 61. PDF analysis

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Reads supported PDF content. **Use:** Ask agent to analyze a PDF.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Document access, compatible provider/parser.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/pdf-tool.ts`.

#### 62. Image generation

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Generates images through provider plugins. **Use:** Agent image-generation tool.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Enabled provider/plugin, key, quota.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/image-generate-tool.ts`.

#### 63. Video generation

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Generates video via provider integrations. **Use:** Agent video tool.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Compatible paid/provider service and policy.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/video-generate-tool.ts`.

#### 64. Music generation

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Creates audio/music with supported providers. **Use:** Agent music tool.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Enabled provider and usage rights.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/music-generate-tool.ts`.

#### 65. Plugin discovery/management

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Exposes plugin management tools. **Use:** Agent plugin tools or Core CLI.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Plugin allowlist, installed packages, provider auth.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/plugins-tool.ts`.

#### 66. Personal instructions

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Maintains user/agent instruction context. **Use:** Agent personal-instructions tool.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Workspace write permissions and identity scope.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/personal-instructions-tool.ts`.

#### 67. GitHub publishing

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Provides repository publication operations. **Use:** Agent GitHub publish tool.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Explicit publish authority and GitHub connection.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/github-publish-tool.ts`.

#### 68. Structured output

**Status:** IMPLEMENTED, UNTESTED. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Produces validated structured responses. **Use:** Agent structured-output tool.

- **Windows UI:** Potentially usable through connected Chat; no dedicated MORPHEUS control confirmed.
- **Browser preview:** No.
- **Setup/permissions:** Tool enabled; schema/provider support.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/agents/tools/structured-output-tool.ts`.

### Optional backend/integration families

#### 69. Browser profiles/relay

**Status:** BACKEND ONLY. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Implements browser plugin lifecycle and node commands. **Use:** Configure via Core CLI/config/plugin interfaces; no dedicated current Home entry.

- **Windows UI:** No dedicated native path verified; some exposed indirectly.
- **Browser preview:** No.
- **Setup/permissions:** Installed/enabled browser plugin, Chrome/CDP/relay setup as applicable.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/extensions/browser/index.ts`.

#### 70. Searchable memory

**Status:** BACKEND ONLY. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Provides scoped memory search/get and indexing lifecycle. **Use:** Configure via Core CLI/config/plugin interfaces; no dedicated current Home entry.

- **Windows UI:** No dedicated native path verified; some exposed indirectly.
- **Browser preview:** No.
- **Setup/permissions:** Memory backend, indexing and embedding setup.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/extensions/memory-core/index.ts`.

#### 71. Knowledge/document ingestion

**Status:** BACKEND ONLY. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Adds optional knowledge services. **Use:** Configure via Core CLI/config/plugin interfaces; no dedicated current Home entry.

- **Windows UI:** No dedicated native path verified; some exposed indirectly.
- **Browser preview:** No.
- **Setup/permissions:** Plugin activation, storage/indexing and document access.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/extensions/knowledge/README.md`.

#### 72. Alternative memory backends

**Status:** BACKEND ONLY. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Provides optional LanceDB/wiki memory implementations. **Use:** Configure via Core CLI/config/plugin interfaces; no dedicated current Home entry.

- **Windows UI:** No dedicated native path verified; some exposed indirectly.
- **Browser preview:** No.
- **Setup/permissions:** Backend packages, storage and embedding configuration.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/extensions/memory-lancedb/index.ts`.

#### 73. MCP integrations

**Status:** BACKEND ONLY. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Bridges external MCP tools/services. **Use:** Configure via Core CLI/config/plugin interfaces; no dedicated current Home entry.

- **Windows UI:** No dedicated native path verified; some exposed indirectly.
- **Browser preview:** No.
- **Setup/permissions:** Configured trusted MCP servers and credentials.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/mcp`.

#### 74. Web search/fetch

**Status:** BACKEND ONLY. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Retrieves/searches web content with provider support. **Use:** Configure via Core CLI/config/plugin interfaces; no dedicated current Home entry.

- **Windows UI:** No dedicated native path verified; some exposed indirectly.
- **Browser preview:** No.
- **Setup/permissions:** Search provider/network policy; plugin/API key where required.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/web-search`.

#### 75. Provider ecosystem

**Status:** BACKEND ONLY. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Supports numerous hosted and local model adapters. **Use:** Configure via Core CLI/config/plugin interfaces; no dedicated current Home entry.

- **Windows UI:** No dedicated native path verified; some exposed indirectly.
- **Browser preview:** No.
- **Setup/permissions:** Provider plugin, keys/OAuth, model permissions and quotas.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/provider-runtime`.

#### 76. Messaging ecosystem

**Status:** BACKEND ONLY. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Supports optional channel plugins beyond native channel setup UI. **Use:** Configure via Core CLI/config/plugin interfaces; no dedicated current Home entry.

- **Windows UI:** No dedicated native path verified; some exposed indirectly.
- **Browser preview:** No.
- **Setup/permissions:** Account/channel authorization and plugin activation.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/channels`.

#### 77. Hooks and event workflows

**Status:** BACKEND ONLY. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Runs configured event hooks/workflows. **Use:** Configure via Core CLI/config/plugin interfaces; no dedicated current Home entry.

- **Windows UI:** No dedicated native path verified; some exposed indirectly.
- **Browser preview:** No.
- **Setup/permissions:** Hook registration, policy and runtime dependencies.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/hooks`.

#### 78. Secrets/security policy

**Status:** BACKEND ONLY. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Stores/resolves secrets and enforces authorization/policy infrastructure. **Use:** Configure via Core CLI/config/plugin interfaces; no dedicated current Home entry.

- **Windows UI:** No dedicated native path verified; some exposed indirectly.
- **Browser preview:** No.
- **Setup/permissions:** Correct secret backend and policy configuration; not a security certification.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/security`.

#### 79. CLI/TUI administration

**Status:** BACKEND ONLY. **Origin:** OpenClaw Core. **Underlying code:** Present; see scope/limitations.

Operates Core outside the MORPHEUS window. **Use:** Configure via Core CLI/config/plugin interfaces; no dedicated current Home entry.

- **Windows UI:** No dedicated native path verified; some exposed indirectly.
- **Browser preview:** No.
- **Setup/permissions:** Supported Node/runtime and configured Core installation.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/core/src/cli`.

### Delivery and missing integration

#### 80. Native Windows build acceptance

**Status:** BLOCKED. **Origin:** Inherited toolchain + MORPHEUS. **Underlying code:** Present; see scope/limitations.

Build/install/run the modified Windows application. **Use:** Build on a supported Windows host.

- **Windows UI:** Source exists.
- **Browser preview:** Not applicable.
- **Setup/permissions:** PowerShell, WinUI/XAML/MakePri and Windows desktop.
- **Verification:** Linux build blocked; portable suites retain 335 Shared and 168 Tray failures in recorded closeout.
- **Evidence:** `AUDIT/evidence/morphy-core/build.log`.

#### 81. Real browser Chat/voice execution

**Status:** NOT IMPLEMENTED. **Origin:** MORPHEUS. **Underlying code:** Absent for this requested behavior; boundary cited.

Would connect the preview composer to actual requests/audio. **Use:** Current controls intentionally show handoff dialogs.

- **Windows UI:** Native implementation is separate.
- **Browser preview:** No operational backend.
- **Setup/permissions:** Needs an explicit authenticated integration, not UI-only polish.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `ui/preview/app.js`.

#### 82. Native/browser feature parity

**Status:** PARTIALLY IMPLEMENTED. **Origin:** MORPHEUS. **Underlying code:** Present; see scope/limitations.

Would put Ultron, fixed camera, moved empty-chat core and state behavior in native UI. **Use:** No complete native port exists.

- **Windows UI:** Older Home/core and Chat implementation.
- **Browser preview:** Latest visuals exist.
- **Setup/permissions:** Native port plus Windows runtime acceptance.
- **Verification:** No applicable end-to-end pass established; source/tests are not runtime proof.
- **Evidence:** `components/windows/src/OpenClaw.Tray.WinUI/Controls/MorphyAnimatedCore.cs`.

## Configuration and permission requirements

1. Native operational features require a successfully built Windows application and a reachable, authorized Gateway where the route is Gateway-owned. Pairing, device identity and provider credentials are separate requirements. No credentials were read for this audit.
2. Model providers need installed/enabled adapters, valid authentication, supported models and quota. A provider folder or picker is not proof of an active account. Local AI additionally needs the relevant runtime, model downloads and hardware.
3. Node execution, browser control, camera, canvas, screen and location each retain their capability/policy gates and OS constraints. `components/windows/src/OpenClaw.Shared/Capabilities/SystemCapability.cs` exposes the system-tools permission boundary; capability event handlers must be bound before dispatch can operate.
4. Voice needs physical devices, OS permission, decoder/voice models and provider readiness. `MORPHEUS_VOICE_AUTOSEND=1` is an opt-in path, not a default always-listening assistant. Initial unmaterialized conversations retain explicit Send; drafts/attachments can block autosend.
5. Plugins/channels/MCP need separate activation and trusted configuration. Examples found in `components/core/extensions/`: OpenAI, Anthropic, Google, OpenRouter, Bedrock, Ollama, llama-cpp, LM Studio, vLLM; Telegram, WhatsApp, Discord, Slack, Teams, Signal, Matrix, iMessage, IRC, email/IMAP; search, memory, knowledge, file-transfer, GitHub, image/video/music and meeting/voice-call integrations. These are source-discovered families, **not installed/working integrations on the user's machine**. Their full inventories are in the extension directory and plugin manifests.
6. Scheduling requires a running scheduler/Gateway and configured delivery targets. Hiding its rail button did not remove jobs or services. Restoring a launch route does not prove timing, timezone or delivery correctness.

## Hidden or unused functionality: top ten opportunities

“Hidden” below means not on the current primary MORPHEUS surface; several already have native Settings or agent-tool entry points.

| Priority | Existing capability | What can be reused | UI-only or additional integration? |
|---|---|---|---|
| 1 | Scheduled jobs | CronPage + Core cron tool | Restore native navigation/command entry; then validate real scheduler/delivery. No new scheduler needed. |
| 2 | Browser/Chrome automation | Browser plugin + BrowserProxyCapability | Surface existing enable/setup/status UI; backend/profile/auth must already be configured. |
| 3 | Screenshot/screen recording | ScreenCapability + permissions page | Add discovery/launch UI around existing commands; native capture handler/OS proof still required. |
| 4 | Agent delegation | sessions-spawn and subagent tools | Existing agent tools can work without agent cards; status/task UI requires integration and policy-preserving routing. |
| 5 | Memory and knowledge | memory-core/knowledge plugins | Configuration/discovery can be exposed; indexing, retrieval scope and model setup are not UI-only. |
| 6 | Workspace file management | WorkspacePage and WorkspaceFilesModel | Native route promotion is mostly UI work; preserve filesystem boundaries and Gateway ownership. |
| 7 | Advanced sessions | WorkspaceSessionMenu and SessionsPage | Improve discoverability of archive/fork/compact/export; reuse exact session-key operations. |
| 8 | Model and reasoning overrides | Existing native model/reasoning pickers | Already in native composer; browser requires real catalog/backend connection, not fabricated options. |
| 9 | Voice controls and readiness | VoiceSettingsPage, VoiceService, TextToSpeechService | Surface provider/device readiness; Home bridge requires lifecycle integration, not another voice engine. |
| 10 | Usage, bindings and agent events | UsagePage, BindingsPage, AgentEventsPage | Promote registered native routes; live data still depends on Gateway/account setup. |

## Duplications, gaps and regression risks

- **Two visual implementations:** `ui/preview/index.html`, `ui/preview/app.js` and `ui/preview/ultron/orbScene.ts` are independent from native `Controls/MorphyAnimatedCore.cs` and `Windows/WorkspaceWindow.xaml`. The latest Ultron Home, locked camera and empty-Chat SVG move are browser changes. Native still has the earlier Home core. This is a parity gap, not proof of two voice backends.
- **Preview controls deliberately lack real actions:** `ui/preview/app.js` routes attachment, microphone, settings, notifications and other operations to handoff dialogs. Its composer explicitly says “Message not sent.” Model/reasoning controls have no live catalog. These must not be represented as working chat, settings or voice services.
- **Home surge state is not real activity:** `orb.setActivity('idle')` is the production browser initialization. Speaking/thinking/processing tests inject presentation states only. Latest shell pause is in `orbScene.ts`; earlier screenshots/tests that asserted moving shells describe an older revision.
- **Two meanings of SpeakingChanged:** `Services/VoiceService.cs` raises it from microphone VAD (`vad.IsSpeaking`); `Services/TextToSpeech/TextToSpeechService.cs` raises it around playback. A Home adapter must observe the correct owner and clear activity on cancellation, failure, disconnect and navigation. Prior conversational claims that treated these as one event were incomplete.
- **Buffered STT versus streaming claims:** Phase 3 exposes post-endpoint decoding progress. It does not establish live while-speaking recognition, streaming TTS, wake-word activation or acoustic echo-safe full duplex.
- **Native picker variants are not automatically duplicate business logic:** Reactor/native picker files coexist, but a duplication/removal conclusion requires caller tracing. Do not delete them just because names overlap.
- **Native routes outnumber visible rail items:** `HubPageRegistry.cs` maps Connection, Local AI, Channels, Instances, Config, Usage, Bindings, Permissions, Voice, Sandbox, Settings, Notifications, Debug, Sessions, Agent Events, Skills, Cron and Workspace. `WorkspaceWindow.xaml` hides the Scheduled Tasks rail control. Registered routes remain meaningful even when absent from the primary rail.
- **Local preview upgrade hazards:** the Python server builds its asset allowlist at startup but reads current files from disk. A stale server previously served new HTML with missing new asset routes. Dynamic orb loading and explicit JavaScript MIME handling now keep navigation from failing with the bundle. Server restart is still needed after server-code changes.
- **Legacy/imported brands are not themselves regressions:** internal OpenClaw class names and provider contracts remain intentionally. Source inventory checks show no missing original paths and licenses preserved; that does not prove runtime compatibility after every modification.
- **Security claims are limited:** retained permission gates, redaction and configuration ownership do not establish that every inherited extension is safe or correctly configured. No capabilities were enabled, no hidden permission checks bypassed, and no credential values inspected.

## Existing verification and known blockers

| Evidence | Result and scope |
|---|---|
| `AUDIT/evidence/phase3/closeout.log` | 762 portable tests passed; synthetic/controller/service coverage, not physical speech or live provider proof. |
| `AUDIT/evidence/phase3/voice-pipeline.log` | Earlier run had 2 failures/105 passes. Later focused logs exist; do not erase intermediate failures or infer physical acceptance. |
| `AUDIT/evidence/phase4-composer/validation.json` | 851 focused portable checks passed, browser checks passed, zero real model calls, native Windows not executed. |
| `AUDIT/evidence/morphy-core/validation.json` | 130 focused contracts passed. Full Shared: 4,484 passed/335 failed/25 skipped. Full Tray: 4,675 passed/168 failed/3 skipped. Broad suites are not green. |
| `AUDIT/evidence/morphy-core/build.log` | Linux could not execute the required Windows build path. Missing Windows/PowerShell tooling is a genuine acceptance blocker. |
| `AUDIT/evidence/ultron/verification.log` | Historical Home WebGL and Home/Chat checks passed. Original drag/reset behavior in that log was later deliberately removed by the camera lock. |
| `AUDIT/evidence/ultron/locked-camera/verification.log` | Exact approved camera, input lock, resize, refresh and navigation tested through temporary instrumentation; production camera configuration is bundled. |
| `AUDIT/evidence/ultron/looping-core/verification.log` | Test-injected active-state loops, independent bloom and camera verified. Its moving-shell assertion predates the latest pause correction. |

No current Windows machine, installed application, live Gateway/provider account or user's actual integrations were inspected. No expensive suites were rerun. The report therefore cannot certify a working release or mark inherited backend features WORKING solely from source/tests being present. Evidence dates and scope are retained rather than combined into a fictional all-green result.

## Practical roadmap (not implemented)

1. **Expose existing native routes first:** surface Cron, Workspace, advanced Sessions, Usage and Agent Events through the established registry/command system. Confirm each in a real connected Windows build before advertising it.
2. **Small integration work:** connect existing voice/controller/playback state to one presentation adapter; map request completion/cancellation reliably; preserve session scope and separate speech stop from task stop. Promote browser/screen permission readiness without executing tools automatically.
3. **Substantial work:** native/browser visual parity, authenticated browser chat, genuine streaming STT/TTS, full-duplex/wake-word support and rich delegation/memory UI. These require more than wiring a decorative button.
4. **Resolve acceptance blockers:** native Windows build/runtime proof, existing failing portable suites by owner, real Gateway/provider smoke tests, physical microphone/TTS tests and extension-specific permissions/licensing. Do not install or enable every plugin as an audit shortcut.
5. **Reuse before rebuilding:** retain existing controllers, canonical session identities, scheduler, permission system, model catalog, node capabilities, and provider adapters. A UI wrapper should not create a second request/voice/session system.

## Reading guide and limitations

For Windows entry points start with `components/windows/src/OpenClaw.Tray.WinUI/Presentation/HubPageRegistry.cs`, `Windows/WorkspaceWindow.xaml.cs`, and the named Pages/Capabilities above. For agent operations start with `components/core/src/agents/tools/`; plugin registration lives under `components/core/extensions/`. Current browser behavior is explicit in `ui/preview/app.js`; source presence in Core does not make a preview button operational.

This is a practical grouped inventory, not a claim that every extension, platform command, model variant, channel feature or upstream workflow was exhaustively validated. Unclassified fine-grained extension behavior remains unverified. Resolve such details against the specific plugin's manifest, registration and tests before planning a product promise.
