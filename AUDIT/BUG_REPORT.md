# Bugs and reliability findings

Counts below do not translate Linux-incompatible tests into application defects. Original versus downstream command results and source identities are in `BUILD_REPORT.md`.

## Confirmed from source

### B-01: Caller cancellation is dropped for browser proxy actions

**Medium reliability impact.** Windows `src/OpenClaw.Shared/Capabilities/BrowserProxyCapability.cs:60-77` overrides the single-argument execution method and owns a separate deadline up to 120 seconds. `NodeCapabilities.cs:119-120` defaults the cancellation-aware overload to that single-argument method. `McpToolBridge.cs:542` passes the execution token, so it is discarded on this capability path. A canceled caller cannot cancel that in-flight browser operation through this API. Runtime timing and side-effect settlement were not tested on Windows.

Phase 2: implement the existing cancellation overload and link caller/deadline tokens. Test a real delayed loopback request and cancellation, including side-effect uncertainty; do not silently retry a canceled mutation.

### B-02: Browser HTTP client has no explicit lifetime owner

**Medium reliability/resource concern.** `BrowserProxyCapability.cs:52-54` creates an HttpClient and handler. The capability has no disposal implementation. `src/OpenClaw.Tray.WinUI/Services/NodeService.cs:446-456` recreates it on registration, clears capability references on disconnect, and does not dispose it in teardown (`2535-2575`). The missing explicit cleanup is source-verified; persistent socket leakage or user-visible failure has not been measured. Phase 2 should define ownership and settle operations before disposal.

## Reproduced baseline test failures

- Windows broad Shared, Tray and Connection suites fail on Linux; many failures directly invoke Windows APIs, use drive/backslash paths, require PowerShell/cmd/GDI+/MXC or Windows signatures. Other assertions remain unclassified. The same command exiting nonzero does not prove every failure has the same cause.
- Isolated Windows Shared fixtures reproduced unmanaged WebSocket close/EOF timeouts and an MCP request with `Host: localhost` without a port returning 404. See baseline failure classifications and filtered evidence. These are failing Linux fixtures, not established production authorization bugs.
- Core `src/infra/net/fetch-guard.ssrf.test.ts` initially failed four cases in the baseline host. Its proxy-clearing helper omits inherited lowercase `no_proxy` while production deliberately lets lowercase override uppercase. Cases that change only `NO_PROXY` can then test a different route. A child-scoped fixture-environment correction is reported separately in build evidence; production SSRF behavior was not weakened.

## Potential defects requiring investigation

- Browser file-response export and password redirect behavior (SECURITY_AUDIT S-05/S-06) require an attacker-controlled response path before a vulnerability claim.
- `BrowserProxyCapability.cs:285-296` checks FileInfo.Length before ReadAllBytes. A growing file can exceed the intended 10 MiB check; no controlled reproduction or exploit chain was run.
- MORPHEUS native gateway distribution still depends on external upstream packaging/provisioning paths. Those routes do not prove the imported Core is running. Treat own-package/signing and native integration as release blockers rather than fabricate a replacement runtime.

No broken chat/navigation, memory corruption, model-selection bug, authentication bypass, infinite loop, or UI deadlock was established by this review. Those paths have unverified boundaries; this is not evidence of their absence. No audit bug fixes were automatically implemented.

## Downstream closeout gaps

The first branding helper had a declaration type-narrowing regression; corrected with a separate string binding. A stale default deep-link scheme was corrected in source. Final full Windows comparison still has26Tray failure names absent from baseline (including renamed/new cases), with exact messages in `evidence/windows-regression/tray-new-final.json`. Release/Store/installer/workflow source contracts and some startup/timing assertions remain unresolved. These are **downstream regression/integration gaps**, not all Linux limitations; they block a complete compatibility claim. Isolated scheme/handoff reruns supplement the full red record.
