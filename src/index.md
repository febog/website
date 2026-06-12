---
---
<div class="introduction">
  <h1>Felipe Bojorquez</h1>
  <p class="bio-details">
    <span class="icon-text">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="color: var(--body-color);" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M14 15h-4v-2H2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6h-8zm6-9h-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v4h20V8a2 2 0 0 0-2-2m-4 0H8V4h8z"></path></svg>
      <span>Software Engineer</span>
    </span>
    <span class="icon-text">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" style="color: var(--body-color);" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.97 6.97 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></path></svg>
      <span>USA</span>
    </span>
  </p>
</div>

Welcome to my personal website! Here you will find information about me, my [projects](/projects) and a tiny personal [blog](/blog). The best way to contact me is via the email on my [GitHub profile](https://github.com/febog).

## About me

Hi! My name is Felipe Bojorquez and I'm a software engineer based in the US. I enjoy working with the web and I am currently focused on C# and [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/overview) to create web applications. I have experience with C#, HTML, CSS, JavaScript and C++.

You can find me on:

- <a href="https://github.com/febog" rel="me" target="_blank">GitHub</a>
- <a href="https://hachyderm.io/@febog" rel="me" target="_blank">Mastodon</a>

## Latest blog posts

<ul>
  {% for post in site.posts limit:3 %}
    {% include blog-item.html post=post %}
  {% endfor %}
</ul>

[All posts →](/blog/years)

## About this site

I built this website by hand as a side project with plain HTML and CSS in combination with [Jekyll](https://jekyllrb.com/), a static site generator written in [Ruby](https://www.ruby-lang.org/en/). The source code is available on my [personal website repository](https://github.com/febog/website).

<small>I hope you have a fantastic day! 🥤</small>
