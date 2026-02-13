---
title: Updating Ruby cheatsheet
date: 2026-01-21 10:40:00 -0800
tags: software code
image:
  path: "https://static.febog.com/blog-20260121-cover.jpg"
  height: 720
  width: 1280
  alt: Photo of ruby crystals on a white background. Photo by Jason D via Unsplash.
last_modified_at: 2026-02-12 17:40:00 -0800
---
Although [`rbenv`](https://github.com/rbenv/rbenv) makes managing multiple Ruby versions straightforward, I’ve found that updating Ruby for active projects still involves a handful of important steps. Forgetting one of them sometimes leads to confusing dependency issues or mismatched versions. For this reason, I put together a concise checklist of the commands I use when upgrading Ruby.

Whenever a new version of Ruby comes out and I want to update my project and coding environment, I run:

1. `rbenv install -l` to list latest stable versions available.
2. `rbenv install x.y.z` install selected version.
3. `rbenv global x.y.z` set global version to use.
4. Update `Gemfile` to new version number in the project.
5. Update `.ruby-version` to new version number in the project.
6. Run `gem install bundler` to install the latest version, appropriate for the just installed Ruby version.
7. Delete the lock file of the project to regenerate it.
8. In the project, run `bundle install` to update lock file.
9. Done.

> **Update February 12th, 2026**: I have found that deleting the `.lock` file of the project before running `bundle install` and starting fresh has helped me when troubleshooting the Ruby version of a project, so I added it as step #7.
