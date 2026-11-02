import { sidebarBreakpoint } from './layout.js';
const icons={home:'<path d="m3 11 9-8 9 8v10h-6v-7H9v7H3z"/>',chat:'<path d="M7 4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6l-6 3v-3a4 4 0 0 1-2-4V8a4 4 0 0 1 4-4z"/>',schedule:'<circle cx="12" cy="12" r="10"/><path d="M12 5v7l5 3"/>',more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',settings:'<path d="m9 3 1-2h4l1 2 3 2 3 1v4l-2 2v3l1 3-3 3-3-1-3 1-3-1-3-1-2-3 1-3-1-3 1-3 3-1z"/><circle cx="12" cy="12" r="4"/>',notifications:'<path d="M5 17V9a7 7 0 0 1 14 0v8l2 2H3zM10 22h4"/>','sidebar-toggle':'<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M10 3v18"/>','search-toggle':'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>','new-chat':'<path d="M12 3v18M3 12h18"/>',attach:'<path d="m9 13 6-6a3 3 0 0 1 4 4l-8 8a5 5 0 0 1-7-7l8-8a2 2 0 0 1 3 3l-8 8"/>',microphone:'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M6 10v3a6 6 0 0 0 12 0v-3M12 19v3M9 22h6"/>',send:'<path d="m3 10 18-7-7 18-3-8zM11 13 21 3"/>'};
for(const [name,path] of Object.entries(icons)){const el=document.querySelector(`button[data-page="${name}"]`)||document.querySelector(`button[id="${name}"]`);if(el)el.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;}
const $=id=>document.getElementById(id);let page='home';let sidebarOpen=innerWidth>=sidebarBreakpoint;
const narrowLayout=matchMedia(`(max-width: ${sidebarBreakpoint-1}px)`);
let wideSidebarOpen=true;
function presentSidebar(){
 $('chat').classList.toggle('sidebar-collapsed',!sidebarOpen);
 $('sidebar-toggle').setAttribute('aria-expanded',String(page==='chat'&&sidebarOpen));
 document.querySelector('.conversation-panel').inert=page==='chat'&&sidebarOpen&&narrowLayout.matches;
 $('sidebar-scrim').hidden=!(page==='chat'&&sidebarOpen&&narrowLayout.matches);
}
narrowLayout.addEventListener('change',()=>{sidebarOpen=narrowLayout.matches?false:wideSidebarOpen;presentSidebar();});
function navigate(next){page=next;for(const name of ['home','chat']){$(name).hidden=name!==next;const b=document.querySelector(`[data-page="${name}"]`);if(name===next)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');}$('sidebar-toggle').disabled=next!=='chat';$('more-menu').hidden=true;$('more').setAttribute('aria-expanded','false');presentSidebar();}
for(const b of document.querySelectorAll('[data-page]'))b.onclick=()=>navigate(b.dataset.page);
$('sidebar-toggle').onclick=()=>{if(page!=='chat')return;sidebarOpen=!sidebarOpen;if(!narrowLayout.matches)wideSidebarOpen=sidebarOpen;presentSidebar();};
$('sidebar-scrim').onclick=()=>{sidebarOpen=false;presentSidebar();$('sidebar-toggle').focus();};
$('more').onclick=()=>{const open=$('more-menu').hidden;$('more-menu').hidden=!open;$('more').setAttribute('aria-expanded',String(open));if(open)$('more-menu').querySelector('button').focus();};
function handoff(title,text='This function uses the existing native Windows implementation. Open it in MORPHEUS for real sessions, settings and Gateway access. This browser preview has no native connection, credentials or settings storage.'){$('handoff-title').textContent=title;$('handoff-text').textContent=text;$('handoff').showModal();}
for(const b of document.querySelectorAll('[data-handoff]'))b.onclick=()=>handoff(b.dataset.handoff);
for(const [id,title] of Object.entries({settings:'Separate Settings window',connection:'Connection details',notifications:'Notifications',attach:'Attachments',microphone:'Phase 3 speech input'}))$(id).onclick=()=>handoff(title);
for(const [id,title] of Object.entries({'model-picker':'Model selection unavailable','reasoning-picker':'Reasoning options unavailable'}))$(id).onclick=()=>handoff(title,'This browser preview has no connected model catalog. Use the native MORPHEUS composer to select actual configured models and supported reasoning levels for the active session. No model or reasoning setting has been changed.');
$('close-dialog').onclick=()=>$('handoff').close();
$('preview-info').onclick=()=>handoff('Development preview','Browser presentation only. Shared tokens and SVG assets also ship in WinUI. There is no authenticated Gateway, real model, microphone, notification feed or desktop automation here. The red status indicates no connection. No private conversations or settings are loaded. The header and favicon use the supplied MORPHEUS crest.');
$('new-chat').onclick=()=>{$('draft').value='';if(narrowLayout.matches){sidebarOpen=false;presentSidebar();}$('draft').focus();$('session-note').textContent='New composition preview. Creating a persistent session requires the Windows app.';};
$('search-toggle').onclick=()=>{$('search').hidden=!$('search').hidden;if(!$('search').hidden)$('search').focus();};
$('search').oninput=()=>{$('session-note').textContent=$('search').value?'No browser sessions match. Native session search is available in Windows.':'Native sessions appear in the Windows app.';};
document.querySelector('.composer').onsubmit=e=>{e.preventDefault();if($('draft').value.trim())handoff('Message not sent','Your draft remains here. This preview does not send messages or fabricate assistant responses. Use the native MORPHEUS chat to reach the actual agent.');};
$('draft').onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();document.querySelector('.composer').requestSubmit();}};
$('draft').oninput=()=>{$('draft').style.height='auto';$('draft').style.height=Math.min(160,$('draft').scrollHeight)+'px';};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(narrowLayout.matches&&sidebarOpen&& !$('handoff').open){sidebarOpen=false;presentSidebar();$('sidebar-toggle').focus();}$('more-menu').hidden=true;$('more').setAttribute('aria-expanded','false');}});
document.addEventListener('click',e=>{if(!e.target.closest('.menu-anchor')){$('more-menu').hidden=true;$('more').setAttribute('aria-expanded','false');}});
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

