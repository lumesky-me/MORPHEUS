#!/usr/bin/env python3
"""Package the extracted approved crest into requested PNG/ICO sizes. Requires Pillow."""
from pathlib import Path
from PIL import Image,ImageOps
ROOT=Path(__file__).resolve().parents[1]
assets=ROOT/'components/windows/src/OpenClaw.Tray.WinUI/Assets'
source=Image.open(assets/'Morpheus/crest-master.png').convert('RGBA')
sizes=(16,24,32,48,64,128,256,512)
for size in sizes:source.resize((size,size),Image.Resampling.LANCZOS).save(assets/f'Morpheus/crest-{size}.png')
source.save(assets/'openclaw.ico',format='ICO',sizes=[(s,s) for s in sizes if s<=256])
for path in assets.glob('*.png'):
 if 'Logo' not in path.name:continue
 with Image.open(path) as prior:dimensions=prior.size
 canvas=Image.new('RGBA',dimensions)
 mark=ImageOps.contain(source,dimensions,Image.Resampling.LANCZOS)
 canvas.paste(mark,((dimensions[0]-mark.width)//2,(dimensions[1]-mark.height)//2))
 canvas.save(path)
print('Prepared transparent crest PNGs and multi-resolution application/installer ICO.')
