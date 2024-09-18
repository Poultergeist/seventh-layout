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
    zIndex: 3,
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

$('#burger-button').on('click', function() {
  $('.navbar-collapse').toggleClass('collapse');
  $(this).toggleClass('burger-active');
  $('.header').toggleClass('drop-shadow-expand');
});

window.addEventListener("scroll", scrollCheck);

function scrollCheck() {
  const targets = document.getElementsByClassName("jump-block");
  for (i = 0; i < targets.length; i++) {
    targetsVisibilityCheck(targets[i], targets[i - 1], targets[i + 1])
  }
}

setTimeout(scrollCheck, 10);

function targetsVisibilityCheck(target, prevTarget, nextTarget) {
  const rect = target.getBoundingClientRect();
  const prevRect = prevTarget != undefined ? prevTarget.getBoundingClientRect() : 0;
  const nextRect = nextTarget != undefined ? nextTarget.getBoundingClientRect() : 0;

  if (prevTarget != undefined && nextTarget != undefined)
    changeStyle(target.id, (prevRect.bottom < 100 && rect.bottom >= 100 && nextRect.top > 100));

  if (prevTarget == undefined && nextTarget != undefined)
    changeStyle(target.id, (rect.bottom >= 100 && nextRect.top > 100));

  if (prevTarget != undefined && nextTarget == undefined)
    changeStyle(target.id, (prevRect.bottom < 100 && rect.bottom >= 100));
}


function changeStyle(targetId, result) {
  if (result) {
    document.getElementById(`${targetId}-ancor`).classList.add("active");
  }
  else {
    document.getElementById(`${targetId}-ancor`).classList.remove("active");
  }
}
