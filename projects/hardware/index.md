---
layout: post-full
title:  "Index of Hardware Projects"
categories: hardware
---

<script>
    function updateBlogSidebar() {
        document.getElementsByClassName("sec-nav")[0].style.background = 'url("/assets/img/blog/header/{{ page.categories }}.png") center right';
    }
</script>

hello!

{% for category in site.categories %}
    {% if category[0] == page.categories %}
  <!-- <h3>{{ category[0] }}</h3> -->
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {{ post.cover_image }}
    {% endfor %}
  </ul>
  {% endif %}
{% endfor %}