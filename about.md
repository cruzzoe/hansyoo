---
layout: page
page_key: about
permalink: /about/
---

<section class="about-card reveal">
  <div class="avatar-fish" aria-hidden="true">🐠</div>
  <div>
    <p class="eyebrow">{{ site.data.translations[site.active_lang].about.eyebrow }}</p>
    <h1>{{ site.data.translations[site.active_lang].about.title }}</h1>
    <p class="lead">{{ site.data.translations[site.active_lang].about.intro }}</p>
  </div>
</section>
<section class="story-grid">
  {% for item in site.data.translations[site.active_lang].about.facts %}
  <article class="fact-bubble reveal"><span>{{ item.icon }}</span><h2>{{ item.title }}</h2><p>{{ item.text }}</p></article>
  {% endfor %}
</section>
