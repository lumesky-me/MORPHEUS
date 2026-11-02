# Phase 3 implementation results

## Outcome and scope

Implemented a scoped voice extension on branch `phase-3-voice`, preserving Phase1/Phase2 history and personality. Core/Gateway/provider/auth/memory/permissions protocols were not rewritten. Existing Settings and text chat remain the owners of their current behavior. No Phase4 homepage, animation, pet, wake word, screen automation, new model provider, installer or release was implemented.

**Portable implementation checks pass; native Windows acceptance remains blocked.** No live model is connected, so no real AI conversation, natural-voice quality or physical microphone/speaker result is claimed. This is not release-ready.

## Implemented behavior

| Area | Implemented and reused | Validation / boundary |
| --- | --- | --- |
| Endpoint detection | Existing managed energy detector and NAudio capture; shared default0.9s, finite supported range0.1–60s; native ListenOnce uses existing saved setting instead of hardcoded2s; slider step0.1; ceiling of32ms chunks | Default0.9s is29chunks≈928ms before decode overhead. Saved1.5s survives reload; intentional30s PTT remains. Synthetic short/long speech and160ms ordinary pause tested; no real acoustic optimization claim. |
| Decode progress | Existing Whisper.net ProcessAsync segments now reach an optional callback before the complete list returns; AudioPipeline forwards segment previews; native listen accumulates readable text | **Post-endpoint buffered decoding progress**, not true while-speaking interim recognition. Preview cannot create a command; exactly one final utterance comes from the returned list. Final-only engines retain default interface fallback. |
| Voice→chat | Opt-in capture mode uses the existing ChatComposerController.SendAsync, runtime port, provider and idempotent Gateway send path | Same selected existing canonical conversation, normal transcript/message persistence. No second history, database, model request or command mapper. Typed/dictation default preserved. |
| Duplicate safety | Capture single-flight plus operation/generation, session, connection, cancellation, draft revision and attachment checks; normal send gate reused | Duplicate activation, stale/canceled/empty finals, session changes and edits tested. No automatic retry of uncertain delivery; retained draft prevents another auto-submit. A new explicit manual retry is still a user decision requiring checking history. |
| Response/status projection | Real non-streaming assistant entries from existing timeline inputs project to transient VoiceInteractionSnapshot; existing TurnActive feeds working state | No reasoning/tool payload passed as the assistant response. Fast final before send acknowledgement survives. ClearVoicePresentation clears only viewport state, never sends, deletes history or cancels work. |
| Spoken responses | Existing final-assistant notification route, configured TTS providers and Markdown sanitizer retained; existing secret redactor applied before synthesis | Auto speech scoped to selected canonical conversation on UI dispatch; session/navigation/reconnect changes stop stale speech. Actual notification/MediaPlayer integration needs Windows proof. |
| Stop speech | Speech-only generation cancellation now reaches provider synthesis, queued playback and active playback; interrupt cancels older speech before synthesis | Existing speaker mute/StopChatSpeaking remains the manual control. Cancellation cannot cancel the parent agent/task token. Already-canceled incoming requests do not silence current speech. No AEC/full-duplex claim. |
| State/future Home | Existing capture/pipeline events expose recording/transcribing; transient controller snapshot exposes idle/listening/processing/working/error plus transcript/actual response; service SpeakingChanged reports playback | Error metadata is typed, not canned assistant dialogue. Phase4 can observe these existing owners. No final visual layout or automatic clear timer added. |
| Privacy | Recognition logs now record character count rather than raw transcription; speech uses existing credential-pattern redaction | No raw recordings/provider tokens collected in tests. Redaction is pattern-based, not a guarantee all private information can be identified. |

### Safe limitations retained

