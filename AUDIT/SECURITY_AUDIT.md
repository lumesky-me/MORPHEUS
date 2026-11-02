# Security audit

## Scope and evidence

Source reviewed at the two immutable commits in `UPSTREAM.md`; paths below are relative to the component indicated. This is a bounded manual and tool-assisted review, not a comprehensive assurance over 64,804 upstream entries. Findings distinguish advisory matches, source-verifiable behavior, conditional risks, and runtime proof. No application authorization bypass was demonstrated. Windows GUI/MXC, real providers, adversarial plugins, and external services were not executed. Audit recommendations were not automatically implemented.

Evidence includes upstream scanners, dependency feeds, focused gateway tests, Windows portable tests and failing broad-suite reports; exact outcomes are in `BUILD_REPORT.md` and `evidence/`. The shared upstream autoreview installation was unavailable; manual review is not represented as that automated review.

## Confirmed affected dependency versions: high

Core's direct production scanner `NODE_USE_ENV_PROXY=1 node scripts/pre-commit/pnpm-audit-prod.mjs --audit-level=high` exited 1 with **nine high advisories across six packages**. These are feed/version matches, not proof of exploitation. A full `pnpm audit --json` additionally recorded nine moderate advisories in the broader workspace graph. Lockfiles were deliberately preserved.

| Package and affected resolved versions | Advisory | Evidence / route | Recommended Phase 2 action |
| --- | --- | --- | --- |
| `@azure/msal-node` 5.6.0, 6.0.1 | GHSA-xcx6-jx8p-x3h5 | `components/core/pnpm-lock.yaml`; Teams SDK / Azure identity | Review auth flow exposure, upgrade parent packages to an advisory-fixed graph, test Codex and provider auth independently. |
| `follow-redirects` 1.16.1 | GHSA-mrwp-f3q8-3g9p | Lockfile; Axios in Feishu/Teams | Test cross-origin redirect handling with synthetic headers and upgrade supported owners. |
| `joi` 18.2.9 | GHSA-4528-x5fx-h6hg | IMAP > mailauth; advisory is `email({multiple:true})` | Confirm call reachability before prioritizing exploit risk. Inspected mailauth callers use domain/base64, not this option. |
| `re2js` 2.8.6 | GHSA-gg6h-894w-4m9c | Crabline dependency graph | Bound untrusted pattern/input work; upgrade supported dependency. |
| `undici` 8.11.2 | GHSA-xjj6-f33q-929c, GHSA-4w7w-5xrc-9h26, GHSA-2m5v-pch6-74hx, GHSA-qrxm-fqhp-jwvm | IMAP > mailauth; 8.12.3 also exists and is outside cited vulnerable ranges | Upgrade graph; exercise encodings, redirects and TLS options in reachable paths. |
| `zod` 3.25.76, 4.3.6 | GHSA-mrhx-c7xc-m3w5 | Discord/Copilot SDK paths; Core also uses unaffected 4.6.7 | Bound external payloads and upgrade compatible SDK dependencies. |

Raw advisory titles/ranges/URLs and resolved versions: `evidence/core-audit/production-advisories-proxy.log`, `resolved-advisory-versions.txt`, and `evidence/core-baseline/dependency-audit.json`. The feed's Zod range spans major versions; confirm advisory applicability and supported fixes rather than forcing an incompatible major override. `extensions/imap/src/sender-gate.ts:179-184` disables BIMI; the inspected mailauth Undici import belongs to BIMI. These facts limit reachability claims, not the existence of the locked versions.

Windows NuGet reported no vulnerable packages in the restored **Connection test dependency graph**. This is not clearance of every Windows GUI/native dependency, licenses, maintenance status, or future advisories.

## Source-verified security and integration concerns

### S-01: Upstream companion updater can replace a renamed distribution

**High integration risk; downstream target corrected, artifact path unverified.** Upstream `windows/src/OpenClaw.Tray.WinUI/Services/UpdatumUpdateBackend.cs:12-16` targets `openclaw/openclaw-windows-node`; `UpdateBackendLoader.cs` supplies upstream release links. This would undermine an independent custom build. Downstream points the companion backend to `lumesky-me/MORPHEUS`. The root launcher refuses Core's package-replacing update route and new profiles disable automatic upstream replacement. These are distribution integration changes, not assertions of an upstream vulnerability. No MORPHEUS release artifacts, signing chain, upgrade or rollback test exists yet. Do not distribute until exact installer/asset names, signature verification, and update provenance are proven on Windows.

### S-02: Advisory failures are informational in upstream CI

**Medium release-process concern.** `core/scripts/ci-production-audit.mjs:1-20` emits a warning and returns zero when the underlying scanner fails. A green build is therefore not a clean dependency audit. The direct scanner above preserves failure and was used for this report. Recommend a separately reviewed MORPHEUS release policy after dependency remediation; the upstream wrapper was not changed.

