---
layout: post-full
title:  "About Me"
categories: about
---

<script>
    function updateBlogSidebar() {
        document.getElementsByClassName("sec-nav")[0].style.background = 'url("/assets/img/blog/header/{{ page.categories }}.png") center right';
        document.getElementById("nav-{{ page.categories }}").classList.add("activet-l")
    }
</script>

hello!