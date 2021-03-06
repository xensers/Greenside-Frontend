/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js



jQuery(document).ready(function($) {

    $('body').on('click', '.side-toggle', function(event) {
        $('body').toggleClass('side-open');
    });

    $('body').on('click', '.page .body', function(event) {
        $('body').removeClass('side-open');
    });

    $(window).scroll(function(event) {
        $('.page > .body > section').each(function(index, el) {
            var element = $(this);
            var elTop = $(this).offset().top;
            var elBottom = $(this).offset().top + $('#main').height();
            // console.log( $(window).scrollTop() );
            if ($(window).scrollTop() > elTop-50 && $(window).scrollTop() < elBottom) {
                var id = element.attr('id');
                $('.page > .side> .nav a:not([href="#' + id + '"])').parent('li').removeClass('active');
                $('.page > .side> .nav a[href="#' + id + '"]').parent('li').addClass('active');
            }
        });

    });

    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
         'scrollTop': $(this.hash).offset().top
         }, 500, 'swing', function () {
            window.location.hash = target;
            setTimeout(function() {
                $('body').removeClass('side-open');
            }, 300);
         });
     });

     $('.reviews.owl-carousel').owlCarousel(
         {
             margin:10,
             autoWidth:true,
             items:4,
             nav: true,
             // autoplay: true
         }
     );

     $('.about.owl-carousel').owlCarousel(
         {
             margin:50,
             autoWidth:true,
             items:2,
             nav: true,
             // loop: true,
             videoHeight: true
             // autoplay: true
         }
     );

});
