#!/usr/bin/env bash
# Linux x64 development bootstrap. Uses inherited HTTPS proxy and CA trust.
set -euo pipefail
case "$(uname -s)-$(uname -m)" in
  Linux-x86_64) ;;
  *) echo 'This bootstrap requires Linux x64.' >&2; exit 1 ;;
esac
MORPHEUS_TOOLS_DIR="${MORPHEUS_TOOLS_DIR:-/workspace/morpheus-tools}"
export MORPHEUS_TOOLS_DIR
python3 - <<'PY'
import base64
import hashlib
import io
import os
from pathlib import Path
import tarfile
import urllib.request

root = Path(os.environ['MORPHEUS_TOOLS_DIR']).resolve()
root.mkdir(parents=True, exist_ok=True)

def checked_download(url, archive, algorithm, expected):
    if archive.exists():
        data = archive.read_bytes()
    else:
        data = b''
    if hashlib.new(algorithm, data).hexdigest() != expected:
        with urllib.request.urlopen(url, timeout=180) as response:
            data = response.read()
        if hashlib.new(algorithm, data).hexdigest() != expected:
            raise RuntimeError(f'Integrity verification failed: {archive.name}')
        temporary = archive.with_suffix(archive.suffix + '.download')
        temporary.write_bytes(data)
        temporary.replace(archive)
    return data

node_name = 'node-v26.12.1-linux-x64'
node_hash = '6170b2d474e1c626f43cff3adc118df9fe3b573258a4fc3d850c8dbc6b079bbd'
node_url = 'https://nodejs.org/dist/v26.12.1/'
with urllib.request.urlopen(node_url + 'SHASUMS256.txt', timeout=60) as response:
    checksums = response.read().decode()
official = dict((line.split()[1], line.split()[0]) for line in checksums.splitlines())
if official.get(node_name + '.tar.xz') != node_hash:
    raise RuntimeError('Official Node checksum disagrees with pinned checksum')
archives = root / 'node-download'
archives.mkdir(exist_ok=True)
data = checked_download(node_url + node_name + '.tar.xz', archives / (node_name + '.tar.xz'), 'sha256', node_hash)
with tarfile.open(fileobj=io.BytesIO(data), mode='r:xz') as archive:
    node_bin = root / node_name / 'bin/node'
    expected_node = archive.extractfile(node_name + '/bin/node').read()
    if not node_bin.exists() or hashlib.sha256(node_bin.read_bytes()).digest() != hashlib.sha256(expected_node).digest():
        archive.extractall(root, filter='data')

# Wrapper integrity is the exact SHA512 in Core's packageManager field.
wrapper_hash = 'b3951d6d6ff4a9f13dc7cf56cd28d2b8eb37dbcc9c68e52e1e1191873ea9f82a017287ab50baadc5ccc494f036c67c0e47eb13608c2fa36f47711b61ea128e61'
wrapper = checked_download('https://registry.npmjs.org/pnpm/-/pnpm-12.15.0.tgz', root / 'pnpm-12.15.0.tgz', 'sha512', wrapper_hash)
wrapper_root = root / 'pnpm-12.15.0'
wrapper_root.mkdir(exist_ok=True)
if not (wrapper_root / 'package/package.json').exists():
    with tarfile.open(fileobj=io.BytesIO(wrapper), mode='r:gz') as archive:
        archive.extractall(wrapper_root, filter='data')

# Native package integrity from the official npm registry for this pinned version.
native_hash = base64.b64decode('yc+QlZR+9+nr29J4fRzhMoapgxTBDndq/+peyoq1XUufnQFnfbXUMFudDIKzHi545linGqmOmXfn0NoufNgcOg==').hex()
native = checked_download('https://registry.npmjs.org/@pnpm/exe.linux-x64/-/exe.linux-x64-12.15.0.tgz', root / 'pnpm-native-12.15.0.tgz', 'sha512', native_hash)
native_root = root / 'pnpm-native-12.15.0'
native_root.mkdir(exist_ok=True)
with tarfile.open(fileobj=io.BytesIO(native), mode='r:gz') as archive:
    pnpm_bin = native_root / 'package/pnpm'
    expected_pnpm = archive.extractfile('package/pnpm').read()
    if not pnpm_bin.exists() or hashlib.sha256(pnpm_bin.read_bytes()).digest() != hashlib.sha256(expected_pnpm).digest():
        archive.extractall(native_root, filter='data')
pnpm_bin.chmod(0o755)
bin_dir = root / 'bin'
bin_dir.mkdir(exist_ok=True)
link = bin_dir / 'pnpm'
if link.is_symlink():
    if link.resolve() != pnpm_bin:
        link.unlink()
        link.symlink_to(pnpm_bin)
elif link.exists():
    raise RuntimeError(f'Refusing to overwrite an existing non-symlink: {link}')
else:
    link.symlink_to(pnpm_bin)
print('Verified Node v26.12.1 and pnpm 12.15.0 artifacts.')
PY
export PATH="$MORPHEUS_TOOLS_DIR/node-v26.12.1-linux-x64/bin:$MORPHEUS_TOOLS_DIR/bin:$PATH"
test "$(node --version)" = v26.12.1
test "$(pnpm --version)" = 12.15.0
echo "Activate with: export PATH=\"$MORPHEUS_TOOLS_DIR/node-v26.12.1-linux-x64/bin:$MORPHEUS_TOOLS_DIR/bin:\$PATH\""
