# Upstream provenance

MORPHEUS is an independent downstream integration, not an official or endorsed OpenClaw product. It reuses the upstream implementations; it is not a rewrite or GitHub fork.

| Component | Official repository cloned directly | Exact imported commit | Tracked entries |
| --- | --- | --- | ---: |
| Core | https://github.com/openclaw/openclaw | `fcf176cc1f600fea3dde30bfab8930b7751ffe7a` | 62,721 |
| Windows | https://github.com/openclaw/openclaw-windows-node | `a4dd026cc5f85a444a0fcd05eef5b86282dbda8c` | 2,083 |

Original tracked trees were exported with `git archive HEAD` into `components/core/` and `components/windows/`. No upstream `.git`, ignored caches, credentials, node_modules, or locally generated build output was imported. Original tracked generated sources, fixtures, vendored dependencies, and required assets remain part of the source tree. Dependency installation and builds create ignored local output separately.

`AUDIT/evidence/upstream-inventory.json.gz` contains the original Git modes, blob IDs, paths, and commits. `AUDIT/evidence/rebrand-manifest.json` records downstream-modified upstream files and their SHA-256 hashes. `python3 scripts/verify-import.py` verifies every imported file against these records and rejects missing source, changed licenses, or an unrecorded delta. Review changes before deliberately refreshing that manifest with `--record`.

Both original MIT license files remain byte-for-byte at `components/core/LICENSE` and `components/windows/LICENSE`. Core's `THIRD_PARTY_NOTICES.md`, vendored licenses, package metadata, and original attributions remain in their original locations. The root MIT notice reproduces Core's notice; it does not replace component or dependency licenses.

## Updating upstream

Clone the official repositories outside this checkout, pin reviewed commits, and compare their tracked trees with these versions. Apply security patches to the appropriate component without merging the two architectures. Preserve the branding/profile delta, tests, protocol identifiers, and all licenses. Refresh provenance and audit evidence after validation. Do not replace these sources with `npm update openclaw`, copy upstream binaries over MORPHEUS, or assume a newly selected upstream version has been tested.

## Integration boundaries

Core's internal package name (`openclaw`), workspace package imports (`@openclaw/*`), protocol/configuration keys, and CLR namespaces/assembly filenames are retained for compatibility. The top-level private package and `morpheus` source launcher have their own identity. User-visible names and Windows package/profile identities are downstream-owned.

Windows' existing managed native Gateway requires the separate upstream Windows packaging product; its WSL route can install the published upstream npm package. Neither route proves use of this imported Core build. The supported source-development path is to run this Core through the isolated MORPHEUS launcher and connect the Windows client explicitly. A MORPHEUS-owned bundled/native Gateway, signing, Store registration, installer distribution, and end-to-end native validation remain release blockers. Existing integration code was preserved rather than replaced with a fabricated implementation.
