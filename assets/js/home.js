// GH card highlihgt colour!
var highlightc = "ffffff";//"37cfa5";

/*
 * NavBar
 */
function mobileNav() {
        $('.mobile-nav').toggleClass('is-open');
        $('.mobile-nav-toggle').toggleClass('is-open');
}

function hoverClearNav() {
        // console.log(elem.children);
        // for (let i = 0; i < elem.children.length; i++) {
        //         const link = elem.children[i];
        //         if (link.children[1].classList.contains("activet")) {
        //                 link.children[1].classList.replace("activet", "activet-dud");
        //         }
                
        // }
        document.getElementsByClassName("activet")[0].classList.replace("activet", "activet-dud");
        document.getElementsByClassName("activet")[0].classList.replace("activet", "activet-dud");
        document.getElementsByClassName("activet-dud")[0].parentElement.children[0].classList.remove("activet-l");
        document.getElementsByClassName("activet-dud")[1].parentElement.children[0].classList.remove("activet-l");
}

function hoverSetNav() {
        // console.log(elem.children);
        // for (let i = 0; i < elem.children.length; i++) {
        //         const link = elem.children[i];
        //         if (link.children[1].classList.contains("activet-dud")) {
        //                 link.children[1].classList.replace("activet-dud", "activet");
        //         }
                
        // }
        document.getElementsByClassName("activet-dud")[0].classList.replace("activet-dud", "activet");
        document.getElementsByClassName("activet-dud")[0].classList.replace("activet-dud", "activet");
        document.getElementsByClassName("activet")[0].parentElement.children[0].classList.add("activet-l");
        document.getElementsByClassName("activet")[1].parentElement.children[0].classList.add("activet-l");
}

function highlightmobilenav() {
        hoverClearNav();
        hoverSetNav();
}

/*
 * Software Section
 */
// GHnames = [];
// var GHcount = 0;
// var links = [];
function* shuffle(array) {
        var i = array.length;
        while (i--) {
                yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        }
}//"https://api.github.com/users/Luigi-Pizzolito/repos"
// $.getJSON("assets/GHstatCache.php", function (jsonGH) { //! production cache
$.getJSON("assets/repos.json", function (jsonGH) {
        var ranNums = shuffle([...Array(jsonGH.length).keys()]);
        //just show ten instead of jsonGH.length
        for (let i = 0; i < 8; i++) { //needs to be asynchronous for loading time improvement
                let ran = ranNums.next().value;
                let href = jsonGH[ran].full_name;
                // GHnames.push(href);
                var link = document.createElement("a");
                link.href = "https://github.com/" + href;
                var img = document.createElement("img");
                // var img = new Image();
                img.type = "image/svg+xml";
                // img.src = "https://gh-card.dev/repos/" + href + ".svg?link_target=_top";
                img.setAttribute("alt", "GitHub Card for " + jsonGH[ran].full_name)
                // img.setAttribute("data-src", "https://gh-card.dev/repos/" + href + ".svg?link_target=_top");
                img.setAttribute("data-src", "https://luigipizzolito.com/assets/darkGHcard.php?highlight=" + highlightc + "&href=" + href);
                img.classList.add("lazy")
                // img.onloaad = function () {
                //         document.querySelectorAll(".bus-in")[0].appendChild(this);
                //         console.log("added child")
                // };
                // img.src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                // img.setAttribute("data-src", "https://gh-card.dev/repos/" + href + ".svg?link_target=_top");
                // lazyloadimage(img, "https://gh-card.dev/repos/" + href + ".svg?link_target=_top");
                link.appendChild(img);
                let div = document.createElement('div');
                div.classList.add("item");
                div.appendChild(link);
                document.querySelectorAll(".bus-in")[0].appendChild(div);
                // links.push(div);
                // setTimeout(() => {
                // document.querySelectorAll(".bus-in")[0].appendChild(links[GHcount++]);
                // console.log(links[GHcount++]);

                // }, 50 + i * 50, i);
                // console.log(href)
        }

        function logElementEvent(eventName, element) {
                console.log(Date.now(), eventName, element.getAttribute("data-src"));
        }
        var callback_error = function (element) {
                logElementEvent("💀 ERROR", element);
                // element.src = "https://via.placeholder.com/440x560/?text=Error+Placeholder";
                element.parentElement.parentElement.removeChild(element.parentElement.parentElement.lastChild)
        };
        var callback_finish = function () {
                logElementEvent("✔️ FINISHED", document.documentElement);
                //start scrollspy
        };
        var lazyLoadInstance = new LazyLoad({
                elements_selector: ".lazy",
                threshold: 0,
                callback_error: callback_error,
                callback_finish: callback_finish
                // ... more custom settings?
        });
        //     lazyLoadInstance.update();
        //lazy load
        // for (var i = 0; i < document.getElementsByClassName("bus-in")[0].getElementsByTagName("img").length; i++) {
        //         var image = document.getElementsByClassName("bus-in")[0].getElementsByTagName("img")[i];
        //         var downloadingImage = new Image();
        //         downloadingImage.onload = function () {
        //                 console.log("loaded "+this.src);
        //                 console.log(image);
        //                 image.removeAttribute("src")
        //                 image.src = this.src;
        //                 image.removeAttribute("data-src");
        //                 image.classList.add("loaded");
        //                 console.log(image);

        //                 //experimental
        //                 // document.getElementsByClassName("bus-in")[0].getElementsByTagName("img")[i].parentElement.removeChild(document.getElementsByClassName("bus-in")[0].getElementsByTagName("img")[0].parentElement.lastChild);
        //                 document.getElementsByClassName("bus-in")[0].getElementsByTagName("a")[i].appendChild(image)

        //         };
        //         downloadingImage.src = image.dataset.src;
        // }
});