- Autosend is **opt-in** through `MORPHEUS_VOICE_AUTOSEND=1`, using the existing microphone control. Internal StartVoiceConversation is the same reusable path for a future Home adapter. No separate assistant application/control framework exists.
- An unmaterialized first-message compose screen deliberately stays dictation-to-draft: the normal explicit Send establishes the canonical conversation. Automatic voice submission then works within that existing conversation. This avoids guessing a new session identity or discarding replies during materialization.
- Existing typed draft or pending attachments block autosend, so voice cannot silently transmit them. Clear/finish the draft or use ordinary dictation with autosend disabled.
- Explicit stop/cancel in autosend mode does not submit a cancellation-flushed transcript. Existing dictation retains its prior manual-stop behavior.
- True while-speaking STT is not provided by this buffered provider contract. No fake word animation, sliding-window recognizer or second engine was added.
- Current TTS providers synthesize complete audio before playback. No token-stream TTS, automatic speech-progress queue or guaranteed first-audio latency was invented. Actual task/tool progress remains in the existing conversation infrastructure.
- Use the existing speaker stop/mute control before starting a new utterance during playback. Acoustic echo cancellation, hands-free barge-in and simultaneous listen/speak acceptance remain deferred. No always-on microphone/wake word was added.
- Speech stop and task cancellation are separate. Stopping audio never announces task completion or promises rollback of already-performed actions.

## Existing components and licensing decisions

| Component | Decision | License/provenance evidence |
| --- | --- | --- |
| sandrohanea/whisper.net1.9.0 | Reused existing local decoder; extended callback exposure only | Installed pinned package LICENSE is MIT, Sandro Hanea; repository license reference retained under evidence. Whisper.net.Runtime1.9.1 remains unchanged. |
| NAudio.Wasapi2.3.0 / NAudio.Core2.3.0 | Existing production capture retained; same version added to portable test project to source-link real capture/service classes with synthetic hardware | Installed NuGet metadata declares MIT. This is a test dependency matching production, not a new runtime engine. |
| k2-fsa/sherpa-onnx1.13.0 | Evaluated existing declared dependency; no streaming recognizer/KWS engine added | Installed NuGet metadata and official license declare Apache-2.0. Existing TTS usage remains; no model downloaded/integrated for new functionality. |
| snakers4/silero-vad | Evaluated existing implementation; active energy detector retained | Official source license is MIT. Existing ONNX catalog remains unused by this active capture path; no VAD rewrite or extra model load. |
| Larroy.Kokoro0.1.0 and existing Piper/Windows/ElevenLabs/MiniMax paths | Preserved existing provider selection/readiness/fallback logic | Kokoro NuGet metadata declares MIT; this task did not clear all historical provider/model/voice redistribution terms. Existing attributions remain. |

No new GPL/copyleft dependency, copied external framework, new speech model/voice, or speech-model download operation was introduced. Code licenses do not establish weight/voice redistribution rights. Existing Whisper/VAD/TTS download catalogs and pinned hashes were preserved. The upstream Hugging Face model card request was unavailable through this environment; **exact model/voice licensing and release redistribution acceptance remain unverified**. Do not package unreviewed weights or claim the whole historical dependency graph is license-cleared. Existing runtime downloads still require the established model manager and checksum/TLS verification.

## Testing and debugging

Commands run from repository root with SDK10.0.400, DOTNET_ROOT and PATH pointing at `/workspace/morpheus-tools/dotnet`, DOTNET_CLI_HOME and NUGET_PACKAGES in `/workspace/morpheus-tools`, OPENCLAW_REPO_ROOT pointing at components/windows and MORPHEUS_TRAY_DATA_DIR at a disposable test path. Builds/tests use `-p:DisableGitVersionTask=true -p:Version=0.3.0` for deterministic development versioning, not security bypasses.

