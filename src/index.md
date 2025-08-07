---
---
# Hi, I'm Felipe

*Software engineer, gamer, hopeless romantic, optimist.*

Welcome to my little corner of the internet! About section and contact can be found here. 😊

## About 💻

I am a software engineer based in the US interested in web technologies. I am currently working and learning with C# and ASP.NET Core to create web applications. I have work experience with HTML, CSS, JavaScript, C++ and C#.

Lately, I have been using and learning Jekyll, a static site generator written in Ruby. For example, this website is built with it in combination with plain HTML and CSS.

## Contact 📫

The best way to contact me is via the email on my GitHub profile.

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
