# Code quality and maintainability

## Organization

Core and Windows retain separate build systems, lock/configuration files, tests, original docs and licenses. `UPSTREAM.md` records source identities; original blob inventory and the downstream delta support future patch review. No agent, memory, automation or Settings architecture was rewritten. Root code supplies only distribution/profile initialization and verification.

The imported Core has 62,721 entries; Windows has 2,083. Windows `src` contains 1,018 files, including 873 C# and 58 XAML files with 253,168 combined C#/XAML lines at the upstream commit. These describe scale, not unnecessary-code quantities.

## Evidence-backed observations

| ID | Classification | Evidence | Recommendation for review |
| --- | --- | --- | --- |
| Q-01 | Large ownership surfaces | Windows `src/OpenClaw.Tray.WinUI/App.xaml.cs` 4,514 lines, `Pages/ConnectionPage.xaml.cs` 3,770, `Services/NodeService.cs` 2,638; Core `src/infra/state-migrations.doctor.ts` 2,917, `extensions/codex/src/app-server/native-subagent-monitor.ts` 2,469, `src/agents/auth-profiles/store.ts` 1,724 | Follow existing Windows `docs/ARCHITECTURE.md` owner ledger. Extract only cohesive responsibilities with behavior proof, not mechanical partial files. |
| Q-02 | Measured static debt | Core `config/max-lines-baseline.txt` contains 400 non-comment exceptions; `config/assertion-safety-baseline.txt` records 5,409 assertions across 2,381 production files | These ratchets acknowledge debt; neither count establishes a defect. Prioritize high-risk owners using actual failure evidence. |
| Q-03 | Potential duplication | Core `extensions/whatsapp/browser/i18n/index.ts` and `extensions/memory-core/browser/i18n/index.ts` contain the same 18-line translator | Independent packaging may justify duplication. Evaluate a shared public package only if it reduces maintenance without coupling plugins to private internals. |
| Q-04 | Distinct ownership/disposal contracts | Windows BrowserProxyCapability creates its own client, while NodeService replaces capability objects; see BUG_REPORT B-02 | Clarify disposal with in-flight settlement and regression tests before refactoring. |
| Q-05 | Monorepo tooling assumptions | Windows source guards often construct backslash-containing source paths; GitVersion expects a normal Git history; Core scripts expect their own package root | Keep component working directories explicit. Linux source checks are not Windows runtime proof. Imported snapshot builds need a documented version override when GitVersion cannot infer root history. |
| Q-06 | CI audit semantics | Core `scripts/ci-production-audit.mjs` warns and succeeds after scanner failure | Review release policy separately; green CI is not clean dependency evidence. |

No byte-identical Windows C#/XAML files above 500 bytes were identified by the review's hash inventory. This does not rule out semantic duplication or prove that every abstraction is necessary. Existing exact plugin re-export files often represent required independent package entrypoints.

Tool execution results, including first-party duplication/dead-code scanners where completed, are recorded in `BUILD_REPORT.md` and raw evidence. A failed static tool is not a clean-code verdict. No cleanup or audit recommendation was applied automatically.
