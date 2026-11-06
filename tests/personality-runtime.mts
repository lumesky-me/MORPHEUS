import assert from 'node:assert/strict';
import {mkdtemp,writeFile,rm} from 'node:fs/promises';
import os from 'node:os';import path from 'node:path';
import {initialize,runtimeEnvironment} from '../scripts/morpheus.mjs';
import {resolveBootstrapContextForRun} from '../components/core/src/agents/bootstrap-files.ts';
import {buildAgentSystemPrompt} from '../components/core/src/agents/system-prompt.ts';
const root=await mkdtemp(path.join(os.tmpdir(),'morphy-runtime-'));
try {
 const env=runtimeEnvironment({MORPHEUS_STATE_DIR:root});initialize(env);
 const workspace=path.join(root,'workspace');
 const context=await resolveBootstrapContextForRun({workspaceDir:workspace,sessionKey:'agent:main:main',agentId:'main'});
 assert(context.contextFiles.some(f=>f.content.includes('You are MORPHY')));
 const prompt=buildAgentSystemPrompt({workspaceDir:workspace,contextFiles:context.contextFiles});
 assert(prompt.includes('You are MORPHY'));assert.equal(prompt.split('You are MORPHY').length-1,1);
 const dashboardContext=await resolveBootstrapContextForRun({workspaceDir:workspace,sessionKey:'agent:main:dashboard',agentId:'main'});
 const dashboardPrompt=buildAgentSystemPrompt({workspaceDir:workspace,contextFiles:dashboardContext.contextFiles});
 assert.equal(dashboardPrompt.split('You are MORPHY').length-1,1);
 assert(dashboardContext.contextFiles.some(f=>f.content.includes('MORPHY')));
 await writeFile(path.join(workspace,'SOUL.md'),'User-selected calm personality');
 const updated=await resolveBootstrapContextForRun({workspaceDir:workspace,sessionKey:'agent:main:new',agentId:'main'});
 assert(updated.contextFiles.some(f=>f.content==='User-selected calm personality'));
 const other=path.join(root,'custom');await import('node:fs/promises').then(m=>m.mkdir(other));
 const custom=await resolveBootstrapContextForRun({workspaceDir:other,sessionKey:'agent:other:new',agentId:'other'});
 assert(!custom.contextFiles.some(f=>f.content.includes('You are MORPHY')));
 console.log('PASS: actual bootstrap loader, model system prompt, single injection, edited new-session context and custom-agent separation');
} finally {await rm(root,{recursive:true,force:true});}
