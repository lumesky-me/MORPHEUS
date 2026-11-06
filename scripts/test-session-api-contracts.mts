import assert from 'node:assert/strict';
import * as protocol from '../components/core/packages/gateway-protocol/src/index.ts';
const key='agent:main:one';
const cases:[string,unknown][]=[
 ['validateSessionsListParams',{archived:'all'}],
 ['validateSessionsSubscribeParams',{}],
 ['validateSessionsPatchParams',{key,pinned:true}],
 ['validateSessionsPatchParams',{key,unread:false,expectedMarkedUnreadAt:null}],
 ['validateSessionsPatchParams',{key,archived:true}],
 ['validateSessionsCreateParams',{agentId:'main',parentSessionKey:key,fork:true,forkFrom:'last-completed'}],
 ['validateSessionsResetParams',{key}],
 ['validateSessionsCompactParams',{key}],
 ['validateChatHistoryParams',{sessionKey:key,limit:200}],
 ['validateChatHistoryParams',{sessionKey:key,limit:200,cursor:'gateway-owned-opaque-cursor'}],
 ['validateCronRunsParams',{scope:'all',limit:20,sortDir:'desc',view:'summary'}],
];
for(const [name,params] of cases){const validator=(protocol as Record<string,unknown>)[name];assert.equal(typeof validator,'function',name);assert((validator as (p:unknown)=>boolean)(params),name);}
console.log(`PASS ${cases.length} notification/session payloads against actual OpenClaw protocol validators; no live Gateway proof.`);
