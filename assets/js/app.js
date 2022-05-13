$(window).on('load', function () {
    /*==============================
             Preloader
    ===============================*/
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

    // --------Scroll To Top---------
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 350) $('.go-top').addClass('active');
        if (scrolled < 350) $('.go-top').removeClass('active');
    });
    // Click Event
    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 500);
    });
    // --------Scroll To Top---------

    //----------Shop Product Filter--------
    var $container = $('#portfoliolinks');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('#links a').click(function () {
        $('#links .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

})

$(document).ready(function () {

    //Banner Slider
    $("#banner-home-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 600,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });

    //Whats New Slider
    $(".whats-new-body").owlCarousel({
        items: 4,
        autoplay: false,
        smartSpeed: 600,
        loop: false,
        margin: 30,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            767: {
                items: 3
            },

            1000: {
                items: 3
            },
            1800: {
                items: 4
            }
        }
    });

    //Sponsor Logo Slider
    $(".sponsor-content").owlCarousel({
        items: 4,
        autoplay: false,
        smartSpeed: 600,
        loop: true,
        margin: 30,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            360: {
                items: 2
            },
            767: {
                items: 3
            },

            1000: {
                items: 4
            },
            1800: {
                items: 4
            }
        }
    });

    //Sponsor Logo2 Slider
    $(".sponsor-content2").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        margin: 30,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            360: {
                items: 4
            },
            767: {
                items: 5
            },

            1000: {
                items: 6
            },
            1800: {
                items: 6
            }
        }
    });

    //review Slider
    $(".review-body").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 600,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>']
    });

    // Hidden Beauty Section
    $('.hidden-beauty-left-content').hover(
        function () {
            $(this).attr('src', 'assets/img/hidden-beauty/fullwidth-left-hover.jpg')
        },
        function () {
            $(this).attr('src', 'assets/img/hidden-beauty/fullwidth-left-1.jpg')
        }
    )
    $('.hidden-beauty-right-content').hover(
        function () {
            $(this).attr('src', 'assets/img/hidden-beauty/fullwidth-right-hover.jpg')
        },
        function () {
            $(this).attr('src', 'assets/img/hidden-beauty/fullwidth-right-1.jpg')
        }
    )

    // payment method between bank and phone
    var bankDiv = document.getElementsByClassName('visible');
    var mobileDiv = document.getElementsByClassName('hide');

    var bankBtn = document.getElementsByClassName('radio-build');
    var mobileBtn = document.getElementsByClassName('cell');

    bankBtn.onclick = function () {
        mobileDiv.setAttribute('class', 'hide');
        bankDiv.setAttribute('class', 'visible');
    };

    mobileBtn.onclick = function () {
        bankDiv.setAttribute('class', 'hide');
        mobileDiv.setAttribute('class', 'visible');
    };

    $('.radio-build').click(function () {
        $('#mobil-bank-form').show();
        $('#bank-form').hide();
    })

    $('.cell').click(function () {
        $('#mobil-bank-form').hide();
        $('#bank-form').show();
    })

    /*==============================
           Search Button           
  ===============================*/
    $('#close-btn').click(function () {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    $('#search-btn').click(function () {
        $(this).hide();
        $('#search-overlay').fadeIn();
    });

    /*===============================
                NavBar
    =================================*/
    //sticky top
    $(window).scroll(function () {
        if ($(window).scrollTop() > 190) {
            // show sticky header
            $(".navigation").addClass("sticky-top");

        } else {
            // hide sticky header
            $(".navigation").removeClass("sticky-top");
        }
    })

    //  open and close nav 
    $('#navbar-toggle').click(function () {
        $('nav ul').slideToggle();
    });

    // Hamburger toggle
    $('#navbar-toggle').on('click', function () {
        this.classList.toggle('active');
    });

    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");

        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
    });

    // Click outside the dropdown will remove the dropdown class
    $('html').click(function () {
        $('.navbar-dropdown').hide();
    });


});

// Product Image click slide
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}