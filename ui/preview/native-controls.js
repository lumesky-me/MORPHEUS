const settings=document.getElementById('settings'),connection=document.getElementById('connection');
const announce=document.createElement('div');announce.className='control-announcement';announce.setAttribute('role','status');document.body.append(announce);
function report(title,text){document.getElementById('handoff-title').textContent=title;document.getElementById('handoff-text').textContent=text;const dialog=document.getElementById('handoff');if(!dialog.open)dialog.showModal();}
export async function launchNativeWindow(window){
 try{
  const response=await fetch('/api/native-window',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({window})});
  const data=await response.json();if(!response.ok||!data.requested)throw Error(data.error||'Native Windows integration is unavailable.');
  announce.textContent='Windows accepted the native window launch request. Window visibility could not be confirmed by this preview.';
 }catch(error){report(window==='settings'?'Settings unavailable':'Native diagnostics unavailable',error.message);}
}
settings.onclick=()=>launchNativeWindow('settings');
const panel=document.createElement('section');panel.className='gateway-status-panel';panel.hidden=true;panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Gateway connection status');panel.id='gateway-status-panel';connection.setAttribute('aria-controls',panel.id);connection.setAttribute('aria-haspopup','dialog');connection.setAttribute('aria-expanded','false');
const heading=document.createElement('strong');heading.textContent='Gateway connection';const detail=document.createElement('p');detail.setAttribute('role','status');const scope=document.createElement('p');scope.textContent='Browser preview shows its Gateway operator channel only. Windows node and overall native diagnostics require the Windows application.';
const diagnostics=document.createElement('button');diagnostics.textContent='Open Windows connection diagnostics';diagnostics.onclick=()=>launchNativeWindow('connection');const close=document.createElement('button');close.textContent='Close';close.onclick=()=>{panel.hidden=true;connection.setAttribute('aria-expanded','false');connection.focus();};panel.append(heading,detail,scope,diagnostics,close);document.body.append(panel);
const labels={connecting:'Connecting',connected:'Connected',pairingRequired:'Pairing required',error:'Connection error',disconnected:'Disconnected',unavailable:'Unavailable'};
function update(state){const label=labels[state]||labels.unavailable;const dot=connection.querySelector('.status');dot.classList.toggle('healthy',state==='connected');dot.classList.toggle('connecting',['connecting','pairingRequired'].includes(state));dot.classList.toggle('disconnected',!['connected','connecting','pairingRequired'].includes(state));connection.setAttribute('aria-label',`Gateway operator connection: ${label}`);connection.title=`Gateway operator connection: ${label}`;detail.textContent=`Operator channel: ${label}`;}
update('unavailable');
connection.onclick=()=>{panel.hidden=!panel.hidden;connection.setAttribute('aria-expanded',String(!panel.hidden));if(!panel.hidden)close.focus();};
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden)close.click();});
document.addEventListener('pointerdown',event=>{if(!panel.contains(event.target)&&!connection.contains(event.target)){panel.hidden=true;connection.setAttribute('aria-expanded','false');}});
window.addEventListener('morpheus-gateway-event',event=>{if(event.detail.type==='gateway-status')update(event.detail.state);});
