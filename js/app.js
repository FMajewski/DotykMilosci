document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector(".menu");
    const btn = document.querySelector(".menu-toggle");
    const element = document.querySelector(".nav_list_items");

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
    $(function () {
        $('dd').hide();
            $('dt').on('click',function () {
                $(this).next().slideToggle();
            })
    });
    $('.parallax-window').parallax({imageSrc: "/images/wellness-1382476_1920.jpg"});
    jQuery(window).trigger('resize').trigger('scroll');



});