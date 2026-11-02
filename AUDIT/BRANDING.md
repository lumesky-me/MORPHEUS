# Branding change map and boundaries

MORPHEUS is the application name; MORPHY is the fresh source profile's default system agent. Custom agent names and identities remain user-owned. No mascot/logo identity was designed.

| Surface | Downstream change | Compatibility retained |
| --- | --- | --- |
| Source launcher | Private @lumesky/morpheus package, morpheus command, independent .morpheus state/config/home/credentials, loopback18891, explicit MORPHY system agent, create-only initialization | Calls the actual Core launcher and config/agent/gateway implementations. |
| Core presentation | Shared theme defaults MORPHEUS, no default mascot/hat/critter gallery, neutral mark/dots; UI browser/boot/topbar titles; placeholder favicon and referenced app artwork; catalog-copy substitution before parameter interpolation; CLI banners/help; public-session reader identity/attribution | Theme IDs, authored/custom branding, CSS/custom element/wire/import/package identifiers, user text and user identities. Foreign translation memories and original Foundation attribution retained. |
| Windows shell | Display names, tray/window/settings/notification copy and all .resw locales; independent AUMID, mutex, startup task, URI scheme, AppData/companion roots, WSL distro and ports18891/18892 | CLR namespace/assembly/executable filenames where scripts/friend assemblies require them; gateway protocol/auth fields; external native Gateway package validation. |
| Windows assets | Neutral original-sized placeholders for runtime app/tray/installer/splash/Store/setup art; neutral geometry in the typing indicator | Existing asset keys, image sizes, UI arrangement and animation owners. |
| Windows distribution | Own Inno installer GUIDs/directories/display/publisher metadata and release/support URLs; own companion MSIX name and local development publisher/COM identities; companion updater points to this repository | Original source deployment mechanisms retained; no upstream signing credentials/Store reservation reused. No MORPHEUS signing or release artifact was created. |
| Security private roots | Added MORPHEUS private paths to Windows denies | Original OpenClaw sensitive paths remain denied; approval/containment rules were not relaxed. |

Exact changed upstream paths/hashes are in `evidence/rebrand-manifest.json`. All original source and licenses remain; no suspected dead code was deleted. Upstream readmes, architecture/security docs, historical artwork and public API names remain provenance/reference material, not MORPHEUS product endorsements.

This is not complete visual acceptance. Some command-specific technical/upstream messages and non-Windows client source still retain upstream wording. The original separate Settings implementation was retained; no Windows render/screenshot was available. Release/Store/installer source-contract assertions remain red and require review. The existing native/WSL Gateway provisioners do not yet provide a proven MORPHEUS-owned build. Keep these limitations visible before packaging or publication.
