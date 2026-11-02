Upstream: https://github.com/SAGAR-TAMANG/ultron-by-sagar-builds

The MIT-licensed orbScene.ts and handTracker.ts are imported from upstream. Local changes replace amber colors/textures with lavender, reduce exposure/bloom and cap pixel ratio. The Home adapter uses the original scene API and optional camera tracker. Three.js and MediaPipe license notices accompany the bundled output.

Rebuild using Node: install dependencies from build-package.json/build-package-lock.json in a temporary directory, then run esbuild orbScene.ts --bundle --format=esm --minify --outfile=orb.js with that node_modules directory on NODE_PATH.

Browser-only integration. Camera gestures require camera permission and reachable jsDelivr WASM/Google model downloads; no camera or microphone starts automatically. Physical camera gestures and native Windows rendering were not verified on this Linux host. Drag, scroll, zoom/reset and Home/Chat navigation were exercised in Chromium. No voice/Gateway/provider integration was added.
a65306f5a9568655551ec27445f773f20273223a
