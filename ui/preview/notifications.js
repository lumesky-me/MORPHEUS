// UI-only projection of Gateway queues/history/events. No notification persistence.
const bell=document.getElementById('notifications');
const badge=document.createElement('span');badge.className='notification-count';badge.hidden=true;bell.append(badge);bell.setAttribute('aria-expanded','false');bell.setAttribute('aria-haspopup','dialog');
const panel=document.createElement('section');panel.className='notification-panel';panel.hidden=true;panel.id='notification-panel';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Notifications');bell.setAttribute('aria-controls',panel.id);
const header=document.createElement('header'),title=document.createElement('strong'),close=document.createElement('button');title.textContent='Notifications';close.textContent='×';close.setAttribute('aria-label','Close notifications');header.append(title,close);panel.append(header);
const body=document.createElement('div');body.className='notification-body';body.setAttribute('role','status');panel.append(body);document.body.append(panel);
let snapshot=null;
const text=(tag,value)=>{const node=document.createElement(tag);node.textContent=value;return node;};
function render(){
 body.replaceChildren();
 if(!snapshot?.connected){body.append(text('p','Gateway unavailable. Alerts cannot be refreshed.'));if(snapshot?.failure)body.append(text('p',snapshot.failure.title));return;}
 const pending=snapshot.pending||[],tasks=snapshot.tasks||[];
 if(pending.length){body.append(text('h3','Pending approvals'));for(const item of pending){const row=document.createElement('article');row.append(text('strong',item.title));if(item.sessionKey)row.append(text('p',item.sessionKey));body.append(row);}body.append(text('p','Review approvals in OpenClaw. This menu does not grant permissions.'));}
 if(snapshot.failure){body.append(text('h3','Latest live failure'));const row=document.createElement('article');row.append(text('strong',snapshot.failure.title),text('p',snapshot.failure.text));body.append(row);}
 if(tasks.length){body.append(text('h3','Task run history'));for(const item of tasks){const row=document.createElement('article');row.append(text('strong',item.title));if(item.text)row.append(text('p',item.text));if(item.createdAt)row.append(text('time',new Date(item.createdAt).toLocaleString()));body.append(row);}}
 if(!pending.length&&!tasks.length&&!snapshot.failure)body.append(text('p','No alerts returned by the available Gateway interfaces.'));
 if(snapshot.unavailable?.length)body.append(text('p','Some alert sources are unavailable or not authorized.'));
 body.append(text('p','Gateway provides no unified notification read/dismiss history here. The badge counts pending approvals.'));
}
function hide(){panel.hidden=true;bell.setAttribute('aria-expanded','false');}
bell.onclick=()=>{panel.hidden=!panel.hidden;bell.setAttribute('aria-expanded',String(!panel.hidden));if(!panel.hidden){render();window.dispatchEvent(new CustomEvent('morpheus-session-command',{detail:{type:'notifications-refresh'}}));close.focus();}};
close.onclick=()=>{hide();bell.focus();};
document.addEventListener('pointerdown',e=>{if(!panel.contains(e.target)&&!bell.contains(e.target))hide();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){hide();bell.focus();}});
window.addEventListener('morpheus-gateway-event',event=>{if(event.detail.type!=='gateway-alerts')return;snapshot=event.detail;const count=snapshot.connected?(snapshot.pending||[]).length:0;badge.hidden=!count;badge.textContent=String(count);bell.setAttribute('aria-label',count?`Notifications, ${count} pending approvals`:'Notifications');if(!panel.hidden)render();});
