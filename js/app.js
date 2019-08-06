document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector(".menu");
    const btn = document.querySelector(".menu-toggle");

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        menu.classList.toggle("show");
    });

     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (a) {
             a.preventDefault();

             document.querySelector(this.getAttribute('href')).scrollIntoView({
                 behavior: 'smooth'
             });
         });
     });

    $('#container').addFlexImages(media_list, true).flexGallery({
        margin: '0.5vmin',
        minHeightRatioWindow: null,
        minHeightRatioScreen: null,
        fadeInDuration: 1000,
        checkPeriod: 100,
        autoAdjust: true
    });


});