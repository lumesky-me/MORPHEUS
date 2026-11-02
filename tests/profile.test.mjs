import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { runtimeEnvironment, initialize, main } from "../scripts/morpheus.mjs";

test("distribution replaces inherited profile selectors without mutating the environment", () => {
  const inherited = { OPENCLAW_STATE_DIR: "/old", OPENCLAW_CONFIG_PATH: "/old/config", OPENCLAW_HOME: "/old", OPENCLAW_OAUTH_DIR: "/old/creds", OPENCLAW_PROFILE: "default" };
  const env = runtimeEnvironment(inherited, "/synthetic-user");
  assert.equal(env.OPENCLAW_STATE_DIR, path.resolve("/synthetic-user/.morpheus"));
  assert.equal(env.OPENCLAW_CONFIG_PATH, path.join(env.OPENCLAW_STATE_DIR, "morpheus.json"));
  assert.equal(env.OPENCLAW_PROFILE, "morpheus");
  assert.equal(env.OPENCLAW_GATEWAY_PORT, "18891");
  assert.equal(inherited.OPENCLAW_STATE_DIR, "/old");
});

test("fresh MORPHY creation never replaces an existing user identity or credentials", () => {
  const dir = mkdtempSync(path.join(os.tmpdir(), "morpheus-profile-"));
  try {
    const env = runtimeEnvironment({ MORPHEUS_STATE_DIR: path.join(dir, "state") });
    assert.equal(initialize(env), true);
    const original = readFileSync(env.OPENCLAW_CONFIG_PATH, "utf8");
    const config = JSON.parse(original);
    assert.equal(config.agents.entries.main.identity.name, "MORPHY");
    assert.equal(config.agents.defaults.systemAgent.agentId, "main");
    assert.match(config.gateway.auth.token, /^[a-f0-9]{64}$/);
    assert.equal(config.gateway.auth.mode, "token");
    assert.equal(config.gateway.bind, "loopback");
    if (process.platform !== "win32") assert.equal(statSync(env.OPENCLAW_CONFIG_PATH).mode & 0o777, 0o600);
    assert.equal(initialize(env), false);
    assert.equal(readFileSync(env.OPENCLAW_CONFIG_PATH, "utf8"), original);
    config.agents.entries.main.identity.name = "My own agent";
    writeFileSync(env.OPENCLAW_CONFIG_PATH, JSON.stringify(config));
    const custom = readFileSync(env.OPENCLAW_CONFIG_PATH, "utf8");
    assert.equal(initialize(env), false);
    assert.equal(readFileSync(env.OPENCLAW_CONFIG_PATH, "utf8"), custom);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test("invalid port and upstream package/profile replacement fail before launching Core", async () => {
  assert.throws(() => runtimeEnvironment({ MORPHEUS_GATEWAY_PORT: "0" }), /between/);
  await assert.rejects(main(["update"]), /reviewed source/);
  await assert.rejects(main(["--no-color", "update"]), /reviewed source/);
  await assert.rejects(main(["--log-level", "debug", "update"]), /reviewed source/);
  await assert.rejects(main(["--profile=default", "gateway"]), /profile isolation/);
});
