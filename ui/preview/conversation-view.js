// Presentation adapter only; no transcript storage, requests or permission decisions.
const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
function inline(node,value){
 for(const token of String(value).split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g)){
  if(token.startsWith('**'))node.append(el('strong','',token.slice(2,-2)));
  else if(token.startsWith('`'))node.append(el('code','',token.slice(1,-1)));
  else if(token.startsWith('[')){const [,label,url]=/^\[([^\]]+)\]\((.+)\)$/.exec(token);const a=el('a','',label);a.href=url;a.target='_blank';a.rel='noopener noreferrer';node.append(a);}
  else node.append(document.createTextNode(token));
 }
}
export function markdown(node,value){
 node.replaceChildren();let code=null,list=null;
 for(const line of String(value||'').split('\n')){
  if(line.startsWith('```')){list=null;if(code)code=null;else{const pre=el('pre'),label=el('span','code-language',line.slice(3).trim()||'Code');code=el('code');const copy=el('button','code-copy','Copy');copy.type='button';copy.setAttribute('aria-label','Copy code');copy.onclick=()=>navigator.clipboard.writeText(codeNode.textContent).then(()=>copy.textContent='Copied').catch(()=>copy.textContent='Select code to copy');const codeNode=code;pre.append(label,copy,code);node.append(pre);}continue;}
  if(code){code.append(document.createTextNode(line+'\n'));continue;}
  if(!line.trim()){list=null;continue;}
  const heading=/^(#{1,4})\s+(.+)$/.exec(line),bullet=/^(?:[-*]|\d+\.)\s+(.+)$/.exec(line);
  if(bullet){if(!list){list=el('ul');node.append(list);}const li=el('li');inline(li,bullet[1]);list.append(li);continue;}
  list=null;const row=el(heading?'h'+Math.min(5,heading[1].length+1):line.startsWith('> ')?'blockquote':'p');inline(row,heading?heading[2]:line.replace(/^> /,''));if(!line)row.append(el('br'));node.append(row);
 }
}
function safeMedia(value,image=false){
 if(typeof value!=='string')return null;
 if(image&&/^data:image\/(png|jpe?g|gif|webp);base64,[A-Za-z0-9+/=]+$/i.test(value))return value;
 try{const url=new URL(value);return url.protocol==='https:'?url.href:null;}catch{return null;}
}
export function renderMessage(node,message,{copy,onDraft,onCut,canRewind=false,canFork=false}={}){
 node.replaceChildren();node.className=`session-message ${message.role==='user'?'user':'assistant'}`;
 const header=el('header','message-heading'),name=el('strong','',message.role==='user'?'You':message.role==='assistant'?'MORPHY':message.toolName||'Tool result');header.append(name);
 if(message.timestamp){const date=new Date(message.timestamp);if(!Number.isNaN(date.getTime())){const time=el('time','',date.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}));time.dateTime=date.toISOString();time.title=date.toLocaleString();header.append(time);}}
 node.append(header);const body=el('div','message-prose');markdown(body,message.text);node.append(body);
 for(const part of message.content||[]){
  if(['thinking','reasoning'].includes(part.type)){const details=el('details','tool-details'),summary=el('summary','','Thinking');details.append(summary,el('pre','',part.thinking||part.text||''));body.append(details);}
  else if(['toolCall','tool_call','tool_use','functionCall'].includes(part.type)){const details=el('details','tool-details');details.append(el('summary','',part.name||'Tool call'),el('pre','',JSON.stringify(part.arguments||part.args||part.input||{},null,2)));body.append(details);}
  else if(part.type==='tool_result'){const details=el('details','tool-details');details.append(el('summary','','Tool result'),el('pre','',typeof part.content==='string'?part.content:JSON.stringify(part.content||part.text||'',null,2)));body.append(details);}
  else if(['image','image_url','input_image','file','document','audio','video'].includes(part.type)){
   const image=['image','image_url','input_image'].includes(part.type),source=part.source||{};
   const raw=part.url||part.image_url?.url||(typeof part.image_url==='string'?part.image_url:null)||source.url||(source.data?`data:${source.media_type||'image/png'};base64,${source.data}`:part.data?`data:${part.mimeType||'image/png'};base64,${part.data}`:null),url=safeMedia(raw,image),name=part.fileName||part.name||part.type;
   if(part.previewOnly){body.append(el('div','message-file',`${name} · Sample attachment`));}
   else if(url&&image){const button=el('button','message-image');button.type='button';const img=el('img');img.src=url;img.alt=part.alt||name;img.loading='lazy';img.onerror=()=>button.replaceWith(el('p','media-unavailable','Image unavailable. Open native Chat for media diagnostics.'));button.append(img);button.setAttribute('aria-label',`View ${img.alt} full size`);button.onclick=()=>showImage(url,img.alt);body.append(button);}
   else if(url){const a=el('a','message-file',name);a.href=url;a.target='_blank';a.rel='noopener noreferrer';body.append(a);}
   else body.append(el('p','media-unavailable',`${name} · Open in native Chat to resolve this media reference.`));
  }else if(!['text'].includes(part.type))body.append(el('p','media-unavailable',`${part.type||'Content'} · Native Chat supports this content.`));
 }
 if(message.role==='toolResult'||message.role==='tool')node.classList.add('tool-result');
 if(message.isError)node.classList.add('message-error');
 const footer=el('footer','message-actions');const usage=message.usage||{};const labels=[message.model,Number.isFinite(usage.input)?`${usage.input.toLocaleString()} input tokens`:null,Number.isFinite(usage.output)?`${usage.output.toLocaleString()} output tokens`:null,message.streaming?'Streaming':null].filter(Boolean);footer.append(el('small','',labels.join(' · ')));
 for(const [label,action] of [['Copy',()=>copy?.(message.text)],...(message.role==='user'?[['Use as draft',()=>onDraft?.(message.text)],...(message.entryId&&canRewind?[['Edit from here',()=>onCut?.('rewind',message.entryId)]]:[]),...(message.entryId&&canFork?[['Fork from here',()=>onCut?.('fork',message.entryId)]]:[])]:[])]){const button=el('button','',label);button.type='button';button.onclick=action;footer.append(button);}node.append(footer);
}
const viewer=el('dialog','media-viewer'),close=el('button','','Close image'),image=el('img');close.type='button';close.onclick=()=>viewer.close();viewer.append(close,image);document.body.append(viewer);
function showImage(url,alt){image.src=url;image.alt=alt;viewer.showModal();}
export function renderActivity(container,items){
 const open=new Set([...container.querySelectorAll('details[open]')].map(n=>n.dataset.id));container.replaceChildren();
 for(const item of items||[]){const row=el('details','tool-details');row.dataset.id=item.itemId;row.open=open.has(item.itemId);const summary=el('summary','',`${item.title||item.name||'Activity'}${item.status?' · '+item.status:''}`);row.append(summary);for(const value of [item.progressText,item.summary,item.error])if(value)row.append(el('pre','',typeof value==='string'?value:JSON.stringify(value,null,2)));container.append(row);}
}
