
!(function($) {
  "use strict";

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  //Show more Award
  $('.showMoreAwards').click(function() {
    $('#showedRowA').hide(500);
    $('#hiddenRowA').show(250, function(){
      $('.showMoreAwards').hide();
      $('.goBackA').css("display","block");
    });
  });
  $('.goBackA').click(function() {
    $('#hiddenRowA').hide(500);
    $('#showedRowA').show(250, function(){
      $('.goBackA').hide();
      $('.showMoreAwards').show();
    });
  });
  //Show more Prizes
  $('.showMorePrizes').click(function() {
    $('#showedRowP').hide(500);
    $('#hiddenRowP2').hide(500);
    $('#hiddenRowP').show(250, function(){
      $('.showMorePrizes').hide();
      $('.goBackP2').hide();
      $('.goBackP').css("display","block");
      $('.showMorePrizes2').css("margin-right","10px");
      $('.showMorePrizes2').css("display","block");
    });
  });
  $('.goBackP').click(function() {
    $('#hiddenRowP').hide(500);
    $('#hiddenRowP2').hide(500);
    $('#showedRowP2').hide(500);
    $('#showedRowP').show(250, function(){
      $('.goBackP').hide();
      $('.showMorePrizes2').hide();
      $('.showMorePrizes').show();
    });
  });
  $('.showMorePrizes2').click(function() {
    $('#showedRowP').hide(500);
    $('#hiddenRowP').hide(500);
    $('#hiddenRowP2').show(250, function(){
      $('.showMorePrizes').hide();
      $('.showMorePrizes2').hide();
      $('.goBackP').hide();
      $('.goBackP2').css("display","block");
    });
  });
    $('.goBackP2').click(function() {
    $('#hiddenRowP2').hide(500);
    $('#hiddenRowP').show(250, function(){
      $('.showMorePrizes').hide();
      $('.showMorePrizes2').hide();
      $('.goBackP2').hide();
      $('.goBackP').css("display","block");
      $('.showMorePrizes2').css("margin-right","10px");
      $('.showMorePrizes2').css("display","block");
    });
  });
  //Show more Certificates
  $('.showMoreCertificates').click(function() {
    $('#showedRowC').hide(500);
    $('#hiddenRowC').show(250, function(){
      $('.showMoreCertificates').hide();
      $('.goBackC').css("display","block");
    });
  });
  $('.goBackC').click(function() {
    $('#hiddenRowC').hide(500);
    $('#showedRowC').show(250, function(){
      $('.goBackC').hide();
      $('.showMoreCertificates').show();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });
  //Form submission

})(jQuery);