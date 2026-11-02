from playwright.sync_api import sync_playwright
from pathlib import Path
import os,shutil
out=Path(os.environ.get('MORPHEUS_PREVIEW_EVIDENCE',Path(__file__).resolve().parents[1]/'AUDIT/evidence/phase4'));out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=os.environ.get('MORPHEUS_PREVIEW_CHROMIUM') or shutil.which('chromium'),args=['--no-sandbox'])
    page=browser.new_page(viewport={'width':1492,'height':1054},device_scale_factor=1)
    errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
    failed_assets=[]
    page.on('response',lambda r:failed_assets.append(r.url) if r.status>=400 and any(r.url.endswith(ext) for ext in ('.js','.css','.svg')) else None)
    console_errors=[];page.on('console',lambda m:console_errors.append(m.text) if m.type=='error' else None)
    page.goto('http://127.0.0.1:4173');page.wait_for_load_state('networkidle')
    assert page.locator('#home').is_visible() and page.locator('#sidebar-toggle').is_disabled()
    assert page.locator('#home').inner_text()==''
    assert page.locator('#home > *').count()==0
    page.screenshot(path=str(out/'home-preview.png'))
    page.get_by_role('button',name='Chat',exact=True).click()
    assert page.locator('#chat').is_visible() and page.locator('#sidebar-toggle').is_enabled()
    page.screenshot(path=str(out/'chat-preview.png'))
    page.locator('#sidebar-toggle').click();assert not page.locator('.conversations').is_visible()
    page.get_by_role('button',name='Home',exact=True).click();assert page.locator('#sidebar-toggle').is_disabled()
    page.get_by_role('button',name='Chat',exact=True).click();assert not page.locator('.conversations').is_visible()
    page.locator('#sidebar-toggle').click()
    page.locator('#draft').fill('A draft that must survive navigation')
    page.get_by_role('button',name='Home',exact=True).click();page.get_by_role('button',name='Chat',exact=True).click()
    assert page.locator('#draft').input_value()=='A draft that must survive navigation'
    page.get_by_role('button',name='Send message',exact=True).click();assert page.locator('#handoff-title').inner_text()=='Message not sent'
    assert page.locator('#messages').inner_text()=='';page.locator('#close-dialog').click()
    page.locator('#more').focus();page.keyboard.press('Enter');assert page.locator('#more-menu button').all_text_contents()==['Usage','Pair device','Connection event timeline']
    page.keyboard.press('Escape');assert not page.locator('#more-menu').is_visible()
    for id in ['schedule','settings','connection','notifications','attach','microphone']:
        page.locator('#'+id).click();assert page.locator('#handoff').is_visible();page.locator('#close-dialog').click()
    page.locator('#search-toggle').click();page.locator('#search').fill('never-existing-private-data');assert 'No browser sessions' in page.locator('#session-note').inner_text()
    for size in [(1440,900),(1280,800),(1000,700),(600,800),(390,844)]:
        page.set_viewport_size({'width':size[0],'height':size[1]})
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
        page.screenshot(path=str(out/f'chat-{size[0]}.png'))
        if size[0]<700:
            page.locator('#sidebar-toggle').click()
            assert page.locator('#draft').is_visible()
            bounds=page.locator('#draft').bounding_box()
            assert bounds and bounds['x']>=0 and bounds['x']+bounds['width']<=size[0]
            page.screenshot(path=str(out/f'chat-reading-{size[0]}.png'))
            page.locator('#sidebar-toggle').click()
    assert not errors,errors
    assert not failed_assets,failed_assets
    assert not console_errors,console_errors
    for path in ['/.git/config','/AUDIT/PHASE3_IMPLEMENTATION_RESULTS.md','/../components/windows/README.md','/secrets']:
        assert page.request.get('http://127.0.0.1:4173'+path).status==404
    browser.close()
print('PASS: browser navigation, empty Home, sidebar, draft retention, honest native handoffs, exact More entries, search, 6 viewports, no page errors, server allowlist')
