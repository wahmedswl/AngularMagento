// ==================================================
// Project Name  :  Mobiphone
// File          :  JS Base
// Version       :  1.0.0
// Last change   :  18 June 2019
// Author        :  ----------
// Developer:    :  Rakibul Islam Dewan
// ==================================================




(function($) {
  "use strict";




  
  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('#backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $("#scroll").on('click', function() {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, "slow");
      return false
    })
  });
  // back to top - end
  // --------------------------------------------------




  
  // preloader - start
  // --------------------------------------------------
  // $(window).on('load', function(){
  //   $('#preloader').fadeOut('slow',function(){$(this).remove();});
  // });
  // preloader - end
  // --------------------------------------------------




  
  // blog-carousel - start
  // --------------------------------------------------
  $('#blog-carousel').owlCarousel({
    nav:true,
    margin:30,
    loop:false,
    merge:true,
    dots:false,
    smartSpeed:1000,
    responsive:{
      0:{
        items:1
      },
      400:{
        items:1
      },
      600:{
        items:2
      },
      700:{
        items:2,
        margin:0,
      },
      1000:{
        items:3
      },
      1100:{
        items:4
      },
      1920:{
        items:4
      }
    }
  });
  // blog-carousel - end
  // --------------------------------------------------




  
  // Select js - start
  // --------------------------------------------------
  $('select').niceSelect();
  // Select js - end
  // --------------------------------------------------




  
  // menu button - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.close-btn, .overlay').on('click', function () {
      $('#sidebar-menu').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('.mobile-menu-btn').on('click', function () {
      $('#sidebar-menu').addClass('active');
      $('.overlay').addClass('active');
    });
  });
  // menu button - end
  // --------------------------------------------------



  // filter button - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.close-btn, .overlay2').on('click', function () {
      $('#sidebar-filter').removeClass('active');
      $('.overlay2').removeClass('active');
    });

    $('.mobile-filter-btn').on('click', function () {
      $('#sidebar-filter').addClass('active');
      $('.overlay2').addClass('active');
    });
  });
  // filter button - end
  // --------------------------------------------------




  // klantportaal button - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.close-btn, .overlay2').on('click', function () {
      $('#sidebar-profile').removeClass('active');
      $('.overlay2').removeClass('active');
    });

    $('.mobile-filter-btn').on('click', function () {
      $('#sidebar-profile').addClass('active');
      $('.overlay2').addClass('active');
    });
  });
  // klantportaal button - end
  // --------------------------------------------------


  
  // advertisement-carousel - start
  // --------------------------------------------------
  $('#advertisement-carousel').owlCarousel({
    items:1,
    nav:false,
    dots:true,
    loop:true,
    margin:10,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
  });
  // advertisement-carousel - end
  // --------------------------------------------------





  // sticky menu - start
  // --------------------------------------------------
  var headerId = $(".sticky-header");
  $(window).on('scroll' , function() {
    var amountScrolled = $(window).scrollTop();
    if ($(this).scrollTop() > 100) {
      headerId.removeClass("not-stuck");
      headerId.addClass("stuck");
    } else {
      headerId.removeClass("stuck");
      headerId.addClass("not-stuck");
    }
  });
  // sticky menu - end
  // --------------------------------------------------




  
  // products carousel - start
  // --------------------------------------------------
  $(document).ready(function() {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var syncedSecondary = true;

    sync1
    .owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: false,
      autoplay: false,
      slideSpeed: 1000,
      responsiveRefreshRate: 200,
    })
    .on("changed.owl.carousel", syncPosition);

    sync2
    .on("initialized.owl.carousel", function() {
      sync2
      .find(".owl-item")
      .eq(0)
      .addClass("current");
    })
    .owlCarousel({
      items: 5,
      slideBy: 5,
      margin: 10,
      nav: false,
      dots: false,
      slideSpeed: 500,
      smartSpeed: 1000,
      responsiveRefreshRate: 100
    })
    .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
    .find(".owl-item")
    .removeClass("current")
    .eq(current)
    .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2
    .find(".owl-item.active")
    .first()
    .index();
    var end = sync2
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
});
  // products carousel - end
  // --------------------------------------------------




  
  // google map - start
  // --------------------------------------------------
  if ($('#gmap').length > 0) {
    new GMaps({
      div: '#gmap',
      lat: 23.7947172,
      lng: 90.3971412,
      scrollwheel: false,       
      styles: [
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#dddddd"
        },
        {
          "lightness": 20
        }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 17
        }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 18
        }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#dddddd"
        },
        {
          "lightness": 16
        }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 21
        }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 21
        }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
        {
          "visibility": "on"
        }
        ]
      }
      ]
    }).addMarker({
      lat: 23.792930,
      lng: 90.403798,
      infoWindow: {
        // content: '<p> loaction</p>'
      }
    });

  }
  // google map - end
  // --------------------------------------------------



  
})(jQuery);

      $(document).ready(function() {

          // Put your offset checking in a function
          function checkOffset() {
              if ($(".header-middle").offset().top > 50) {
                  $(".header-bottom").addClass("hide-head");
              }     
              else {
                  $(".header-bottom").removeClass("hide-head");
              }
          }

          // Run it when the page loads
          checkOffset();


          // Run function when scrolling
          $(window).scroll(function() {
              checkOffset();
          });
      });



  /* ==========================
       Product Slider
    =============================*/

  var action = false,
    clicked = false;
  var Owl = {

    init: function () {
      Owl.carousel();
    },

    carousel: function () {
      var owl;
      $(document).ready(function () {

        owl = $('.owlExample').owlCarousel({
          items: 1,
          center: true,
          nav: true,
          dots: true,
          loop: true,
          margin: 10,
          dotsContainer: '.product-small-holder',
          navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        });

        $('.owl-next').on('click', function () {
          action = 'next';
        });

        $('.owl-prev').on('click', function () {
          action = 'prev';
        });

        $('.bookmarks').on('click', 'span', function (e) {
          owl.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
      });
    }
  };

  $(document).ready(function () {
    Owl.init();
  });

  /* ==========================
     Form Number
  =============================*/

      jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });