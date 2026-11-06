"""State-wiring fixture only: the production orb renderer is unchanged."""
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox']);page=b.new_page()
 page.add_init_script("window.activity=[];window.sent=[];window.listeners=[];window.chrome.webview={postMessage:m=>sent.push(m),addEventListener:(t,f)=>listeners.push(f)};window.deliver=d=>listeners.forEach(f=>f({data:d}));")
 page.route('**/ultron/orb.js',lambda r:r.fulfill(content_type='text/javascript',body="export function createOrbScene(){return {setActivity:s=>window.activity.push(s),setVisible:()=>{},dispose:()=>{}}}"))
 page.goto('http://127.0.0.1:4215/');page.wait_for_selector('.morphy-nameplate')
 page.wait_for_function('()=>activity.length>0')
 for data,want in [({'type':'dashboard-state','ready':True,'thinking':True,'responses':[]},'thinking'),({'type':'dashboard-state','ready':True,'thinking':False,'responses':[]},'idle'),({'type':'dashboard-state','ready':True,'thinking':True,'responses':[]},'thinking'),({'type':'dashboard-error','message':'Failure fixture'},'idle'),({'type':'dashboard-state','ready':False,'thinking':True,'responses':[]},'idle')]:
  page.evaluate('(data)=>deliver(data)',data);assert page.evaluate('activity.at(-1)')==want
 count=page.evaluate('activity.length');page.locator('.morphy-nameplate').click();assert page.evaluate('activity.length')==count;assert not page.evaluate("sent.some(m=>m.type==='dashboard-voice')")
 offline=b.new_page();offline.route('**/api/dashboard?*',lambda r:r.fulfill(content_type='application/json',body='{"enabled":false}'));offline.goto('http://127.0.0.1:4215/');offline.get_by_role('button',name='Chat',exact=True).click();offline.wait_for_selector('#new-chat:disabled');assert offline.locator('.composer-dock').is_hidden();assert 'unavailable' in offline.locator('#session-note').inner_text()
 b.close()
print('PASS real-event thinking/idle/error/disconnected mapping, noninteractive nameplate, no voice command, honest unavailable session controls. Renderer spy only, not native animation proof.')