- Final portable Tray selection: **763passed,0failed,0skipped** (`evidence/phase3/final-accepted.log`). Includes real capture/pipeline/service owners via source linking and existing synthetic audio/transcriber fixtures; composer, input contract, shared response selection, navigation, send queues/reconnect and chat data provider tests.
- Shared speech/language/secret-redaction selection: **148passed,0failed,0skipped** (`shared-final.log`). These counts are not added to earlier overlapping exploratory runs.
- Existing fake audio timeout/device cleanup fixtures were reused, not replaced with trivial checks. Tests cover missing callbacks, capture cleanup, late callbacks, configured endpoint boundaries, pause tolerance, cancellation flush/replacement, and decode preview before a held final.
- Existing final-only recognition implementations remain compatible through the interface default. A held fake decoder verifies preview arrives before completion while final count stays zero, then one final arrives. This is a deterministic synthetic recognition test, not measured Whisper recognition quality.
- Scoped independent reviews found and corrected fast-final-before-ack loss, canceled incoming speech interrupting valid playback, session-switch stale synthesis, and first-session materialization ambiguity. Regression fixtures cover the portable policies; UI navigation/MediaPlayer scheduling still needs Windows.
- Initial endpoint test failures were fixture alignment:6400speech samples left a half32ms chunk, so one expected silence chunk still contained speech. The fixture was aligned to whole chunks; production RMS behavior was preserved. Diagnostics remain in earlier logs.
- Native documented build initially failed NETSDK1100 on Linux. Retrying with supported `EnableWindowsTargeting=true` restored packages, then failed on Windows `MakePri.exe` with **Exec format error** and unavailable/crashed Windows XAML compiler output (`windows-targeting-build.log`). No native check was bypassed to declare success.
- Installed Roslyn parser checked **23changed C# files with0syntax errors** (`syntax.log`). This is not Windows type checking, XAML compilation or runtime proof.
- No Core rebuild was needed because Core source/runtime/provider protocols did not change. No physical microphone, speaker, Windows UI, nativeARM64, real-model or paid API call was performed. Full historical Windows suite/native acceptance remains red/unverified as recorded in Phase1; scoped passing tests do not erase it.

To reproduce the Tray selection, run `dotnet test components/windows/tests/OpenClaw.Tray.Tests/OpenClaw.Tray.Tests.csproj` with the version properties above and filter:

```text
FullyQualifiedName~VoiceServiceProgressRoutingTests|FullyQualifiedName~AudioPipelineFirstAudioTimeoutTests|FullyQualifiedName~ChatComposerControllerTests|FullyQualifiedName~ChatNotificationSpeechTextTests|FullyQualifiedName~ChatComposerSessionTests|FullyQualifiedName~SpeechInputContractTests|FullyQualifiedName~ChatQueueReconnectTests|FullyQualifiedName~WorkspaceNavigationTests|FullyQualifiedName~OpenClawChatDataProviderTests
```

Shared filter: `FullyQualifiedName~VoicePolicyTests|FullyQualifiedName~SpeechToTextLanguageNormalizationTests|FullyQualifiedName~ExecApprovalSecretRedactorTests` on the Shared test project. TRX execution counters are summarized in validation.json; raw parameterized TRX data was not added to the repository.

## Developer exercise on a disposable Windows host

Build with the existing Windows prerequisites and repository build workflow first; native build remains a required acceptance gate. Launch only the task-built app with a fresh `MORPHEUS_TRAY_DATA_DIR`; do not use personal OpenClaw settings or default launchers that register/install an unrelated Gateway. Connect through existing Connection settings to a task-owned MORPHEUS Gateway. A usable model must be explicitly configured before expecting AI replies; paid usage is not authorized by this report.

For the opt-in voice-submit exercise, set `$env:MORPHEUS_VOICE_AUTOSEND = '1'` before launching. Open an existing canonical MORPHY conversation, ensure no unfinished typed draft/attachments, enable speech input through existing Permissions and provision the chosen model through existing Voice Settings. Use the existing mic button/hotkey. A completed utterance enters the normal chat send flow; canceled capture does not. Verify one user message and real reply in the same conversation; navigate away/back and reconnect without replaying an uncertain command.

Enable existing Read responses aloud and a ready existing TTS provider for speech. Test the existing speaker mute/stop control during synthesis and playback; confirm the agent/tool task is not aborted. Manually stop speech before recording another utterance. Remove/unset MORPHEUS_VOICE_AUTOSEND to restore ordinary dictation-to-draft. Configured silence remains adjustable, including prior1.5/2s choices.

## Phase4 homepage integration and remaining work

Home still hosts the existing ChatPage; it was not redesigned. The future logo adapter can invoke the same capture/send owner and observe the same provider session, transient snapshot, pipeline state and actual playback events. ClearVoicePresentation is visual-only. Main chat remains the complete history; no homepage history storage exists. Completed text delay/animation and the minimal homepage renderer remain Phase4 work. Actual model/tool events, never scripted replies, must drive status and speech. Existing separate Settings and sensitive-action confirmations remain intact.

