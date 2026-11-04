import './dashboard.js';
let orb;
let active=true;
const home=document.querySelector("#home");
const nativeHost=!!window.chrome?.webview;
const unavailable="dashboard · Native Gateway, microphone and device services are unavailable in browser preview.";
const sync=()=>orb?.setVisible(active&&!home.hidden&&!document.hidden);
new MutationObserver(sync).observe(home,{attributes:true,attributeFilter:["hidden"]});
window.chrome?.webview?.addEventListener('message',event=>{
 if(event.data?.type==='home-visibility'&&typeof event.data.active==='boolean'){active=event.data.active;sync();}
});
document.addEventListener('visibilitychange',sync);
async function loadOrb(){try{
 const {createOrbScene}=await import('./ultron/orb.js');
 orb=createOrbScene(document.querySelector('#ultron-orb'));
 orb.setActivity('idle');sync();syncActivity();

}catch(error){document.querySelector('#orb-status').textContent='Home graphics could not load.';console.error(error);}}
loadOrb();
window.addEventListener('pagehide',()=>orb?.dispose());
const responsePanel=document.querySelector('[data-id="35a96b13-bf39-492f-9ebc-7df37793089d"]');
const inputPanel=document.querySelector('[data-id="afc02d75-13a1-406d-8543-52cbc5e1e9b0"]');
const voicePanel=document.querySelector('[data-id="f1c2c205-561e-4170-9c37-1cf7d9391808"]');
responsePanel.replaceChildren();inputPanel.replaceChildren();
const responses=document.createElement('div');responses.className='dashboard-responses';responsePanel.append(responses);
const status=document.createElement('div');status.className='dashboard-status';status.role='status';status.textContent=nativeHost?'Connecting to dashboard conversation…':unavailable;responsePanel.append(status);
const form=document.createElement('form');form.className='dashboard-input';
const input=document.createElement('input');input.placeholder='Message MORPHY…';input.setAttribute('aria-label','Message dashboard');input.maxLength=32000;
const send=document.createElement('button');send.textContent='Send';send.disabled=true;
const stop=document.createElement('button');stop.type='button';stop.textContent='Stop';stop.hidden=true;
form.append(input,send,stop);inputPanel.append(form);
let nativeReady=false,submitting=false;
const post=value=>{if(nativeHost)window.chrome.webview.postMessage(value);else status.textContent=unavailable;};
form.onsubmit=event=>{event.preventDefault();if(!input.value.trim()||send.disabled||submitting)return;submitting=true;send.disabled=true;input.readOnly=true;post({type:'dashboard-send',text:input.value});};
stop.onclick=()=>post({type:'dashboard-stop'});
const entries=new Map();
window.chrome?.webview?.addEventListener('message',event=>{
 const data=event.data;
 if(data.type==='dashboard-submitted'){input.value='';input.readOnly=false;submitting=false;send.disabled=!nativeReady;}
 if(data.type==='dashboard-error'){status.textContent=data.message;input.readOnly=false;submitting=false;send.disabled=!nativeReady;}
 if(data.type==='dashboard-state'){
  nativeReady=!!data.ready;send.disabled=!nativeReady||submitting;stop.hidden=!data.thinking;status.textContent=data.thinking?'Thinking…':data.ready?'':'Gateway unavailable';
  const nearBottom=responses.scrollHeight-responses.scrollTop-responses.clientHeight<60;
  for(const item of data.responses||[]){let node=entries.get(item.id);if(!node){node=document.createElement('div');node.className='dashboard-response';entries.set(item.id,node);responses.append(node);}if(node.dataset.text!==item.text||node.dataset.streaming!==String(!!item.streaming)){node.dataset.text=item.text;node.dataset.streaming=String(!!item.streaming);if(item.streaming)node.textContent=item.text;else formatResponse(node,item.text);}}
  for(const [id,node] of entries)if(!(data.responses||[]).some(item=>item.id===id)){node.remove();entries.delete(id);}
  if(nearBottom)responses.scrollTop=responses.scrollHeight;
  processing=!!data.thinking;syncActivity();
 }
});

