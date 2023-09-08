(function($) {


    $("#current-year").text(new Date().getFullYear());


    $('html').removeClass('no-js');


    $('navbar a').click(function(e) {


        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);


        if ($('navbar').hasClass('active')) {
            $('navbar, body').removeClass('active');
        }
    });


    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


    $('#nav-down span').click(function() {
        var scrollDistance = $('#main').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });


    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content


        $userContent.each(function() {
            $(this).addClass('timeline-content').wrap('<div class="timeline-point"><div class="timeline-block"></div></div>');
        });


        $this.find('.timeline-point').each(function() {
            $(this).prepend('<div class="timeline-icon"><i class="fa fa-map-marker"></i></div>');
        });


        $this.find('.timeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="timeline-date">'+date+'</span>');
            }
        });

    });

    // Load more projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);
