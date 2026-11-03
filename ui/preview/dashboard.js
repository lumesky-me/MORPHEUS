import { polishedLayout } from './dashboard-baseline.js';
const home=document.querySelector('#home'),orb=document.querySelector('#ultron-orb');
function validate(raw){
 if(raw?.version!==1||!Array.isArray(raw.elements)||raw.elements.length>50)throw Error('Unsupported layout or too many elements.');
 const number=(n,min,max)=>{if(!Number.isFinite(n)||n<min||n>max)throw Error('Invalid layout dimensions.');return n;};
 const viewport=v=>({width:number(v?.width,100,10000),height:number(v?.height,100,10000)});
 const result={version:1,viewport:viewport(raw.viewport),renderViewport:viewport(raw.renderViewport),orbBaseSize:number(raw.orbBaseSize,32,10000),elements:[]};const ids=new Set();
 for(const e of raw.elements){if(!['orb','box'].includes(e.type)||typeof e.id!=='string'||!e.id||e.id.length>100||ids.has(e.id)||typeof e.name!=='string'||e.name.length>80)throw Error('Invalid element.');ids.add(e.id);const item={id:e.id,type:e.type,name:e.name,x:number(e.x,0,10000),y:number(e.y,0,10000),width:number(e.width,32,10000),height:number(e.height,32,10000)};if(item.x+item.width>result.viewport.width+1||item.y+item.height>result.viewport.height+1)throw Error('Element outside reference viewport.');if(e.type==='orb'&&(e.id!=='orb'||e.width!==e.height))throw Error('Orb must be square.');result.elements.push(item);}
 if(result.elements.filter(e=>e.type==='orb').length!==1)throw Error('Layout needs exactly one orb.');return result;
}
let layout=structuredClone(polishedLayout);
try{const saved=localStorage.getItem('morpheus.home-layout.nested.v1');if(saved)layout=validate(JSON.parse(saved));}catch{}
const stage=document.createElement('div');stage.className='dashboard-stage';home.append(stage);stage.append(orb);
const nodes=new Map();const compact=()=>home.clientWidth<760;const bounds=()=>({width:home.clientWidth,height:Math.max(home.clientHeight,layout.viewport.height)});
function render(){
 stage.classList.toggle('compact',compact());
 const b=bounds();let top=16;const placed=new Map();const nested={"afc02d75-13a1-406d-8543-52cbc5e1e9b0":"35a96b13-bf39-492f-9ebc-7df37793089d","5b7f1b40-9979-42fb-b4a2-f4adc3b7257b":"c4042c5a-5534-4d0a-84a1-3598ad644766"};
 for(const e of layout.elements){let node=nodes.get(e.id);if(!node){node=document.createElement('div');node.className='layout-item '+e.type;node.dataset.id=e.id;const label=document.createElement('span');label.className='layout-item-label';node.append(label);stage.append(node);nodes.set(e.id,node);}
 let w=Math.min(e.width,b.width-24),h=e.height,x=Math.min(e.x,b.width-w),y=e.y;
 if(compact()){const parent=placed.get(nested[e.id]);if(parent){w=Math.min(e.width,parent.w-16);x=e.id.startsWith('afc')?parent.x+8:parent.x+parent.w-w-8;y=e.id.startsWith('afc')?parent.y+parent.h-h-8:parent.y+8;}else{w=Math.min(e.width,b.width-32);if(e.type==='orb')h=w;x=(b.width-w)/2;y=top;top+=h+16;}}placed.set(e.id,{x,y,w,h});
 node.style.cssText=`left:${x}px;top:${y}px;width:${w}px;height:${h}px;z-index:${nested[e.id]?2:1}`;node.setAttribute('aria-label',e.name);node.querySelector('.layout-item-label').textContent=e.type==='box'?e.name:'';
 if(e.type==='orb'){const scale=w/layout.orbBaseSize;orb.style.cssText=`inset:auto;width:${layout.renderViewport.width}px;height:${layout.renderViewport.height}px;left:0;top:0;transform:translate(${x+w/2-layout.renderViewport.width/2}px,${y+h/2-layout.renderViewport.height/2}px) scale(${scale});transform-origin:center;pointer-events:none`;}
 }
 for(const [id,node] of nodes)if(!layout.elements.some(e=>e.id===id)){node.remove();nodes.delete(id);}
 stage.style.height=(compact()?Math.max(home.clientHeight,top):b.height)+'px';
}
new ResizeObserver(()=>{if(!home.hidden)render();}).observe(home);
render();