const voice=document.createElement('button');voice.textContent='M O R P H Y';voice.setAttribute('aria-label','Start or stop voice input');voicePanel.replaceChildren(voice);voice.onclick=()=>post({type:'dashboard-voice'});
const transcript=document.createElement('div');transcript.className='dashboard-transcript';transcript.setAttribute('aria-live','polite');let transcriptClear;
function updateTranscript(text){clearTimeout(transcriptClear);if(text){transcript.textContent=text;transcript.classList.add('visible');}else{transcript.classList.remove('visible');transcriptClear=setTimeout(()=>{transcript.textContent='';},180);}}
let voiceState='idle',processing=false,speechPlaying=false;
function syncActivity(){orb?.setActivity(speechPlaying||voiceState==='listening'?'speaking':processing||voiceState==='thinking'?'thinking':'idle');}
window.chrome?.webview?.addEventListener('message',event=>{
 const data=event.data;
 if(data.type==='dashboard-voice-state'){
  voiceState=data.state;voice.dataset.state=data.state;voice.title=data.state;
  voice.classList.toggle('listening',data.state==='listening');
  if(data.transcript!==null&&data.transcript!==undefined)updateTranscript(data.transcript);
  syncActivity();
 }
 if(data.type==='dashboard-state'&&voiceState==='idle')voice.title=data.thinking?'Thinking':'Start or stop voice input';
});
const panel=id=>document.querySelector(`[data-id="${id}"]`);
const graphPanel=panel('c4042c5a-5534-4d0a-84a1-3598ad644766');
const selector=panel('5b7f1b40-9979-42fb-b4a2-f4adc3b7257b');
const select=document.createElement('select');select.setAttribute('aria-label','Performance metric');for(const name of ['CPU','GPU','RAM','CPU, GPU, RAM']){const option=document.createElement('option');option.textContent=name;select.append(option);}selector.replaceChildren(select);
const graph=document.createElementNS('http://www.w3.org/2000/svg','svg');graph.setAttribute('viewBox','0 0 460 80');graph.classList.add('dashboard-graph');graph.setAttribute('aria-label','90 second performance history');
const colors={cpu:'#b79bde',gpu:'#70bfae',ram:'#d1a970'};
const lines={};for(const key of Object.keys(colors)){const line=document.createElementNS(graph.namespaceURI,'path');line.setAttribute('fill','none');line.setAttribute('stroke',colors[key]);line.setAttribute('stroke-width','1.5');line.dataset.metric=key;graph.append(line);lines[key]=line;}graphPanel.replaceChildren(graph);
const metricLabel=document.createElement('span');metricLabel.className='dashboard-metric-label';graphPanel.append(metricLabel);
const legend=document.createElement('div');legend.className='dashboard-legend';graphPanel.append(legend);let history=[];
function draw(){
 const all=select.value==='CPU, GPU, RAM',key=select.value.toLowerCase(),last=history.at(-1),now=last?.timestamp;
 legend.replaceChildren();legend.hidden=!all;
 for(const metric of Object.keys(lines)){
  const visible=all||key===metric;lines[metric].style.display=visible?'':'none';let path='',connected=false;
  for(const sample of history){const value=metric==='gpu'?sample.gpu:sample[metric]?.usagePercent;if(Number.isFinite(value)){path+=`${connected?'L':'M'}${460-(now-sample.timestamp)/90000*460},${78-Math.max(0,Math.min(100,value))*.7} `;connected=true;}else connected=false;}
  lines[metric].setAttribute('d',path);
  const value=metric==='gpu'?last?.gpu:last?.[metric]?.usagePercent;
  const label=`${metric.toUpperCase()} · ${Number.isFinite(value)?value.toFixed(1)+'%':'Unavailable'}`;
  if(all){const item=document.createElement('span');item.textContent=label;item.style.color=colors[metric];legend.append(item);}else if(visible)metricLabel.textContent=label;
 }
 if(all)metricLabel.textContent='System usage';
}
select.onchange=draw;
for(const [id,preset,label] of [['cddfd844-44a2-4718-9daf-bd79980b1b25','Strict','Lock Down'],['9e86debb-bc91-4f32-8305-8fc3415f7c64','Open','Full Access']]){const box=panel(id);const button=document.createElement('button');button.textContent=label;button.dataset.preset=preset;button.onclick=()=>post({type:'dashboard-preset',preset});box.replaceChildren(button);}
const visuals=panel('4734678d-ab2a-4d1f-b0f9-d85e88decb48');visuals.classList.add('dashboard-visual-board');visuals.replaceChildren(transcript);const gallery=document.createElement('div');gallery.className='dashboard-gallery';visuals.append(gallery);
const viewer=document.createElement('dialog');viewer.className='dashboard-viewer';const fullImage=document.createElement('img');fullImage.alt='Dashboard visual';const close=document.createElement('button');close.textContent='Close';close.onclick=()=>viewer.close();viewer.append(close,fullImage);document.body.append(viewer);let mediaSignature='';
window.chrome?.webview?.addEventListener('message',event=>{
 const data=event.data;
 if(data.type==='dashboard-metrics'){history.push(data);history=history.filter(sample=>sample.timestamp>=data.timestamp-90000);draw();}
 if(data.type==='dashboard-permissions')for(const button of document.querySelectorAll('[data-preset]')){if(['Strict','Open'].includes(data.preset))button.setAttribute('aria-pressed',String(button.dataset.preset===data.preset));else button.removeAttribute('aria-pressed');};
 if(data.type==='dashboard-state'){
  const urls=[];for(const response of data.responses||[])for(const match of response.text.matchAll(/!\[([^\]]*)\]\((https:\/\/[^\s)]+)\)/g))urls.push({alt:match[1],url:match[2]});
  const signature=JSON.stringify(urls);if(signature===mediaSignature)return;mediaSignature=signature;gallery.replaceChildren();
  for(const media of urls){const button=document.createElement('button');const image=document.createElement('img');image.src=media.url;image.alt=media.alt||'Dashboard visual';image.loading='lazy';image.onerror=()=>{button.textContent='Visual unavailable';};button.append(image);button.onclick=()=>{fullImage.src=media.url;viewer.showModal();};gallery.append(button);}
 }
});

