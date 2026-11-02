# Final Chat and sidebar refinements

Continues on `phase-4-ui-redesign` from `5f42932b499084dfb417ba357d60b7c46cfded77`. Changes are presentation-only; the approved logo, title bar, charcoal/violet theme, Home canvas, rail width and adaptive conversation layout are retained.

## Changes

- Replaced the Chat navigation graphic with a clean outline speech bubble without decorative dots, matching the Home icon's weight. Existing selection styling and labels remain.
- Removed Scheduled Tasks from the browser rail and collapsed its native button. Home, Chat and More are now the visible top entries, with status and Settings below. Cron code, internal routes, task data and services remain intact; this is reversible presentation hiding.
- Browser composer now has multiline `Message MORPHY...`, paperclip, flexible space, model control, reasoning control, microphone and Send. Labels truncate at narrow widths. Model/reasoning clicks show an explicit unavailable-state explanation because this preview has no backend catalog, not a fabricated selection menu. No model names or unsupported effort levels are invented.
- Native ReactorChatComposer reuses its existing ChatModelPicker, ChatReasoningPicker, attachment host action, Phase 3 voice/controller and generation-aware Send/Stop button. Model label width is bounded dynamically; compact reasoning remains the existing accessible effort control. The existing sandbox status control is preserved beside the attachment control, keeping the model/reasoning/microphone/Send sequence together. Placeholder copy is localized in all six supported locales.

## Integration and limits

Model selection still invokes `controller.SetModel(choice.SelectionId)` using the actual provider catalog and active-thread inputs. Reasoning uses advertised thinking levels, `SetThinkingLevel` and `ClearThinkingLevel`, retaining Default/null semantics. The original controller/session/provider owns persistence, send admission, attachment validation/previews, cancellation, stale-operation fences and duplicate-submission protection. Nothing in that runtime ownership was rewritten.

The native primary action still selects Stop when `inputs.TurnActive` and uses `controller.Stop()`; otherwise it follows the existing Send path. Native recording state, stop-recording behavior and microphone permissions remain with the Phase 3 implementation. Native Enter/Shift+Enter and draft ownership retain the original implementation. Native IME behavior must be checked on Windows; browser IME coverage does not establish native proof.

Browser text editing, navigation, menus and explicit native handoffs are interactive. There is no connected browser model, attachment pipeline, microphone or generation stream, so the preview cannot honestly show a real current model, supported reasoning choices or active generation/Stop state. Native controls continue to use their actual existing services. No fake AI reply, task, provider or connection was introduced.

## Verification

- Focused portable suite: **851 passed, 0 failed, 0 skipped**. Selection covers native picker ownership, model/thinking semantics, composer/controller/view-model/session behavior, provider integration, session menus/Pin/history, voice and localization. See `evidence/phase4-composer/portable.log` and validation.json. These are portable fixtures/policies/source contracts, not live Windows UI or provider proof.
- Existing browser navigation/handoff checks pass at six sizes.
- New composer check passes at **1280, 1024, 800, 650, 500 and 390px**: rail order, hidden scheduler, exact five-control toolbar order, visible control bounds, dialog bounds, long-label truncation, draft retention, Shift+Enter newline, Enter error handoff, IME-composition guard and no fabricated reply/page errors.
- Inspected [wide Chat](evidence/phase4-composer/chat-preview.png) and narrow composer screenshots. Attachment stays left; model/reasoning/microphone/Send align right without clipping. Previous screenshot evidence is preserved.
- Changed C# syntax parsing and XML/resource well-formedness pass. Source inventory verifies no missing original paths or changed licenses, with a separate composer delta layer. These checks are not native compilation.
- Native mounted controls, live model/effort persistence, physical attachments/microphone, generation cancellation and native IME still need Windows validation. The existing Linux MakePri/XAML blocker remains; no unrelated full audit, Phase 5 or release packaging was run.

## Refresh the local preview

Stop the running preview with **Ctrl+C**, then **Y** if prompted. Run commands one at a time from your current preview checkout, stopping if Git reports an error:

```powershell
git fetch origin refs/heads/phase-4-ui-redesign:refs/remotes/origin/phase-4-ui-redesign
git switch phase-4-ui-redesign
git pull --ff-only origin phase-4-ui-redesign
.\scripts\start-ui-preview.cmd --port 4174
```

Open `http://127.0.0.1:4174/` and press **Ctrl+F5**. This uses a separate port from any old server on 4173. Keep the terminal running while testing. No new dependencies are required to launch the preview.

## Publication

Implementation and verification are committed on the existing branch. The exact published SHA is recorded in the delivery message and publication note. Prior commits and reports are preserved; no force push or main merge.
