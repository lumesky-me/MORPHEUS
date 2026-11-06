"""Browser session dashboard fixture; not live Gateway/Windows proof."""
from playwright.sync_api import sync_playwright
from pathlib import Path
import json
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/session-dashboard';out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1060,'height':946});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 events=[];commands=[];sessions=[{'key':'agent:main:one','label':'Session one'}]
 def emit(data):events.append({'sequence':len(events)+1,'data':data})
 def listing():emit({'type':'sessions-list','ready':True,'sessions':list(sessions)})
 def conversation(key):emit({'type':'sessions-conversation','ready':True,'key':key,'thinking':False,'messages':[{'id':'u','role':'user','text':'Existing user message'},{'id':'a','role':'assistant','text':'Existing AI response'}] if key else []})
 listing()
 def route(r):
  if r.request.method=='POST':
   data=r.request.post_data_json;commands.append(data);kind=data['type']
   if kind=='sessions-list':listing()
   elif kind=='sessions-open-dashboard':conversation(None)
   elif kind=='sessions-select':conversation(data['key'])
   elif kind=='sessions-create':sessions.append({'key':'agent:main:new','label':'New session'});listing();conversation('agent:main:new')
   elif kind=='sessions-rename':sessions[-1]['label']=data['name'];listing()
   elif kind=='sessions-delete':assert data['confirmed'];sessions.pop();listing();conversation(None)
   elif kind=='conversation-send':emit({'type':'sessions-submitted','key':data['key']});emit({'type':'sessions-conversation','ready':True,'key':data['key'],'thinking':True,'messages':[{'id':'a','role':'assistant','text':'Streaming fixture','streaming':True}]})
   r.fulfill(content_type='application/json',body='{"accepted":true}')
  else:
   after=int(r.request.url.split('after=')[1]);r.fulfill(content_type='application/json',body=json.dumps({'enabled':True,'events':[e for e in events if e['sequence']>after]}))
 page.route('**/api/dashboard?*',route);page.route('**/api/dashboard',route);page.goto('http://127.0.0.1:4215/')
 page.wait_for_selector('.morphy-nameplate');assert page.get_by_role('button',name='Start or stop voice input').count()==0
 assert page.locator('.morphy-nameplate').evaluate('(e)=>e.tabIndex')==-1
 page.get_by_role('button',name='Chat',exact=True).click();page.get_by_role('button',name='Session one',exact=True).wait_for()
 assert page.locator('.composer-dock').is_hidden();assert page.locator('#conversation-sidebar').is_visible();assert page.locator('#sidebar-toggle').count()==0
 before=len(commands);page.locator('.composer').evaluate('(e)=>e.dispatchEvent(new Event("submit",{cancelable:true}))');assert len(commands)==before
 page.screenshot(path=str(out/'dashboard.png'))
 page.get_by_role('button',name='Session one',exact=True).click();page.wait_for_selector('#chat.session-open');assert 'Existing user message' in page.locator('#messages').inner_text()
 page.locator('#draft').fill('hello selected');page.locator('#draft').press('Enter');page.wait_for_function("()=>document.querySelector('#messages').textContent.includes('Streaming fixture')")
 assert any(c['type']=='conversation-send' and c['key']=='agent:main:one' for c in commands)
 page.get_by_role('button',name='Chat',exact=True).click();assert page.locator('.composer-dock').is_hidden()
 page.get_by_role('button',name='Create New Session',exact=True).click();page.wait_for_selector('#chat.session-open')
 page.once('dialog',lambda d:d.accept('Renamed'));page.get_by_role('button',name='Rename New session',exact=True).click();page.get_by_role('button',name='Renamed',exact=True).wait_for()
 page.once('dialog',lambda d:d.dismiss());page.get_by_role('button',name='Delete Renamed',exact=True).click();assert len(sessions)==2
 page.once('dialog',lambda d:d.accept());page.get_by_role('button',name='Delete Renamed',exact=True).click();page.wait_for_function("()=>!document.querySelector('#chat').classList.contains('session-open')")
 page.set_viewport_size({'width':390,'height':800});page.screenshot(path=str(out/'compact.png'));assert page.locator('#conversation-sidebar').is_visible()
 assert not errors,errors
 b.close()
print('PASS decorative Home nameplate, Chat dashboard no composer/submission, permanent sidebar, selected conversations, Enter send, create/rename/delete confirmation, Chat return and compact layout. Gateway fixtures only.')
