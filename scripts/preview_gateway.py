"""Private local IPC with the installed OpenClaw SDK; no credentials in HTTP."""
import json
from pathlib import Path
import subprocess
import threading

class DashboardGateway:
    def __init__(self):
        self.lock = threading.Lock()
        self.events = []
        self.sequence = 0
        self.process = None
        self.closed=False
        threading.Thread(target=self._run, daemon=True).start()

    def _event(self, data):
        if data.get('type') not in ('dashboard-state','dashboard-error','dashboard-submitted','sessions-list','sessions-conversation','sessions-submitted','sessions-error','gateway-alerts','sessions-transcript','gateway-status','sessions-branches','sessions-editor','sessions-stream'): return
        with self.lock:
            if data['type']=='sessions-conversation':self.events=[e for e in self.events if e['data']['type']!='sessions-stream']
            if data['type'] in ('dashboard-state','sessions-conversation','sessions-list','gateway-alerts','gateway-status','sessions-stream'):self.events=[e for e in self.events if e['data']['type']!=data['type']]
            self.sequence += 1
            self.events.append({'sequence':self.sequence,'data':data})
            self.events = self.events[-100:]

    def _run(self):
        try:
            self.process = subprocess.Popen(['node',str(Path(__file__).with_name('dashboard-gateway.mjs'))],
                stdin=subprocess.PIPE,stdout=subprocess.PIPE,stderr=subprocess.DEVNULL,text=True,
                **({'creationflags':subprocess.CREATE_NO_WINDOW} if __import__('os').name == 'nt' else {}))
            if self.closed:self.process.terminate()
            for line in self.process.stdout:
                try: self._event(json.loads(line))
                except (ValueError,AttributeError): pass
            self.process.wait()
        except OSError: pass
        self._event({'type':'dashboard-state','ready':False,'thinking':False,'responses':[]})
        self._event({'type':'dashboard-error','message':'Gateway bridge stopped. Check Node.js, the installed OpenClaw SDK and your local Gateway, then restart the preview.'})

    def snapshot(self, after):
        with self.lock:
            return {'enabled':True,'events':[e for e in self.events if e['sequence']>after]}

    def command(self, data):
        if data.get('type') not in ('dashboard-send','dashboard-stop','sessions-list','sessions-create','sessions-select','sessions-open-dashboard','sessions-rename','sessions-delete','conversation-send','conversation-stop','conversation-patch','conversation-history','conversation-refresh','conversation-cut','conversation-branches','conversation-branch-switch','sessions-action','notifications-refresh'): raise ValueError('Unsupported command')
        if data['type'] in ('dashboard-send','conversation-send') and (not isinstance(data.get('text'),str) or (len(data['text'])>32000 or not data['text'].strip() and not data.get('attachments'))): raise ValueError('Invalid message')
        with self.lock:
            if self.process is None or self.process.poll() is not None: raise ValueError('Gateway bridge unavailable')
            self.process.stdin.write(json.dumps(data)+'\n');self.process.stdin.flush()

    def close(self):
        self.closed=True
        if self.process and self.process.poll() is None:self.process.terminate()