Remaining acceptance: full Windows build, microphone privacy/device tests, real ASR/model/voice quality and latency, MediaPlayer cancellation timing, selected-session audio after navigation/reconnect, full native regression/ARM64 and signed-model redistribution review. True interim STT, streamed TTS, automatic progress speech, AEC/barge-in and safe first-message autosend are explicit future gaps rather than fabricated features. No Phase1 remediation or Phase2 personality rewrite was performed.

## Source preservation, commits and publication

- Preserved foundation55266b410071a61f94de7bb5818d87be6d5d91e5 and personality5e4b8657a9d721b0eca5fa7c19b73e378cac5da5.
- Planning/testing checkpoint: c3ec22df1 (full SHA available in Git).
- Implemented code checkpoint: **fd5a1da9f773fc11b8d6ed1422de060f95a9280b**.
- Author/committer: lumesky-me,343106658+lumesky-me@users.noreply.github.com.
- Branch: phase-3-voice. **Local commits only; no Phase3 push or merge attempted.** Prior successful repository connection does not constitute personal-account verification; no new account or credentials were substituted.
- Historical audit reports, Phase2 personality and Phase1 rebrand-manifest remain unchanged. Source verification now composes that historical manifest with a new Phase3 source-delta layer; it refuses to overwrite the historical base when that layer exists. All imported original source paths/licenses remain present.

### Files changed in the implemented checkpoint

- `AUDIT/evidence/phase3/source-delta.json`
- `components/windows/src/OpenClaw.Shared/Audio/AudioModels.cs`
- `components/windows/src/OpenClaw.Shared/Audio/ISpeechToTextService.cs`
- `components/windows/src/OpenClaw.Shared/Audio/SpeechEndpointPolicy.cs`
- `components/windows/src/OpenClaw.Shared/Audio/SpeechPlaybackLifetime.cs`
- `components/windows/src/OpenClaw.Shared/Audio/SpeechToTextService.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/App.xaml.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Chat/ChatComposerController.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Chat/ChatComposerInputs.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Chat/ChatComposerSession.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Chat/OpenClawChatCoordinator.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Chat/OpenClawReactorChatRoot.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Pages/VoiceSettingsPage.xaml`
- `components/windows/src/OpenClaw.Tray.WinUI/Services/AudioPipeline.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Services/ChatNotificationSpeechText.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Services/SettingsManager.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Services/TextToSpeech/TextToSpeechService.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Services/VoiceService.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Services/WindowManager.cs`
- `components/windows/src/OpenClaw.Tray.WinUI/Windows/WorkspaceWindow.xaml.cs`
- `components/windows/src/OpenClawTray.FunctionalUI/.mono/registry/CurrentUser/software/microsoft/sqmclient/values.xml`
- `components/windows/src/OpenClawTray.FunctionalUI/.mono/registry/CurrentUser/software/microsoft/visualstudio/telemetry/default/v2/values.xml`
- `components/windows/src/OpenClawTray.FunctionalUI/.mono/registry/CurrentUser/software/microsoft/visualstudio/telemetry/persistentpropertybag/values.xml`
- `components/windows/src/OpenClawTray.FunctionalUI/.mono/registry/CurrentUser/software/microsoft/visualstudio/telemetry/values.xml`
- `components/windows/tests/OpenClaw.Shared.Tests/VoicePolicyTests.cs`
- `components/windows/tests/OpenClaw.Tray.Tests/ChatComposerControllerTests.cs`
- `components/windows/tests/OpenClaw.Tray.Tests/OpenClaw.Tray.Tests.csproj`
- `components/windows/tests/OpenClaw.Tray.Tests/Services/ChatNotificationSpeechTextTests.cs`
- `components/windows/tests/OpenClaw.Tray.Tests/SpeechInputContractTests.cs`
- `components/windows/tests/OpenClaw.Tray.UITests/VoiceServiceProgressRoutingTests.cs`
- `scripts/verify-import.py`
