"""Shared telemetry bridge/graph fixture; does not collect Windows hardware data."""
from playwright.sync_api import sync_playwright
from pathlib import Path
import argparse
parser=argparse.ArgumentParser();parser.add_argument('--url',default='http://127.0.0.1:4202/');args=parser.parse_args()
out=Path(__file__).resolve().parents[1]/'AUDIT/evidence/graph-spacing';out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1060,'height':946})
 page.add_init_script("window.listeners=[];window.chrome.webview={postMessage:()=>{},addEventListener:(t,fn)=>listeners.push(fn)};window.deliver=d=>listeners.forEach(fn=>fn({data:d}));")
 page.goto(args.url);page.wait_for_selector('.dashboard-graph')
 page.evaluate("()=>{for(let i=0;i<=100;i++)deliver({type:'dashboard-metrics',timestamp:i*1000,cpu:{usagePercent:i>75?0:i},ram:{usagePercent:60},gpu:30});}")
 select=page.get_by_label('Performance metric')
 path=page.locator('[data-metric=cpu]');original=path.get_attribute('d');assert original.count('M')+original.count('C')==91
 for label in ['GPU','RAM','CPU, GPU, RAM','CPU']:
  select.select_option(label=label)
  assert page.locator('.dashboard-graph [data-metric]').evaluate_all('(lines)=>lines.filter(e=>e.style.display!=="none").length')==(3 if ',' in label else 1)
 assert path.get_attribute('d')==original
 assert page.locator('.dashboard-legend').is_hidden()
 assert page.locator('.dashboard-gridline').count()==3
 assert path.evaluate('(e)=>e.compareDocumentPosition(document.querySelector(".dashboard-axes")) & Node.DOCUMENT_POSITION_FOLLOWING')
 assert page.locator('#dashboard-plot-clip rect').get_attribute('y')=='7'
 assert page.locator('.dashboard-axis-label').all_text_contents()==['0','50','100','−90s','−60s','−30s','Now']
 assert page.locator('.dashboard-metric-label').count()==0
 page.locator('.dashboard-graph').screenshot(path=str(out/'single-zero-fixture.png'))
 page.evaluate("()=>deliver({type:'dashboard-metrics',timestamp:101000,cpu:{usagePercent:25},ram:{usagePercent:60},gpu:null})")
 select.select_option(label='GPU');assert 'Unavailable' in page.locator('.dashboard-legend').inner_text()
 page.evaluate("()=>deliver({type:'dashboard-metrics',timestamp:120000,cpu:{usagePercent:40},ram:{usagePercent:61},gpu:10})")
 select.select_option(label='CPU');assert path.get_attribute('d').count('M')==2
 select.select_option(label='CPU, GPU, RAM');page.locator('.dashboard-graph').screenshot(path=str(out/'combined-fixture.png'))
 b.close()
print('PASS 90-second history, all four metrics, history retained on switch, missing GPU, inactive gap, fixed grid. Synthetic host data only.')
