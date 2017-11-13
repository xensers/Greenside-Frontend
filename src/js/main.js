/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js


jQuery(document).ready(function($) {
    $('body').on('click', '.side-toggle', function(event) {
        $('body').toggleClass('side-open');
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
         'scrollTop': $target.offset().top
         }, 500, 'swing', function () {
            window.location.hash = target;
            setTimeout(function() {
                $('body').removeClass('side-open');
            }, 400);
         });
     });

});

