var navbar = $('.navbar'),
    toTop = $('#toTop'),
    sidePopUp = $('.fixed-call'),
    winHeight = $(window).height(),
    burger = $('#burger');

$(document).ready(function () {
    checkPos();

    $('.scroll').on('click', function (e) {
        e.preventDefault();
        if (navbar.hasClass('fixed')) {
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 85
            }, 1000);
        } else {
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1000);
        }
        navbar.removeClass('active');
    });

    $('.sound-trigger').on('click', function(){
        $(this).toggleClass('active');
    });

    $(window).on('scroll', function () {
        checkPos();
    });

    toTop.on('click', function () {
        $("body,html").stop().animate({
            scrollTop:0
        }, 500);
    });

    burger.on('click', function(){
        toggleBurger();
    });

    $('.grid a').on('click', function() {
        $('#myGallery').carousel($(this).index());
    });

    $('.thumbs').on('click', 'img', function(){
        $(this).closest('.thumbs').find('.thumb-item').removeClass('active');
        $(this).parent().addClass('active');
    });

});

function checkPos() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= winHeight) {
        sidePopUp.show();
    } else {
        sidePopUp.hide();
    }
}

function toggleBurger(){
    burger.closest('.navbar').toggleClass('active');
}