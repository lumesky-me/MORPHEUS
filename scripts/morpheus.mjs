#!/usr/bin/env node
// Only the distribution boundary is new. All assistant behavior remains upstream-owned.
import { randomBytes } from "node:crypto";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { getRootOptionAwareCommandPath } from "../components/core/cli-root-options.mjs";

export const coreRoot = fileURLToPath(new URL("../components/core/", import.meta.url));

export function runtimeEnvironment(env = process.env, home = os.homedir()) {
  const stateDir = path.resolve(env.MORPHEUS_STATE_DIR || path.join(home, ".morpheus"));
  const port = env.MORPHEUS_GATEWAY_PORT || "18891";
  if (!/^\d+$/.test(port) || Number(port) < 1 || Number(port) > 65535) {
    throw new Error("MORPHEUS_GATEWAY_PORT must be between 1 and 65535.");
  }
  return {
    ...env,
    // Do not inherit another OpenClaw installation's profile/path overrides.
    OPENCLAW_PROFILE: "morpheus",
    OPENCLAW_HOME: path.join(stateDir, "home"),
    OPENCLAW_STATE_DIR: stateDir,
    OPENCLAW_CONFIG_PATH: path.join(stateDir, "morpheus.json"),
    OPENCLAW_OAUTH_DIR: path.join(stateDir, "credentials"),
    OPENCLAW_GATEWAY_PORT: port,
  };
}

export function initialize(env) {
  const stateDir = env.OPENCLAW_STATE_DIR;
  mkdirSync(stateDir, { recursive: true, mode: 0o700 });
  const config = {
    gateway: { mode: "local", bind: "loopback", port: Number(env.OPENCLAW_GATEWAY_PORT),
      auth: { mode: "token", token: randomBytes(32).toString("hex") } },
    agents: { ownership: "explicit", defaults: { systemAgent: { agentId: "main" } }, entries: { main: { name: "MORPHY", identity: { name: "MORPHY" },
      workspace: path.join(stateDir, "workspace") } } },
    // Upstream package replacement would discard this custom distribution.
    update: { checkOnStart: false, auto: { enabled: false } },
  };
  try {
    writeFileSync(env.OPENCLAW_CONFIG_PATH, JSON.stringify(config, null, 2) + "\n",
      { flag: "wx", mode: 0o600 });
    return true;
  } catch (error) {
    if (error.code === "EEXIST") return false;
    throw error;
  }
}

export async function main(args = process.argv.slice(2)) {
  const env = runtimeEnvironment();
  if (args[0] === "init") {
    console.log(initialize(env) ? "Created MORPHEUS profile with default agent MORPHY."
      : "MORPHEUS profile already exists. Existing identities were preserved.");
    return 0;
  }
  if (args.some((arg) => arg === "--dev" || arg === "--profile" || arg.startsWith("--profile="))) {
    throw new Error("The MORPHEUS launcher owns profile isolation. Use MORPHEUS_STATE_DIR for a separate instance.");
  }
  const [command] = getRootOptionAwareCommandPath([process.execPath, "morpheus", ...args], 1);
  if (command === "update") {
    throw new Error("MORPHEUS source builds must be updated from their reviewed source. Upstream package replacement is not configured for this distribution.");
  }
  if (!existsSync(path.join(coreRoot, "dist", "entry.js"))) {
    throw new Error("Build Core first: cd components/core && pnpm install --frozen-lockfile && pnpm build && pnpm ui:build");
  }
  const child = spawn(process.execPath, [path.join(coreRoot, "openclaw.mjs"), ...args],
    { cwd: coreRoot, env, stdio: "inherit" });
  const forwarders = ["SIGINT", "SIGTERM"].map((signal) => {
    const handler = () => child.kill(signal);
    process.on(signal, handler);
    return [signal, handler];
  });
  try {
    return await new Promise((resolve, reject) => {
      child.once("error", reject);
      child.once("exit", (code, signal) => resolve(code ?? (signal === "SIGINT" ? 130 : 143)));
    });
  } finally {
    for (const [signal, handler] of forwarders) process.off(signal, handler);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try { process.exitCode = await main(); }
  catch (error) { console.error(`MORPHEUS: ${error.message}`); process.exitCode = 1; }
}
