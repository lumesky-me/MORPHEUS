#!/usr/bin/env python3
"""Local-only, allowlisted MORPHEUS visual preview. Never serves repository files."""
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
import argparse,mimetypes,webbrowser,json
from preview_telemetry import Collector
ROOT=Path(__file__).resolve().parents[1]
FILES={f'/{name}':ROOT/'ui/preview'/name for name in ('index.html','app.js','style.css','tokens.css','layout.js','dashboard.js','dashboard-app.js','dashboard.css','dashboard-baseline.js')}
FILES['/']=FILES['/index.html']
FILES['/ultron/orb.js']=ROOT/'ui/preview/ultron/orb.js'
FILES['/favicon.ico']=ROOT/'components/windows/src/OpenClaw.Tray.WinUI/Assets/openclaw.ico'
for size in (16,24,32,48,64,128,256,512):
    FILES[f'/assets/crest-{size}.png']=ROOT/f'components/windows/src/OpenClaw.Tray.WinUI/Assets/Morpheus/crest-{size}.png'
for name in ('logo-slot.svg','conversation-ring.svg','canvas-lighting.svg','morphy-core-base.svg','morphy-core-outer.svg','morphy-core-middle.svg','morphy-core-inner.svg'):
    FILES['/assets/'+name]=ROOT/'components/windows/src/OpenClaw.Tray.WinUI/Assets/Morpheus'/name
class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if urlsplit(self.path).path == '/api/telemetry':
            origin = f'http://127.0.0.1:{self.server.server_port}'
            if (self.headers.get('Host') != f'127.0.0.1:{self.server.server_port}' or
                self.headers.get('Origin', origin) != origin or
                self.headers.get('Sec-Fetch-Site', 'same-origin') not in ('same-origin', 'none')):
                self.send_error(403);return
            data = self.server.collector.snapshot()
            content = json.dumps(data or {'error':'Windows telemetry collector unavailable'}).encode()
            self.send_response(200 if data else 503)
            self.send_header('Content-Type','application/json');self.send_header('Cache-Control','no-store')
            self.send_header('Content-Length',str(len(content)));self.send_header('X-Content-Type-Options','nosniff')
            self.end_headers();self.wfile.write(content);return
        file=FILES.get(urlsplit(self.path).path)
        if file is None:self.send_error(404);return
        content=file.read_bytes();self.send_response(200)
        self.send_header('Content-Type',{'.js':'text/javascript', '.css':'text/css', '.html':'text/html', '.svg':'image/svg+xml'}.get(file.suffix, mimetypes.guess_type(file.name)[0] or 'application/octet-stream'))
        self.send_header('Content-Length',str(len(content)));self.send_header('Cache-Control','no-store')
        self.send_header('Content-Security-Policy',"default-src 'self'; connect-src 'self' https://cdn.jsdelivr.net https://storage.googleapis.com; worker-src 'self' blob:; img-src 'self' data: https:; script-src 'self' https://cdn.jsdelivr.net 'wasm-unsafe-eval'; style-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'")
        self.send_header('X-Content-Type-Options','nosniff');self.end_headers();self.wfile.write(content)
if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--port',type=int,default=4173);parser.add_argument('--open-browser',action='store_true',help='Open the local preview in your default browser');args=parser.parse_args()
    try:
        server=ThreadingHTTPServer(('127.0.0.1',args.port),Handler)
    except OSError as error:
        parser.exit(1,f'Cannot start preview on port {args.port}: {error}. Try --port 4174.\n')
    server.collector=Collector()
    url=f'http://127.0.0.1:{args.port}/'
    print(f'MORPHEUS preview: {url} (UI only; Ctrl+C to stop)',flush=True)
    if args.open_browser:webbrowser.open(url)
    try:server.serve_forever()
    except KeyboardInterrupt:pass
    finally:server.collector.close();server.server_close()
