document.body.style.overflowY = 'hidden';

function pageLoaded() {
    document.body.style.overflowY = 'auto';
    document.getElementsByClassName("splash")[0].classList.add("splash-loaded")

    if (document.getElementsByClassName("cc").length > 1) {
        document.getElementById("cc").innerHTML = "© Luigi Pizzolito "+new Date().getFullYear()+". All Rights Reserved.";
    }

    setTimeout(() => {
        try {
            highlightmobilenav();
        } catch (error) {
            console.log("looks like were not in homepage...");
        }
    }, 50);

    setTimeout(() => {
        try {
            updateBlogSidebar();
            setupModalClicks();
        } catch (error) {
            console.log("looks like were not in blogpage...");
        }
    }, 55);

    // setTimeout(() => {
    //     try {
    //         // updateBlogSidebar();
    //         setupModalClicks();
    //     } catch (error) {
    //         // console.log("looks like were not in blogpage...");
    //     }
    // }, 60);

    // var lazyLoadInstance = new LazyLoad({
    //     // Your custom settings go here
    //   });
}