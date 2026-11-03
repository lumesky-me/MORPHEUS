import { originalLayout, polishedLayout } from './dashboard-baseline.js';
// Development browser preview only. No application data or native state is accessed.
const home=document.querySelector('#home'),orb=document.querySelector('#ultron-orb');
const key='morpheus.home-layout.polished.v1';
const initial={width:home.clientWidth,height:home.clientHeight};
function defaults(){return structuredClone(polishedLayout);}
function validate(raw){
 if(raw?.version!==1||!Array.isArray(raw.elements)||raw.elements.length>50)throw Error('Unsupported layout or too many elements.');
 const number=(n,min,max)=>{if(!Number.isFinite(n)||n<min||n>max)throw Error('Invalid layout dimensions.');return n;};
 const viewport=v=>({width:number(v?.width,100,10000),height:number(v?.height,100,10000)});
 const result={version:1,viewport:viewport(raw.viewport),renderViewport:viewport(raw.renderViewport),orbBaseSize:number(raw.orbBaseSize,32,10000),elements:[]};const ids=new Set();
 for(const e of raw.elements){if(!['orb','box'].includes(e.type)||typeof e.id!=='string'||!e.id||e.id.length>100||ids.has(e.id)||typeof e.name!=='string'||e.name.length>80)throw Error('Invalid element.');ids.add(e.id);const item={id:e.id,type:e.type,name:e.name,x:number(e.x,0,10000),y:number(e.y,0,10000),width:number(e.width,32,10000),height:number(e.height,32,10000)};if(item.x+item.width>result.viewport.width+1||item.y+item.height>result.viewport.height+1)throw Error('Element outside reference viewport.');if(e.type==='orb'&&(e.id!=='orb'||e.width!==e.height))throw Error('Orb must be square.');result.elements.push(item);}
 if(result.elements.filter(e=>e.type==='orb').length!==1)throw Error('Layout needs exactly one orb.');return result;
}
let layout=defaults(),editing=false,selected='orb',snap=false,grid=false,dirty=false;
try{const saved=localStorage.getItem(key);if(saved)layout=validate(JSON.parse(saved));}catch{ /* Invalid local data never prevents Home from loading. */ }
const stage=document.createElement('div');stage.className='dashboard-stage';home.append(stage);stage.append(orb);
const entry=document.createElement('button');entry.id='edit-layout';entry.className='layout-entry';entry.textContent='Edit Layout';home.append(entry);
const panel=document.createElement('aside');panel.className='layout-tools';panel.hidden=true;panel.setAttribute('aria-label','Layout editor');
panel.innerHTML=`<strong>Home layout · Development</strong><p>Drag elements. Arrow keys nudge 1px; Shift nudges 10px. Orb resizing stays square.</p><div class="layout-actions"><button id="add-box">Add Box</button><button id="save-layout">Save Layout</button><button id="reset-layout">Reset Layout</button><button id="restore-original">Original arrangement</button><button id="restore-previous">Previous saved layout</button></div><label><input id="layout-grid" type="checkbox"> Alignment grid</label><label><input id="layout-snap" type="checkbox"> Snap to 8px grid</label><label>Selected element<select id="layout-selection"></select></label><label>Name<input id="layout-name" maxlength="80"></label><div class="layout-fields">${['x','y','width','height'].map(n=>`<label>${n}<input id="layout-${n}" type="number" step="1" min="0"></label>`).join('')}</div><button id="delete-box">Delete Box</button><div class="layout-actions"><button id="export-layout">Export JSON</button><button id="copy-layout">Copy JSON</button><button id="import-layout">Import JSON</button></div><input id="layout-file" type="file" accept="application/json,.json" hidden><p id="layout-status" role="status"></p><button id="hide-layout-tools">Hide tools</button>`;
home.append(panel);const $=id=>panel.querySelector('#'+id);const message=text=>{$('layout-status').textContent=text;};
const nodes=new Map();const compact=()=>home.clientWidth<760;const bounds=()=>({width:home.clientWidth,height:Math.max(home.clientHeight,layout.viewport.height)});
function constrain(e){const b=layout.viewport;e.width=Math.max(32,Math.min(e.width,b.width));e.height=Math.max(32,Math.min(e.height,b.height));if(e.type==='orb')e.width=e.height=Math.min(e.width,e.height);e.x=Math.round(Math.max(0,Math.min(e.x,b.width-e.width)));e.y=Math.round(Math.max(0,Math.min(e.y,b.height-e.height)));e.width=Math.round(e.width);e.height=Math.round(e.height);}
function fields(){const e=layout.elements.find(e=>e.id===selected);$('layout-selection').replaceChildren(...layout.elements.map(item=>{const o=document.createElement('option');o.value=item.id;o.textContent=item.name;return o;}));$('layout-selection').value=selected;if(!e)return;$('layout-name').value=e.name;for(const n of ['x','y','width','height']){$('layout-'+n).value=e[n];$('layout-'+n).disabled=compact();}$('delete-box').disabled=e.type==='orb';}
function render(){
 stage.classList.toggle('editing',editing);stage.classList.toggle('show-grid',editing&&grid);stage.classList.toggle('compact',compact());
 const b=bounds();let top=16;
 for(const e of layout.elements){let node=nodes.get(e.id);if(!node){node=document.createElement('div');node.className='layout-item '+e.type;node.dataset.id=e.id;node.tabIndex=0;const label=document.createElement('span');label.className='layout-item-label';node.append(label);for(const edge of ['n','s','e','w','ne','nw','se','sw']){const h=document.createElement('span');h.className='resize-handle '+edge;h.dataset.edge=edge;node.append(h);}stage.append(node);nodes.set(e.id,node);}
 let w=Math.min(e.width,b.width-24),h=e.height,x=Math.min(e.x,b.width-w),y=e.y;
 if(compact()){w=Math.min(e.width,b.width-32);if(e.type==='orb')h=w;x=(b.width-w)/2;y=top;top+=h+16;}
 node.style.cssText=`left:${x}px;top:${y}px;width:${w}px;height:${h}px`;node.classList.toggle('selected',editing&&e.id===selected);node.setAttribute('aria-label',e.name);node.querySelector('.layout-item-label').textContent=editing?`${e.name} · ${Math.round(w)} × ${Math.round(h)}`:e.type==='box'?e.name:'';
 if(e.type==='orb'){const scale=w/layout.orbBaseSize;orb.style.cssText=`inset:auto;width:${layout.renderViewport.width}px;height:${layout.renderViewport.height}px;left:0;top:0;transform:translate(${x+w/2-layout.renderViewport.width/2}px,${y+h/2-layout.renderViewport.height/2}px) scale(${scale});transform-origin:center;pointer-events:none`;}
 }
 for(const [id,node] of nodes)if(!layout.elements.some(e=>e.id===id)){node.remove();nodes.delete(id);}
 stage.style.height=(compact()?Math.max(home.clientHeight,top):b.height)+'px';fields();
}
function change(){dirty=true;render();message('Unsaved changes. Save Layout to keep this arrangement.');}
$('hide-layout-tools').onclick=()=>{panel.hidden=true;entry.textContent='Show tools / Exit';};
// Clicking the entry while tools are hidden first restores the tools.
entry.onclick=()=>{if(editing&&panel.hidden){panel.hidden=false;entry.textContent='Exit Edit Mode';return;}editing=!editing;panel.hidden=!editing;entry.textContent=editing?'Exit Edit Mode':'Edit Layout';render();if(editing)message(compact()?'Compact view stacks elements. Widen to arrange desktop positions.':'Select an element to edit.');};
$('add-box').onclick=()=>{if(layout.elements.length>=50)return message('Maximum 50 elements.');const count=layout.elements.length;const e={id:crypto.randomUUID(),type:'box',name:'Box '+count,x:24+(count*24)%240,y:24+(count*24)%240,width:240,height:160};constrain(e);layout.elements.push(e);selected=e.id;change();};
$('layout-selection').onchange=()=>{selected=$('layout-selection').value;render();};
$('layout-name').onchange=()=>{layout.elements.find(e=>e.id===selected).name=$('layout-name').value.trim()||'Untitled';change();};
for(const n of ['x','y','width','height'])$('layout-'+n).onchange=()=>{const e=layout.elements.find(e=>e.id===selected),value=Number($('layout-'+n).value);if(!Number.isFinite(value))return;e[n]=value;if(e.type==='orb'&&['width','height'].includes(n))e.width=e.height=value;constrain(e);change();};
$('delete-box').onclick=()=>{if(selected==='orb')return;layout.elements=layout.elements.filter(e=>e.id!==selected);selected='orb';change();};
$('layout-grid').onchange=()=>{grid=$('layout-grid').checked;render();};$('layout-snap').onchange=()=>{snap=$('layout-snap').checked;};
const json=()=>JSON.stringify(layout,null,2);
$('save-layout').onclick=()=>{try{localStorage.setItem(key,json());dirty=false;message('Layout saved locally.');}catch{message('Local storage unavailable. Export JSON to keep your layout.');}};
$('restore-original').onclick=()=>{layout=structuredClone(originalLayout);selected='orb';change();message('Original supplied arrangement restored, including its overlaps. Save to keep this version.');window.dispatchEvent(new Event('resize'));};
$('restore-previous').onclick=()=>{try{const saved=localStorage.getItem('morpheus.home-layout.v1');if(!saved)return message('No previous browser layout found.');layout=validate(JSON.parse(saved));selected='orb';change();window.dispatchEvent(new Event('resize'));}catch{message('Previous layout could not be loaded.');}};
$('reset-layout').onclick=()=>{if(!confirm('Reset the layout and remove the saved arrangement?'))return;layout=defaults();selected='orb';try{localStorage.removeItem(key);}catch{}dirty=false;render();message('Original layout restored.');};
$('export-layout').onclick=()=>{const url=URL.createObjectURL(new Blob([json()],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='morpheus-home-layout.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('copy-layout').onclick=async()=>{try{await navigator.clipboard.writeText(json());message('Layout JSON copied.');}catch{message('Clipboard unavailable. Use Export JSON.');}};
$('import-layout').onclick=()=>$('layout-file').click();$('layout-file').onchange=async()=>{const file=$('layout-file').files[0];if(!file)return;try{if(file.size>100000)throw Error('JSON file too large.');const next=validate(JSON.parse(await file.text()));layout=next;selected='orb';change();message('Layout imported. Save Layout to keep it.');window.dispatchEvent(new Event('resize'));}catch(e){message('Import rejected: '+e.message);}$('layout-file').value='';};
let drag;
stage.addEventListener('pointerdown',event=>{if(!editing||compact()||event.button!==0)return;const node=event.target.closest('.layout-item');if(!node)return;selected=node.dataset.id;const e=layout.elements.find(e=>e.id===selected);drag={pointer:event.pointerId,startX:event.clientX,startY:event.clientY,original:{...e},edge:event.target.dataset.edge||''};node.setPointerCapture(event.pointerId);node.focus();event.preventDefault();render();});
stage.addEventListener('pointermove',event=>{if(!drag||event.pointerId!==drag.pointer)return;const e=layout.elements.find(e=>e.id===selected),o=drag.original;const round=v=>snap?Math.round(v/8)*8:Math.round(v);const dx=round(event.clientX-drag.startX),dy=round(event.clientY-drag.startY);Object.assign(e,o);const edge=drag.edge;if(!edge){e.x=round(o.x+dx);e.y=round(o.y+dy);}else{if(edge.includes('e'))e.width=o.width+dx;if(edge.includes('s'))e.height=o.height+dy;if(edge.includes('w')){e.x=o.x+dx;e.width=o.width-dx;}if(edge.includes('n')){e.y=o.y+dy;e.height=o.height-dy;}if(e.type==='orb'){const size=Math.max(32,edge.includes('e')||edge.includes('w')?e.width:e.height);e.width=e.height=size;if(edge.includes('w'))e.x=o.x+o.width-size;if(edge.includes('n'))e.y=o.y+o.height-size;}}
 constrain(e);dirty=true;render();});
for(const type of ['pointerup','pointercancel','lostpointercapture'])stage.addEventListener(type,()=>{if(drag){drag=null;message('Unsaved changes. Save Layout to keep this arrangement.');}});
stage.addEventListener('keydown',event=>{if(!editing||compact()||!event.target.closest('.layout-item'))return;const e=layout.elements.find(e=>e.id===selected),step=event.shiftKey?10:1;const directions={ArrowLeft:[-step,0],ArrowRight:[step,0],ArrowUp:[0,-step],ArrowDown:[0,step]};if(directions[event.key]){event.preventDefault();e.x+=directions[event.key][0];e.y+=directions[event.key][1];constrain(e);change();}if(event.key==='Delete'&&e.type==='box')$('delete-box').click();});
new ResizeObserver(()=>{if(!home.hidden)render();}).observe(home);
window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue='';}});
render();
