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
    $('#section-three .thumbnail').simpleParallax({scale: 1.2, overfow: false});
    $('#section-one .thumbnail').simpleParallax({orientation: 'up',scale: 1.35, overfow: false});


    // Get the modal
    var modal = document.getElementById("myModal");
    var btn2 = document.getElementById("myBtn2");
    var btn3 = document.getElementById("myBtn3");
    var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
    btn2.onclick = function() {
        modal.style.display = "block";
    }
    btn3.onclick = function() {
        modal.style.display = "block";
    }


// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});