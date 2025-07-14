---
title: How to deploy a Jekyll website to Cloudflare Pages using the latest Ruby version
date: 2025-04-11 23:41:48 -0700
tags: software code engineering
image:
  path: "https://static.febog.com/blog-20250411-cover.jpg"
  height: 720
  width: 1280
  alt: Yellow origami paper boat on a light blue background. Photo by Alex Padurariu via Unsplash.
code_highlight: true
---
Today, there are many great options for hosting [static](https://en.wikipedia.org/wiki/Static_web_page) websites. One of them is [Cloudflare Pages](https://pages.cloudflare.com/), which not only leverages Cloudflare’s network but also provides a generous free tier, like many of their other services.

It supports multiple [frontend frameworks](https://developers.cloudflare.com/pages/framework-guides/) out of the box. Once you connect your project’s code repository [through their dashboard](https://developers.cloudflare.com/pages/get-started/git-integration/), continuous deployment is set up automatically—no additional configuration required.

This method works wonderfully. The deployed website is available in seconds after pushing updates for a small website.

In my case, I've been a very happy user of the service with a [Jekyll](https://jekyllrb.com/) website, the framework that powers the also awesome service [GitHub Pages](https://pages.github.com/).

## Controlling the Ruby version

This Cloudflare Pages built-in deployment method includes a predefined build environment for deploying your code. From the build logs, you can view details about the software versions used in that environment. According to their [build image documentation](https://developers.cloudflare.com/pages/configuration/build-image/), it supports a variety of languages and tools out of the box.

In the case of Jekyll, which is a [Ruby Gem](https://jekyllrb.com/docs/ruby-101/#gems), requires a [Ruby](https://www.ruby-lang.org/en/) environment [during deployment](https://jekyllrb.com/docs/installation/). While the build process is configurable, it's limited to the software versions provided by the image.

Although the documentation lists some languages and runtimes as supporting “Any version,” that’s not always the case. That depends on when the Pages build image was last updated. As of this writing, Ruby 3.2.2 is the default version, and “Any version” is marked as supported. However, the latest release, Ruby 3.4.2 (released [two months ago](https://www.ruby-lang.org/en/news/2025/02/14/ruby-3-4-2-released/)), does not work.

If the version is not available, in the logs it will show an error like:

```
Version not found

If this is a new Ruby version, you may need to update the plugin:
asdf plugin update ruby
```

New versions can take a while to become available, with some [users reporting](https://community.cloudflare.com/t/timeline-for-adding-ruby-3-3-1-support/651837) waiting up to six months for certain versions to be available.

## Direct Upload as an alternative

Fortunately, Cloudflare offers the option to [directly upload](https://developers.cloudflare.com/pages/get-started/direct-upload/) static assets to Cloudflare Pages, giving you full control over the build process and how your site’s files are generated.

As an added bonus, this approach works with [continuous integration platforms](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/). So, while you’re bypassing the built-in build environment, you can still enjoy the convenience of continuous deployment.

In my case, since the Jekyll site is hosted on GitHub, I can use GitHub Actions to handle the build and deployment. This involves adding a YAML workflow file under `.github/workflows` in the repository. From there, it's just a matter of configuring the action to replicate the steps of the standard Pages integration. And because I’m authoring the workflow myself, I can control the environment and tools it uses.

## Configuring a GitHub Action to deploy a Jekyll website to Cloudflare Pages

To deploy a Jekyll website to Cloudflare Pages using a GitHub Action, the workflow needs to perform the following steps:

1. Check out the website's source code.
2. Set up the Ruby environment for Jekyll.
3. Install Ruby dependencies as specified in the `Gemfile`.
4. Run the Jekyll build command, which generates the files to be hosted.
5. Deploy the generated files to Cloudflare Pages.

### Setting up the Ruby environment in a GitHub Action

To configure the Ruby environment (step 2), I use the [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby) GitHub Action which is actively maintained by the official Ruby organization. This action supports the latest versions of Ruby.

> One of the advantages of using this Action is that it’s prebuilt, significantly reducing setup time. In my tests, initializing the Ruby environment with this action took about 3 seconds. In contrast, the built-in Cloudflare Pages environment, which compiles the selected Ruby version during deployment, increased build times from around 30 seconds to up to 5 minutes when using the non-default Ruby version.

This Action can also be configured to install the required Ruby dependencies for the project.

### Deploying to Cloudflare Pages from a GitHub Action

Cloudflare provides a guide on [Direct Upload with continuous integration](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/) which explains how to deploy from a GitHub Action and how to generate the required API token.

That said, the guide is currently out of date. Cloudflare now recommends using the [`cloudflare/wrangler-action`](https://github.com/cloudflare/wrangler-action) for GitHub Actions deployments. Its documentation includes [an example workflow](https://github.com/cloudflare/wrangler-action?tab=readme-ov-file#deploy-your-pages-site-production--preview) for this exact use case. Nevertheless, the API token setup outlined in the older guide remains valid and works with the updated method.

### Completed GitHub Action

Putting all these steps together results in a GitHub Action that looks as follows:

```yml
# Use a GitHub action to deploy to Cloudflare Pages using Direct Upload

name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    name: Build and deploy

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          working-directory: ./src
          bundler-cache: true # runs 'bundle install' and caches installed gems automatically

      - name: Build Jekyll website
        working-directory: ./src
        run: bundle exec jekyll build

      - name: Deploy
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${% raw %}{{ secrets.CLOUDFLARE_PAGES_API_TOKEN }}{% endraw %}
          accountId: ${% raw %}{{ secrets.CLOUDFLARE_ACCOUNT_ID }}{% endraw %}
          command: pages deploy ./src/_site --project-name=febog # Directory of output assets
          gitHubToken: ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}
```

## Conclusion

Cloudflare Pages is a powerful and flexible platform that offers multiple configuration options to suit different project needs. Using either the built-in continuous integration or set up a custom GitHub Action to have full control over the build process are both reliable and fast options to implement continuous deployment.

If you'd like to see this setup in action with a real Jekyll project, the full source code is available under the MIT license in [this repository](https://github.com/febog/website/blob/1ef4207f4c3157dfda240e1d1e95f16a4f96b43d/.github/workflows/pages-deployment.yml).
