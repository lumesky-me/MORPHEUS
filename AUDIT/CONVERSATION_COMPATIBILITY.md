# MORPHEUS conversation compatibility

Branch: `phase-4-ui-redesign`. This is an adapter/UI checkpoint, **not a claim of complete browser/native parity**.

Status meanings:
- **Tested (fixture)**: integrated and exercised through the real adapter or rendered Chromium UI with synthetic transport; no live backend/provider claim.
- **Awaiting native/Gateway**: code is wired or the original native implementation is retained, but Windows/live verification has not run.
- **Missing in browser**: supported upstream; no replacement or simulated success is exposed here.
- **No dedicated API found**: not claimed globally unsupported; no invented RPC is used.

## Feature checklist

| Capability | Browser MORPHEUS | Native Windows owner / status |
| --- | --- | --- |
| Create/open/switch/rename/delete sessions | Tested (fixture); agent picker uses configured roster | Existing Workspace session controllers; awaiting Windows |
| Pin/archive/unread; main-session protections | Tested (fixture); existing context menu, Gateway persistence | WorkspaceSessionMenuController retained; awaiting Windows |
| Fork full conversation | Tested (fixture); sessions.create fork contract | Existing session menu retained; awaiting Windows |
| Reset/compact with confirmation | Tested (fixture); sessions.reset / sessions.compact | Existing lifecycle controller retained; awaiting Windows |
| Copy key/ID/transcript; export | Tested (fixture); paged chat.history, partial-export warning | Existing session/export services retained; awaiting Windows |
| Persisted full message history | Tested (fixture); tail page + Load earlier, cursor/offset continuation | ChatHistoryLoader retained; awaiting Windows |
| Home dashboard isolation | Tested (fixture); ordinary sessions never use dashboard key | DashboardHome.Conversation + native chat sessions retained |
| Chat icon opens dashboard; new/open session opens conversation | Tested in Chromium; no reset on navigation | WorkspaceWindow routes retained; awaiting Windows |
| Text send and streamed response | Tested (fixture); acknowledgement clears draft exactly once | OpenClawChatDataProvider/Coordinator retained; awaiting live provider |
| Stop/cancellation/error states | Tested (fixture); chat.abort; terminal chat states | Existing runtime transitions retained; awaiting Windows |
| Live updates from other clients | sessions.messages.subscribe + session.message refresh; adapter fixture subscription tested, live delivery unverified | Existing chat Gateway bridge retained |
| Model selection + Gateway default | Tested (fixture); session-scoped models.list where advertised, sessions.patch | Existing native model picker retained |
| Reasoning levels + default | Tested (fixture); model/session-advertised IDs, no fabricated levels | ChatReasoningPicker retained |
| Context usage/session metadata | Tested (fixture); actual sessionInfo totalTokens/contextTokens/model | ChatUsageFormatter retained |
| Timestamps/token metadata | Tested (fixture); no fabricated timestamps/usage | ChatEntryMetadata + native timeline retained |
| Copy message/code; use text as draft | Chromium rendered/action controls; clipboard depends on browser permissions | Existing native copy/actions retained |
| Edit from persisted user message | Tested adapter confirmation + sessions.rewind, restore editor text/attachments; live unverified | Existing native controls unchanged; Core contract traced |
| Fork at message / transcript branches | Tested adapter capability/confirmation guards; sessions.fork / sessions.branches.list/switch. Browser controls wired; live unverified | Existing native features unchanged; no new engine |
| One-click regenerate response | No dedicated regenerate RPC found in inspected schema/UI. **Missing in browser**; no duplicate chat.send disguised as regenerate | No new native action added |
| Tool calls/results/errors, collapsed details | Rich content/history + agent tool stream projection tested (fixture) | ChatEventMapper / ChatToolActivityPresentation / ReactorChatTimeline retained |
| Thinking/reasoning displays | History reasoning blocks + live agent reasoning projection; fixture-rendered | Existing reasoning/progress renderers retained |
| File/image upload | Chromium selected actual fixture bytes and sent correct chat.send attachment payload through mocked transport; adapter validated. Browser limit: 8 files / 6 MB total; server owns admission | Existing attachment picker/controller retained; live upload unverified |
| Images/full-size view + HTTPS file links | Inline image envelopes/HTTPS links rendered; backend media resolution not verified | ChatAssistantMediaRenderer / ResolveAssistantMediaAsync retained |
| Gateway-managed media refs/local files, audio/video playback | **Missing in browser**; explicit native-Chat fallback label rather than broken asset or fabricated URL | Existing native media resolution retained |
| Memory/context | Existing agent/session backend owns all memory; no added storage or prompt modifications | Existing provider/memory/context infrastructure retained |
| Permission/approval resolution | Backend guards unchanged. **Missing inline browser approval actions**; existing Notifications exposes real pending queues and directs review to OpenClaw | ChatApprovalState / native permission actions retained |
| Interactive agent questions | **Missing in browser** | ChatQuestionCoordinator retained |
| Message queue/steer/follow-up; durable outbox recovery | **Missing in browser**; normal send stays disabled while active | Existing native ChatSendQueue/ChatQueueState retained |
| Checkpoint/placement/runtime/worktree controls | **Missing in browser**; branch switching above is not a substitute | Existing native placement/checkpoint services retained |
| Slash commands | Typed commands pass unchanged through chat.send; **missing browser command-catalog UI** | Existing commands.list / native command handling retained |
| Mentions/reply annotations, account/runtime/service-tier/context-window selection | **Missing browser controls**; existing selections remain backend-owned, not overwritten by default | Upstream native/Core capabilities unchanged |
| Embedded canvas/plugin interactive views, rich tables/HTML | **Missing in browser**; safe basic markdown/code/lists/links only | Existing supported native/Core renderers unchanged |
| Preview session isolation | Tested Chromium read-only `preview:morphy-ui-test`; explicit opt-in, never persisted or sent to Gateway | Not injected into native or real sessions |

## Owners inspected

- Core: `packages/gateway-protocol/src/schema/logs-chat.ts`, `sessions.ts`, `model-catalog.ts`; Control UI `pages/chat/chat-send-request.ts`, `attachment-api.ts`, `chat-send-ack.ts`, `chat-history-actions.ts`, `lib/sessions/session-scoped-operations.ts`, `lib/chat/message-normalizer.ts`.
- Windows: `Chat/IChatGatewayBridge.cs`, `OpenClawChatDataProvider.cs`, `ChatHistoryLoader.cs`, `ChatEventMapper.cs`, `ReactorChatTimeline.cs`, `ChatVisuals.cs`, `ChatUsageFormatter.cs`. Native already uses MORPHEUS presentation/resources and the full existing controller stack; it has not been replaced with the browser's narrower adapter.
- No backend database, memory store, authentication system, permission owner, personality or voice path changed.

## Reproduce the visual preview

```powershell
Set-Location "$HOME\MORPHEUS-preview-refined"
git pull --ff-only origin phase-4-ui-redesign
.\scripts\start-ui-preview.cmd --port 4194 --gateway-chat --conversation-preview
```

Open `http://127.0.0.1:4194/?conversation-preview=1`, click Chat, then **MORPHY UI Test · Preview only**. The fixture is read-only, sample-labelled, and kept outside OpenClaw sessions. Omit `--conversation-preview` for normal operation. Real sessions continue using the configured Gateway and its permissions. Windows/Gateway/provider verification remains required before calling this full compatibility.
