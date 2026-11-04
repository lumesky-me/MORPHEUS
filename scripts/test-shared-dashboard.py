from playwright.sync_api import sync_playwright
from pathlib import Path
import argparse
parser=argparse.ArgumentParser();parser.add_argument("--url",default="http://127.0.0.1:4191/");args=parser.parse_args()
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/shared-dashboard';out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1060,'height':946});errors=[];page.on('pageerror',lambda e:errors.append(str(e)));page.goto(args.url);page.wait_for_selector('.dashboard-input input');page.wait_for_selector('canvas')
 lock=page.get_by_role('button',name='Lock Down',exact=True);full=page.get_by_role('button',name='Full Access',exact=True)
 assert lock.get_attribute('aria-pressed')=='true';assert 'Preview Only' in lock.inner_text()
 full.click();assert full.get_attribute('aria-pressed')=='true';assert lock.get_attribute('aria-pressed')=='false'
 lock.click();assert lock.get_attribute('aria-pressed')=='true'
 for w in [1060,390]:
  page.set_viewport_size({'width':w,'height':946});voice=page.get_by_role('button',name='Start or stop voice input');assert voice.inner_text()=='M O R P H Y';voice.click();assert 'unavailable' in page.locator('.dashboard-status').inner_text();assert page.locator('.dashboard-transcript').inner_text()=='';assert page.locator('.dashboard-input button').first.is_disabled();assert 'Unavailable' in page.locator('.dashboard-graph + span').inner_text();assert not page.locator('.listening').count();assert page.locator('.dashboard-responses').inner_text()=='';page.screenshot(path=str(out/f'browser-{w}.png'))
 page.locator('[data-page=chat]').click();page.locator('#draft').fill('Chat draft retained');page.locator('[data-page=home]').click();page.locator('[data-page=chat]').click();assert page.locator('#draft').input_value()=='Chat draft retained';assert not errors,errors
 fallback=b.new_page();fallback.route('**/dashboard-app.js',lambda route:route.abort());fallback.goto(args.url);fallback.locator('[data-page=chat]').click();assert fallback.locator('#draft').is_visible();fallback.locator('[data-page=home]').click();assert 'restart' in fallback.locator('#orb-status').inner_text();fallback.close()
 print('PASS shared browser controls, honest unavailable status, no fake listening/responses/metrics, responsive layout, Chat draft retained; no JS errors.')
 b.close()
