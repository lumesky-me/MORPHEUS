// Local preview adapter. Credentials stay in this process; provider OAuth stays in Gateway.
import {execFileSync} from 'node:child_process';
import {createRequire} from 'node:module';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
import readline from 'node:readline';
import {randomUUID} from 'node:crypto';
import {readFile} from 'node:fs/promises';
import {readGatewayAlerts,projectAgentFailure} from './gateway-alerts.mjs';
import {projectMessage,historyPage,modelRef,validateAttachments} from './conversation-projection.mjs';
const emit=data=>process.stdout.write(JSON.stringify(data)+'\n');
// SDK diagnostics may contain connection details. Never forward them to the browser.
console.log=console.warn=console.error=()=>{};
export function selectModel(models){
 const matches=models.filter(m=>[m.id?.split('/').at(-1),m.name].some(value=>String(value||'').replace(/[^a-z0-9]/gi,'').toLowerCase()==='gpt6luna'));
 const oauth=matches.filter(m=>m.provider==='openai-codex');
 const choices=oauth.length?oauth:matches;
 if(choices.length!==1)throw Error('GPT-6 Luna is unavailable or ambiguous in the Gateway model catalog. No substitute model was selected.');
 return choices[0].id.includes('/')?choices[0].id:`${choices[0].provider}/${choices[0].id}`;
}
export function assistantText(message){
 if(message?.role!=='assistant')return '';
 return typeof message.content==='string'?message.content:(message.content||[]).filter(p=>p.type==='text').map(p=>p.text||'').join('');
}
export async function verifyPersonality(client,agentId){
 for(const name of ['SOUL.md','IDENTITY.md']){
  let result=await client.request('agents.files.get',{agentId,name});
  if(result.file?.missing){
   const content=await readFile(new URL(`../defaults/morphy/${name}`,import.meta.url),'utf8');
   await client.request('agents.files.set',{agentId,name,content,expectedMissing:true,expectedWorkspace:result.workspace});
   result=await client.request('agents.files.get',{agentId,name});
  }
  const content=result.file?.content||'';
  if(!/MORPHY/i.test(content)||name==='SOUL.md'&&!/You are MORPHY/i.test(content))throw Error('The configured agent workspace does not contain MORPHY personality files. Existing files were preserved; select the MORPHY OpenClaw profile before testing.');
 }
}
export async function run(client, output=emit){
 let session,model,personalityVerified=false,ready=false,thinking=false,runId=null,submitting=false;
 let sessionRows=[],connected=false,methods=[],mainKey='main',latestFailure=null,alertsRefreshing=false,alertsAgain=false;
 const supports=method=>methods.includes(method);
 async function mutation(method,params){const result=await client.request(method,params);if(result?.ok===false)throw Error('Gateway rejected this change.');return result;}
 async function alerts(){if(alertsRefreshing){alertsAgain=true;return;}alertsRefreshing=true;try{output({type:'gateway-alerts',connected,...(connected?await readGatewayAlerts(client,methods):{pending:[],tasks:[],unavailable:[]}),failure:latestFailure});}finally{alertsRefreshing=false;if(alertsAgain){alertsAgain=false;alerts();}}}
 let responses=[],selectedSession=null,chatMessages=[],chatRun=null,chatThinking=false,chatPending=false,catalogModels=[],agentId='main',rosterAgents=[];
 let chatPage={},chatInfo={},chatActivity=[],chatStatus='',chatPendingInputs=[],chatModels=[],olderLoaded=false,observedChat=null,chatLoadGeneration=0;
 async function observeChat(key){
  if(observedChat===key)return;const old=observedChat;observedChat=key;
  if(old&&supports('sessions.messages.unsubscribe'))try{await client.request('sessions.messages.unsubscribe',{key:old,subscriptionId:'morpheus-conversation'});}catch{}
  if(key&&supports('sessions.messages.subscribe'))try{await client.request('sessions.messages.subscribe',{key,subscriptionId:'morpheus-conversation'});}catch{output({type:'sessions-error',message:'Live transcript subscription unavailable. Reopen to refresh history.'});}
 }
 const chatState=(streamOnly=false)=>{const selectedModel=(chatModels.length?chatModels:catalogModels).find(m=>(!chatInfo.modelProvider||m.provider===chatInfo.modelProvider)&&(modelRef(m)===chatInfo.model||m.id===chatInfo.model));output({type:streamOnly?'sessions-stream':'sessions-conversation',key:selectedSession,messages:streamOnly?chatMessages.filter(m=>m.streaming):chatMessages,thinking:chatThinking,ready:connected,models:chatModels.length?chatModels:catalogModels,reasoning:chatInfo.thinkingLevels||selectedModel?.thinkingLevels||rosterAgents.find(a=>selectedSession?.startsWith(`agent:${a.id}:`))?.thinkingLevels||[],info:chatInfo,page:chatPage,activity:chatActivity,status:chatStatus,pendingInputs:chatPendingInputs,methods});};
 const ordinary=s=>s.key!==session&&!s.key.endsWith(':dashboard')&&s.label!=='dashboard';
 async function listSessions(){const data=await client.request('sessions.list',{archived:'all'});const sessions=(data.sessions||[]).filter(ordinary);sessionRows=sessions;output({type:'sessions-list',ready:connected,sessions,methods,mainKey,agents:rosterAgents});return sessions;}
 async function loadChat(older=false){
  const key=selectedSession;if(!key)return;await observeChat(key);if(selectedSession!==key)return;const generation=++chatLoadGeneration;
  const data=await client.request('chat.history',{sessionKey:key,limit:100,...(older?chatPage.olderCursor?{cursor:chatPage.olderCursor}:{offset:chatPage.nextOffset}:{} )});
  if(selectedSession!==key||generation!==chatLoadGeneration)return;
  const incoming=(data.messages||[]).map(projectMessage);
  if(older){olderLoaded=true;const ids=new Set(incoming.map(m=>m.id));chatMessages=[...incoming,...chatMessages.filter(m=>!ids.has(m.id))];}else if(olderLoaded&&incoming.length){const first=chatMessages.findIndex(m=>m.id===incoming[0].id);chatMessages=first>=0?[...chatMessages.slice(0,first),...incoming]:incoming;}else chatMessages=incoming;
  if(older||!olderLoaded)chatPage=historyPage(data);chatInfo={...sessionRows.find(s=>s.key===key),...data.sessionInfo};
  const activities=(data.activity||[]).flatMap(group=>group.items||[]);
  if(older){const ids=new Set(chatActivity.map(a=>a.itemId));chatActivity=[...activities.filter(a=>!ids.has(a.itemId)),...chatActivity];}else chatActivity=activities;
  chatPendingInputs=data.pendingInputs?.items||[];
  if(!older&&chatInfo.hasActiveRun){chatThinking=true;chatRun=chatInfo.activeRunIds?.[0]||null;}
  chatState();
 }

 const publish=()=>output({type:'dashboard-state',ready,thinking,responses,model,personalityVerified,sessionLabel:'dashboard'});
 async function history(){
  const data=await client.request('chat.history',{sessionKey:session,limit:100});
  responses=(data.messages||[]).filter(m=>m.role==='assistant').map((m,i)=>({id:`history-${m.id||m.timestamp||i}`,text:assistantText(m),streaming:false}));
 }
 async function initialize(hello={}){
  connected=true;methods=hello.features?.methods||[];void alerts().catch(()=>{});if(supports('sessions.subscribe'))try{await client.request('sessions.subscribe',{});}catch{output({type:'sessions-error',message:'Live session updates are unavailable; actions still refresh the roster.'});}
  ready=false;thinking=false;publish();
  const catalog=await client.request('models.list',{});
  catalogModels=catalog.models||[];
  const roster=await client.request('agents.list',{});
  rosterAgents=roster.agents||[];mainKey=roster.mainKey||'main';agentId=roster.agents?.find(a=>a.id==='morphy')?.id||roster.defaultId||'main';
  await listSessions();
  model=selectModel(catalogModels);
  await verifyPersonality(client,agentId);personalityVerified=true;
  const threads=await client.request('sessions.list',{});
  const existing=(threads.sessions||[]).find(s=>(s.label==='dashboard'&&s.key.startsWith(`agent:${agentId}:`))||s.key===`agent:${agentId}:dashboard`);
  session=existing?.key;
  if(!session){const created=await client.request('sessions.create',{key:'dashboard',agentId});session=created.key;}
  if(!session)throw Error('Gateway did not return a dashboard session key.');
  const patched=await mutation('sessions.patch',{key:session,label:'dashboard',model});
  if(patched?.ok===false)throw Error('Dashboard model selection failed.');
  await history();ready=true;publish();await listSessions();if(selectedSession)await loadChat();
 }
 async function command(data){
  if(data.type==='notifications-refresh'){await alerts();return;}
  if(!connected||!ready&&data.type.startsWith('dashboard-'))throw Error('Dashboard Gateway connection is not ready.');
  if(data.type.startsWith('sessions-')||data.type.startsWith('conversation-')){
   if(data.type==='sessions-list'){await listSessions();return;}
   if(data.type==='sessions-create'){
    const targetAgent=data.agentId||agentId;if(!rosterAgents.some(a=>a.id===targetAgent))throw Error('Agent unavailable.');olderLoaded=false;chatModels=[];chatStatus='';
    const created=await client.request('sessions.create',{key:`chat-${randomUUID()}`,agentId:targetAgent});if(!created.key||created.key===session)throw Error('Session creation failed.');selectedSession=created.key;chatThinking=false;chatRun=null;await listSessions();await loadChat();return;
   }
   if(data.type==='sessions-open-dashboard'){selectedSession=null;await observeChat(null);chatState();return;}
   const sessions=await listSessions();
   const key=data.key||selectedSession;
   if(!sessions.some(s=>s.key===key)||key===session)throw Error('Select an ordinary Chat session first.');
   const row=sessions.find(s=>s.key===key);
   const main=row.isMain===true||key===mainKey||key==='main'||key.endsWith(':main')||key.includes(':main:main');
   if(data.type==='sessions-action'){
    const action=data.action;
    const required={pin:'sessions.patch',unread:'sessions.patch',archive:'sessions.patch',fork:'sessions.create',reset:'sessions.reset',compact:'sessions.compact',export:'chat.history',copy:'chat.history'}[action];
    if(!required||!supports(required))throw Error('Gateway does not advertise this action.');
    if(action==='archive'&&main)throw Error('Main session cannot be archived.');
    if(['reset','compact'].includes(action)&&data.confirmed!==true)throw Error('Action requires confirmation.');
    if(['pin','unread','archive'].includes(action)){const field={pin:'pinned',unread:'unread',archive:'archived'}[action],next=typeof data.value==='boolean'?data.value:!row[field];await mutation('sessions.patch',{key,[field]:next,...(field==='unread'&&row.unread?{expectedMarkedUnreadAt:row.markedUnreadAt??null}:{})});if(action==='archive'&&next&&selectedSession===key){selectedSession=null;chatMessages=[];chatState();}}
    if(action==='fork'){const created=await client.request('sessions.create',{agentId:key.split(':')[1]||agentId,parentSessionKey:key,fork:true,...(row.hasActiveRun?{forkFrom:'last-completed'}:{})});if(!created.key)throw Error('Fork failed.');selectedSession=created.key;chatRun=null;chatThinking=false;await loadChat();}
    if(action==='reset'||action==='compact'){await mutation(`sessions.${action}`,{key});if(selectedSession===key){chatThinking=false;chatRun=null;await loadChat();}}
    if(action==='export'||action==='copy'){
     let params={sessionKey:key,limit:200},messages=[],partial=false;const seen=new Set();
     for(let page=0;page<50;page++){
      const result=await client.request('chat.history',params);messages=[...(result.messages||[]),...messages];
      const continuation=result.olderCursor||result.nextOffset;
      partial=!!result.hasMore||!!result.olderCursor||!!result.truncated;
      if(!partial||continuation===undefined||continuation===null||seen.has(continuation))break;
      seen.add(continuation);params={sessionKey:key,limit:200,...(result.olderCursor?{cursor:result.olderCursor}:{offset:result.nextOffset})};
     }
     const ids=new Set();messages=messages.filter(m=>!m.id||!ids.has(m.id)&&ids.add(m.id));
     const text=messages.map(m=>`## ${m.role||'message'}\n\n${typeof m.content==='string'?m.content:(m.content||[]).map(p=>p.text||'').join('\n')}`).join('\n\n');
     output({type:'sessions-transcript',key,action,text,partial,sessionId:row.sessionId});
    }
    await listSessions();return;
   }
   if(data.type==='sessions-select'){if(row.unread&&supports('sessions.patch')){await mutation('sessions.patch',{key,unread:false,expectedMarkedUnreadAt:row.markedUnreadAt??null});await listSessions();}selectedSession=key;chatRun=null;chatThinking=false;chatStatus='';olderLoaded=false;chatModels=[];if(supports('models.list'))try{const catalog=await client.request('models.list',{sessionKey:key,includeDetails:true});if(selectedSession!==key)return;chatModels=catalog.models||[];}catch{}await loadChat();return;}
   if(data.type==='sessions-rename'){if(typeof data.name!=='string'||!data.name.trim()||data.name.length>120)throw Error('Invalid session name.');await mutation('sessions.patch',{key,label:data.name.trim()});await listSessions();return;}
   if(data.type==='sessions-delete'){if(main)throw Error('Main session cannot be deleted.');if(data.confirmed!==true)throw Error('Deletion requires confirmation.');await mutation('sessions.delete',{key});if(selectedSession===key){selectedSession=null;chatMessages=[];chatState();}await listSessions();return;}
   if(key!==selectedSession)throw Error('Conversation changed. Select it again.');
   if(data.type==='conversation-branches'){
    if(!supports('sessions.branches.list'))throw Error('Branch listing unavailable.');
    const result=await client.request('sessions.branches.list',{sessionKey:key});output({type:'sessions-branches',key,branches:result.branches||[]});return;
   }
   if(data.type==='conversation-branch-switch'){
    if(!supports('sessions.branches.switch')||data.confirmed!==true||chatThinking||typeof data.leafEntryId!=='string')throw Error('Branch switch unavailable or requires confirmation.');
    await mutation('sessions.branches.switch',{sessionKey:key,leafEntryId:data.leafEntryId});olderLoaded=false;await loadChat();return;
   }
   if(data.type==='conversation-cut'){
    const method=data.action==='fork'?'sessions.fork':data.action==='rewind'?'sessions.rewind':null;
    if(!method||!supports(method)||data.confirmed!==true||chatThinking)throw Error('Transcript action unavailable or requires confirmation.');
    const message=chatMessages.find(m=>m.entryId===data.entryId&&m.role==='user');if(!message)throw Error('Select a persisted user message.');
    const result=await mutation(method,{sessionKey:key,entryId:data.entryId});
    if(data.action==='fork'){if(!result.sessionKey)throw Error('Fork did not return a session.');selectedSession=result.sessionKey;chatMessages=[];chatInfo={};chatActivity=[];chatState();}
    olderLoaded=false;
    try{await listSessions();await loadChat();}catch{output({type:'sessions-error',key:selectedSession,message:'Transcript change accepted. Refresh unavailable; reopen this conversation before making another transcript change.'});}
    output({type:'sessions-editor',key:selectedSession,text:result.editorText||'',attachments:result.editorAttachments||[]});return;
   }
   if(data.type==='conversation-history'){if(chatPage.hasMore)await loadChat(true);return;}
   if(data.type==='conversation-refresh'){await loadChat();return;}
   if(data.type==='conversation-patch'){
    if(Object.hasOwn(data,'model')){if(!supports('sessions.patch'))throw Error('Gateway does not advertise session settings.');if(data.model!==null&&!(chatModels.length?chatModels:catalogModels).some(m=>modelRef(m)===data.model&&m.manualSelectionAllowed!==false))throw Error('Model unavailable.');await mutation('sessions.patch',{key,model:data.model});}
    else if(Object.hasOwn(data,'thinkingLevel')){const selectedModel=(chatModels.length?chatModels:catalogModels).find(m=>(!chatInfo.modelProvider||m.provider===chatInfo.modelProvider)&&(modelRef(m)===chatInfo.model||m.id===chatInfo.model));const levels=chatInfo.thinkingLevels||selectedModel?.thinkingLevels||rosterAgents.find(a=>key.startsWith(`agent:${a.id}:`))?.thinkingLevels||[];if(!supports('sessions.patch')||data.thinkingLevel!==null&&!levels.some(l=>(typeof l==='string'?l:l.id)===data.thinkingLevel))throw Error('Reasoning level unavailable.');await mutation('sessions.patch',{key,thinkingLevel:data.thinkingLevel});}
    await listSessions();await loadChat();return;
   }
   if(data.type==='conversation-stop'){if(!supports('chat.abort'))throw Error('Cancellation unavailable.');await client.request('chat.abort',{sessionKey:key,...(chatRun?{runId:chatRun}:{})});return;}
   if(data.type==='conversation-send'){
    if(row.archived)throw Error('Unarchive this conversation before sending.');
    if(chatThinking||chatPending)throw Error('Conversation is already responding.');const attachments=validateAttachments(data.attachments);if(typeof data.text!=='string'||(!data.text.trim()&&!attachments?.length)||data.text.length>32000)throw Error('Invalid message.');
    chatRun=randomUUID();const sendingRun=chatRun;chatPending=true;
    try{
     const ack=await client.request('chat.send',{sessionKey:key,message:data.text,idempotencyKey:sendingRun,...(attachments?.length?{attachments}:{}),...(chatInfo.sessionId?{sessionId:chatInfo.sessionId}:{}),...(Object.hasOwn(chatInfo,'activeLeafEntryId')?{expectedLeafEntryId:chatInfo.activeLeafEntryId}:{}),deliver:false});
     if(['error','timeout'].includes(ack?.status))throw Error('Message not accepted.');
     // Admission is committed. A subsequent refresh failure must not invite resubmission.
     output({type:'sessions-submitted',key});
     if(selectedSession===key&&chatRun===sendingRun){chatRun=ack?.runId||sendingRun;chatThinking=ack?.status!=='ok';chatStatus=chatThinking?'Thinking':'';chatState();try{await loadChat();}catch{output({type:'sessions-error',message:'Message accepted. History refresh unavailable; do not resubmit.'});}}
    }catch{if(selectedSession===key){chatThinking=false;chatState();}throw Error('Message not accepted.');}finally{chatPending=false;}return;
   }
   throw Error('Unsupported session command.');
  }
  if(data.type==='dashboard-stop'){await client.request('chat.abort',{sessionKey:session,...(runId?{runId}:{})});return;}
  if(data.type!=='dashboard-send'||typeof data.text!=='string'||!data.text.trim()||data.text.length>32000)throw Error('Invalid dashboard message.');
  if(thinking||submitting)throw Error('MORPHY is already responding.');
  submitting=true;runId=randomUUID();const sendingRun=runId;
  try{
   await client.request('chat.send',{sessionKey:session,message:data.text,idempotencyKey:sendingRun});
   if(runId===sendingRun){thinking=true;publish();}
   output({type:'dashboard-submitted'});
  }catch{thinking=false;publish();throw Error('Message was not accepted by Gateway. Check its connection and model authorization.');}finally{submitting=false;}
 }
 async function event(frame){
  const failure=projectAgentFailure(frame);if(failure){latestFailure=failure;void alerts().catch(()=>{});}
  if(frame.event==='cron'||/^(exec|plugin|openclaw)\.approval\.(requested|resolved)$/.test(frame.event))void alerts().catch(()=>{});
  if(frame.event?.startsWith('sessions.'))await listSessions();
  if(frame.event==='session.message'&&selectedSession&&frame.payload?.sessionKey===selectedSession){if(typeof frame.payload.hasActiveRun==='boolean')chatThinking=frame.payload.hasActiveRun;await loadChat();return;}
  if(frame.event==='agent'&&selectedSession&&frame.payload?.sessionKey===selectedSession){
   const p=frame.payload;if(chatRun&&p.runId!==chatRun)return;
   if(p.stream==='tool'){
    const d=p.data||{},id=d.toolCallId||d.id;if(id){let item=chatActivity.find(a=>a.itemId===id);if(!item){item={itemId:id,title:d.name||d.toolName||'Tool',name:d.name};chatActivity.push(item);}Object.assign(item,{status:d.phase==='error'||d.isError?'failed':['result','end'].includes(d.phase)?'completed':'running',summary:typeof d.result==='string'?d.result:typeof d.partialResult==='string'?d.partialResult:undefined,progressText:d.phase==='update'?d.delta:undefined});}
   }else if(p.stream==='reasoning'){
    const id=`reasoning-${p.runId}`;let item=chatActivity.find(a=>a.itemId===id);if(!item){item={itemId:id,title:'Thinking',kind:'reasoning'};chatActivity.push(item);}item.summary=p.data?.text||p.data?.delta||item.summary;
   }else if(p.stream==='lifecycle')chatStatus=p.data?.phase==='waiting-approval'?'Waiting for approval':p.data?.phase==='error'?'Generation failed':'Thinking';
   chatState(true);return;
  }
  if(frame.event==='chat'&&selectedSession&&frame.payload?.sessionKey===selectedSession){
   const p=frame.payload;if(chatRun&&p.runId!==chatRun)return;
   if(p.state==='delta'){chatThinking=true;chatStatus='Responding';const id=`live-${p.runId}`;let message=chatMessages.find(m=>m.id===id);if(!message){message={id,role:'assistant',text:'',streaming:true};chatMessages.push(message);}const text=p.deltaText??assistantText(p.message);message.text=p.replace===false?message.text+text:text;chatState(true);}
   else if(['final','aborted','error'].includes(p.state)){chatThinking=false;chatRun=null;chatStatus=p.state==='aborted'?'Cancelled':p.state==='error'?'Generation failed':'';try{await loadChat();}catch{chatState();output({type:'sessions-error',message:'Conversation history refresh failed.'});}if(p.state==='error')output({type:'sessions-error',message:'Gateway generation failed.'});}
   return;
  }
  if(frame.event!=='chat'||frame.payload?.sessionKey!==session)return;
  const p=frame.payload;
  if(runId&&p.runId!==runId)return;
  if(p.state==='delta'){
   thinking=true;
   const text=typeof p.deltaText==='string'?p.deltaText:assistantText(p.message);
   const id=`live-${p.runId}`;let response=responses.find(r=>r.id===id);
   if(!response){response={id,text:'',streaming:true};responses.push(response);}
   response.text=p.replace===false?response.text+text:text;publish();
  }else if(['final','aborted','error'].includes(p.state)){
   thinking=false;runId=null;
   try{await history();}catch{for(const response of responses)response.streaming=false;}
   const finalText=p.state==='final'?assistantText(p.message):'';
   if(finalText&&!responses.some(response=>response.text===finalText))responses.push({id:`final-${p.runId}`,text:finalText,streaming:false});
   publish();
   if(p.state==='error')output({type:'dashboard-error',message:'Gateway generation failed. Check the configured model and OAuth authorization in OpenClaw.'});
  }
 }
 return {initialize,command,event,failSetup(){ready=false;publish();listSessions().catch(()=>{});},disconnect(){connected=false;observedChat=null;++chatLoadGeneration;output({type:'gateway-alerts',connected:false,pending:[],tasks:[],unavailable:[],failure:latestFailure});void alerts().catch(()=>{});ready=false;thinking=false;chatThinking=false;publish();output({type:'sessions-list',ready:false,sessions:sessionRows,methods,mainKey});chatState();}};
}
async function main(){
 const windows=process.platform==='win32';
 let root=process.env.OPENCLAW_PACKAGE_ROOT;
 if(!root){const npm=execFileSync(windows?'npm.cmd':'npm',['root','-g'],{encoding:'utf8',windowsHide:true,...(windows?{shell:true}:{})}).trim();root=path.join(npm,'openclaw');}
 const require=createRequire(path.join(root,'package.json'));
 const sdk=specifier=>import(pathToFileURL(require.resolve(`openclaw/plugin-sdk/${specifier}`)).href);
 const {GatewayClient}=await sdk('gateway-runtime');
 const {getRuntimeConfig}=await sdk('runtime-config-snapshot');
 // Existing OpenClaw config reader owns profile, JSON5 and environment resolution.
 const config=getRuntimeConfig().gateway||{};
 const port=Number(process.env.OPENCLAW_GATEWAY_PORT||config.port||18789);
 const url=new URL(config.mode==='remote'?config.remote?.url:`ws://127.0.0.1:${port}`);
 if(!['ws:','wss:'].includes(url.protocol)||!['127.0.0.1','localhost','[::1]'].includes(url.hostname)||url.username||url.password)throw Error('This preview supports only the configured local Gateway.');
 const auth=config.mode==='remote'?config.remote:config.auth;
 const token=process.env.OPENCLAW_GATEWAY_TOKEN||auth?.token;
 const password=process.env.OPENCLAW_GATEWAY_PASSWORD||auth?.password;
 if((token&&typeof token!=='string')||(password&&typeof password!=='string')||String(token).includes('REDACTED'))throw Error('Gateway credentials require resolution by the existing OpenClaw installation; the preview will not request or expose secrets.');
 let adapter;
 emit({type:'gateway-status',state:'connecting'});
 const client=new GatewayClient({url:url.href,token,password,clientName:'cli',mode:'cli',caps:['approvals'],scopes:['operator.read','operator.write','operator.admin','operator.approvals'],
  onHelloOk:hello=>{emit({type:'gateway-status',state:'connected'});adapter.initialize(hello).catch(error=>{adapter.failSetup();emit({type:'dashboard-error',message:error.message.startsWith('GPT-6')||error.message.startsWith('The configured agent')?error.message:'Dashboard session setup failed. Check Gateway model access and session permissions.'});});},
  onEvent:frame=>adapter.event(frame).catch(()=>emit({type:'dashboard-error',message:'Dashboard history refresh failed.'})),
  onClose:()=>{emit({type:'gateway-status',state:'disconnected'});adapter.disconnect();},
  onConnectError:error=>{emit({type:'gateway-status',state:error?.details?.code==='PAIRING_REQUIRED'?'pairingRequired':'error'});adapter.disconnect();emit({type:'dashboard-error',message:'Local Gateway unavailable or authorization requires attention in OpenClaw.'});}
 });
 adapter=await run(client);
 readline.createInterface({input:process.stdin}).on('line',line=>{
  try{
   const command=JSON.parse(line);adapter.command(command).catch(()=>emit({type:command.type?.startsWith('sessions-')||command.type?.startsWith('conversation-')?'sessions-error':'dashboard-error',key:command.key,message:'Gateway action failed. Check connection, permissions and the current conversation.'}));
  }catch{}
 }).on('close',()=>{client.stop();process.exit(0);});
 client.start();
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main().catch(error=>{emit({type:'gateway-status',state:'error'});emit({type:'dashboard-state',ready:false,thinking:false,responses:[]});emit({type:'dashboard-error',message:error.message.startsWith('GPT-6')||error.message.startsWith('This preview')||error.message.startsWith('Gateway credentials')?error.message:'Gateway bridge could not start. Ensure Node.js and your configured OpenClaw CLI are available in this terminal.'});process.exitCode=1;});
