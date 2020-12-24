---
layout: post-full
title:  "Contact Me"
categories: contact
---

<script>
  var param1 = "{{ page.categories }}";
  if (param1 == "") {
    param1 = "{{ page.categories[1] }}";
  }
  
  {% include blog-dynam.js %}
</script>

hello!