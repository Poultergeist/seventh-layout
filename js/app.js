$(document).ready(function() {
  $('.banner__slider').slick({
    arrows: false,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    dots: true
  });

  $('.share__phone-slider').slick({
    arrows: false,
    adaptiveHeight: false,
    autoplay: false,
    infinite: true,
    fade: true,
    asNavFor: ".share__slider"
  });

  $('.share__slider').slick({
    arrows: false,
    adaptiveHeight: false,
    autoplay: false,
    infinite: true,
    dots: true,
    asNavFor: ".share__phone-slider"
  });

  $('.features__phone-slider').slick({
    arrows: false,
    adaptiveHeight: false,
    infinite: true,
    dots: false,
    fade: true,
    zIndex: 3,
    asNavFor: ".features__slider"
  });

  $('.features__slider').slick({
    arrows: false,
    adaptiveHeight: false,
    autoplay: false,
    infinite: true,
    dots: true,
    asNavFor: ".features__phone-slider"
  });
});

