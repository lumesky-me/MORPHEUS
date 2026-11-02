#!/usr/bin/env python3
"""Local-only, allowlisted MORPHEUS visual preview. Never serves repository files."""
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
import argparse,mimetypes
ROOT=Path(__file__).resolve().parents[1]
FILES={f'/{name}':ROOT/'ui/preview'/name for name in ('index.html','app.js','style.css','tokens.css')}
FILES['/']=FILES['/index.html']
for name in ('logo-slot.svg','conversation-ring.svg','canvas-lighting.svg'):
    FILES['/assets/'+name]=ROOT/'components/windows/src/OpenClaw.Tray.WinUI/Assets/Morpheus'/name
class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        file=FILES.get(urlsplit(self.path).path)
        if file is None:self.send_error(404);return
        content=file.read_bytes();self.send_response(200)
        self.send_header('Content-Type',mimetypes.guess_type(file.name)[0] or 'application/octet-stream')
        self.send_header('Content-Length',str(len(content)));self.send_header('Cache-Control','no-store')
        self.send_header('Content-Security-Policy',"default-src 'self'; connect-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'")
        self.send_header('X-Content-Type-Options','nosniff');self.end_headers();self.wfile.write(content)
if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--port',type=int,default=4173);args=parser.parse_args()
    print(f'MORPHEUS preview: http://127.0.0.1:{args.port}',flush=True)
    ThreadingHTTPServer(('127.0.0.1',args.port),Handler).serve_forever()
