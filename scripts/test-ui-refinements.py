"""Focused browser checks for responsive conversation space and branding."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import os,shutil
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/phase4-refinement';out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=os.environ.get('MORPHEUS_PREVIEW_CHROMIUM') or shutil.which('chromium'),args=['--no-sandbox'])
 page=browser.new_page(viewport={'width':1280,'height':800},device_scale_factor=1)
 errors=[];page.on('pageerror',lambda e:errors.append(str(e)));page.on('console',lambda m:errors.append(m.text) if m.type=='error' else None)
 page.goto('http://127.0.0.1:4173');page.wait_for_load_state('networkidle')
 assert page.locator('#home').is_visible()
 page.get_by_role('button',name='Chat',exact=True).click()
 page.locator('#draft').fill('Keep this draft through every resize')
 for width in [1280,1024,800,650,500]:
  page.set_viewport_size({'width':width,'height':800})
  page.wait_for_timeout(180)
  assert page.locator('.conversations').is_visible()==(width>=1024)
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
  for id in ['draft','attach','microphone','send']:
   b=page.locator('#'+id).bounding_box();assert b and b['x']>=0 and b['x']+b['width']<=width and b['y']+b['height']<=800,(width,id,b)
  assert page.locator('#draft').input_value()=='Keep this draft through every resize'
  controls=page.locator('.window-controls button').all()
  for button in controls:
   b=button.bounding_box();assert b and abs(b['y']+b['height']/2-24)<=1
   assert button.is_disabled()
  page.screenshot(path=str(out/f'chat-{width}.png'))
  if width<1024:
   before=page.locator('.conversation-panel').bounding_box()
   page.locator('#sidebar-toggle').click()
   assert page.locator('.conversations').is_visible()
   assert page.locator('.conversation-panel').bounding_box()==before
   assert page.locator('#sidebar-scrim').is_visible()
   page.screenshot(path=str(out/f'sidebar-overlay-{width}.png'))
   page.keyboard.press('Escape');assert not page.locator('.conversations').is_visible()
   page.locator('#sidebar-toggle').click();page.locator('#sidebar-scrim').click(position={'x':width-100,'y':400})
   assert not page.locator('.conversations').is_visible()
 page.get_by_role('button',name='Home',exact=True).click();assert page.locator('#sidebar-toggle').is_disabled()
 page.get_by_role('button',name='Chat',exact=True).click();assert page.locator('#draft').input_value()=='Keep this draft through every resize'
 page.locator('#sidebar-toggle').click();page.locator('#new-chat').click()
 assert not page.locator('.conversations').is_visible()
 assert page.locator('#draft').input_value()=='' and page.locator('#draft').evaluate('(e)=>e===document.activeElement')
 assert page.locator('.logo').evaluate('(e)=>e.complete&&e.naturalWidth>0')
 for size in [16,24,32]:
  assert page.request.get(f'http://127.0.0.1:4173/assets/crest-{size}.png').status==200
 assert page.request.get('http://127.0.0.1:4173/favicon.ico').status==200
 assert not errors,errors
 browser.close()
print('PASS: 1280/1024/800/650/500px, automatic collapse, overlay/scrim/Escape, draft preservation, unclipped composer controls, caption centering, crest sizes/favicon and no console errors.')
