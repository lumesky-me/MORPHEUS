# Focused editor interaction regression; visual evidence uses the real orb separately.
from playwright.sync_api import sync_playwright
import json, argparse
parser=argparse.ArgumentParser();parser.add_argument("--url",default="http://127.0.0.1:4173/");args=parser.parse_args()
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox']);ctx=b.new_context(viewport={'width':1200,'height':850},permissions=['clipboard-read','clipboard-write']);page=ctx.new_page()
 page.route('**/ultron/orb.js',lambda r:r.fulfill(content_type='text/javascript',body='export function createOrbScene(c){c.append(document.createElement("canvas"));return {setActivity(){},setVisible(){},dispose(){}}}'))
 page.goto(args.url);page.locator('#edit-layout').click();page.locator('#add-box').click();node=page.locator('.layout-item.box');box=node.bounding_box();h=node.locator('.se').bounding_box();page.mouse.move(h['x']+5,h['y']+5);page.mouse.down();page.mouse.move(h['x']+65,h['y']+45);page.mouse.up();assert int(page.locator('#layout-width').input_value())==300;assert int(page.locator('#layout-height').input_value())==200
 node.focus();page.keyboard.press('ArrowRight');assert int(page.locator('#layout-x').input_value())==49
 page.locator('#layout-snap').check();box=node.bounding_box();page.mouse.move(box['x']+60,box['y']+50);page.mouse.down();page.mouse.move(box['x']+79,box['y']+67);page.mouse.up();assert int(page.locator('#layout-x').input_value())%8==0
 page.locator('#copy-layout').click();copied=page.evaluate('()=>navigator.clipboard.readText()');assert len(json.loads(copied)['elements'])==2
 page.locator('#layout-file').set_input_files({'name':'bad.json','mimeType':'application/json','buffer':b'{"version":1}'});assert 'rejected' in page.locator('#layout-status').inner_text();assert page.locator('.layout-item.box').count()==1
 page.on('dialog',lambda d:d.accept());page.locator('#reset-layout').click();assert page.locator('.layout-item.box').count()==0
 print('PASS: pointer resize, keyboard nudge, snap, clipboard, invalid import retains state, reset. Lightweight renderer stub used for interaction checks only.')
 b.close()
