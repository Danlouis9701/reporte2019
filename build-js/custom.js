new WOW().init();

// Pushbar Js
var pushbar = new Pushbar({
    blur: true,
    overlay: true
});
//close all pushbars
pushbar.close();

$(window).on("load", function () {
    setTimeout('delay()', 2500);
});

function delay() {
    $('#preloader').fadeOut("slow");
    $('body').css({
        'overflow': 'visible'
    });
    revapi42.revstart();
}

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
