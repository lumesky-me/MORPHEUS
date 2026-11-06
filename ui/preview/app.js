import('./dashboard-app.js').catch(error=>{
 document.querySelector('#orb-status').textContent='Dashboard assets could not load. Stop and restart the preview server, then refresh.';
 console.error(error);
});
const icons={home:'<path d="m3 11 9-8 9 8v10h-6v-7H9v7H3z"/>',chat:'<path d="M7 4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6l-6 3v-3a4 4 0 0 1-2-4V8a4 4 0 0 1 4-4z"/>',schedule:'<circle cx="12" cy="12" r="10"/><path d="M12 5v7l5 3"/>',more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',settings:'<path d="M9 3h6l.7 3 2 .9 2.8-.9 3 5.2-2.2 2.1.1 2.2 2.1 2-3 5.2-2.9-.9-1.9 1-.7 3H9l-.7-3-2-1-2.8.9-3-5.2 2.1-2v-2.2L.5 11.2l3-5.2 2.8.9 2-.9z" transform="translate(2 0) scale(.83)"/><circle cx="12" cy="12" r="3"/>',notifications:'<path d="M5 17V9a7 7 0 0 1 14 0v8l2 2H3zM10 22h4"/>','sidebar-toggle':'<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M10 3v18"/>','search-toggle':'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>','new-chat':'<path d="M12 3v18M3 12h18"/>',attach:'<path d="m9 13 6-6a3 3 0 0 1 4 4l-8 8a5 5 0 0 1-7-7l8-8a2 2 0 0 1 3 3l-8 8"/>',microphone:'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M6 10v3a6 6 0 0 0 12 0v-3M12 19v3M9 22h6"/>',send:'<path d="m3 10 18-7-7 18-3-8zM11 13 21 3"/>'};
for(const [name,path] of Object.entries(icons)){const el=document.querySelector(`button[data-page="${name}"]`)||document.querySelector(`button[id="${name}"]`);if(el&&name!=='home')el.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;}
const $=id=>document.getElementById(id);let page='home';
function navigate(next){page=next;for(const name of ['home','chat']){$(name).hidden=name!==next;const b=document.querySelector(`[data-page="${name}"]`);if(name===next)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');}if(next==='chat')window.dispatchEvent(new Event('morpheus-chat-dashboard'));}
for(const b of document.querySelectorAll('[data-page]'))b.onclick=()=>navigate(b.dataset.page);
function handoff(title,text='This action is provided by the native Windows application. The browser preview does not implement it.'){$('handoff-title').textContent=title;$('handoff-text').textContent=text;$('handoff').showModal();}
for(const b of document.querySelectorAll('[data-handoff]'))b.onclick=()=>handoff(b.dataset.handoff);
for(const [id,title] of Object.entries({settings:'Separate Settings window',connection:'Connection details',notifications:'Notifications',attach:'Attachments',microphone:'Phase 3 speech input'}))$(id).onclick=()=>handoff(title);
for(const [id,title] of Object.entries({'model-picker':'Model selection unavailable','reasoning-picker':'Reasoning options unavailable'}))$(id).onclick=()=>handoff(title,'This browser preview has no connected model catalog. Use the native MORPHEUS composer to select actual configured models and supported reasoning levels for the active session. No model or reasoning setting has been changed.');
$('close-dialog').onclick=()=>$('handoff').close();
$('search-toggle').onclick=()=>{$('search').hidden=!$('search').hidden;if(!$('search').hidden)$('search').focus();};
navigate('home');

// Decorative feedback only: does not activate voice or submit a request.
const coreTouch=document.querySelector('.core-touch');
let corePulseTimer;
coreTouch.addEventListener('click',()=>{
 clearTimeout(corePulseTimer);
 coreTouch.classList.remove('pressed');
 void coreTouch.offsetWidth;
 coreTouch.classList.add('pressed');
 corePulseTimer=setTimeout(()=>coreTouch.classList.remove('pressed'),650);
});

new MutationObserver(()=>{$('empty-conversation').hidden=$('chat').classList.contains('session-open')&&$('messages').childElementCount>0;}).observe($('messages'),{childList:true,subtree:true});

import('./chat-sessions.js').catch(()=>{$('session-note').textContent='Session controls could not load. Restart the preview and refresh.';});
