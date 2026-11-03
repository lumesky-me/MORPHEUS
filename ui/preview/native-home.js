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
 window.chrome?.webview?.postMessage({type:'home-ready'});
}catch(error){document.querySelector('#orb-status').textContent='Home graphics could not load.';console.error(error);}
window.addEventListener('pagehide',()=>orb?.dispose());
