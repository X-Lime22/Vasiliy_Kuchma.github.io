$(function() {
    let header = $("#header");
    let introH = $("#works__main").innerHeight();
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Menu nav toogle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $("#header").toggleClass("active");
    });

    $(document).ready(function(){
        $('.fade').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    });

    $('.poPup__img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        // mainClass: 'mfp-fade',
      });
});
