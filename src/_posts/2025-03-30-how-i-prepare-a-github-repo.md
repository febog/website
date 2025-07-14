---
title: How I prepare a new GitHub repository for personal use
date: 2025-03-30 20:52:00 -0700
tags: software code git engineering
---
This is a personal list of things that I usually do when I create a new repository. This is not meant to be a general recommendation but rather I write this to serve as a **checklist for myself** when creating a new codebase for a learning or personal project.

In general, I like to keep things *simple and minimal*. That's why I only enable things that I will use. For small hobby projects I prefer to enable features when they are needed.

Without further ado, these are the things that I set, as of March 2025, when I create a new small repository for personal use.

## Keeping it simple for smaller projects

For small projects I disable the features that I won't use: wikis, issues, sponsorships, etc. These toggles can be found in the repository page, then `Settings -> General -> Features`.

## Pull request merge behavior

> This is just personal preference.

Under `Settings -> General -> Pull Requests`.

- *Only* allow squash merging, with the default commit message set to the PR title and description. Disable "merge commits" and "rebase merging".
- Always suggest updating pull request branches set to enabled.
- Automatically delete head branches set to enabled.

## Default branch: main

As a start, I create a regular branch protection rule with the branch name pattern `main`. This creates a rule that only applies to my default branch. Under `Settings -> Branches`.

For the main branch, I generally enable the following protections:

- Require signed commits.
- Require linear history.
- Do not allow bypassing the above settings.

In addition to the above, for projects where I will be using pull requests instead of committing directly to `main` I usually enable the following protections:

- Require a pull request before merging.
    - Dismiss stale pull request approvals when new commits are pushed.
- Require status checks to pass before merging.
    - Require branches to be up to date before merging.

## Actions

Under `Settings -> Actions -> General`.

Artifact and log retention: 1 day. For personal hobby projects I don't really need more and it's an easy way to reduce your storage usage on GitHub. For reference, the default is 90 days for personal accounts.

## Final thoughts

For creating something quick for learning and experimenting with code, these are the settings that I like the most. But especially for hobby projects, use what makes *you* happy.
