import {formatResponse} from './dashboard-app.js';
const $=id=>document.getElementById(id),chat=$('chat'),composer=document.querySelector('.composer-dock');
let ready=false,sessions=[],selected=null,thinking=false,pending=false,models=[],reasoning=[],methods=[],mainKey='main';
const drafts=new Map(),messageNodes=new Map();
const note=$('session-note');note.setAttribute('role','status');
function command(type,extra={}){if(!ready){note.textContent='Gateway unavailable. Start the preview with --gateway-chat.';return;}window.dispatchEvent(new CustomEvent('morpheus-session-command',{detail:{type,...extra}}));}
function showDashboard(notify=false){if(selected)drafts.set(selected,$('draft').value);selected=null;thinking=false;pending=false;chat.classList.remove('session-open');composer.hidden=true;$('messages').replaceChildren();messageNodes.clear();$('empty-conversation').hidden=false;if(notify)command('sessions-open-dashboard');command('sessions-list');}
window.addEventListener('morpheus-chat-dashboard',()=>showDashboard(true));
function list(){
 $('session-list').replaceChildren();
 for(const session of [...sessions].sort((a,b)=>Number(!!a.archived)-Number(!!b.archived)||Number(!!b.pinned)-Number(!!a.pinned))){const label=session.label||session.displayName||session.key;if(!label.toLowerCase().includes($('search').value.toLowerCase()))continue;
  const row=document.createElement('div');row.className='session-row';const open=document.createElement('button');open.className='session-open';open.textContent=label;open.onclick=()=>command('sessions-select',{key:session.key});
  const more=document.createElement('button');more.textContent='⋯';more.setAttribute('aria-label',`Actions for ${label}`);more.setAttribute('aria-haspopup','menu');more.setAttribute('aria-controls','session-actions-menu');more.setAttribute('aria-expanded','false');more.onclick=()=>{if(!menu.hidden&&menuAnchor===more)closeMenu();else openMenu(session,more);};row.oncontextmenu=event=>{event.preventDefault();openMenu(session,more);};
  const flags=[session.pinned?'Pinned':'',session.unread?'Unread':'',session.archived?'Archived':''].filter(Boolean);if(flags.length){const state=document.createElement('span');state.className='session-state';state.textContent=flags.join(' · ');open.append(state);}
  row.append(open,more);$('session-list').append(row);
 }
 note.textContent=ready?(sessions.length?'':'No sessions yet.'):'Gateway unavailable. Start the preview with --gateway-chat.';
 $('new-chat').disabled=!ready;
}
function updateComposer(){$('send').disabled=!selected||!ready||thinking||pending||!$('draft').value.trim();$('draft').readOnly=pending;}
window.addEventListener('morpheus-gateway-event',event=>{
 const data=event.detail;
 if(data.type==='sessions-list'){ready=!!data.ready;sessions=data.sessions||[];methods=data.methods||[];mainKey=data.mainKey||'main';list();updateComposer();}
 if(data.type==='sessions-conversation'){
  ready=!!data.ready;if(!data.key){showDashboard();return;}if(selected!==data.key){if(selected)drafts.set(selected,$('draft').value);$('draft').value=drafts.get(data.key)||'';pending=false;messageNodes.clear();$('messages').replaceChildren();}selected=data.key;thinking=!!data.thinking;if(!ready)pending=false;models=data.models||[];reasoning=data.reasoning||[];chat.classList.add('session-open');composer.hidden=false;
  const container=$('messages'),atBottom=container.scrollHeight-container.scrollTop-container.clientHeight<60,ids=new Set();
  for(const [index,message] of (data.messages||[]).entries()){
   ids.add(message.id);let node=messageNodes.get(message.id);
   if(!node){node=document.createElement('article');node.className=`session-message ${message.role}`;node.setAttribute('aria-label',message.role==='user'?'You':'MORPHY');messageNodes.set(message.id,node);}
   if(node.dataset.text!==message.text||node.dataset.streaming!==String(!!message.streaming)){node.dataset.text=message.text;node.dataset.streaming=String(!!message.streaming);if(message.streaming)node.textContent=message.text;else formatResponse(node,message.text);}
   if(container.children[index]!==node)container.insertBefore(node,container.children[index]||null);
  }
  for(const [id,node] of messageNodes)if(!ids.has(id)){node.remove();messageNodes.delete(id);}
  $('empty-conversation').hidden=!!container.childElementCount;if(atBottom)container.scrollTop=container.scrollHeight;updateComposer();
 }
 if(data.type==='sessions-submitted'&&data.key===selected){$('draft').value='';drafts.delete(selected);$('draft').style.height='';pending=false;updateComposer();}
 if(data.type==='sessions-error'){note.textContent=data.message;pending=false;updateComposer();}
});
const menu=document.createElement('div');menu.className='session-menu';menu.id='session-actions-menu';menu.hidden=true;menu.setAttribute('role','menu');document.body.append(menu);let menuAnchor;
function closeMenu(){menu.hidden=true;menuAnchor?.setAttribute('aria-expanded','false');}
async function copyText(value){try{await navigator.clipboard.writeText(value);note.textContent='Copied.';}catch{showTranscript(value,false);}}
function openMenu(session,anchor){
 closeMenu();menuAnchor=anchor;anchor.setAttribute('aria-expanded','true');menu.replaceChildren();const key=session.key,label=session.label||session.displayName||key,main=session.isMain===true||key===mainKey||key==='main'||key.endsWith(':main')||key.includes(':main:main');
 function item(text,method,action,disabled=false,destructive=false){const button=document.createElement('button');button.textContent=text;button.type='button';button.setAttribute('role','menuitem');button.disabled=disabled||!!method&&(!ready||!methods.includes(method));if(destructive)button.className='destructive';if(button.disabled)button.title='Unavailable for this session or Gateway';button.onclick=()=>{closeMenu();action();};menu.append(button);}
 const mutate=action=>command('sessions-action',{key,action,...(['pin','unread','archive'].includes(action)?{value:!session[{pin:'pinned',unread:'unread',archive:'archived'}[action]]}:{})});
 item(session.pinned?'Unpin session':'Pin session','sessions.patch',()=>mutate('pin'),!!session.archived);
 item('Rename session','sessions.patch',()=>{const name=prompt('Rename session',label);if(name?.trim())command('sessions-rename',{key,name});},!!session.archived);
 item(session.unread?'Mark as read':'Mark as unread','sessions.patch',()=>mutate('unread'),!!session.archived);
 item(session.archived?'Unarchive session':'Archive session','sessions.patch',()=>mutate('archive'),main);
 item('Fork conversation','sessions.create',()=>mutate('fork'));
 item('Copy session key',null,()=>copyText(key));item('Copy session ID',null,()=>copyText(session.sessionId),!session.sessionId);
 item('Copy transcript','chat.history',()=>mutate('copy'));
 item('Reset session','sessions.reset',()=>{if(confirm(`Reset “${label}”? This starts a fresh conversation.`))command('sessions-action',{key,action:'reset',confirmed:true});},!!session.archived,true);
 item('Compact session','sessions.compact',()=>{if(confirm(`Compact the context of “${label}”?`))command('sessions-action',{key,action:'compact',confirmed:true});},!!session.archived);
 item('Export transcript','chat.history',()=>mutate('export'));
 item('Delete session','sessions.delete',()=>{if(confirm(`Delete session “${label}” and its conversation history?`))command('sessions-delete',{key,confirmed:true});},main,true);
 const bounds=anchor.getBoundingClientRect();menu.hidden=false;menu.style.left=Math.max(8,Math.min(innerWidth-232,bounds.right-224))+'px';menu.style.top=Math.max(8,Math.min(innerHeight-menu.offsetHeight-8,bounds.bottom+4))+'px';menu.querySelector('button:not(:disabled)')?.focus();
}
menu.onkeydown=event=>{const buttons=[...menu.querySelectorAll('button:not(:disabled)')],index=buttons.indexOf(document.activeElement);if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){event.preventDefault();buttons[event.key==='Home'?0:event.key==='End'?buttons.length-1:(index+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length]?.focus();}if(event.key==='Escape'){closeMenu();menuAnchor?.focus();}};
document.addEventListener('pointerdown',event=>{if(!menu.contains(event.target)&&!menuAnchor?.contains(event.target))closeMenu();});
const transcriptDialog=document.createElement('dialog');transcriptDialog.className='transcript-copy';const transcriptTitle=document.createElement('h2'),transcriptArea=document.createElement('textarea'),copyButton=document.createElement('button'),closeTranscript=document.createElement('button');transcriptTitle.textContent='Transcript';transcriptArea.readOnly=true;transcriptArea.setAttribute('aria-label','Transcript');copyButton.textContent='Copy';copyButton.onclick=()=>copyText(transcriptArea.value);closeTranscript.textContent='Close';closeTranscript.onclick=()=>transcriptDialog.close();transcriptDialog.append(transcriptTitle,transcriptArea,copyButton,closeTranscript);document.body.append(transcriptDialog);
function showTranscript(text,partial){transcriptTitle.textContent=partial?'Available transcript (partial history)':'Transcript';transcriptArea.value=text;if(!transcriptDialog.open)transcriptDialog.showModal();}
window.addEventListener('morpheus-gateway-event',event=>{const data=event.detail;if(data.type!=='sessions-transcript')return;if(data.partial)note.textContent='Gateway returned only partial transcript history.';if(data.action==='copy'){showTranscript(data.text,data.partial);return;}const link=document.createElement('a'),url=URL.createObjectURL(new Blob([data.text],{type:'text/markdown'}));link.href=url;link.download='morpheus-transcript.md';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
$('new-chat').onclick=()=>command('sessions-create');$('new-chat').title='Create New Session';
$('search').oninput=list;
document.querySelector('.composer').onsubmit=event=>{event.preventDefault();if(!selected||!ready||thinking||pending||!$('draft').value.trim())return;pending=true;updateComposer();command('conversation-send',{key:selected,text:$('draft').value});};
$('draft').oninput=()=>{$('draft').style.height='auto';$('draft').style.height=Math.min(160,$('draft').scrollHeight)+'px';updateComposer();};
$('draft').onkeydown=event=>{if(event.key==='Enter'&&!event.shiftKey&&!event.isComposing){event.preventDefault();document.querySelector('.composer').requestSubmit();}};
// Existing model/reasoning controls use only options advertised by Gateway.
const chooser=document.createElement('dialog'),title=document.createElement('h2'),select=document.createElement('select'),apply=document.createElement('button'),cancel=document.createElement('button');apply.textContent='Apply';cancel.textContent='Cancel';cancel.onclick=()=>chooser.close();chooser.append(title,select,apply,cancel);document.body.append(chooser);
function choose(kind){if(!selected||!ready)return;const values=kind==='model'?models.map(m=>({id:`${m.provider}/${m.id}`,name:m.name||m.id})):reasoning.map(id=>({id,name:id}));if(!values.length){note.textContent='Gateway has not advertised options for this control.';return;}title.textContent=kind==='model'?'Model':'Reasoning';select.setAttribute('aria-label',title.textContent);select.replaceChildren();for(const value of values){const option=document.createElement('option');option.value=value.id;option.textContent=value.name;select.append(option);}apply.onclick=()=>{command('conversation-patch',{key:selected,...(kind==='model'?{model:select.value}:{thinkingLevel:select.value})});chooser.close();};chooser.showModal();}
$('model-picker').onclick=()=>choose('model');$('model-picker').setAttribute('aria-label','Select model');$('model-picker').title='Select model for this conversation';$('model-picker').querySelector('.picker-label').textContent='Model';
$('reasoning-picker').onclick=()=>choose('reasoning');$('reasoning-picker').setAttribute('aria-label','Select reasoning level');$('reasoning-picker').title='Choose a Gateway-supported reasoning level';
// Voice is deferred; do not expose a new microphone path.
$('microphone').hidden=true;
showDashboard();list();
