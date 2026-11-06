import assert from 'node:assert/strict';
import {run} from './dashboard-gateway.mjs';
const calls=[],events=[];let sessions=[{key:'agent:main:dashboard',label:'dashboard'},{key:'agent:main:one',label:'Session one'}];
const client={async request(method,p={}){calls.push({method,p});switch(method){
case 'models.list':return {models:[{provider:'openai-codex',id:'gpt-6-luna'}]};
case 'agents.list':return {defaultId:'main',agents:[{id:'main',thinkingLevels:['low','high']}]};
case 'agents.files.get':return {file:{content:'You are MORPHY. Name: MORPHY',missing:false}};
case 'sessions.list':return {sessions};
case 'sessions.create':{const key=`agent:main:${p.key}`;sessions.push({key,label:'New session'});return {key};}
case 'sessions.patch':{const found=sessions.find(s=>s.key===p.key);if(p.label)found.label=p.label;return {ok:true};}
case 'sessions.delete':sessions=sessions.filter(s=>s.key!==p.key);return {ok:true};
case 'chat.history':return {messages:[{role:'user',content:'Earlier message'},{role:'assistant',content:'Earlier response'}]};
case 'chat.send':return {runId:p.idempotencyKey};
default:throw Error(method);
}}};
const adapter=await run(client,e=>events.push(structuredClone(e)));await adapter.initialize();
assert(!events.findLast(e=>e.type==='sessions-list').sessions.some(s=>s.label==='dashboard'));
await adapter.command({type:'sessions-select',key:'agent:main:one'});
assert.equal(events.at(-1).key,'agent:main:one');assert.equal(events.at(-1).messages.length,2);
await adapter.command({type:'conversation-send',key:'agent:main:one',text:'hello'});
assert.equal(calls.findLast(c=>c.method==='chat.send').p.sessionKey,'agent:main:one');
const id=calls.findLast(c=>c.method==='chat.send').p.idempotencyKey;
await adapter.event({event:'chat',payload:{sessionKey:'agent:main:one',runId:id,state:'delta',deltaText:'Streaming',replace:true}});
assert.equal(events.at(-1).messages.at(-1).text,'Streaming');
await adapter.command({type:'sessions-open-dashboard'});assert.equal(events.at(-1).key,null);
const count=events.length;await adapter.event({event:'chat',payload:{sessionKey:'agent:main:one',runId:id,state:'delta',deltaText:'Must stay off dashboard',replace:true}});assert.equal(events.length,count);
await adapter.command({type:'sessions-create'});const created=events.at(-1).key;assert.notEqual(created,'agent:main:dashboard');
await adapter.command({type:'sessions-rename',key:created,name:'Renamed'});assert(sessions.some(s=>s.label==='Renamed'));
await assert.rejects(()=>adapter.command({type:'sessions-delete',key:created}));
await adapter.command({type:'sessions-delete',key:created,confirmed:true});assert(!sessions.some(s=>s.key===created));
await assert.rejects(()=>adapter.command({type:'sessions-select',key:'agent:main:dashboard'}));
process.stdout.write('PASS real API adapter fixture: list/create/select/rename/delete confirmation, separate conversation send/history/stream, return-to-dashboard fencing, Home session isolation. Synthetic transport only.\n');
