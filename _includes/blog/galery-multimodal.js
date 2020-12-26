function createGaleryMultiModal(modal) {
    // var modal = document.querySelector('.multi-img-modal');
    var images = modal.getElementsByTagName('img');
    var modalImgs = document.querySelector('.modal-imgs');
    var modalDots = document.querySelector('.modal-dots');

    //clear images in modal
    modalDots.innerHTML = "";
    modalImgs.innerHTML = "";

    //populate images in modal
    for (var i = 0; i < images.length; i++) {
        LazyLoad.load(images[i]);

        var addimg = document.createElement('div');
        var img = images[i].cloneNode();
        // var img = document.createElement('img');
        img.src = images[i].src;
        // img.alt = images[i].alt;
        // img.classList = images[i].classList;
        // img.dataset.src = images[i].dataset.src;
        // img.dataset.llStatus = images[i].dataset.llStatus;
        img.classList.add('image-slide')
        img.removeAttribute('onclick')
        addimg.classList.add('slide');
        addimg.appendChild(img);
        modalImgs.appendChild(addimg);

        var addimg2 = document.createElement('div');
        var img2 = images[i].cloneNode();
        // var img2 = document.createElement('img');
        img2.src = images[i].src;
        // img2.alt = images[i].alt;
        // img2.classList = images[i].classList;
        // img2.dataset.src = images[i].dataset.src;
        // img2.dataset.llStatus = images[i].dataset.llStatus;
        img2.classList.add('modal-preview')
        img2.classList.add('hover-shadow')
        img2.removeAttribute('onclick')
        addimg2.classList.add('col');
        addimg2.setAttribute('onclick', 'toSlide('+(i+1)+');');
        addimg2.appendChild(img2);
        modalDots.appendChild(addimg2)
    }

    // currentModal = modal;
    // slideIndex = sliden;

    //temp
    // showSlide(slideIndex);
}

function setupModalClicks() {
    var modals = document.querySelectorAll('.multi-img-modal');
    for (var i = 0; i < modals.length; i++) {
        var imgs = modals[i].getElementsByTagName('img');
        for (var b = 0; b < imgs.length; b++) {
            imgs[b].setAttribute('onclick', "createGaleryMultiModal(this.parentElement);openLightbox();toSlide("+(b+1)+");");
        }
    }
}









let slideIndex = 1;
// var currentModal;
// showSlide(slideIndex);

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
};

// Note that you are assigning new values here to our slidIndex.

function changeSlide(n) {
    showSlide(slideIndex += n);
};

function toSlide(n) {
    showSlide(slideIndex = n);
};


function showSlide(n) {
    let scope = document.querySelector('#lightbox .modal-content');
    const slides = scope.getElementsByClassName('slide');
    let modalPreviews = scope.getElementsByClassName('modal-preview');

    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].classList.remove('active');
    };

    slides[slideIndex - 1].style.display = 'block';
    modalPreviews[slideIndex - 1].classList.add('active');
};