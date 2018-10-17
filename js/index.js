

$(document).ready(function () {

    // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 800);

    $('.logo').click(function () {
        $(".nav-list").slideToggle()
    });

    $(window).scroll(function () {
        var sc = $(this).scrollTop();

        if (sc > 100) {
            $('header').addClass('sticky');
        }
        else{
            $('header').removeClass('sticky');
        }

        if (sc > 500){
            $('.scroll-top i').fadeIn();
        }
        else {$('.scroll-top i').fadeOut();}
    });

    $('.time').countTo();

    // protfolio

    $(' button').click(function(){

        $(this).addClass('active_btn').siblings().removeClass('active_btn');

        var CSSFilter = $(this).attr('id');

        if( CSSFilter === 'all' ) {
            $('.Images > div ').fadeIn();
        } else {
            $('.Images > div ').fadeOut();
            $('.Images').contents().filter('.' + CSSFilter).fadeIn();
        }

    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        nav:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            400:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:false
            }
        }
    });


    // Scroll to Top
    $('.scroll-Top').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500);
    });

    // Smooth scroll
    $('li a ').click( function () {

        $('html,body').animate({
            scrollTop : $ ($(this).attr('href')).offset().top
        });
    });

});
