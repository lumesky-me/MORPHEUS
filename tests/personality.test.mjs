import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import test from 'node:test';
import { initialize, runtimeEnvironment } from '../scripts/morpheus.mjs';

test('fresh profiles seed one editable personality; repeat init preserves identity and preferences', () => {
 const home=mkdtempSync(path.join(os.tmpdir(),'morphy-'));
 try {
  const env=runtimeEnvironment({MORPHEUS_STATE_DIR:home});initialize(env);
  const soul=path.join(home,'workspace/SOUL.md');
  assert.match(readFileSync(soul,'utf8'),/You are MORPHY/);
  assert.equal(JSON.parse(readFileSync(env.OPENCLAW_CONFIG_PATH)).agents.defaults.systemAgent.agentId,'main');
  writeFileSync(soul,'My custom personality');
  assert.equal(initialize(env),false);
  assert.equal(readFileSync(soul,'utf8'),'My custom personality');
  assert.doesNotMatch(readFileSync(new URL('../defaults/morphy/SOUL.md',import.meta.url),'utf8'),/zeocrimson|343106658|lumesky-me/);
 } finally {rmSync(home,{recursive:true,force:true});}
});
