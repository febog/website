---
title: Blog
---
# My personal blog

Welcome to my personal blog, where I write about random things I find interesting or would like to share.

## Latest posts

<ul>
  {% for post in site.posts limit:10 %}
    {% include blog-item.html post=post %}
  {% endfor %}
</ul>

## Tags

🏷 <a href="/blog/tags">Blog tags</a>

## Year archives

📅 <a href="/blog/years">Blog year archives</a>
