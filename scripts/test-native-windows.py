"""Activation contract tests; does not launch or verify Windows windows."""
import unittest
from unittest.mock import patch
from types import SimpleNamespace
import native_windows
class NativeWindowsTests(unittest.TestCase):
 def test_non_windows_unavailable(self):
  with patch.object(native_windows,'os',SimpleNamespace(name='posix')):
   with self.assertRaises(RuntimeError):native_windows.launch_window('settings')
 def test_only_existing_fixed_routes(self):
  calls=[]
  with patch.object(native_windows,'os',SimpleNamespace(name='nt',startfile=calls.append)),patch.object(native_windows,'_registered_scheme',return_value='morpheus-dev'):
   self.assertTrue(native_windows.launch_window('settings')['requested'])
   self.assertTrue(native_windows.launch_window('connection')['requested'])
   with self.assertRaises(ValueError):native_windows.launch_window('arbitrary-command')
  self.assertEqual(calls,['morpheus-dev://settings','morpheus-dev://status'])
 def test_no_registered_handler(self):
  with patch.object(native_windows,'os',SimpleNamespace(name='nt')),patch.object(native_windows,'_registered_scheme',return_value=None):
   with self.assertRaises(RuntimeError):native_windows.launch_window('settings')
 def test_launch_failure_is_reported(self):
  def fail(uri):raise OSError('fixture failure')
  with patch.object(native_windows,'os',SimpleNamespace(name='nt',startfile=fail)),patch.object(native_windows,'_registered_scheme',return_value='morpheus'):
   with self.assertRaises(RuntimeError):native_windows.launch_window('connection')
if __name__=='__main__':unittest.main()
