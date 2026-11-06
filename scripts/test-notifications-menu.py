"""Browser notification/session-menu projection fixtures; no production data."""
from playwright.sync_api import sync_playwright
from pathlib import Path
import json
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/top-controls/menu-regression';out.mkdir(parents=True,exist_ok=True)
methods=['sessions.patch','sessions.create','sessions.reset','sessions.compact','sessions.delete','chat.history']
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1060,'height':946});events=[];commands=[]
 def emit(data):events.append({'sequence':len(events)+1,'data':data})
 alerts={'type':'gateway-alerts','connected':True,'pending':[{'id':'fixture-approval','title':'exec approval requested','sessionKey':'agent:main:one'}],'tasks':[{'id':'fixture-task','title':'Task ok','text':'Completed task fixture','createdAt':1000}],'unavailable':[]}
 emit(alerts);emit({'type':'sessions-list','ready':True,'mainKey':'agent:main:main','methods':methods,'sessions':[{'key':'agent:main:one','label':'One','sessionId':'fixture-id'},{'key':'agent:main:main','label':'Main','isMain':True}]})
 def route(r):
  if r.request.method=='POST':
   d=r.request.post_data_json;commands.append(d)
   if d['type']=='notifications-refresh':emit(alerts)
   r.fulfill(content_type='application/json',body='{"accepted":true}')
  else:
   after=int(r.request.url.split('after=')[1]);r.fulfill(content_type='application/json',body=json.dumps({'enabled':True,'events':[e for e in events if e['sequence']>after]}))
 page.route('**/api/dashboard?*',route);page.route('**/api/dashboard',route);page.goto('http://127.0.0.1:4217/')
 bell=page.locator('#notifications');bell.click();page.wait_for_selector('.notification-body article');assert page.locator('.notification-count').inner_text()=='1';assert 'Completed task fixture' in page.locator('.notification-body').inner_text();assert page.get_by_role('button',name='Dismiss',exact=True).count()==0
 page.screenshot(path=str(out/'notifications.png'))
 page.get_by_role('button',name='Back from notifications').click();page.get_by_role('button',name='Chat',exact=True).click();page.get_by_role('button',name='Actions for One',exact=True).click()
 expected=['Pin session','Rename session','Mark as unread','Archive session','Fork conversation','Copy session key','Copy session ID','Copy transcript','Reset session','Compact session','Export transcript','Delete session']
 assert page.get_by_role('menuitem').all_text_contents()==expected
 page.screenshot(path=str(out/'session-menu.png'))
 page.get_by_role('menuitem',name='Pin session',exact=True).click();page.wait_for_function("()=>true");page.wait_for_timeout(100);assert any(c.get('action')=='pin' for c in commands)
 page.get_by_role('button',name='Actions for Main',exact=True).click();assert page.get_by_role('menuitem',name='Archive session',exact=True).is_disabled();assert page.get_by_role('menuitem',name='Delete session',exact=True).is_disabled();page.keyboard.press('Escape')
 alerts={**alerts,'pending':[],'failure':{'id':'failure','title':'Agent failed','text':'Live failure fixture'}};emit(alerts);bell.click();page.wait_for_function("()=>document.querySelector('.notification-body').textContent.includes('Live failure fixture')");assert page.locator('.notification-count').is_hidden()
 alerts['connected']=False;emit(alerts);page.wait_for_function("()=>document.querySelector('.notification-body').textContent.includes('Gateway unavailable')")
 b.close()
print('PASS actual browser notification projection/badge/task history/disconnection; no fabricated read/dismiss; session menu actions and main-session protection. Synthetic fixtures only.')
