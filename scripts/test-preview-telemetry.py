"""Local endpoint security/freshness and browser transport fixtures, not Windows proof."""
import argparse
import json
import time
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from preview_telemetry import Collector
from playwright.sync_api import sync_playwright
parser=argparse.ArgumentParser();parser.add_argument('--url',default='http://127.0.0.1:4202');args=parser.parse_args()
def status(headers):
 try:
  with urlopen(Request(args.url+'/api/telemetry',headers=headers)) as r:return r.status
 except HTTPError as e:return e.code
assert status({'Origin':'https://untrusted.invalid'})==403
assert status({'Host':'untrusted.invalid'})==403
assert status({'Sec-Fetch-Site':'cross-site'})==403
assert status({'Origin':args.url}) in (200,503)
collector=Collector();collector.close()
collector.latest=(time.monotonic(),{'type':'dashboard-metrics'})
collector.history.append((time.monotonic(),{'timestamp':1}))
assert len(collector.snapshot()['history'])==1
collector.history.append((time.monotonic()-100,{'timestamp':0}))
assert len(collector.snapshot()['history'])==1
collector.latest=(time.monotonic()-5,{'type':'dashboard-metrics'})
assert collector.snapshot() is None
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/localhost-telemetry';out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1060,'height':946})
 state={'online':True,'count':0}
 def reading(route):
  state['count']+=1
  now=int(time.time()*1000)
  data={'type':'dashboard-metrics','timestamp':now,'cpu':{'usagePercent':61},'ram':{'usagePercent':52},'gpu':34}
  data['history']=[{**data,'timestamp':now-i*1000} for i in range(90,-1,-1)]
  route.fulfill(status=200 if state['online'] else 503,content_type='application/json',body=json.dumps(data))
 page.route('**/api/telemetry',reading);page.goto(args.url)
 page.wait_for_function("()=>!!document.querySelector('[data-metric=cpu]')?.getAttribute('d')")
 select=page.get_by_label('Performance metric')
 for name,value in [('GPU','34.0%'),('RAM','52.0%')]:
  select.select_option(label=name);assert page.locator('.dashboard-legend').is_hidden()
 select.select_option(label='CPU, GPU, RAM');assert 'CPU' in page.locator('.dashboard-legend').inner_text()
 state['online']=False
 page.wait_for_function("()=>document.querySelector('.dashboard-legend')?.textContent.includes('CPU · Unavailable')")
 state['online']=True
 page.wait_for_function("()=>document.querySelector('.dashboard-legend')?.textContent==='CPUGPURAM'")
 assert state['count']>=3
 page.evaluate("()=>{Object.defineProperty(document,'hidden',{value:true,configurable:true});document.dispatchEvent(new Event('visibilitychange'));}")
 page.wait_for_timeout(1100)
 page.evaluate("()=>{Object.defineProperty(document,'hidden',{value:false,configurable:true});document.dispatchEvent(new Event('visibilitychange'));}")
 page.wait_for_timeout(1100)
 assert page.locator('[data-metric=cpu]').get_attribute('d').count('C')>=90
 b.close()
print('PASS localhost Host/Origin/cross-site restrictions, sample staleness, browser polling, all metrics, collector disconnect and recovery. Windows collection not tested.')
