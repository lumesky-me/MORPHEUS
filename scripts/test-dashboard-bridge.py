# Host protocol fixture only; does not verify native services.
from playwright.sync_api import sync_playwright
from pathlib import Path
import argparse
parser=argparse.ArgumentParser();parser.add_argument('--url',default='http://127.0.0.1:4190/native-home.html');args=parser.parse_args()
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/dashboard-bridge';out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1060,'height':898});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.add_init_script("window.fixtureMessages=[];window.fixtureListeners=[];window.chrome.webview={postMessage:m=>fixtureMessages.push(m),addEventListener:(type,fn)=>fixtureListeners.push(fn)};window.deliver=d=>fixtureListeners.forEach(fn=>fn({data:d}));")
 page.goto(args.url);page.wait_for_selector('.dashboard-input input')
 page.evaluate("()=>deliver({type:'dashboard-state',ready:true,thinking:false,responses:[]})")
 page.locator('.dashboard-input input').fill('A real draft');page.locator('.dashboard-input button').first.click();assert page.locator('.dashboard-input input').input_value()=='A real draft'
 assert page.evaluate("()=>fixtureMessages.at(-1).type")=='dashboard-send'
 page.evaluate("()=>deliver({type:'dashboard-submitted'})");assert page.locator('.dashboard-input input').input_value()==''
 page.evaluate("()=>deliver({type:'dashboard-state',ready:true,thinking:true,responses:[{id:'reply',text:'## Answer\\n**Streamed** text',streaming:true}]})")
 assert page.locator('.dashboard-response strong').inner_text()=='Streamed';assert 'A real draft' not in page.locator('.dashboard-responses').inner_text()
 page.evaluate("()=>deliver({type:'dashboard-voice-state',state:'listening',transcript:'Live words'})");assert page.locator('.dashboard-transcript').inner_text()=='Live words'
 page.evaluate("()=>deliver({type:'dashboard-voice-state',state:'thinking',transcript:''})");assert page.locator('.dashboard-transcript').inner_text()==''
 page.evaluate("()=>deliver({type:'dashboard-metrics',timestamp:1000,cpu:{usagePercent:25},ram:{usagePercent:50},gpu:20})");assert '25.0%' in page.locator('.dashboard-graph + span').inner_text()
 page.get_by_label('Performance metric').select_option(label='RAM');assert '50.0%' in page.locator('.dashboard-graph + span').inner_text()
 page.get_by_role('button',name='Full Access',exact=True).click();assert page.evaluate('()=>fixtureMessages.at(-1).preset')=='Open'
 page.screenshot(path=str(out/'fixture-desktop.png'))
 page.set_viewport_size({'width':390,'height':800});page.wait_for_timeout(100);assert not errors,errors;page.screenshot(path=str(out/'fixture-compact.png'))
 print('PASS host-protocol fixture: submission acknowledgement, assistant-only formatting, transcription clear, metrics selector, preset command, resize. This does not test native services.')
 b.close()
