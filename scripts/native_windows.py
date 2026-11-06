"""Launch fixed existing MORPHEUS activation routes; never register or replace them."""
import os

def _registered_scheme():
    import winreg
    # These are AppIdentity's existing dev/production protocol schemes.
    for scheme in ('morpheus-dev','morpheus'):
        try:
            with winreg.OpenKey(winreg.HKEY_CLASSES_ROOT,scheme) as key:
                winreg.QueryValueEx(key,'URL Protocol')
            return scheme
        except OSError:
            continue
    return None

def launch_window(window):
    if not isinstance(window,str):raise ValueError('Unsupported native window')
    route={'settings':'settings','connection':'status'}.get(window)
    if route is None:
        raise ValueError('Unsupported native window')
    if os.name!='nt':
        raise RuntimeError('Native Settings and diagnostics require the installed MORPHEUS Windows application.')
    scheme=_registered_scheme()
    if not scheme:
        raise RuntimeError('No MORPHEUS Windows activation handler is registered. Run the existing Windows application first. The browser cannot create its Settings window.')
    try:
        os.startfile(f'{scheme}://{route}')
    except OSError as error:
        raise RuntimeError('Windows could not launch the registered MORPHEUS application. Check its installation or running instance.') from error
    # Shell acceptance is not proof that the window was displayed.
    return {'requested':True,'window':window}
