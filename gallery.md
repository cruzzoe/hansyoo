---
layout: page
page_key: gallery
permalink: /gallery/
---

<section class="page-intro reveal">
  <p class="eyebrow">{{ site.data.translations[site.active_lang].gallery.eyebrow }}</p>
  <h1>{{ site.data.translations[site.active_lang].gallery.title }}</h1>
  <p class="lead">{{ site.data.translations[site.active_lang].gallery.intro }}</p>
</section>
<div class="gallery-grid">
  {% for art in site.data.gallery %}
  <a class="art-card reveal" href="{{ '/assets/images/' | append: art.file | relative_url }}" data-lightbox="hans-gallery" data-title="{{ art.title[site.active_lang] }}">
    <img src="{{ '/assets/images/' | append: art.file | relative_url }}" alt="{{ art.title[site.active_lang] }}" loading="lazy" width="700" height="520">
    <span>{{ art.title[site.active_lang] }}</span>
  </a>
  {% endfor %}
</div>
