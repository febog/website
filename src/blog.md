---
title: Blog
---
# My personal blog

Welcome to my personal blog, where I write about random things I find interesting or would like to share.

## Posts

[All posts by year →](/blog/years)

[All posts by tag →](/blog/tags)

## Latest

<ul>
  {% for post in site.posts limit:10 %}
    {% include blog-item.html post=post %}
  {% endfor %}
</ul>
