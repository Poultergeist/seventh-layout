$(document).ready(function() {
  $('.banner-slider').slick({
    arrows: false,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    dots: true
  });

  $('.share-phone-slider').slick({
    arrows: false,
    adaptiveHeight: false,
    autoplay: false,
    infinite: true,
    fade: true,
    asNavFor: ".video-slider"
  });

  $('.video-slider').slick({
    arrows: false,
    adaptiveHeight: false,
    autoplay: false,
    infinite: true,
    dots: true,
    asNavFor: ".share-phone-slider"
  });

  $('.features-phone-slider').slick({
    arrows: false,
    adaptiveHeight: false,
    infinite: true,
    dots: false,
    fade: true,
    zIndex: 3,
    asNavFor: ".features-slider"
  });

  $('.features-slider').slick({
    arrows: false,
    adaptiveHeight: false,
    autoplay: false,
    infinite: true,
    dots: true,
    asNavFor: ".features-phone-slider"
  });
});

