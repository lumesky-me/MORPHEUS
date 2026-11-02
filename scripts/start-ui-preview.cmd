@echo off
setlocal
cd /d "%~dp0.."
where py >nul 2>&1
if not errorlevel 1 goto use_py
where python >nul 2>&1
if not errorlevel 1 goto use_python
echo Python 3 is required. Install Python 3, reopen your terminal, and try again.
echo See UI_PREVIEW.md for the Windows installation and launch commands.
exit /b 1
:use_py
py -3 scripts\ui-preview.py --open-browser %*
exit /b %errorlevel%
:use_python
python scripts\ui-preview.py --open-browser %*
exit /b %errorlevel%
