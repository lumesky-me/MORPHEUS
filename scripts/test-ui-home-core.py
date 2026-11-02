"""Live browser proof of Home motion, accessibility, bounds and retained navigation."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import os, shutil
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/morphy-core'
out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path=shutil.which('chromium'),args=['--no-sandbox'])
 ctx=b.new_context(viewport={'width':1280,'height':800})
 page=ctx.new_page(); errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(os.environ.get('MORPHEUS_PREVIEW_URL','http://127.0.0.1:4173'));page.wait_for_load_state('networkidle')
 assert page.locator('.morphy-core img').evaluate_all('(xs)=>xs.every(x=>x.complete&&x.naturalWidth>0)')
 before=page.locator('.core-orbit').evaluate_all('(xs)=>xs.map(x=>getComputedStyle(x).transform)')
 page.wait_for_timeout(3000)
 after=page.locator('.core-orbit').evaluate_all('(xs)=>xs.map(x=>getComputedStyle(x).transform)')
 assert all(x!=y for x,y in zip(before,after))
 assert page.locator('.core-base').evaluate('x=>getComputedStyle(x).transform')=='none'
 page.screenshot(path=str(out/'home-desktop.png'))
 for w,h in [(1280,800),(800,600),(500,560),(390,650),(700,350)]:
  page.set_viewport_size({'width':w,'height':h});page.wait_for_timeout(100)
  box=page.locator('.morphy-core').bounding_box();assert box and box['x']>=66 and box['y']>=48 and box['x']+box['width']<=w and box['y']+box['height']<=h,(w,h,box)
 page.screenshot(path=str(out/'home-short.png'))
 page.set_viewport_size({'width':390,'height':650});page.screenshot(path=str(out/'home-mobile.png'))
 page.get_by_role('button',name='Chat',exact=True).click();page.locator('#draft').fill('Preserve existing chat')
 for _ in range(3):
  page.get_by_role('button',name='Home',exact=True).click();page.get_by_role('button',name='Chat',exact=True).click()
 assert page.locator('#draft').input_value()=='Preserve existing chat'
 assert page.locator('.core-inner').evaluate('x=>getComputedStyle(x).animationPlayState')=='paused'
 page.get_by_role('button',name='Home',exact=True).click();page.emulate_media(reduced_motion='reduce')
 assert page.locator('.morphy-core img').evaluate_all('(xs)=>xs.every(x=>getComputedStyle(x).animationName==="none")')
 page.emulate_media(reduced_motion='no-preference');page.set_viewport_size({'width':1280,'height':800});page.wait_for_timeout(3000)
 assert not errors,errors
 ctx.close();b.close()
print('PASS: all vector assets loaded; all three rings advance; stationary emblem; five viewport bounds; Home/Chat draft retention; hidden pause; live reduced-motion preference; no JS errors.')
