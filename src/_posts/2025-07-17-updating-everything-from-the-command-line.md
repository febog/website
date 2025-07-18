---
title: Updating everything at once from the command line
date: 2025-07-17 18:21:00 -0700
tags: software
image:
  path: "https://static.febog.com/blog-20250717-cover.jpg"
  height: 720
  width: 1280
  alt: Screenshot of a command prompt with light text on a dark background. Photo by Gabriel Heinzer via Unsplash.
---
Whether I’m on Mac, Linux or Windows I love the simplicity that package managers bring to keep software up to date. In this post I’m sharing the update commands I use regularly to update everything on my personal machines.

> 💡 This post is primarily for my own notes, but feel free to use or adapt these commands for your own setup.

To make things easier, in the case of Mac and Linux I created aliases to update everything using the following commands.

## Update everything with Homebrew (Mac and Linux)

I use [Homebrew](https://brew.sh/) in both my Mac and Linux environments. To update everything I use the following commands:

```
brew update && brew outdated && brew upgrade && brew cleanup
```

This will:

1. Update Homebrew itself.
2. Show you what's outdated.
3. Upgrade all packages.
4. Clean up any unnecessary files.

Source: [Apple Stack Exchange](https://apple.stackexchange.com/questions/389080/how-to-update-packages-installed-via-homebrew/464238#464238).

## Update everything with `apt-get` (Linux)

For Debian-based systems like Ubuntu, here’s the command I use to update system packages:

```
sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade
```

This will:

1. Fetch the latest package lists.
2. Install the newest versions of all packages.
3. In addition to performing the function of upgrade, `dist-upgrade` also intelligently handles changing dependencies with new versions of packages.

Source: [Ask Ubuntu](https://askubuntu.com/questions/733434/one-single-command-to-update-everything-in-ubuntu#733439) and [`apt-get` documentation](https://linux.die.net/man/8/apt-get).

## Command line update in WinGet (Windows)

On Windows, I use [WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/) for package management but I prefer a manual approach rather than upgrading everything at once.

First, I get which packages I can upgrade with:

```
winget upgrade
```

This will return a list of the all the packages that have upgrades available according to WinGet.

After choosing a package to upgrade I run:

```
winget upgrade -e --source winget --id  <id>
```

Where:

- `<id>` is the Id of the package you want to upgrade as shown in the previous step.
- `-e` ensures an **exact match** for the package ID.
- `--source winget` restricts the search to the official source.

Source: [`winget upgrade` documentation](https://learn.microsoft.com/en-us/windows/package-manager/winget/upgrade#options).

## Final thoughts

I like to have everything up to date on my machines, so I run these regularly when I'm working. I have found that having a reliable update routine helps keep things running smoothly.
