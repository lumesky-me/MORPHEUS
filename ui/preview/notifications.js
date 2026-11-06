// UI-only projection of Gateway queues/history/events. No notification persistence.
const bell=document.getElementById('notifications');
const badge=document.createElement('span');badge.className='notification-count';badge.hidden=true;bell.append(badge);bell.setAttribute('aria-label','Notifications');
const panel=document.getElementById('notifications-page');bell.setAttribute('aria-controls',panel.id);
const header=document.createElement('header'),title=document.createElement('strong'),close=document.createElement('button');title.textContent='Notifications';close.textContent='← Back';close.setAttribute('aria-label','Back from notifications');header.append(title,close);panel.append(header);
const body=document.createElement('div');body.className='notification-body';body.setAttribute('role','status');panel.append(body);
let snapshot=null;
function metadata(row,item){if(item.category)row.append(text('small',item.category));if(item.createdAt)row.append(text('time',new Date(item.createdAt).toLocaleString()));}
const text=(tag,value)=>{const node=document.createElement(tag);node.textContent=value;return node;};
function render(){
 body.replaceChildren();
 if(!snapshot?.connected){body.append(text('p','Gateway unavailable. Alerts cannot be refreshed.'));if(snapshot?.failure)body.append(text('p',snapshot.failure.title));return;}
 const pending=snapshot.pending||[],tasks=snapshot.tasks||[];
 if(pending.length){body.append(text('h3','Pending approvals'));for(const item of pending){const row=document.createElement('article');row.append(text('strong',item.title));if(item.sessionKey)row.append(text('p',item.sessionKey));metadata(row,item);body.append(row);}body.append(text('p','Review approvals in OpenClaw. This page does not grant permissions.'));}
 if(snapshot.failure){body.append(text('h3','Latest live failure'));const row=document.createElement('article');row.append(text('strong',snapshot.failure.title),text('p',snapshot.failure.text));metadata(row,snapshot.failure);body.append(row);}
 if(tasks.length){body.append(text('h3','Task run history'));for(const item of tasks){const row=document.createElement('article');row.append(text('strong',item.title));if(item.text)row.append(text('p',item.text));metadata(row,item);body.append(row);}}
 if(!pending.length&&!tasks.length&&!snapshot.failure)body.append(text('p','No alerts returned by the available Gateway interfaces.'));
 if(snapshot.unavailable?.length)body.append(text('p','Some alert sources are unavailable or not authorized.'));
 body.append(text('p','Gateway provides no unified notification read/dismiss history here. The badge counts pending approvals.'));
}
bell.onclick=()=>{window.dispatchEvent(new Event('morpheus-open-notifications'));render();window.dispatchEvent(new CustomEvent('morpheus-session-command',{detail:{type:'notifications-refresh'}}));close.focus();};
close.onclick=()=>{window.dispatchEvent(new Event('morpheus-close-notifications'));bell.focus();};
window.addEventListener('morpheus-gateway-event',event=>{if(event.detail.type!=='gateway-alerts')return;snapshot=event.detail;const count=snapshot.connected?(snapshot.pending||[]).length:0;badge.hidden=!count;badge.textContent=String(count);bell.setAttribute('aria-label',count?`Notifications, ${count} pending approvals`:'Notifications');if(!panel.hidden)render();});
