# Host protocol fixture only; does not verify native services.
from playwright.sync_api import sync_playwright
from pathlib import Path
import argparse
parser=argparse.ArgumentParser();parser.add_argument('--url',default='http://127.0.0.1:4190/native-home.html');parser.add_argument('--output',default='AUDIT/evidence/dashboard-bridge');args=parser.parse_args()
out=Path(__file__).resolve().parents[1]/args.output;out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1060,'height':898});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.add_init_script("window.fixtureMessages=[];window.fixtureListeners=[];window.chrome.webview={postMessage:m=>fixtureMessages.push(m),addEventListener:(type,fn)=>fixtureListeners.push(fn)};window.deliver=d=>fixtureListeners.forEach(fn=>fn({data:d}));")
 page.goto(args.url);page.wait_for_selector('.dashboard-input input')
 page.evaluate("()=>deliver({type:'dashboard-state',ready:true,thinking:false,responses:[]})")
 page.locator('.dashboard-input input').fill('A real draft');page.locator('.dashboard-input button').first.click();assert page.locator('.dashboard-input input').input_value()=='A real draft'
 assert page.evaluate("()=>fixtureMessages.at(-1).type")=='dashboard-send'
 page.evaluate("()=>deliver({type:'dashboard-state',ready:true,thinking:true,responses:[]})")
 assert page.locator('.dashboard-input button').first.is_disabled()
 page.evaluate("()=>document.querySelector('.dashboard-input').dispatchEvent(new Event('submit',{cancelable:true}))")
 assert page.evaluate("()=>fixtureMessages.filter(m=>m.type==='dashboard-send').length")==1
 page.evaluate("()=>deliver({type:'dashboard-submitted'})");assert page.locator('.dashboard-input input').input_value()==''
 page.evaluate("()=>deliver({type:'dashboard-state',ready:true,thinking:true,responses:[{id:'reply',text:'## Answer\\n**Streamed** text',streaming:true}]})")
 assert 'Streamed' in page.locator('.dashboard-response').inner_text();assert 'A real draft' not in page.locator('.dashboard-responses').inner_text()
 page.evaluate("()=>deliver({type:'dashboard-state',ready:true,thinking:false,responses:[{id:'reply',text:'## Answer\\n**Streamed** text',streaming:false}]})")
 assert page.locator('.dashboard-response strong').inner_text()=='Streamed'
 page.evaluate("()=>deliver({type:'dashboard-voice-state',state:'listening',transcript:'Live words'})");assert page.locator('.dashboard-transcript').inner_text()=='Live words'
 page.screenshot(path=str(out/'listening-fixture.png'))
 assert page.get_by_role('button',name='Start or stop voice input').inner_text()=='M O R P H Y'
 page.evaluate("()=>deliver({type:'dashboard-voice-state',state:'thinking',transcript:''})");assert page.locator('.dashboard-transcript').evaluate('(node)=>!node.classList.contains("visible")')
 page.evaluate("()=>deliver({type:'dashboard-metrics',timestamp:1000,cpu:{usagePercent:25},ram:{usagePercent:50},gpu:20})");assert '25.0%' in page.locator('.dashboard-graph + span').inner_text()
 page.get_by_label('Performance metric').select_option(label='RAM');assert '50.0%' in page.locator('.dashboard-graph + span').inner_text()
 page.get_by_label('Performance metric').select_option(label='CPU, GPU, RAM')
 assert page.locator('.dashboard-graph path').evaluate_all('(lines)=>lines.every(line=>line.style.display!=="none" && line.getAttribute("d"))')
 assert page.locator('.dashboard-visual-board .dashboard-transcript').count()==1
 page.wait_for_function("document.querySelector('.dashboard-transcript').textContent === ''")
 assert 'CPU · 25.0%' in page.locator('.dashboard-legend').inner_text()
 page.evaluate("()=>deliver({type:'dashboard-permissions',preset:'Strict'})")
 assert page.get_by_role('button',name='Lock Down',exact=True).get_attribute('aria-pressed')=='true'
 assert page.get_by_role('button',name='Full Access',exact=True).get_attribute('aria-pressed')=='false'
 page.evaluate("()=>deliver({type:'dashboard-permissions',preset:'Open'})")
 assert page.get_by_role('button',name='Full Access',exact=True).get_attribute('aria-pressed')=='true'
 page.get_by_role('button',name='Full Access',exact=True).click();assert page.evaluate('()=>fixtureMessages.at(-1).preset')=='Open'
 page.evaluate("()=>deliver({type:'dashboard-state',ready:true,thinking:true,responses:[]})")
 page.locator('.dashboard-input button',has_text='Stop').click();assert page.evaluate('()=>fixtureMessages.at(-1).type')=='dashboard-stop'
 page.route('https://fixture.invalid/output.png',lambda route:route.fulfill(content_type='image/svg+xml',body='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><rect width="16" height="16" fill="purple"/></svg>'))
 page.evaluate("()=>deliver({type:'dashboard-state',ready:true,thinking:false,responses:[{id:'reply',text:'![Actual-output fixture](https://fixture.invalid/output.png)',streaming:false}]})")
 assert page.locator('.dashboard-gallery img').count()==1
 page.locator('.dashboard-gallery button').click();assert page.locator('.dashboard-viewer').is_visible();page.locator('.dashboard-viewer button').click()
 page.screenshot(path=str(out/'fixture-desktop.png'))
 page.set_viewport_size({'width':390,'height':800});page.wait_for_timeout(100);assert not errors,errors;page.screenshot(path=str(out/'fixture-compact.png'))
 print('PASS host-protocol fixture: submission acknowledgement, assistant-only formatting, transcription clear, metrics selector, preset command, cancellation command, image viewer, resize. This does not test native services.')
 b.close()
