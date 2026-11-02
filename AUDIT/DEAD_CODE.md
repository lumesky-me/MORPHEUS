# Dead-code audit

There is no defensible percentage of unnecessary code from this review. **No production function has been established as safely removable.** No suspected dead code was deleted.

| Category | Candidate or counterexample | Confidence / evidence |
| --- | --- | --- |
| Confirmed dead code | None established | Absence of a direct reference is insufficient for a plugin-based, XAML/reflection/config-driven system. |
| Likely obsolete compatibility surface | Windows `src/OpenClaw.Connection/LocalAi/LlamaServerClient.cs:232-238`, obsolete `ProbeRouterAsync` forwarding to `ProbeManagedModelAsync` | Medium: no production caller found; public API and `tests/OpenClaw.Connection.Tests/LocalAiPortLifecycleTests.cs:193` still reference it. Check external consumers before removal. |
| Potentially redundant | Identical Core translator bodies in WhatsApp and Memory Core browser i18n entrypoints | High confidence duplicate text; low confidence safe consolidation because independently packaged plugins may require local adapters. |
| Looks unused but required dynamically/externally | Core `src/plugins/compat/agent-harness-records.ts:45-59` retains the standalone Codex runner | Explicit published `@openclaw/codex@2026.10.4` consumer contract; do not delete based on local references. |
| Looks repetitive but required entrypoint | Core plugin `secret-contract-api.ts` re-exports (15 matching entrypoints inspected) | Separate public package boundaries, not proof of unused implementations. |
| Unused assets | Upstream historical documentation artwork versus runtime mascot assets | Runtime referenced artwork was replaced with neutral placeholders for branding. Documentation/license provenance artwork is retained. No global unused-asset classification was made. |

Core provides pinned Knip runners and dynamic entrypoint configuration. The scans run during this task are listed in `BUILD_REPORT.md`, with raw outputs in `evidence/`. Completed pinned export/unused-file scans reported zero entries within their configured models. Their reports are candidate inventories: distinguish exported SDKs, plugin manifests, configuration paths, generated source owners, CSS stems and tests before interpreting reachability.

Windows requires XAML resource lookup, reflection, tray/node registrations, package activation, COM and external tools to be included in reachability analysis. C# identifier searches alone cannot establish dead classes. A Windows-aware call/resource graph and supported-platform runtime coverage remain necessary.

Phase 2 should select one candidate at a time, identify its external/dynamic contract and removal path, then demonstrate original behavior still works. This Phase 1 made no removals.
