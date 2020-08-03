(function($) {
    "use strict"; // Start of use strict
      $(".navbar-toggler").click(function () {
        $(".navbar-toggler").css("outline", "none");
      });
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });



  $(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 372) {
      $(".buttonbox").removeClass("py-5")
    }
    else{
      $(".buttonbox").addClass("py-5")
    }
  });



    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    }); 
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
AOS.init();

$(document).on("scroll",function () {
  var scrollDistance = $(this).scrollTop();
  if (window.matchMedia('(min-width: 1271px)').matches && scrollDistance > 450 ){
    $('.card-1').addClass("slide-in-top");
    $('.card-2').addClass("slide-in-bottom");
    $('.card-3').addClass("slide-in-right");
    $('.card-4').addClass("slide-in-br");
    $('.imgdiv2').addClass("slide-in-blurred-left");
}});


$(document).ready(function () {
  $(window).resize(function () {
if (window.matchMedia('(max-width: 1270px)').matches) {
      $(".imgdiv2").addClass("col-md-12");
      $(".md5").addClass("col-md-6");
      $(".md3").addClass("col-md-6");
    } 
    else{
      $(".imgdiv2").removeClass("col-md-12")
      $(".md5").removeClass("col-md-6");
      $(".md3").removeClass("col-md-6");
  }
})});
$(document).ready(function () {
    if (window.matchMedia('(max-width: 1270px)').matches) {
      $(".imgdiv2").addClass("col-md-12");
      $(".md5").addClass("col-md-6");
      $(".md3").addClass("col-md-6");
    }
    else {
      $(".imgdiv2").removeClass("col-md-12")
      $(".md5").removeClass("col-md-6");
      $(".md3").removeClass("col-md-6");
    }
  });

$(document).on("scroll", function () {
  var scrollDistance = $(this).scrollTop();
  if (window.matchMedia('(max-width: 1271px)').matches && scrollDistance > 750) {
    $('.imgdiv2').addClass("slide-in-blurred-left");
  }
});


$(document).on("scroll", function () {
  var scrollDistance = $(this).scrollTop();
  if (window.matchMedia('(min-width:767px) and (max-width: 1271px)').matches && scrollDistance > 900) {
    $('.card-1').addClass("slide-in-right");
    $('.card-3').addClass("slide-in-right");
  }
});

$(document).on("scroll", function () {
  var scrollDistance = $(this).scrollTop();
  if (window.matchMedia('(min-width:767px) and (max-width: 1271px)').matches && scrollDistance > 1100) {
    $('.card-2').addClass("slide-in-left");
    $('.card-4').addClass("slide-in-left");
  }
});

$(document).on("scroll", function () {
  var scrollDistance = $(this).scrollTop();
  if (window.matchMedia('(max-width: 767px)').matches && scrollDistance > 1200) {
    $('.card-1').addClass("slide-in-right");
    $('.card-2').addClass("slide-in-left");
  }
});

$(document).on("scroll", function () {
  var scrollDistance = $(this).scrollTop();
  if (window.matchMedia('(max-width: 767px)').matches && scrollDistance > 1850) {
    $('.card-3').addClass("slide-in-right");
    $('.card-4').addClass("slide-in-left");
  }
});
$(document).on("scroll", function () {
  var scrollDistance = $(this).scrollTop();
  if (window.matchMedia('(min-width: 992px)').matches && scrollDistance > 1650) {
    $('.box2').addClass("flip-in-ver-right");
    $('.box-1').addClass("flip-in-ver-left");
    $('.stable').addClass("slide-right");
  }
});
