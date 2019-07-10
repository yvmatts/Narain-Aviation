


$(window).on('load', function () {
    /*--------- Page Loader ---------*/
        $("#loading").fadeOut(300);
});

$(window).scroll(function () {

    /*--------- Sticky Header ---------*/
    var main_header = $('.main-header');
    if ($(this).scrollTop() > 5) {
        main_header.addClass('is-sticky');
    }
    else {
        main_header.removeClass('is-sticky');
    }

    /*--------- Page to top ---------*/
    var to_top_mb = $('.to-top.mb');
    if ($(this).scrollTop() > 100) {
        to_top_mb.fadeIn();
    } else {
        to_top_mb.fadeOut();
    }

    var $window = $(window);
    if ($window.scrollTop() + $window.height() > $(document).height() - 200) {
        to_top_mb.fadeOut();
    }

});




