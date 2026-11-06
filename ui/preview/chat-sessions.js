import {formatResponse} from './dashboard-app.js';
const $=id=>document.getElementById(id),chat=$('chat'),composer=document.querySelector('.composer-dock');
let ready=false,sessions=[],selected=null,thinking=false,pending=false,models=[],reasoning=[];
const drafts=new Map(),messageNodes=new Map();
const note=$('session-note');note.setAttribute('role','status');
function command(type,extra={}){if(!ready){note.textContent='Gateway unavailable. Start the preview with --gateway-chat.';return;}window.dispatchEvent(new CustomEvent('morpheus-session-command',{detail:{type,...extra}}));}
function showDashboard(notify=false){if(selected)drafts.set(selected,$('draft').value);selected=null;thinking=false;pending=false;chat.classList.remove('session-open');composer.hidden=true;$('messages').replaceChildren();messageNodes.clear();$('empty-conversation').hidden=false;if(notify)command('sessions-open-dashboard');command('sessions-list');}
window.addEventListener('morpheus-chat-dashboard',()=>showDashboard(true));
function list(){
 $('session-list').replaceChildren();
 for(const session of sessions){const label=session.label||session.displayName||session.key;if(!label.toLowerCase().includes($('search').value.toLowerCase()))continue;
  const row=document.createElement('div');row.className='session-row';const open=document.createElement('button');open.className='session-open';open.textContent=label;open.onclick=()=>command('sessions-select',{key:session.key});
  const rename=document.createElement('button');rename.textContent='✎';rename.setAttribute('aria-label',`Rename ${label}`);rename.onclick=()=>{const name=prompt('Rename session',label);if(name?.trim())command('sessions-rename',{key:session.key,name});};
  const remove=document.createElement('button');remove.textContent='×';remove.setAttribute('aria-label',`Delete ${label}`);remove.onclick=()=>{if(confirm(`Delete session “${label}” and its conversation history?`))command('sessions-delete',{key:session.key,confirmed:true});};row.append(open,rename,remove);$('session-list').append(row);
 }
 note.textContent=ready?(sessions.length?'':'No sessions yet.'):'Gateway unavailable. Start the preview with --gateway-chat.';
 $('new-chat').disabled=!ready;
}
function updateComposer(){$('send').disabled=!selected||!ready||thinking||pending||!$('draft').value.trim();$('draft').readOnly=pending;}
window.addEventListener('morpheus-gateway-event',event=>{
 const data=event.detail;
 if(data.type==='sessions-list'){ready=!!data.ready;sessions=data.sessions||[];list();updateComposer();}
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
