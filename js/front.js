const axios = require("axios");

$(function () {

    // ================================================
    //  NAVBAR BEHAVIOR
    // ================================================
    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 5) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }

        if ($(window).scrollTop() > 1000) {
            $('#scrollTop').addClass('active');
        } else {
            $('#scrollTop').removeClass('active');
        }
    });


    // ================================================
    //  SPECIALTIES SLIDER
    // ================================================
    $('.specialties-slider').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });

    // ================================================
    //  TESTIMONIALS SLIDER
    // ================================================
    $('.testimonials-slider').owlCarousel({
        items: 1,
        dots: true
    });

    // ================================================
    //  MODAL VIDEO
    // ================================================
    new ModalVideo('.js-modal-btn');

    // ================================================
    //  FAQ
    // ================================================
    $(".faq").accordion({
        animationDuration:500,
        questionClass: '.question',
        answerClass: '.answer',
        itemClass: '.item'
    });

    // ================================================
    // Move to the top of the page
    // ================================================
    $('#scrollTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0}, 1000);
    });

    // ================================================
    // Preventing URL update on navigation link click
    // ================================================
    $('.link-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });


    // ================================================
    // Scroll Spy
    // ================================================
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

    // ================================================
    // Enable modal for mrk specialties
    // ================================================
    $('#specialtiesModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('specialty')
        axios
            .post("./api/specialties.php", { "specialty": recipient })
            .then((res) => {
                modal.find('.modal-body').text(res.data.info)
            })
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('Cпециальность ' + recipient);
    })
});
