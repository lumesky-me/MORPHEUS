"""Browser-only composer structure, unavailable-state and input interaction proof."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import os,shutil
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/phase4-composer';out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=os.environ.get('MORPHEUS_PREVIEW_CHROMIUM') or shutil.which('chromium'),args=['--no-sandbox'])
 page=browser.new_page(viewport={'width':1280,'height':800})
 errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto('http://127.0.0.1:4173');page.wait_for_load_state('networkidle')
 assert page.locator('.rail-top > button').evaluate_all('(els)=>els.map(e=>e.getAttribute("aria-label"))')==['Home','Chat']
 assert page.locator('#schedule').count()==0
 assert page.locator('.rail-top .menu-anchor #more').count()==1
 page.get_by_role('button',name='Chat',exact=True).click()
 assert page.locator('#draft').get_attribute('placeholder')=='Message MORPHY...'
 assert page.locator('.composer-tools button').evaluate_all('(els)=>els.map(e=>e.id)')==['attach','model-picker','reasoning-picker','microphone','send']
 page.locator('#draft').fill('Retain my draft')
 for width in [1280,1024,800,650,500,390]:
  page.set_viewport_size({'width':width,'height':800})
  page.wait_for_timeout(150)
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
  for id in ['attach','model-picker','reasoning-picker','microphone','send']:
   b=page.locator('#'+id).bounding_box();assert b and b['x']>=0 and b['x']+b['width']<=width and b['y']+b['height']<=800,(width,id,b)
  for id in ['model-picker','reasoning-picker']:
   page.locator('#'+id).click();assert 'no connected model catalog' in page.locator('#handoff-text').inner_text()
   b=page.locator('#handoff').bounding_box();assert b['x']>=0 and b['x']+b['width']<=width
   page.locator('#close-dialog').click()
  assert page.locator('#draft').input_value()=='Retain my draft'
  label=page.locator('#model-picker .picker-label')
  label.evaluate("e=>e.textContent='Long model identifier '.repeat(12)")
  assert label.evaluate("e=>getComputedStyle(e).textOverflow==='ellipsis'&&e.scrollWidth>e.clientWidth")
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
  label.evaluate("e=>e.textContent='No model'")
  page.screenshot(path=str(out/f'composer-{width}.png'))
 page.locator('#draft').focus();page.keyboard.press('End');page.keyboard.press('Shift+Enter');page.keyboard.type('Second line')
 assert '\nSecond line' in page.locator('#draft').input_value()
 page.locator('#draft').evaluate("e=>e.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',isComposing:true,bubbles:true,cancelable:true}))")
 assert not page.locator('#handoff').is_visible()
 page.keyboard.press('Enter');assert page.locator('#handoff-title').inner_text()=='Message not sent'
 page.locator('#close-dialog').click();assert '\nSecond line' in page.locator('#draft').input_value()
 assert page.locator('#messages').inner_text()==''
 assert not errors,errors
 browser.close()
print('PASS: clean rail, five-control toolbar order, 1280/1024/800/650/500/390px bounds, truthful model/reasoning dialogs, draft retention, Shift+Enter, Enter and IME, no fabricated replies.')
