---
name: 'NPM package: table-filter'
title: 'NPM package: table-filter'
code_url: https://github.com/febog/table-filter
project_year: 2026
years_active: '2026'
description: An npm package for filtering table rows.
---
## Background

I created this package as a personal learning exercise on how to publish npm packages following modern practices with an emphasis on how to improve the security posture against supply chain attacks in open source software.

As such, this repository and the process that publishes the package to npm uses features such as [immutable releases](https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases), [signed software packages](https://docs.npmjs.com/generating-provenance-statements#about-sigstore) through [Sigstore](https://www.sigstore.dev/) (thanks to npm's [trusted publishing](https://docs.npmjs.com/trusted-publishers)) and verified commits and tags.

As for the package itself, I found myself copying and pasting code to implement a simple table search for my small personal projects. Since my use case is small websites I chose to keep the scope of the project small.

This was my first experience working with *publishing* npm packages and it can be found in npm as [@febog/table-filter](https://www.npmjs.com/package/@febog/table-filter).
