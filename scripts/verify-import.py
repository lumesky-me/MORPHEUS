#!/usr/bin/env python3
"""Check pinned tracked imports and the explicitly recorded downstream delta."""
import argparse
import gzip
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EVIDENCE = ROOT / "AUDIT" / "evidence"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--record", action="store_true", help="Record reviewed downstream hashes; does not change source")
    parser.add_argument("--record-phase3", action="store_true", help="Record the reviewed Phase 3 delta without replacing historical Phase 1 evidence")
    parser.add_argument("--record-phase4", action="store_true", help="Record the reviewed Phase 4 delta without replacing earlier evidence")
    parser.add_argument("--record-redesign", action="store_true", help="Record redesign delta while preserving the earlier Phase 4 manifest")
    parser.add_argument("--record-refinement", action="store_true", help="Record focused UI refinement delta without changing prior manifests")
    parser.add_argument("--record-composer", action="store_true", help="Record final composer/rail UI delta while retaining earlier layers")
    args = parser.parse_args()
    if args.record_phase3 and (EVIDENCE / "phase4" / "source-delta.json").exists():
        raise SystemExit("Preserve historical Phase 3 evidence; use --record-phase4")
    inventory = json.loads(gzip.decompress((EVIDENCE / "upstream-inventory.json.gz").read_bytes()))
    delta = {}
    missing = []
    unchanged = {}
    for component, data in inventory.items():
        unchanged[component] = 0
        for entry in data["entries"]:
            meta, relative = entry.split("\t", 1)
            mode, kind, upstream_hash = meta.split()
            file = ROOT / "components" / component / relative
            if kind != "blob":
                raise SystemExit(f"Unsupported upstream git entry: {entry}")
            if not file.exists() and not file.is_symlink():
                missing.append(f"{component}/{relative}")
                continue
            content = str(file.readlink()).encode() if mode == "120000" else file.read_bytes()
            blob_hash = hashlib.sha1(b"blob " + str(len(content)).encode() + b"\0" + content).hexdigest()
            if blob_hash != upstream_hash:
                delta[f"{component}/{relative}"] = {"upstream_blob": upstream_hash, "sha256": hashlib.sha256(content).hexdigest()}
            else:
                unchanged[component] += 1
    if missing:
        raise SystemExit("Missing imported files:\n" + "\n".join(missing))
    manifest = EVIDENCE / "rebrand-manifest.json"
    phase3 = EVIDENCE / "phase3" / "source-delta.json"
    expected = json.loads(manifest.read_text())
    if args.record_phase3:
        overrides = {key: value for key, value in delta.items() if expected.get(key) != value}
        overrides.update({key: None for key in expected if key not in delta})
        phase3.parent.mkdir(parents=True, exist_ok=True)
        phase3.write_text(json.dumps(overrides, indent=2, sort_keys=True) + "\n")
    if args.record:
        if phase3.exists():
            raise SystemExit("Preserve the historical Phase 1 manifest; use --record-phase3 for reviewed changes")
        manifest.write_text(json.dumps(delta, indent=2, sort_keys=True) + "\n")
        expected = delta
    if phase3.exists():
        for key, value in json.loads(phase3.read_text()).items():
            if value is None:
                expected.pop(key, None)
            else:
                expected[key] = value
    phase4 = EVIDENCE / "phase4" / "source-delta.json"
    if args.record_phase4 and (EVIDENCE / "phase4-redesign" / "source-delta.json").exists():
        raise SystemExit("Preserve the prior Phase 4 layer; use --record-redesign")
    if args.record_phase4:
        overrides = {key: value for key, value in delta.items() if expected.get(key) != value}
        overrides.update({key: None for key in expected if key not in delta})
        phase4.parent.mkdir(parents=True, exist_ok=True)
        phase4.write_text(json.dumps(overrides, indent=2, sort_keys=True) + "\n")
    if phase4.exists():
        for key, value in json.loads(phase4.read_text()).items():
            if value is None:
                expected.pop(key, None)
            else:
                expected[key] = value
    redesign = EVIDENCE / "phase4-redesign" / "source-delta.json"
    if args.record_redesign and (EVIDENCE / "phase4-refinement" / "source-delta.json").exists():
        raise SystemExit("Preserve the redesign layer; use --record-refinement")
    if args.record_redesign:
        overrides = {key: value for key, value in delta.items() if expected.get(key) != value}
        overrides.update({key: None for key in expected if key not in delta})
        redesign.parent.mkdir(parents=True, exist_ok=True)
        redesign.write_text(json.dumps(overrides, indent=2, sort_keys=True) + "\n")
    if redesign.exists():
        for key, value in json.loads(redesign.read_text()).items():
            if value is None: expected.pop(key, None)
            else: expected[key] = value
    refinement = EVIDENCE / "phase4-refinement" / "source-delta.json"
    if args.record_refinement and (EVIDENCE / "phase4-composer" / "source-delta.json").exists():
        raise SystemExit("Preserve the earlier refinement layer; use --record-composer")
    if args.record_refinement:
        overrides = {key: value for key, value in delta.items() if expected.get(key) != value}
        overrides.update({key: None for key in expected if key not in delta})
        refinement.parent.mkdir(parents=True, exist_ok=True)
        refinement.write_text(json.dumps(overrides, indent=2, sort_keys=True) + "\n")
    if refinement.exists():
        for key, value in json.loads(refinement.read_text()).items():
            if value is None: expected.pop(key, None)
            else: expected[key] = value
    composer = EVIDENCE / "phase4-composer" / "source-delta.json"
    if args.record_composer:
        overrides = {key: value for key, value in delta.items() if expected.get(key) != value}
        overrides.update({key: None for key in expected if key not in delta})
        composer.parent.mkdir(parents=True, exist_ok=True)
        composer.write_text(json.dumps(overrides, indent=2, sort_keys=True) + "\n")
    if composer.exists():
        for key, value in json.loads(composer.read_text()).items():
            if value is None: expected.pop(key, None)
            else: expected[key] = value
    if expected != delta:
        raise SystemExit("Downstream delta differs from the recorded reviewed manifests")
    for component in inventory:
        if (ROOT / "components" / component / ".git").exists():
            raise SystemExit("Nested upstream Git metadata must not be imported")
        if f"{component}/LICENSE" in delta:
            raise SystemExit("Upstream license was changed")
    print(json.dumps({"unchanged_upstream_files": unchanged, "modified_upstream_files": len(delta), "missing_files": 0}))


if __name__ == "__main__":
    main()
