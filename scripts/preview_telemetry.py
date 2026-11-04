"""Own one Windows counter process; serve only fresh, bounded telemetry records."""
from collections import deque
import json
import os
from pathlib import Path
import subprocess
import threading
import time

class Collector:
    def __init__(self):
        self.process = None
        self.latest = None
        self.history = deque(maxlen=180)
        self.lock = threading.Lock()
        self.closed = threading.Event()
        if os.name == 'nt':
            threading.Thread(target=self._run, daemon=True).start()

    def _run(self):
        while not self.closed.is_set():
            try:
                with self.lock:
                    if self.closed.is_set(): return
                    self.process = subprocess.Popen(
                        ['powershell.exe', '-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'RemoteSigned', '-File',
                         str(Path(__file__).with_name('windows-telemetry.ps1'))],
                        stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, text=True,
                        creationflags=subprocess.CREATE_NO_WINDOW)
                    process = self.process
                for line in process.stdout:
                    try:
                        data = json.loads(line)
                        if data.get('type') != 'dashboard-metrics': continue
                        values = [data['cpu']['usagePercent'], data['ram']['usagePercent'], data['gpu']]
                        if any(v is not None and (type(v) not in (int, float) or not 0 <= v <= 100) for v in values): continue
                        with self.lock:
                            now = time.monotonic()
                            self.latest = (now, data)
                            self.history.append((now, data))
                            while self.history and now - self.history[0][0] > 90: self.history.popleft()
                    except (ValueError, KeyError, TypeError): continue
                process.stdout.close()
                process.wait()
            except OSError: pass
            self.closed.wait(5)

    def snapshot(self):
        with self.lock:
            if self.latest and time.monotonic() - self.latest[0] < 4:
                return {**self.latest[1], 'history': [data for stamp, data in self.history if time.monotonic() - stamp <= 90]}
        return None

    def close(self):
        self.closed.set()
        with self.lock:
            if self.process and self.process.poll() is None:
                self.process.terminate()
