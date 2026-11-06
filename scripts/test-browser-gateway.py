"""Browser Gateway transport fixture, not a live model test."""
from playwright.sync_api import sync_playwright
from pathlib import Path
import json
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/browser-gateway';out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1060,'height':946})
 events=[{'sequence':1,'data':{'type':'dashboard-state','ready':True,'thinking':False,'responses':[]}}];sent=[]
 def route(r):
  if r.request.method=='POST':
   sent.append(r.request.post_data_json)
   events.extend([{'sequence':2,'data':{'type':'dashboard-submitted'}},{'sequence':3,'data':{'type':'dashboard-state','ready':True,'thinking':True,'responses':[{'id':'reply','text':'Streaming response fixture','streaming':True}]}}])
   r.fulfill(content_type='application/json',body='{"accepted":true}')
  else:
   after=int(r.request.url.split('after=')[1]);r.fulfill(content_type='application/json',body=json.dumps({'enabled':True,'events':[e for e in events if e['sequence']>after]}))
 page.route('**/api/dashboard?*',route);page.route('**/api/dashboard',route)
 page.goto('http://127.0.0.1:4214/');field=page.get_by_label('Message dashboard');field.fill('hello');send=page.get_by_role('button',name='Send message',exact=True);send.click()
 page.wait_for_function("()=>document.querySelector('.dashboard-response')?.textContent==='Streaming response fixture'")
 assert sent==[{'type':'dashboard-send','text':'hello'}]
 assert field.input_value()==''
 assert 'hello' not in page.locator('.dashboard-responses').inner_text()
 events.append({'sequence':4,'data':{'type':'dashboard-state','ready':True,'thinking':False,'responses':[{'id':'reply','text':'## Completed fixture','streaming':False}]}})
 page.wait_for_function("()=>document.querySelector('.dashboard-response h4')?.textContent==='Completed fixture'")
 page.screenshot(path=str(out/'response-fixture.png'))
 events.extend([{'sequence':5,'data':{'type':'dashboard-state','ready':False,'thinking':False,'responses':[{'id':'reply','text':'Completed fixture','streaming':False}]}},{'sequence':6,'data':{'type':'dashboard-error','message':'Gateway disconnected fixture'}}])
 page.wait_for_function("()=>document.querySelector('.dashboard-status').textContent==='Gateway disconnected fixture'")
 field.fill('draft');assert send.is_disabled()
 b.close()
print('PASS browser send, acknowledgement, assistant-only delta/final, dedicated transport command, disconnected disablement. Synthetic protocol fixture only.')
