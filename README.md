# MORPHEUS

Independent source integration of OpenClaw Core and its Windows companion. **MORPHY** is the default agent in a fresh MORPHEUS source profile. Existing agent identities are preserved. This project is not endorsed by OpenClaw.

Phase 1 is a development foundation and audit, not a Windows release. The final rebranded Core build and Core typecheck pass; Windows regressions and native release validation remain open. See [build evidence and limitations](AUDIT/BUILD_REPORT.md), [security findings](AUDIT/SECURITY_AUDIT.md), and [source provenance](UPSTREAM.md).

```text
components/core/       Original Core architecture, providers, tools, plugins, UI and tests
components/windows/    Original WinUI desktop, separate Settings, node and tests
scripts/               Distribution launcher and import verification
tests/                 Distribution regression tests
AUDIT/                 Seven reports, provenance and validation evidence
UPSTREAM.md            Exact upstream source versions and maintenance boundaries
```

## Core development

Use the existing checkout. Each cloud task is already isolated; do not create a Git worktree unless explicitly requested.

Use Node 26.12.1 and Core's integrity-pinned pnpm 12.15.0. The prepared cloud toolchain is under `/workspace/morpheus-tools`; future tasks should read the saved environment startup instructions. Upstream's exact dependency lockfile remains unchanged.

```sh
cd components/core
pnpm install --frozen-lockfile
OPENCLAW_TSDOWN_MAX_OLD_SPACE_MB=8192 NODE_OPTIONS=--max-old-space-size=8192 NODE_USE_ENV_PROXY=1 pnpm build
NODE_OPTIONS=--max-old-space-size=8192 NODE_USE_ENV_PROXY=1 pnpm ui:build
cd ../..
node scripts/morpheus.mjs init
node scripts/morpheus.mjs config validate
node scripts/morpheus.mjs gateway run
```

`init` exclusively creates a new `~/.morpheus/morpheus.json` with agent MORPHY, loopback binding, and a cryptographically random gateway token. It never replaces an existing config or identity. POSIX directory/file creation modes are 0700/0600; Windows deployments must verify appropriate per-user ACLs. The token is not printed. Authentication/provider onboarding remains the upstream implementation and requires the user's deliberate configuration.

For disposable validation, set `MORPHEUS_STATE_DIR` to a new temporary directory and optionally `MORPHEUS_GATEWAY_PORT` to an unused port. The launcher maps Core's supported environment selectors to MORPHEUS-owned state, home, config and credential paths, and uses port 18891 by default. Inherited OpenClaw path overrides are not reused. Explicitly selecting someone else's state directory is not isolation. The launcher does not make Core an OS sandbox.

This launcher runs a foreground source build. Native service installation from this custom, noncanonical state layout is not validated and may be refused by upstream ownership checks. Do not run raw `components/core/openclaw.mjs` for ordinary use: it retains upstream profile defaults. The raw component remains available for upstream development/testing.

Automatic upstream package replacement is disabled in the fresh source profile. The MORPHEUS launcher refuses the `update` command to prevent replacing the custom distribution with upstream packages. Updates require reviewed source integration until MORPHEUS owns tested release artifacts. Windows companion update metadata targets this repository; no release or signing identity was provisioned.

```sh
npm test
python3 scripts/verify-import.py
cd components/core
pnpm tsgo:core
```

Full Core and Windows test commands, failures, skipped cases, and exact evidence are in `AUDIT/BUILD_REPORT.md`. Upstream docs and contributor instructions remain beside each component. Their original installation URLs describe upstream products, not a MORPHEUS installer.

## Windows development and retained behavior

A Windows 10/11 host with .NET SDK 10.0.400, Windows App SDK build prerequisites, Visual Studio C++ Redistributable Update component, and PowerShell is required. Follow `components/windows/README.md`, `DEVELOPMENT.md`, and `scripts/setup-dev.ps1` in that component. On Windows, start with `scripts/setup-dev.ps1 -CheckOnly`, then `build.ps1`, shared tests, and tray tests from `components/windows`. Before the first Git commit in this imported snapshot, portable dotnet builds/tests require `-p:DisableGitVersionTask=true -p:Version=0.1.0` to avoid GitVersion attempting to infer nonexistent history.

The main chat UI, session handling, model selection, voice stack, agent system, and separate Settings window retain their upstream implementations. Windows owns independent app data, startup/mutex/deep-link and installer/package identities; protocol and CLR names needed for compatibility remain internal. No suspected dead code was deleted and no audit recommendations were automatically applied.

To exercise the imported Core, connect the Windows client to the explicitly running MORPHEUS gateway, using only the disposable profile's credentials. The built-in native/WSL provisioning paths are retained upstream integrations and are not yet a validated MORPHEUS distribution. Do not use the dev launcher against an installed Store Gateway or real user settings for tests.

Windows GUI startup, chat streaming, Settings rendering, native sandbox enforcement, installer upgrades/uninstall, provider login, and real model calls have not been proven on this Linux host. Passing source and portable tests does not establish those behaviors.

## Audit and next phase

Read `AUDIT/RECOMMENDATIONS.md` before release work. Known vulnerable locked dependencies and unresolved integration/native-test gaps prevent a security or release-readiness claim. The reports distinguish source-verified issues, suspected risks, advisory matches, and untested behavior. Phase 2 changes require separate review.

Licenses and attributions are retained under the component trees and described in `UPSTREAM.md`.
