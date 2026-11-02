#!/usr/bin/env python3
"""Export the explicit static preview allowlist, without any runtime or profile data."""
from pathlib import Path
import runpy,shutil
r=Path(__file__).resolve().parents[1]
files=runpy.run_path(str(r/'scripts/ui-preview.py'))['FILES']
out=r/'artifacts/ui-preview'
for route,source in files.items():
    if route=='/':continue
    target=out/route.lstrip('/');target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(source,target)
print(f'Static presentation only: {out}')
