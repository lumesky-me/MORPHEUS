#!/usr/bin/env bash
set -euo pipefail
cd /workspace/MORPHEUS
bash scripts/bootstrap-cloud.sh
export PATH="/workspace/morpheus-tools/node-v26.12.1-linux-x64/bin:/workspace/morpheus-tools/bin:$PATH"
export NODE_USE_ENV_PROXY=1
export NODE_OPTIONS=--max-old-space-size=8192
export OPENCLAW_TSDOWN_MAX_OLD_SPACE_MB=8192
cd components/core
pnpm install --frozen-lockfile
pnpm build
pnpm ui:build
pnpm tsgo:core
cd ../..
node --test --test-reporter=tap tests/profile.test.mjs
python3 scripts/verify-import.py
