document.body.style.overflowY = 'hidden';

function pageLoaded() {
    document.body.style.overflowY = 'auto';
    document.getElementsByClassName("splash")[0].classList.add("splash-loaded")

    document.getElementById("cc").innerHTML = "© Luigi Pizzolito "+new Date().getFullYear()+". All Rights reserved.";
}