"""Focused browser proof with isolated Gateway fixtures; not real model/native proof."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/conversation-view';out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--enable-unsafe-swiftshader'])
 page=browser.new_page(viewport={'width':1280,'height':960});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto('http://127.0.0.1:4218/?conversation-preview=1');page.get_by_role('button',name='Chat',exact=True).click();page.get_by_role('button',name='MORPHY UI Test · Preview only',exact=True).click()
 assert page.locator('#chat.session-open').is_visible();assert page.locator('.message-prose pre code').count()==1;assert page.locator('#send').is_disabled()
 page.locator('.conversation-activity summary').first.click();page.locator('#messages').evaluate('(n)=>n.scrollTop=0');page.screenshot(path=str(out/'preview-desktop.png'))
 page.set_viewport_size({'width':390,'height':844});page.screenshot(path=str(out/'preview-compact.png'));assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
 page.get_by_role('button',name='← Conversations',exact=True).click();assert not page.locator('#chat').evaluate("n=>n.classList.contains('session-open')")
 # Transport fixtures on a separate page; the demo never reaches these APIs.
 page=browser.new_page(viewport={'width':1280,'height':960});page.on('pageerror',lambda e:errors.append(str(e)));events=[];commands=[]
 def emit(d):events.append({'sequence':len(events)+1,'data':d})
 methods=['chat.send','chat.abort','chat.history','sessions.patch']
 emit({'type':'sessions-list','ready':True,'methods':methods,'sessions':[{'key':'agent:main:one','label':'Research'}]})
 state={'type':'sessions-conversation','key':'agent:main:one','ready':True,'thinking':False,'methods':methods,'info':{'label':'Research','model':'test/model','totalTokens':1500,'contextTokens':32000,'thinkingLevel':'high'},'models':[{'id':'model','provider':'test','name':'Fixture model'}],'reasoning':[{'id':'high','label':'High'}],'page':{'hasMore':True,'olderCursor':'older'},'messages':[{'id':'u','role':'user','text':'Question','timestamp':1793968200000},{'id':'a','role':'assistant','text':'A **formatted** answer.','usage':{'input':100,'output':30},'content':[{'type':'toolCall','name':'read','arguments':{'path':'reference.txt'}}]}],'activity':[{'itemId':'tool','title':'Read reference','status':'running','progressText':'Reading'}]}
 def route(r):
  if r.request.method=='POST':
   data=r.request.post_data_json;commands.append(data)
   if data['type']=='sessions-select':emit(state)
   if data['type']=='conversation-send':
    emit({'type':'sessions-submitted','key':state['key']});emit({**state,'type':'sessions-stream','thinking':True,'status':'Responding','messages':[{'id':'live','role':'assistant','text':'Streaming response','streaming':True}]})
   if data['type']=='conversation-stop':emit({**state,'thinking':False,'status':'Cancelled'})
   r.fulfill(content_type='application/json',body='{"accepted":true}')
  else:
   after=int(r.request.url.split('after=')[1]);r.fulfill(content_type='application/json',body=json.dumps({'enabled':True,'events':[e for e in events if e['sequence']>after]}))
 page.route('**/api/dashboard?*',route);page.route('**/api/dashboard',route);page.goto('http://127.0.0.1:4218/');page.get_by_role('button',name='Chat',exact=True).click();page.get_by_role('button',name='Research',exact=True).click();page.wait_for_selector('#chat.session-open')
 assert '1,500 / 32,000 context' in page.locator('.conversation-header').inner_text();assert page.locator('.message-prose strong').inner_text()=='formatted'
 page.get_by_role('button',name='Load earlier messages').click();page.wait_for_timeout(100);assert any(c['type']=='conversation-history' for c in commands)
 page.get_by_role('button',name='Select reasoning level',exact=True).click();assert page.get_by_role('combobox',name='Reasoning',exact=True).locator('option').all_text_contents()==['Gateway default','High'];page.get_by_role('button',name='Cancel',exact=True).click()
 page.locator('input[type=file]').set_input_files({'name':'reference.txt','mimeType':'text/plain','buffer':b'Actual selected bytes'})
 page.wait_for_selector('.composer-attachments button');page.locator('#draft').fill('Read the attachment');page.locator('#draft').press('Enter');page.wait_for_selector('#chat .session-message:last-child',state='visible');page.wait_for_function("()=>document.querySelector('#draft').value===''")
 sent=next(c for c in commands if c['type']=='conversation-send');assert sent['key']=='agent:main:one';assert sent['attachments'][0]['fileName']=='reference.txt'
 page.get_by_role('button',name='Stop response',exact=True).click();page.wait_for_function("()=>document.querySelector('.conversation-progress').textContent==='Cancelled'");assert any(c['type']=='conversation-stop' for c in commands)
 page.screenshot(path=str(out/'gateway-fixture.png'));assert not errors,errors
 browser.close()
print('PASS preview isolation/read-only, code/tool/context presentation, compact overflow, history control, advertised reasoning, attachment bytes/send acknowledgement, streaming and cancellation. Synthetic transport; no Windows/live inference.')