//scrollspy
setTimeout(() => {
        // init controller
        var controller = new ScrollMagic.Controller();

        // build scene
        var scene = new ScrollMagic.Scene({
                duration: document.querySelector('#scrollparalaxsoftitemsdiv').scrollHeight + (2 * document.querySelector('#scrollparalaxsoftitemsdiv').offsetTop) + ((1 / 32) * 2 * window.innerHeight), // the scene should last for a scroll distance of 100px
                offset: -document.querySelector('#scrollparalaxsoftitemsdiv').offsetTop - ((1 / 32) * window.innerHeight), // start this scene after scrolling for 50px
                triggerElement: "#scrollparalaxsoftitemsdiv"
        })
                .addTo(controller)
                .addIndicators() // add indicators (requires plugin)
                .on("update", function (e) {
                        // $("#scrollDirection").text(e.target.controller().info("scrollDirection"));
                })
                .on("enter leave", function (e) {
                        // $("#state").text(e.type == "enter" ? "inside" : "outside");
                        // console.log("enter" ? "inside" : "outside");
                })
                .on("start end", function (e) {
                        // $("#lastHit").text(e.type == "start" ? "top" : "bottom");
                })
                .on("progress", function (e) {
                        // $("#progress").text(e.progress.toFixed(3));
                        // console.log(e.progress.toFixed(3));
                        // console.log(e.progress.toFixed(3)*document.querySelector('#scrollparalaxsoftitemsdiv').scrollHeight)
                        document.querySelector('#scrollparalaxsoftitemsdiv').scroll(0, e.progress.toFixed(3) * (document.querySelector('#scrollparalaxsoftitemsdiv').scrollHeight - document.querySelector('#scrollparalaxsoftitemsdiv').offsetHeight))
                        // console.log(e.progress.toFixed(3)*document.querySelector('#scrollparalaxsoftitemsdiv').scrollHeight)
                });
}, 50);

// function lazyloadimage(imagetagin, imageurl) {
//         var image = imagetagin;
//         image.src = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
//         var downloadingImage = new Image();
//         downloadingImage.onload = function () {
//                 image.src = this.src;
//         };
//         downloadingImage.src = imageurl;
// }

/*
 *  Contact Section
 */
