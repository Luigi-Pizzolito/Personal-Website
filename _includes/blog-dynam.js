//same as _layouts/post.html:56 but for the other pages through the passed param1
function updateBlogSidebar() {
    document.getElementsByClassName("sec-nav")[0].style.background = 'url("/assets/img/blog/header/'+param1+'.png") center right';
    document.getElementById("nav-"+param1).classList.add("activet-l")
    document.getElementById("navb-"+param1).classList.add("active-navb")
    if (document.getElementById("navb-"+param1).parentElement.children.length > 1) {
        document.getElementById("navb-"+param1).parentElement.parentElement.firstChild.classList.add("active-navb")
    }
}