### S-03: Core execution is not universally contained

**High-impact deployment risk, documented design rather than proven bypass.** `core/src/agents/sandbox/config.ts:222` defaults sandbox mode to `off`. `src/agents/code-mode-runtime.ts:75-77,105-111` permits automatic Code Mode using the Node executor. `src/agents/code-mode-node.worker.ts:218-255` uses Node VM contexts. `core/SECURITY.md:146-169` explicitly states VM is not OS containment and describes QuickJS. Windows node `system.run` containment is a different boundary. Preserve these semantics in Phase 1, accurately label them, and validate an explicit deployment policy before enabling untrusted automation. Prompt instructions alone are not a security boundary.

### S-04: Secrets at rest depend on private filesystem access

**Medium hardening/backups risk, no demonstrated auth bypass.** Windows `GatewayRegistry.cs:339-352` serializes record tokens (`GatewayRecord.cs:20,23`) into JSON. `OpenClaw.Shared/DeviceIdentity.cs:628-630,675-687` serializes private Ed25519 material as Base64. `McpAuthToken.cs:197-208` hardens ACLs best-effort. Core `src/agents/auth-profiles/sqlite-json.ts:31-40,133,176` stores auth material as JSON database cells; `src/state/openclaw-state-db-permissions.ts:10-44` handles permission hardening with warnings on unsupported platforms. Both trust the local account; malicious write access to trusted AppData is outside the documented Windows threat model. Secure profiles, backups and shared-volume ACLs. Assess existing DPAPI CurrentUser pattern in Windows `LocalAiApiCredentialStore.cs:32-37` with a migration/portability plan before changes.

## Conditional risks requiring proof

| ID / provisional impact | Affected code and evidence | What remains unknown / recommendation |
| --- | --- | --- |
| S-05 / medium-high conditional file disclosure | Windows `OpenClaw.Shared/Capabilities/BrowserProxyCapability.cs:270-315` reads local files named by response fields `path`, `imagePath`, `download.path`, without root containment | The endpoint has explicit authorization (`82-86`) and the browser capability is opt-in. Determine whether untrusted page data or a remote endpoint can control these fields. Reproduce only with synthetic files; do not claim arbitrary remote file access yet. |
| S-06 / medium conditional redirect leak | Same file `130-142`: default handler redirects; password fallback uses custom `x-openclaw-password` | Test whether an admitted browser endpoint can redirect credentials cross-origin. No actual leak was demonstrated. |
| S-07 / medium API misuse hazard | `OpenClaw.Shared/McpHttpServer.cs:174,213-216,502`: nullable auth token disables auth | Normal tray startup generates/passes a token (`NodeService.cs:805-813`). An unauthenticated production configuration was not established. Test intended construction boundary before altering test/embedding APIs. |
| S-08 / untested injection pathways | Core tool-result, skill/plugin and memory inputs; Windows browser responses | Existing trust separation was inspected, but no comprehensive malicious-content campaign or memory-poisoning reproduction ran. Plugins/skills execute code under their configured trust, not a universal isolation promise. Review per-channel/plugin scopes and explicit approvals. |

## Controls inspected and preserved

- Core `src/gateway/auth.ts:287-323,418-460,525-539`: missing/redacted-token rejection, constant-time comparison, origin/proxy provenance and limiter checks. `origin-check.ts:117-165`: strict origin parsing, explicit allowlist, opt-in dangerous fallback.
- Core `src/infra/net/ssrf.ts:333-363` and `fetch-guard.ts:455-495`: policy before DNS, classification of returned addresses, redirect-hop checks and dispatcher cleanup.
- Core `src/infra/exec-approvals-authorization.ts:17-69`: execution tied to current approval policy rather than a stale authorization snapshot.
- Windows `McpHttpServer.cs:249,455-566,752-763`: loopback/Host/Origin checks, bearer auth, bounded bodies/deadlines and fixed-time comparison.
- Windows `ExecApprovalV2InputValidator.cs`, `ExecApprovalEvaluator.cs`, `ExecApprovalsCoordinator.cs:332-341,381-404`, `MxcCommandRunner.cs:151-185`: argv validation, explicit denial, current policy and prelaunch revalidation. Unknown/failed MXC probes do not silently downgrade. Positively identified unsupported Windows versions have documented approved uncontained execution, which remains a deployment limitation.
- Windows `HttpUrlValidator.cs` and `Windows/CanvasWindow.xaml.cs:861-878`: scheme/userinfo checks and exact origin/port checks.

The source review found no hardcoded production key. Upstream private-key marker scan passed over 62,719 regular tracked Core files within its exclusions. This is not an entropy scan, history scan or complete proof of no secrets. No real user credentials, live sessions or installed applications were used for validation.
