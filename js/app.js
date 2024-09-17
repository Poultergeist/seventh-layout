$(document).ready(function () {
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

  $('.taken__photos').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

const likes = document.querySelectorAll(".taken__likes");

likes.forEach(like => {
  like.addEventListener("click", function () {
    const isLiked = this.classList.contains("liked");
    const likeCountElement = this.querySelector(".taken__likes-count");
    let likeCount = parseInt(likeCountElement.textContent);

    if (!isLiked) {
      this.classList.add("liked")
      likeCount++;
    }
    else {
      this.classList.remove("liked")
      likeCount--;
    }
    likeCountElement.textContent = likeCount;
  })
});