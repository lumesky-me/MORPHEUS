"""Top-control transport/navigation fixtures; no Windows launch proof."""
from playwright.sync_api import sync_playwright
from pathlib import Path
import json
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/top-controls';out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1060,'height':946});events=[];commands=[]
 def emit(d):events.append({'sequence':len(events)+1,'data':d})
 emit({'type':'sessions-list','ready':True,'methods':['sessions.patch'],'sessions':[{'key':'agent:main:one','label':'One'}]})
 emit({'type':'gateway-status','state':'connected'})
 alerts={'type':'gateway-alerts','connected':True,'pending':[{'id':'fixture','title':'Approval fixture','category':'exec approval','createdAt':1000}],'tasks':[{'id':'task','title':'Task completed fixture','text':'Backend history fixture','createdAt':1000}],'unavailable':[]};emit(alerts)
 def route(r):
  if r.request.method=='POST':
   data=r.request.post_data_json;commands.append(data)
   if data['type']=='notifications-refresh':emit(alerts)
   if data['type']=='sessions-select':emit({'type':'sessions-conversation','ready':True,'key':data['key'],'messages':[{'id':'reply','role':'assistant','text':'Existing history fixture'}]})
   r.fulfill(content_type='application/json',body='{"accepted":true}')
  else:
   after=int(r.request.url.split('after=')[1]);r.fulfill(content_type='application/json',body=json.dumps({'enabled':True,'events':[e for e in events if e['sequence']>after]}))
 page.route('**/api/dashboard?*',route);page.route('**/api/dashboard',route)
 page.goto('http://127.0.0.1:4217/');page.wait_for_selector('.gateway-status-panel',state='attached')
 page.get_by_role('button',name='Settings',exact=True).click();page.wait_for_selector('#handoff[open]');assert 'Windows' in page.locator('#handoff-text').inner_text();page.locator('#close-dialog').click()
 page.wait_for_function("()=>document.querySelector('#connection .status').classList.contains('healthy')")
 page.locator('#connection').click();assert 'Operator channel: Connected' in page.locator('.gateway-status-panel').inner_text();assert 'Windows node' in page.locator('.gateway-status-panel').inner_text()
 page.screenshot(path=str(out/'status.png'));page.locator('.gateway-status-panel button',has_text='Close').click()
 page.get_by_role('button',name='Chat',exact=True).click();page.get_by_role('button',name='One',exact=True).click();page.wait_for_selector('#chat.session-open');page.locator('#draft').fill('Draft kept')
 page.locator('#notifications').click();assert page.locator('#chat').is_hidden();page.wait_for_selector('#notifications-page .notification-body article');assert 'Backend history fixture' in page.locator('#notifications-page').inner_text();assert page.locator('.notification-panel').count()==0
 page.screenshot(path=str(out/'notifications-page.png'))
 page.get_by_role('button',name='Back from notifications').click();assert page.locator('#chat.session-open').is_visible();assert page.locator('#draft').input_value()=='Draft kept';assert 'Existing history fixture' in page.locator('#messages').inner_text()
 emit({'type':'gateway-status','state':'connecting'});page.wait_for_function("()=>document.querySelector('#connection .status').classList.contains('connecting')")
 emit({'type':'gateway-status','state':'disconnected'});page.wait_for_function("()=>document.querySelector('#connection .status').classList.contains('disconnected')")
 page.locator('#notifications').click();page.set_viewport_size({'width':390,'height':800});page.screenshot(path=str(out/'notifications-compact.png'))
 b.close()
print('PASS Settings unavailable handling, true-status projection, native diagnostics limitation, dedicated Notifications page/back preserves conversation draft/history, compact rendering. Synthetic Gateway; no actual Windows launch.')
