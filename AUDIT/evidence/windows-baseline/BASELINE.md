# Windows upstream baseline

Source: https://github.com/openclaw/openclaw-windows-node at `a4dd026cc5f85a444a0fcd05eef5b86282dbda8c`; untouched tracked source (`git status --short` empty after runs).

Host: Linux x86_64; .NET SDK 10.0.400, runtime 10.0.11. Node v24.19.0. No Windows desktop, Windows SDK build host, Visual Studio VC++ installation, WSL, Inno compiler, or `pwsh` available.

Every .NET command ran in `/tmp/morpheus-upstream-windows`, with:

```sh
export PATH=/workspace/morpheus-tools/dotnet:$PATH
export DOTNET_ROOT=/workspace/morpheus-tools/dotnet
export DOTNET_CLI_HOME=/workspace/morpheus-tools/dotnet-home
export NUGET_PACKAGES=/workspace/morpheus-tools/nuget
export DOTNET_CLI_TELEMETRY_OPTOUT=1
export OPENCLAW_REPO_ROOT=/tmp/morpheus-upstream-windows
export OPENCLAW_TRAY_DATA_DIR=/workspace/morpheus-evidence/windows-baseline/profile
```

Commands used the configured HTTP proxy and TLS trust. Shell network/test subprocesses required execution outside the sandbox; sandbox-only requests could not reach the proxy. No GitVersion disabling or source/dependency overrides were necessary. Initial SDK invocation by absolute path failed because GitVersion invokes bare `dotnet`; adding the installed SDK to PATH corrected it.

| Command | Passed | Failed | Skipped | Evidence |
|---|---:|---:|---:|---|
| `dotnet test tests/OpenClaw.Shared.Tests/OpenClaw.Shared.Tests.csproj --no-restore` | 4474 | 335 | 25 | shared-path.log, shared-baseline.trx |
| `dotnet test tests/OpenClaw.Tray.Tests/OpenClaw.Tray.Tests.csproj` | 4644 | 152 | 3 | tray.log, tray-baseline.trx |
| `dotnet test tests/OpenClaw.Connection.Tests/OpenClaw.Connection.Tests.csproj` | 1421 | 279 | 1 | connection.log, connection-baseline.trx |
| Shared portable selection below | 259 | 0 | 0 | shared-portable.log, shared-portable-baseline.trx |
| Tray portable selection below | 171 | 0 | 0 | tray-portable.log, tray-portable-baseline.trx |
| Isolated Shared network fixture repro below | 3 | 4 | 0 | shared-network-repro.log, shared-network-repro.trx |
| `node --test --test-reporter=tap .github/scripts/repository-triage.test.cjs .github/extensions/openclaw-triage-dashboard/triage-state.test.mjs .github/scripts/welcome-content-notification.test.cjs` | 80 | 0 | 0 | node-tests-escalated.log |

Each .NET command also supplied `--logger 'trx;LogFileName=<report>' --results-directory /workspace/morpheus-evidence/windows-baseline`. The first Shared run restored dependencies before its PATH failure. Portable/repro selections used `--no-build --no-restore` after full suites built successfully.

- Shared portable filter: `FullyQualifiedName~ExecApprovalSecretRedactor|FullyQualifiedName~GatewayProtocolModelsTests|FullyQualifiedName~GatewayUrlHelperTests|FullyQualifiedName~LocalGatewayUrlClassifierTests|FullyQualifiedName~RemoteGatewayClassifierTests`.
- Tray portable filter: `FullyQualifiedName~ChatThinkingProfileTests|FullyQualifiedName~ChatTimelineReducerTests|FullyQualifiedName~AgentCreationServiceTests|FullyQualifiedName~SessionTitleFormatterTests|FullyQualifiedName~SessionVisibilityFilterTests`.
- Network repro filter: `FullyQualifiedName~McpHttpServerTests.Post_WithLocalhostHost_Accepted|FullyQualifiedName~WebSocketClientBaseTests.LoopbackFixture_ClientInitiatedClose_SendsCloseFrameAndTransportEof`.

`dotnet build src/OpenClaw.Chat/OpenClaw.Chat.csproj` passed with 0 warnings and 0 errors (`chat-build.log`). Shared/Connection/Tray portable projects compiled. `dotnet build src/OpenClaw.Tray.WinUI/OpenClaw.Tray.WinUI.csproj -r win-x64` failed with NETSDK1100 on three Windows-targeting projects (`winui-build.log`). `./build.ps1` cannot run here without PowerShell, and the required native WinUI build/runtime proof remains blocked by Linux. Do not infer GUI functionality from the portable builds.

`dotnet list tests/OpenClaw.Connection.Tests/OpenClaw.Connection.Tests.csproj package --vulnerable --include-transitive` succeeded and reported no vulnerable packages from the current NuGet source (`nuget-audit.log`). This covers the restored Connection test dependency graph, not the full WinUI graph or a guarantee of security.

## Failure classification

The broad suites are not green. Many failures have direct host explanations:

- `ProcessImagePathTests.cs:24` invokes `kernel32.dll`; Linux raises DllNotFoundException.
- `ExecApprovalV2PipelineIntegrationTests.cs:87,191,211,226` and related resolution tests expect Windows `where`/`cmd` and fully qualified Windows drive paths; the Linux resolver cannot supply them.
- MXC tests require Windows paths, metadata, native admission and Windows test-host `.exe`; not verified here.
- `MigrationRecordTests.cs:652` invokes `WindowsIdentity.GetCurrent`; 204 Connection failures report Windows Principal not supported.
- `LocalAiManifestMigrationTests` require Windows handle-relative filesystem operations.
- Tray script tests require Windows PowerShell or `pwsh`; GDI+ icon tests require Windows APIs.
- `WindowManagerTests.cs:94` and several source-contract tests use Windows backslash paths, leading to FileNotFound on Linux even though source exists.

Other assertion failures remain unclassified. The `*-failures.json` files preserve test names and first error lines. Do not automatically label every failure an application defect or a host-only issue.

Two portable-looking network fixtures were reproduced separately, without concurrent full suites:

- `WebSocketClientBaseTests.cs:140`: three `useManagedWebSocket:false` fixture close/EOF cases time out after 3 seconds. Their managed counterparts pass. This is fixture/runtime evidence, not proof a production gateway transport is defective.
- `McpHttpServerTests.cs:244`: a request with `Host: localhost` lacking the ephemeral port returns HTTP 404 instead of expected 200. Linux HttpListener prefix routing is a possible cause; Windows behavior remains untested.

No test assertions were weakened, no failures were masked by skip filters, and no real credentials, personal configuration, sessions, or installed applications were used. The portable selections supplement rather than replace the failed full-suite record.
