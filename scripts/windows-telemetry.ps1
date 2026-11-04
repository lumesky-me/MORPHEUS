# Long-lived collector. Same Windows counters as DeviceStatusProvider/DashboardHome.
# No Gateway, profile access, or third-party modules. stdout is JSON records only.
$ErrorActionPreference = 'Stop'
Add-Type @'
using System;
using System.Runtime.InteropServices;
public static class MorpheusMemory {
 [StructLayout(LayoutKind.Sequential)] public struct Status {
  public uint Length, Load; public ulong Total, Available, PageTotal, PageAvailable, VirtualTotal, VirtualAvailable, Extended;
 }
 [DllImport("kernel32.dll", SetLastError=true)] static extern bool GlobalMemoryStatusEx(ref Status status);
 public static double Usage() { var s=new Status();s.Length=(uint)Marshal.SizeOf(s);if(!GlobalMemoryStatusEx(ref s))throw new InvalidOperationException("Memory unavailable");return 100.0*(s.Total-s.Available)/s.Total; }
}
'@
$cpu = $null
$gpu = @{}
$nextProbe = [DateTime]::MinValue
try {
 try { $cpu = New-Object System.Diagnostics.PerformanceCounter('Processor','% Processor Time','_Total');$null=$cpu.NextValue() } catch { $cpu=$null }
 while ($true) {
  Start-Sleep -Seconds 1
  $cpuValue=$null;$ramValue=$null;$gpuValue=$null
  try { if($cpu){$cpuValue=[Math]::Min(100,[Math]::Max(0,[double]$cpu.NextValue()))} } catch { $cpuValue=$null }
  try { $ramValue=[MorpheusMemory]::Usage() } catch {}
  try {
   if($gpu.Count -eq 0 -and [DateTime]::UtcNow -ge $nextProbe){
    $nextProbe=[DateTime]::UtcNow.AddSeconds(30)
    $category=New-Object System.Diagnostics.PerformanceCounterCategory('GPU Engine')
    foreach($name in $category.GetInstanceNames()){
     if($name -like '*engtype_3D*'){$counter=New-Object System.Diagnostics.PerformanceCounter('GPU Engine','Utilization Percentage',$name);$null=$counter.NextValue();$gpu[$name]=$counter}
    }
   } elseif($gpu.Count -gt 0){
    $totals=@{}
    foreach($name in $gpu.Keys){$key=$name.Substring($name.IndexOf('luid_'));$totals[$key]+=[double]$gpu[$name].NextValue()}
    $gpuValue=[Math]::Min(100,[Math]::Max(0,($totals.Values | Measure-Object -Maximum).Maximum))
   }
  } catch { foreach($counter in $gpu.Values){$counter.Dispose()};$gpu=@{} }
  @{type='dashboard-metrics';timestamp=[DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds();cpu=@{usagePercent=$cpuValue};ram=@{usagePercent=$ramValue};gpu=$gpuValue} | ConvertTo-Json -Compress
 }
} finally { if($cpu){$cpu.Dispose()};foreach($counter in $gpu.Values){$counter.Dispose()} }
