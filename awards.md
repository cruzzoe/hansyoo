---
layout: page
page_key: awards
permalink: /awards/
---

{% assign awards = site.data.translations[site.active_lang].awards %}
<section class="page-intro reveal">
  <p class="eyebrow">{{ awards.eyebrow }}</p>
  <h1>{{ awards.title }}</h1>
  <p class="lead">{{ awards.note }}</p>
</section>
<section class="story-grid awards-grid">
  {% for award in awards.items %}
  <article class="fact-bubble reveal"><span>{{ award.icon }}</span><p class="award-date">{{ award.date }}</p><h2>{{ award.title }}</h2><p>{{ award.text }}</p></article>
  {% endfor %}
</section>