import {createOrbScene,HandTracker} from './ultron/orb.js';
let orb;let tracker;
function stopGestures(){tracker?.stop();tracker=null;$('orb-gestures').textContent='Enable gestures';$('orb-status').textContent='';}
function syncOrb(){
 if(!$('home').hidden&&!orb){try{orb=createOrbScene($('ultron-orb'));}catch(e){$('ultron-orb').textContent='WebGL is unavailable in this browser.';console.error(e);}}
 if($('home').hidden&&orb){stopGestures();orb.dispose();orb=null;}
}
new MutationObserver(syncOrb).observe($('home'),{attributes:true,attributeFilter:['hidden']});syncOrb();
$('orb-in').onclick=()=>orb?.zoomIn();$('orb-out').onclick=()=>orb?.zoomOut();$('orb-reset').onclick=()=>orb?.resetView();
$('ultron-orb').onkeydown=e=>{if(['+','=','-','_','r','R'].includes(e.key)){e.preventDefault();if('+= '.includes(e.key))orb?.zoomIn();else if('-_'.includes(e.key))orb?.zoomOut();else orb?.resetView();}};
new MutationObserver(()=>{$('empty-conversation').hidden=$('messages').childElementCount>0;}).observe($('messages'),{childList:true,subtree:true});

$('orb-gestures').onclick=async()=>{
 if(tracker){stopGestures();return;}
 $('orb-status').textContent='Starting camera…';
 tracker=new HandTracker($('orb-video'),$('orb-overlay'),{onRotate:(x,y)=>orb?.rotateBy(x,y),onZoom:f=>orb?.zoomBy(f),onStatus:s=>{$('orb-status').textContent=s.mode;}});
 try{await tracker.start();$('orb-gestures').textContent='Disable gestures';}catch(e){stopGestures();$('orb-status').textContent='Camera or hand tracking unavailable';}
};
$('home').addEventListener('keydown',e=>{if((e.key==='g'||e.key==='G')&&!e.repeat){e.preventDefault();$('orb-gestures').click();}});
