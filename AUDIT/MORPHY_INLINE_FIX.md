# MORPHY browser rendering correction

The previous browser implementation rotated four HTML image boxes. All four SVG files are tracked and their current routes are correct. However, the Python preview server constructs its allowlist once at startup and reads HTML/CSS from disk per request. An old running server therefore serves new markup while rejecting every newly added core SVG route. Inspection of the pre-core server confirms all four routes are absent. This reproduces the failure mechanism shown in the user's screenshot; the user's local process was not directly inspected.

The browser now contains the actual SVG circle/dash geometry inline. Three SVG groups rotate around the explicit 240,240 center, with thin rounded strokes and low-opacity violet bloom. No external ring images or rotating HTML image boxes remain. The dark orb is inline too; only the stationary emblem uses the established crest-256.png route, available before this feature. Navigation, branding, native code and dependencies are unchanged.

Live Chromium verification: three independently advancing transforms, fixed emblem, five viewport bounds, reduced motion, Home/Chat draft retention, and no broken HTML images or failed responses. The test blocks every former ring SVG URL to guard against this exact dependency. Before/after animation frames were visually inspected: arcs remain circular and centered, glow is subdued, and the emblem stays fixed. The reference's circular arrangement and violet lighting are retained without its thick multicolored ring density.

Evidence: `evidence/morphy-core-inline/home-desktop.png`, `motion-before.png`, `motion-after.png`. Native animation was not changed or revalidated on Windows in this browser-only correction.
