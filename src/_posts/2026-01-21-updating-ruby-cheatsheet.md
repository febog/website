---
title: Updating Ruby cheatsheet
date: 2026-01-21 10:40:00 -0800
tags: software
image:
  path: "https://static.febog.com/blog-20260121-cover.jpg"
  height: 720
  width: 1280
  alt: Photo of ruby crystals on a white background. Photo by Jason D via Unsplash.
---
Although [`rbenv`](https://github.com/rbenv/rbenv) makes managing multiple Ruby versions straightforward, I’ve found that updating Ruby for active projects still involves a handful of important steps. Forgetting one of them sometimes leads to confusing dependency issues or mismatched versions. For this reason, I put together a concise checklist of the commands and updates I use on when upgrading Ruby.

Whenever a new version of Ruby comes out and I want to update my project and coding environment, I run:

1. `rbenv install -l` to list latest stable versions available.
2. `rbenv install x.y.z` install selected version.
3. `rbenv global x.y.z` set global version to use.
4. Update `Gemfile` to new version number in the project.
5. Update `.ruby-version` to new version number in the project.
6. Run `gem install bundler` to install the latest version, appropriate for the just installed Ruby version.
7. In the project, run `bundle install` to update lock file.
8. Done.
