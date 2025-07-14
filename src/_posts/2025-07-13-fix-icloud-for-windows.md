---
title: How to fix iCloud for Windows on Windows 10 and 11
tags: software
image:
  path: "https://static.febog.com/blog-20250713-cover.jpg"
  height: 720
  width: 1280
  alt: White cloud against a clear blue sky. Photo by Dallas Reedy via Unsplash.
---
This post is about the latest version of [iCloud for Windows](https://support.apple.com/en-us/103232), available only through the Microsoft Store. With it, you can access your iCloud photos, videos, mail, calendar, files, etc. from your Windows PC. However, setting it up isn’t always smooth.

There are two common issues I’ve consistently encountered:

1. iCloud Drive gets stuck on “Initializing”, and your files never sync to your PC during initial setup.
2. The iCloud main window pops up automatically on boot, without an option to run minimized.

If you’ve run into either of these, you are not alone.

## The problems

1. **iCloud Drive stuck on “Initializing”.** This issue is [very common](https://discussions.apple.com/thread/254557515). A quick search will bring up multiple [Reddit threads](https://www.reddit.com/r/iCloud/comments/1c8m1sa/icloud_drive_stuck_initializing_for_2months_best/) and Microsoft Store reviews where users complain that iCloud Drive remains stuck in the “Initializing” state and never syncs.
2. **iCloud App pops up on every startup.** This one is more recent. A search returns [multiple reports from users](https://www.reddit.com/r/iCloud/comments/1kk435p/icloud_popup_on_startup_windows_11/) experiencing this behavior over the past couple of months. The app doesn't offer a built-in setting to minimize to tray or prevent the main window from opening, even though this behavior is new. Some advice online suggests disabling the app from startup or uninstalling it entirely. But that defeats the purpose of using iCloud on Windows in the first place. If you want your iCloud Photos, Drive files, and other synced content available on your PC, the app needs to run in the background.

## Solution

Fixing either of those problems involves the same process: **resetting and re-authenticating your iCloud account**. It’s a bit tedious, since it temporarily removes synced data from your PC, but once completed, iCloud should sync correctly and stop popping up on boot. The data remains safe since it will stay in the cloud and your other Apple devices where you have iCloud enabled.

Here are the steps:

1. **Close all iCloud processes**
  - Open **Task Manager** and end all iCloud-related processes. Look for anything with "iCloud" or "Apple" in the name and right-click **End Task**.

2. **Relaunch iCloud as Administrator**
  - Open the Start menu.
  - Type `iCloud`.
  - Right-click the iCloud app.
  - Select **Run as administrator**.

3. **Sign out of iCloud**
  - In the iCloud window, click **Account Details** (top right corner).
  - Choose **Sign Out**.

   > This will remove your synced data from the PC, but it will stay in the cloud and your other Apple devices.

4. **Sign back in**
  - Log in again to your Apple Account.
  - Complete any verification steps required by your Apple Account.

5. **Important: Verify in “Passwords and Keychain”**  
  - In the main iCloud control panel, find the **Passwords and Keychain** section.
  - Click the **"Verify…"** button if it appears.
  - Complete the verification process.

   > This is something that I found by clicking around and this is required even if you don’t plan to sync your passwords to the Windows PC. This acts as an extra security measure for your Apple Account and is required before the rest of the options (like iCloud Drive) will work correctly. You can still choose to not sync passwords and keychain after completing this verification.

6. **Enable iCloud Drive**
  - Toggle **iCloud Drive** on.
  - If it's already on, turn it off and back on again to refresh the sync process.

## Conclusion and additional tip

At this point, you should start seeing your iCloud Drive files appear in Windows Explorer. Additionally, the next time you reboot your PC, iCloud will run quietly in the background without opening its control panel as expected.

This solution came after a lot of trial and error, clicking through settings, and reading scattered tips online. I rebooted a few times while testing, so if something doesn’t seem to work right away, a restart between steps might help.
