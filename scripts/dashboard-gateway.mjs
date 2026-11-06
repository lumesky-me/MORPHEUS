// Local preview adapter. Credentials stay in this process; provider OAuth stays in Gateway.
import {execFileSync} from 'node:child_process';
import {createRequire} from 'node:module';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
import readline from 'node:readline';
import {randomUUID} from 'node:crypto';
import {readFile} from 'node:fs/promises';
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
 let responses=[],selectedSession=null,chatMessages=[],chatRun=null,chatThinking=false,chatPending=false,catalogModels=[],agentId='main',rosterAgents=[];
 const chatState=()=>output({type:'sessions-conversation',key:selectedSession,messages:chatMessages,thinking:chatThinking,ready,models:catalogModels,reasoning:rosterAgents.find(a=>selectedSession?.startsWith(`agent:${a.id}:`))?.thinkingLevels||[]});
 const ordinary=s=>s.key!==session&&!s.key.endsWith(':dashboard')&&s.label!=='dashboard';
 async function listSessions(){const data=await client.request('sessions.list',{});const sessions=(data.sessions||[]).filter(ordinary);output({type:'sessions-list',ready,sessions});return sessions;}
 async function loadChat(){const data=await client.request('chat.history',{sessionKey:selectedSession,limit:200});chatMessages=(data.messages||[]).filter(m=>['assistant','user'].includes(m.role)).map((m,i)=>({id:String(m.id||m.timestamp||i),role:m.role,text:typeof m.content==='string'?m.content:(m.content||[]).filter(p=>p.type==='text').map(p=>p.text||'').join('')}));chatState();}
 const publish=()=>output({type:'dashboard-state',ready,thinking,responses,model,personalityVerified,sessionLabel:'dashboard'});
 async function history(){
  const data=await client.request('chat.history',{sessionKey:session,limit:100});
  responses=(data.messages||[]).filter(m=>m.role==='assistant').map((m,i)=>({id:`history-${m.id||m.timestamp||i}`,text:assistantText(m),streaming:false}));
 }
 async function initialize(){
  ready=false;thinking=false;publish();
  const catalog=await client.request('models.list',{});
  catalogModels=catalog.models||[];model=selectModel(catalogModels);
  const roster=await client.request('agents.list',{});
  rosterAgents=roster.agents||[];agentId=roster.agents?.find(a=>a.id==='morphy')?.id||roster.defaultId||'main';
  await verifyPersonality(client,agentId);personalityVerified=true;
  const threads=await client.request('sessions.list',{});
  const existing=(threads.sessions||[]).find(s=>(s.label==='dashboard'&&s.key.startsWith(`agent:${agentId}:`))||s.key===`agent:${agentId}:dashboard`);
  session=existing?.key;
  if(!session){const created=await client.request('sessions.create',{key:'dashboard',agentId});session=created.key;}
  if(!session)throw Error('Gateway did not return a dashboard session key.');
  const patched=await client.request('sessions.patch',{key:session,label:'dashboard',model});
  if(patched?.ok===false)throw Error('Dashboard model selection failed.');
  await history();ready=true;publish();await listSessions();if(selectedSession)await loadChat();
 }
 async function command(data){
  if(!ready)throw Error('Dashboard Gateway connection is not ready.');
  if(data.type.startsWith('sessions-')||data.type.startsWith('conversation-')){
   if(data.type==='sessions-list'){await listSessions();return;}
   if(data.type==='sessions-create'){
    const created=await client.request('sessions.create',{key:`chat-${randomUUID()}`,agentId});if(!created.key||created.key===session)throw Error('Session creation failed.');selectedSession=created.key;chatThinking=false;chatRun=null;await listSessions();await loadChat();return;
   }
   if(data.type==='sessions-open-dashboard'){selectedSession=null;chatState();return;}
   const sessions=await listSessions();
   const key=data.key||selectedSession;
   if(!sessions.some(s=>s.key===key)||key===session)throw Error('Select an ordinary Chat session first.');
   if(data.type==='sessions-select'){selectedSession=key;chatRun=null;chatThinking=false;await loadChat();return;}
   if(data.type==='sessions-rename'){if(typeof data.name!=='string'||!data.name.trim()||data.name.length>120)throw Error('Invalid session name.');await client.request('sessions.patch',{key,label:data.name.trim()});await listSessions();return;}
   if(data.type==='sessions-delete'){if(data.confirmed!==true)throw Error('Deletion requires confirmation.');await client.request('sessions.delete',{key});if(selectedSession===key){selectedSession=null;chatMessages=[];chatState();}await listSessions();return;}
   if(key!==selectedSession)throw Error('Conversation changed. Select it again.');
   if(data.type==='conversation-patch'){
    if(data.model){if(!catalogModels.some(m=>`${m.provider}/${m.id}`===data.model))throw Error('Model unavailable.');await client.request('sessions.patch',{key,model:data.model});}
    else if(data.thinkingLevel){const levels=rosterAgents.find(a=>key.startsWith(`agent:${a.id}:`))?.thinkingLevels||[];if(!levels.includes(data.thinkingLevel))throw Error('Reasoning level unavailable.');await client.request('sessions.patch',{key,thinkingLevel:data.thinkingLevel});}
    return;
   }
   if(data.type==='conversation-stop'){await client.request('chat.abort',{sessionKey:key,...(chatRun?{runId:chatRun}:{})});return;}
   if(data.type==='conversation-send'){
    if(chatThinking||chatPending)throw Error('Conversation is already responding.');if(typeof data.text!=='string'||!data.text.trim()||data.text.length>32000)throw Error('Invalid message.');
    chatRun=randomUUID();const sendingRun=chatRun;chatPending=true;try{await client.request('chat.send',{sessionKey:key,message:data.text,idempotencyKey:sendingRun});if(selectedSession===key&&chatRun===sendingRun){chatThinking=true;chatState();}output({type:'sessions-submitted',key});}catch{if(selectedSession===key){chatThinking=false;chatState();}throw Error('Message not accepted.');}finally{chatPending=false;}return;
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
  if(frame.event==='chat'&&selectedSession&&frame.payload?.sessionKey===selectedSession){
   const p=frame.payload;if(chatRun&&p.runId!==chatRun)return;
   if(p.state==='delta'){chatThinking=true;const id=`live-${p.runId}`;let message=chatMessages.find(m=>m.id===id);if(!message){message={id,role:'assistant',text:'',streaming:true};chatMessages.push(message);}const text=p.deltaText??assistantText(p.message);message.text=p.replace===false?message.text+text:text;chatState();}
   else if(['final','aborted','error'].includes(p.state)){chatThinking=false;chatRun=null;try{await loadChat();}catch{chatState();output({type:'sessions-error',message:'Conversation history refresh failed.'});}if(p.state==='error')output({type:'sessions-error',message:'Gateway generation failed.'});}
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
 return {initialize,command,event,disconnect(){ready=false;thinking=false;chatThinking=false;publish();output({type:'sessions-list',ready:false,sessions:[]});chatState();}};
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
 const client=new GatewayClient({url:url.href,token,password,clientName:'cli',mode:'cli',scopes:['operator.read','operator.write','operator.admin'],
  onHelloOk:()=>adapter.initialize().catch(error=>{adapter.disconnect();emit({type:'dashboard-error',message:error.message.startsWith('GPT-6')||error.message.startsWith('The configured agent')?error.message:'Dashboard session setup failed. Check Gateway model access and session permissions.'});}),
  onEvent:frame=>adapter.event(frame).catch(()=>emit({type:'dashboard-error',message:'Dashboard history refresh failed.'})),
  onClose:()=>adapter.disconnect(),
  onConnectError:()=>{adapter.disconnect();emit({type:'dashboard-error',message:'Local Gateway unavailable or authorization requires attention in OpenClaw.'});}
 });
 adapter=await run(client);
 readline.createInterface({input:process.stdin}).on('line',line=>{
  try{
   const command=JSON.parse(line);adapter.command(command).catch(()=>emit({type:command.type?.startsWith('sessions-')||command.type?.startsWith('conversation-')?'sessions-error':'dashboard-error',message:'Gateway action failed. Check connection, permissions and the current conversation.'}));
  }catch{}
 }).on('close',()=>{client.stop();process.exit(0);});
 client.start();
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main().catch(error=>{emit({type:'dashboard-state',ready:false,thinking:false,responses:[]});emit({type:'dashboard-error',message:error.message.startsWith('GPT-6')||error.message.startsWith('This preview')||error.message.startsWith('Gateway credentials')?error.message:'Gateway bridge could not start. Ensure Node.js and your configured OpenClaw CLI are available in this terminal.'});process.exitCode=1;});
