---
layout: base
---
# Hi, I'm Felipe

*Software engineer, gamer, hopeless romantic, optimist.*

Welcome to my little corner of the internet! About section and contact can be found here. 😊

## About 💻

I am a software engineer based in the US interested in web technologies. I am currently working and learning with C# and ASP.NET Core to create web applications. I have work experience with HTML, CSS, JavaScript, C++ and C#.

Lately, I have been using and learning Jekyll, a static site generator written in Ruby. For example, this website is built with it in combination with plain HTML and CSS.

## Contact 📫

You can find me on my socials:

- You can write to me via the email on my <a href="https://github.com/febog" rel="me noreferrer" target="_blank">GitHub</a> profile.
- I'm also on <a href="https://hachyderm.io/@febog" rel="me noreferrer" target="_blank">Mastodon</a>.

## Latest blog posts 📝

<ul>
  {% for post in site.posts limit:3 %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> 📅 {{ post.date | date_to_long_string: "ordinal", "US" }} 🏷 {{ post.tags | join: ", " }}</li>
  {% endfor %}
</ul>

---

I hope you have a fantastic day! 🥤
