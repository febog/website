---
---
# Hi, I'm Felipe

Hi! My name is Felipe Bojorquez and I'm a software engineer. Welcome to my personal website! Here you will find information about me, my [projects](/projects) and a tiny personal [blog](/blog). The best way to contact me is via the email on my [GitHub profile](https://github.com/febog).

## About me 💻

I am a software engineer based in the US interested in web technologies. I am currently working and learning with C# and [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/overview) to create web applications. I have work experience with C#, HTML, CSS, JavaScript and C++.

Lately, I have been using and learning [Jekyll](https://jekyllrb.com/), a static site generator written in [Ruby](https://www.ruby-lang.org/en/). For example, [this website](https://github.com/febog/website) is built with it in combination with plain HTML and CSS.

## Contact information 📫

You can find me on:

- <a href="https://github.com/febog" rel="me" target="_blank">GitHub</a>
- <a href="https://hachyderm.io/@febog" rel="me" target="_blank">Mastodon</a>
- <a href="https://bsky.app/profile/febog.bsky.social" rel="me" target="_blank">Bluesky</a>

## Latest blog posts 📝

<ul>
  {% for post in site.posts limit:3 %}
    {% include blog-item.html post=post %}
  {% endfor %}
</ul>

<small>I hope you have a fantastic day! 🥤</small>
