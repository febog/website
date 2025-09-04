---
title: How to check the RAM speed on Windows 11 (updated method)
date: 2025-09-04 15:00:00 -0700
tags: troubleshooting
image:
  path: "https://static.febog.com/blog-20250904-cover.jpg"
  height: 720
  width: 1280
  alt: Closeup of RAM memory sticks. Photo by Luan Gjokaj via Unsplash.
---
With the deprecation of WMIC in Windows 11 version 25H2, a new command will be needed to check your RAM speed.

When you install new RAM, it doesn’t always run at the fastest speed it’s rated for right out of the box. Many memory kits support XMP (on Intel systems) or DOCP/EXPO (on AMD systems with ASUS motherboards), which are special profiles that let your motherboard unlock the higher advertised speeds of the RAM.

Traditionally, a quick way to confirm whether the overclocked profile was enabled was via the [`wmic` command](https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmic). However, WMIC has been deprecated for a while and is officially [scheduled for removal](https://blogs.windows.com/windows-insider/2025/08/29/releasing-windows-11-version-25h2-to-the-release-preview-channel/) with the release of Windows 11 25H2 in late 2025.

So something like this will no longer work:

```
wmic memorychip get speed
```

The modern approach is to use PowerShell instead:

```
Get-CimInstance Win32_PhysicalMemory | Select-Object BankLabel, Speed, ConfiguredClockSpeed
```

Which shows:

- `BankLabel`: Physically labeled bank where the memory is located.
- `Speed`: The rated maximum of the DIMM.
- `ConfiguredClockSpeed`: The configured clock speed of the memory device, in megahertz (MHz) that your system/BIOS actually set it to, which is the real effective RAM speed that Windows is using.

More information about the information available can be found in the [`Win32_PhysicalMemory` reference](https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/win32-physicalmemory).

Or to show just the numbers:

```
(Get-CimInstance Win32_PhysicalMemory).ConfiguredClockSpeed
```

I tested these commands in Windows 11 24H2 Build 26100. At the moment of this writing, both the old and new commands work so I can confirm I am getting the same output in both.

{% include img-caption.html url="https://static.febog.com/blog-20250904-fig1.png" width="1115" height="628"
alt="Screenshot of a Terminal window showing both the old and new commands returning the same results."
caption="Comparison of both the old and new commands side by side returning the same results." %}

With this PowerShell command, you can confirm whether your memory is running at its rated speed or if it’s using a default lower value. Useful to do if you are building a PC and configuring it for the first time.