window.chrome?.webview?.addEventListener('message',event=>{if(event.data.type==='dashboard-speaking'){speechPlaying=!!event.data.active;voice.title=speechPlaying?'Speaking':processing?'Thinking':'Start or stop voice input';syncActivity();}});

function formatResponse(node,text){
 node.replaceChildren();let code=null;
 for(const line of text.split('\n')){
  if(line.startsWith('```')){if(code){code=null;}else{code=document.createElement('pre');node.append(code);}continue;}
  if(code){code.textContent+=line+'\n';continue;}
  const heading=/^(#{1,3})\s+(.+)$/.exec(line);const row=document.createElement(heading?'h'+(heading[1].length+2):'div');const content=heading?heading[2]:line;
  const parts=content.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  for(const part of parts){if(part.startsWith('**')&&part.endsWith('**')){const b=document.createElement('strong');b.textContent=part.slice(2,-2);row.append(b);}else if(part.startsWith('`')&&part.endsWith('`')){const c=document.createElement('code');c.textContent=part.slice(1,-1);row.append(c);}else row.append(document.createTextNode(part));}
  if(!content)row.append(document.createElement('br'));node.append(row);
 }
}

draw();
if(!nativeHost){gallery.textContent="Visual outputs from dashboard appear here when native services are connected.";}
post({type:"home-ready"});
