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
 let session,model,personalityVerified=false,ready=false,thinking=false,runId=null;
 let responses=[];
 const publish=()=>output({type:'dashboard-state',ready,thinking,responses,model,personalityVerified,sessionLabel:'dashboard'});
 async function history(){
  const data=await client.request('chat.history',{sessionKey:session,limit:100});
  responses=(data.messages||[]).filter(m=>m.role==='assistant').map((m,i)=>({id:`history-${m.id||m.timestamp||i}`,text:assistantText(m),streaming:false}));
 }
 async function initialize(){
  ready=false;thinking=false;publish();
  const catalog=await client.request('models.list',{});
  model=selectModel(catalog.models||[]);
  const roster=await client.request('agents.list',{});
  const agentId=roster.agents?.find(a=>a.id==='morphy')?.id||roster.defaultId||'main';
  await verifyPersonality(client,agentId);personalityVerified=true;
  const threads=await client.request('sessions.list',{});
  const existing=(threads.sessions||[]).find(s=>(s.label==='dashboard'&&s.key.startsWith(`agent:${agentId}:`))||s.key===`agent:${agentId}:dashboard`);
  session=existing?.key;
  if(!session){const created=await client.request('sessions.create',{key:'dashboard',agentId});session=created.key;}
  if(!session)throw Error('Gateway did not return a dashboard session key.');
  const patched=await client.request('sessions.patch',{key:session,label:'dashboard',model});
  if(patched?.ok===false)throw Error('Dashboard model selection failed.');
  await history();ready=true;publish();
 }
 async function command(data){
  if(!ready)throw Error('Dashboard Gateway connection is not ready.');
  if(data.type==='dashboard-stop'){await client.request('chat.abort',{sessionKey:session,...(runId?{runId}:{})});return;}
  if(data.type!=='dashboard-send'||typeof data.text!=='string'||!data.text.trim()||data.text.length>32000)throw Error('Invalid dashboard message.');
  if(thinking)throw Error('MORPHY is already responding.');
  thinking=true;runId=randomUUID();publish();
  try{
   await client.request('chat.send',{sessionKey:session,message:data.text,idempotencyKey:runId});
   output({type:'dashboard-submitted'});
  }catch{thinking=false;publish();throw Error('Message was not accepted by Gateway. Check its connection and model authorization.');}
 }
 async function event(frame){
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
 return {initialize,command,event,disconnect(){ready=false;thinking=false;publish();}};
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
 readline.createInterface({input:process.stdin}).on('line',line=>{try{adapter.command(JSON.parse(line)).catch(error=>emit({type:'dashboard-error',message:['Dashboard Gateway connection is not ready.','Invalid dashboard message.','MORPHY is already responding.','Message was not accepted by Gateway. Check its connection and model authorization.'].includes(error.message)?error.message:'Gateway command failed. Check the existing OpenClaw connection.'}));}catch{}}).on('close',()=>{client.stop();process.exit(0);});
 client.start();
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main().catch(error=>{emit({type:'dashboard-state',ready:false,thinking:false,responses:[]});emit({type:'dashboard-error',message:error.message.startsWith('GPT-6')||error.message.startsWith('This preview')||error.message.startsWith('Gateway credentials')?error.message:'Gateway bridge could not start. Ensure Node.js and your configured OpenClaw CLI are available in this terminal.'});process.exitCode=1;});
