// A projection of existing Gateway queues/history; no notification store or read flags.
export async function readGatewayAlerts(client,methods){
 const allowed=method=>methods?.includes(method);
 const pending=[],tasks=[],unavailable=[];
 for(const method of ['exec.approval.list','plugin.approval.list','openclaw.approval.list']){
  if(!allowed(method)){unavailable.push(method);continue;}
  try{const result=await client.request(method,{});for(const item of Array.isArray(result)?result:result.approvals||[])pending.push({id:item.id,title:`${{exec:'Command',plugin:'Plugin',openclaw:'System agent'}[method.split('.')[0]]} approval requested`,sessionKey:item.request?.sessionKey||item.sourceSessionKey,createdAt:item.createdAtMs,expiresAt:item.expiresAtMs});}catch{unavailable.push(method);}
 }
 if(allowed('cron.runs')){
  try{const result=await client.request('cron.runs',{scope:'all',limit:20,sortDir:'desc',view:'summary'});for(const entry of result.entries||[])tasks.push({id:entry.runId||`${entry.jobId}-${entry.ts}`,title:{ok:'Task completed',error:'Task failed',skipped:'Task skipped'}[entry.status]||'Task finished',text:entry.summary||entry.error||'',createdAt:entry.ts,sessionKey:entry.sessionKey});}catch{unavailable.push('cron.runs');}
 }else unavailable.push('cron.runs');
 return {pending:pending.filter(item=>!item.expiresAt||item.expiresAt>Date.now()),tasks,unavailable};
}
export function projectAgentFailure(frame){
 if(frame.event==='agent'&&frame.payload?.stream==='lifecycle'&&frame.payload.data?.phase==='error')return {id:frame.payload.runId,title:'Agent failed',text:'The agent reported a failure. Open its conversation for details.',sessionKey:frame.payload.sessionKey};
 if(frame.event==='chat'&&frame.payload?.state==='error')return {id:frame.payload.runId,title:'Response failed',text:'Gateway reported a response failure.',sessionKey:frame.payload.sessionKey};
 return null;
}
