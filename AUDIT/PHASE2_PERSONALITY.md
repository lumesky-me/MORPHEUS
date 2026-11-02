# Phase 2: MORPHY personality

## Architecture and implementation

Phase1 foundation:55266b410071a61f94de7bb5818d87be6d5d91e5. No Core/Windows runtime source, providers, execution approvals, memory schema, UI or dependency files changed.

Runtime path traced: launcher initialize selects agents.entries.main.workspace and agents.defaults.systemAgent; Core workspace.ts publishes missing bootstrap templates exclusively and recognizes configured IDENTITY/USER content rather than forcing first-run interviews; loadWorkspaceBootstrapFiles reads actual workspace files. bootstrap-files.ts resolveBootstrapContextForRun applies session/run filtering, hooks and existing budgets. system-prompt.ts buildAgentSystemPrompt includes that context once as Project Context. Documentation templates alone do not inject instructions. Existing base safety/tool guidance and provider restrictions retain precedence. USER/personal bootstrap, memory eligibility, compaction and session caches remain owned by Core; no new memory store or prompt engine exists.

Changes:
- defaults/morphy/SOUL.md: original, editable personality and behavioral guidance.
- defaults/morphy/IDENTITY.md: original name/role/style, no personal preferences.
- scripts/morpheus.mjs: seed these standard workspace files only after exclusive fresh-config creation, preserving preexisting files. First normal launcher invocation now initializes an absent profile automatically. Repeated initialization returns without rewriting existing profiles or personalities. Other agents' workspaces and global Core templates are untouched.
- tests/personality.test.mjs and tests/personality-runtime.mts: deterministic initialization and real bootstrap/model-prompt composition checks.
- README.md: default personality and verification instructions.

## Behavior

MORPHY is composed, direct, adaptive, concise by default and occasionally dry-witted without theatrical honorifics or insensitive jokes. Action requests call for authorized available tools, appropriate progress and result verification. Tool failure/unavailability must be explicit; no fabricated actions or memories. Existing approvals and isolation remain mandatory. Application configuration and editable personality can be explained when accessible, with credentials and private information protected. Provider restrictions are distinguished from app behavior, not overridden.

Stable preferences use existing supported memory mechanisms; corrections take precedence over stale information. Each profile owns separate personal files; custom agents retain their own personalities. Existing Phase1 profiles are intentionally not silently migrated, even if they contain only generic defaults: users may have customized them. They can deliberately adopt the supplied SOUL file. Automatic defaults apply to fresh launcher-created profiles; Windows-only provisioning paths remain the Phase1 packaging limitation.

## External references and licensing

Read the README and LICENSE from only the three requested repositories through official raw GitHub endpoints. isair/jarvis describes local personal memory, recent conversation context and zero-edit setup; its custom noncommercial license precludes copying into this distribution. No protected prompt or code was copied. NousResearch/hermes-agent (MIT) and open-jarvis/OpenJarvis (Apache2.0) were considered for existing memory/agent behavior; no framework or code was imported because Core already supplies the needed architecture. MORPHY text was written originally from the requested behavioral goals. Existing upstream licenses remain unchanged.

## Verification

Executed Node tests:4passed,0failed. Verified fresh identity, exclusive/idempotent seeding, edited personality preservation, environment/profile isolation and original profile safeguards. Executed actual Core resolveBootstrapContextForRun plus buildAgentSystemPrompt: personality reached model context exactly once; a changed SOUL was loaded for a new session; a separate custom-agent workspace did not inherit MORPHY. This is real prompt assembly, not a live model call. Runtime test command from components/core: `node --import ./scripts/tsx.mjs ../../tests/personality-runtime.mts`; root tests: `node --test tests/*.test.mjs`.

Scenario expectations for later live evaluation: casual/factual answers concise; coding and Windows diagnosis precise and tool-aware; authorized tasks performed and verified; failures/unavailable tools explained; sensitive data redacted; corrections respected; long/new sessions use only eligible memory without invented history. These are rubric scenarios, not observed model responses. No paid API, user credentials, live-model evaluation, Windows rebuild, voice feature or Phase1 remediation was attempted. Deterministic loading cannot guarantee model adherence or subjective conversational quality.

Defaults are small files, loaded through existing context assembly/caching, with no extra model calls, dependencies, workers or per-tool instruction replay. Prompt size is reported below; token estimates use bytes/4, not a model tokenizer. No inference latency measurement was made.

## Limitations and checkpoint

Exclusive file creation preserves customization. An I/O failure after new-config creation can leave partial personality seeding; there is no automatic repair of an existing profile, to avoid overwriting user choices. Host filesystem write errors should be surfaced and recovered deliberately. Live provider behavior, continuation/compaction fidelity and Windows distribution bootstrap remain unverified. All Phase1 findings and original audit reports remain open and unchanged; this is not release-ready.

Git author was locally set to lumesky-me and its requested GitHub noreply address before edits. GitHub `gh api user --jq .login` returned Forbidden: push identity could not be verified. Therefore pushing is blocked until account identity can be verified; no fallback account or credential was substituted.

Bundled personality/identity: 3056 UTF-8 bytes, approximately 764 tokens by bytes/4. No duplicated personality in AGENTS.md or global templates.
