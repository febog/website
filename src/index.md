---
---
# Hi, I'm Felipe

Welcome to my personal website! Here you will find information about me, my [projects](/projects) and a tiny personal [blog](/blog). The best way to contact me is via the email on my [GitHub profile](https://github.com/febog).

## About me

Hi! My name is Felipe Bojorquez and I'm a software engineer based in the US. I enjoy working with the web and I am currently focused on C# and [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/overview) to create web applications. I have experience with C#, HTML, CSS, JavaScript and C++.

## Latest blog posts

<ul>
  {% for post in site.posts limit:3 %}
    {% include blog-item.html post=post %}
  {% endfor %}
</ul>

[All posts →](/blog/years)

## Contact information

You can find me on:

- <a href="https://github.com/febog" rel="me" target="_blank">GitHub</a>
- <a href="https://hachyderm.io/@febog" rel="me" target="_blank">Mastodon</a>

## About this site

I built this website by hand as a side project with plain HTML and CSS in combination with [Jekyll](https://jekyllrb.com/), a static site generator written in [Ruby](https://www.ruby-lang.org/en/). The source code is available on my [personal website repository](https://github.com/febog/website).

<small>I hope you have a fantastic day! 🥤</small>