// Instagram Listing
// IGhref = [];
// IGthumb = [];
// $.getJSON("https://www.instagram.com/luigi.pizzolito/?__a=1", function(jsonIG) {
//     for (let i=0; i < 12; i++) {
//         console.log(i);
//         let href = "http://instagram.com/p/"+jsonIG.graphql.user.edge_owner_to_timeline_media.edges[i].node.shortcode+"/";
//         IGhref.push(href);
//         console.log(href);
//         let thumb = jsonIG.graphql.user.edge_owner_to_timeline_media.edges[i].node.thumbnail_src;
//         IGthumb.push(thumb);
//         console.log(thumb);
//     }
// });




setTimeout(() => {
//sounddesign section
var controller2 = new ScrollMagic.Controller();
// build scene
var animateElem2 = document.getElementById("sounddesign");
var trigElem2 = document.querySelector('#trigger2');
var scene2 = new ScrollMagic.Scene({
        duration: animateElem2.scrollHeight,// + (2 * animateElem2.offsetTop), //+ ((1 / 8) * 2 * window.innerHeight), // the scene should last for a scroll distance of 100px
        offset: -trigElem2.offsetTop + 20,// - ((1 / 8) * window.innerHeight), // start this scene after scrolling for 50px
        triggerElement: animateElem2
})
        // .on("enter", function () {
        //         // trigger animation by changing inline style.
        //         animateElem2.style.backgroundColor = "grey";
        // })
        // .on("leave", function () {
        //         // reset style
        //         animateElem2.style.backgroundColor = "";
        // })
        .on("progress", function (e) {
                // $("#progress").text(e.progress.toFixed(3));
                // console.log(e.progress.toFixed(3));
                // console.log(e.progress.toFixed(3)*document.querySelector('#scrollparalaxsoftitemsdiv').scrollHeight)
                // document.querySelector('#scrollparalaxsoftitemsdiv').scroll(0, e.progress.toFixed(3)*(document.querySelector('#scrollparalaxsoftitemsdiv').scrollHeight-document.querySelector('#scrollparalaxsoftitemsdiv').offsetHeight))
                // console.log(e.progress.toFixed(3)*document.querySelector('#scrollparalaxsoftitemsdiv').scrollHeight)
                // console.log(e.progress.toFixed(2)*100);
                // animateElem2.style.backgroundPosition = "center " + e.progress.toFixed(2)*100 +"%";
                animateElem2.style.setProperty("background-position-y", e.progress.toFixed(2)*100+"%");
        })
        .addIndicators()
        .addTo(controller2);
}, 50);


//header sidebar scrollspy
function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        )
    }

    function amountscrolled(){
        var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
        var docheight = getDocHeight();
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        var trackLength = docheight - winheight
        var pctScrolled = (scrollTop/trackLength).toFixed(2) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
        return pctScrolled
    }

setTimeout(() => {
        //sounddesign section
        var controller3 = new ScrollMagic.Controller();
        // build scene
        var scene3 = new ScrollMagic.Scene({
                duration: document.documentElement.scrollHeight,//animateElem3.scrollHeight,// + (2 * animateElem2.offsetTop), //+ ((1 / 8) * 2 * window.innerHeight), // the scene should last for a scroll distance of 100px
                offset: 0//,// - ((1 / 8) * window.innerHeight), // start this scene after scrolling for 50px
                // triggerElement: animateElem3
        })
                .on("progress", function (e) {
                        // console.log(amountscrolled());
                        if (!spyInibit) {
                                try {
                                        document.getElementsByClassName("arrow activet")[0].style.transform="translateY("+Math.round(((30*7)-5)*amountscrolled())+"px)"
                                } catch (error) {
                                        
                                }
                        }
                        
                })
                .addIndicators()
                .addTo(controller3);
        }, 45);
var spyInibit = false;
function inhibitSpy() {
        spyInibit = true;
        try {
                document.getElementsByClassName("arrow activet")[0].style.transform="translateY(0px)"
        } catch (error) {
                
        }
}

function rehabSpy() {
        spyInibit = false;
}