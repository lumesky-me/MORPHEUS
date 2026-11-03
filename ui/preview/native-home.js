import './dashboard.js';
let orb;
let active=true;
const sync=()=>orb?.setVisible(active&&!document.hidden);
window.chrome?.webview?.addEventListener('message',event=>{
 if(event.data?.type==='home-visibility'&&typeof event.data.active==='boolean'){active=event.data.active;sync();}
});
document.addEventListener('visibilitychange',sync);
try{
 const {createOrbScene}=await import('./ultron/orb.js');
 orb=createOrbScene(document.querySelector('#ultron-orb'));
 orb.setActivity('idle');sync();

}catch(error){document.querySelector('#orb-status').textContent='Home graphics could not load.';console.error(error);}
window.addEventListener('pagehide',()=>orb?.dispose());
const responsePanel=document.querySelector('[data-id="35a96b13-bf39-492f-9ebc-7df37793089d"]');
const inputPanel=document.querySelector('[data-id="afc02d75-13a1-406d-8543-52cbc5e1e9b0"]');
const voicePanel=document.querySelector('[data-id="f1c2c205-561e-4170-9c37-1cf7d9391808"]');
responsePanel.replaceChildren();inputPanel.replaceChildren();voicePanel.querySelector('span').textContent='MORPHY';
const responses=document.createElement('div');responses.className='dashboard-responses';responsePanel.append(responses);
const status=document.createElement('div');status.className='dashboard-status';status.role='status';status.textContent='Connecting to dashboard conversation…';responsePanel.append(status);
const form=document.createElement('form');form.className='dashboard-input';
const input=document.createElement('input');input.placeholder='Message MORPHY…';input.setAttribute('aria-label','Message dashboard');input.maxLength=32000;
const send=document.createElement('button');send.textContent='Send';send.disabled=true;
const stop=document.createElement('button');stop.type='button';stop.textContent='Stop';stop.hidden=true;
form.append(input,send,stop);inputPanel.append(form);
const post=value=>window.chrome?.webview?.postMessage(value);
form.onsubmit=event=>{event.preventDefault();if(!input.value.trim()||send.disabled)return;send.disabled=true;input.readOnly=true;post({type:'dashboard-send',text:input.value});};
stop.onclick=()=>post({type:'dashboard-stop'});
const entries=new Map();
window.chrome?.webview?.addEventListener('message',event=>{
 const data=event.data;
 if(data.type==='dashboard-submitted'){input.value='';input.readOnly=false;}
 if(data.type==='dashboard-error'){status.textContent=data.message;input.readOnly=false;send.disabled=false;}
 if(data.type==='dashboard-state'){
  send.disabled=!data.ready;stop.hidden=!data.thinking;status.textContent=data.thinking?'Thinking…':data.ready?'':'Gateway unavailable';
  const nearBottom=responses.scrollHeight-responses.scrollTop-responses.clientHeight<60;
  for(const item of data.responses||[]){let node=entries.get(item.id);if(!node){node=document.createElement('div');node.className='dashboard-response';entries.set(item.id,node);responses.append(node);}if(node.dataset.text!==item.text){node.dataset.text=item.text;formatResponse(node,item.text);}}
  for(const [id,node] of entries)if(!(data.responses||[]).some(item=>item.id===id)){node.remove();entries.delete(id);}
  if(nearBottom)responses.scrollTop=responses.scrollHeight;
  processing=!!data.thinking;syncActivity();
 }
});
// Initial handshake is repeated after the view controls have mounted.
post({type:'home-ready'});
const voice=document.createElement('button');voice.textContent='MORPHY';voice.setAttribute('aria-label','Start or stop voice input');voicePanel.replaceChildren(voice);voice.onclick=()=>post({type:'dashboard-voice'});
const transcript=document.createElement('div');transcript.className='dashboard-transcript';transcript.setAttribute('aria-live','polite');document.querySelector('.layout-item.orb').append(transcript);
let voiceState='idle',processing=false,speechPlaying=false;
function syncActivity(){orb?.setActivity(speechPlaying||voiceState==='listening'?'speaking':processing||voiceState==='thinking'?'thinking':'idle');}
window.chrome?.webview?.addEventListener('message',event=>{
 const data=event.data;
 if(data.type==='dashboard-voice-state'){
  voiceState=data.state;voice.textContent=data.state==='idle'?'MORPHY':data.state==='listening'?'Listening':data.state==='starting'?'Starting…':'Thinking';
  voice.classList.toggle('listening',data.state==='listening');
  if(data.transcript!==null&&data.transcript!==undefined)transcript.textContent=data.transcript;
  syncActivity();
 }
 if(data.type==='dashboard-state'&&voiceState==='idle')voice.textContent=data.thinking?'Thinking':'MORPHY';
});
const panel=id=>document.querySelector(`[data-id="${id}"]`);
const graphPanel=panel('c4042c5a-5534-4d0a-84a1-3598ad644766');
const selector=panel('5b7f1b40-9979-42fb-b4a2-f4adc3b7257b');
const select=document.createElement('select');select.setAttribute('aria-label','Performance metric');for(const name of ['CPU','GPU','RAM']){const option=document.createElement('option');option.textContent=name;select.append(option);}selector.replaceChildren(select);
const graph=document.createElementNS('http://www.w3.org/2000/svg','svg');graph.setAttribute('viewBox','0 0 460 80');graph.classList.add('dashboard-graph');graph.setAttribute('aria-label','90 second performance history');
const line=document.createElementNS(graph.namespaceURI,'polyline');line.setAttribute('fill','none');line.setAttribute('stroke','#ac88d1');line.setAttribute('stroke-width','1.5');graph.append(line);graphPanel.replaceChildren(graph);
const metricLabel=document.createElement('span');metricLabel.className='layout-item-label';graphPanel.append(metricLabel);let history=[];
function draw(){const key=select.value.toLowerCase();const last=history.at(-1),now=last?.timestamp;let points=[];for(const sample of history){const value=key==='gpu'?sample.gpu:sample[key]?.usagePercent;if(typeof value==='number')points.push(`${460-(now-sample.timestamp)/90000*460},${78-value*.7}`);}line.setAttribute('points',points.join(' '));const value=key==='gpu'?last?.gpu:last?.[key]?.usagePercent;metricLabel.textContent=`${select.value} · ${typeof value==='number'?value.toFixed(1)+'%':'Unavailable'}`;}
select.onchange=draw;
for(const [id,preset,label] of [['cddfd844-44a2-4718-9daf-bd79980b1b25','Strict','Locked Down'],['9e86debb-bc91-4f32-8305-8fc3415f7c64','Open','Full Access']]){const box=panel(id);const button=document.createElement('button');button.textContent=label;button.dataset.preset=preset;button.onclick=()=>post({type:'dashboard-preset',preset});box.replaceChildren(button);}
const visuals=panel('4734678d-ab2a-4d1f-b0f9-d85e88decb48');visuals.replaceChildren();const gallery=document.createElement('div');gallery.className='dashboard-gallery';visuals.append(gallery);
const viewer=document.createElement('dialog');viewer.className='dashboard-viewer';const fullImage=document.createElement('img');fullImage.alt='Dashboard visual';const close=document.createElement('button');close.textContent='Close';close.onclick=()=>viewer.close();viewer.append(close,fullImage);document.body.append(viewer);let mediaSignature='';
window.chrome?.webview?.addEventListener('message',event=>{
 const data=event.data;
 if(data.type==='dashboard-metrics'){history.push(data);history=history.filter(sample=>sample.timestamp>=data.timestamp-90000);draw();}
 if(data.type==='dashboard-permissions')for(const button of document.querySelectorAll('[data-preset]'))button.setAttribute('aria-pressed',String(button.dataset.preset===data.preset));
 if(data.type==='dashboard-state'){
  const urls=[];for(const response of data.responses||[])for(const match of response.text.matchAll(/!\[([^\]]*)\]\((https:\/\/[^\s)]+)\)/g))urls.push({alt:match[1],url:match[2]});
  const signature=JSON.stringify(urls);if(signature===mediaSignature)return;mediaSignature=signature;gallery.replaceChildren();
  for(const media of urls){const button=document.createElement('button');const image=document.createElement('img');image.src=media.url;image.alt=media.alt||'Dashboard visual';image.loading='lazy';image.onerror=()=>{button.textContent='Visual unavailable';};button.append(image);button.onclick=()=>{fullImage.src=media.url;viewer.showModal();};gallery.append(button);}
 }
});

window.chrome?.webview?.addEventListener('message',event=>{if(event.data.type==='dashboard-speaking'){speechPlaying=!!event.data.active;voice.textContent=speechPlaying?'Speaking':processing?'Thinking':'MORPHY';syncActivity();}});

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
