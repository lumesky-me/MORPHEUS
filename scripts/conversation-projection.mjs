import {createHash} from 'node:crypto';
// Presentation only. Gateway remains the owner of transcript, tools and media.
export const modelRef=m=>m.id?.startsWith(`${m.provider}/`)?m.id:`${m.provider}/${m.id}`;
export function projectMessage(message){
 const content=typeof message.content==='string'?[{type:'text',text:message.content}]:Array.isArray(message.content)?message.content:[];
 return {id:String(message.id||`history-${createHash('sha256').update(JSON.stringify(message)).digest('hex').slice(0,20)}`),role:message.role||'system',
  entryId:typeof message.id==='string'?message.id:null,text:content.filter(p=>p.type==='text').map(p=>p.text||'').join('\n'),content,
  timestamp:message.timestamp,model:message.model,usage:message.usage,
  toolCallId:message.toolCallId,toolName:message.toolName,isError:message.isError,stopReason:message.stopReason};
}
export function historyPage(data){return {olderCursor:data.olderCursor,nextOffset:data.nextOffset,hasMore:!!(data.olderCursor||data.hasMore),truncated:!!data.truncated};}
export function validateAttachments(input){
 if(input===undefined)return undefined;
 if(!Array.isArray(input)||input.length>8)throw Error('Choose at most eight attachments.');
 let bytes=0;
 return input.map(a=>{
  if(!a||typeof a.content!=='string'||!a.content.length||!/^[A-Za-z0-9+/]*={0,2}$/.test(a.content)||a.content.length%4!==0||typeof a.mimeType!=='string'||typeof a.fileName!=='string')throw Error('Invalid attachment.');
  bytes+=Buffer.byteLength(a.content,'base64');if(bytes>6*1024*1024)throw Error('Preview attachments exceed the 6 MB total limit. Use native Chat for larger uploads.');
  return {type:a.mimeType.startsWith('image/')?'image':'file',mimeType:a.mimeType,fileName:a.fileName.slice(0,255),content:a.content,origin:'file'};
 });
}
