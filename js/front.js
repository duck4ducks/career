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
    //  SCREEN SLIDER
    // ================================================
    function screen_slider() {
        var owl = $(".screen-slider");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            navigation: false,
            items: 5,
            smartSpeed: 1000,
            dots: false,
            autoplay: true,
            center: true,
            autoplayTimeout: 2000,
            dotsEach: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                760: {
                    items: 3
                },
                1080: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });
    }
    screen_slider();


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
    axios
        .get("./api/uploadReviews.php")
        .then((res) => {
            $('.review').text(res.data.review);
            $('.reviewerName').text(res.data.reviewerName);
            $('.reviewerGrade').text(res.data.reviewerGrade);
            $('.testimonial-img-1').attr("src", res.data.src1);
            $('.review-2').text(res.data.review2);
            $('.reviewerName-2').text(res.data.reviewerName2);
            $('.reviewerGrade-2').text(res.data.reviewerGrade2);
            $('.testimonial-img-2').attr("src", res.data.src2);
            $('.review-3').text(res.data.review3);
            $('.reviewerName-3').text(res.data.reviewerName3);
            $('.reviewerGrade-3').text(res.data.reviewerGrade3);
            $('.testimonial-img-3').attr("src", res.data.src3);
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

    // ================================================
    // Enable modal for demo tests
    // ================================================
    //$('#testsModal').on('show.bs.modal', function (event) {
    //    var button = $(event.relatedTarget)
    //    var recipient = button.data('specialty')
    //    axios
    //        .post("./api/specialties.php", { "specialty": recipient })
    //        .then((res) => {
    //            modal.find('.modal-body').text(res.data.info)
    //        })
    //    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    //    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //    var modal = $(this)
    //    modal.find('.modal-title').text('Cпециальность ' + recipient);
    //})
});
