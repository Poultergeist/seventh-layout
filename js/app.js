// sliders configuration
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
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

// likes logic
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

// burger menu logic
$('#burger-button').on('click', function() {
  $('.navbar-collapse').toggleClass('collapse');
  $(this).toggleClass('burger-active');
  $('.header').toggleClass('drop-shadow-expand');
});

// active section behavior
window.addEventListener("scroll", scrollCheck);

function scrollCheck() {
  const targets = document.getElementsByClassName("jump-block");
  for (i = 0; i < targets.length; i++) {
    targetsVisibilityCheck(targets[i], targets[i - 1], targets[i + 1])
  }

  // header shadow on scroll
  if($('body')[0].getBoundingClientRect().top == 0) {
    $('.header').removeClass('drop-shadow');
  } else {
    $('.header').addClass('drop-shadow');
  }
}

// initialisation of scroll behavion with delay
setTimeout(scrollCheck, 10);

// getting active section
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

// style change on active ancor
function changeStyle(targetId, result) {
  if (result) {
    document.getElementById(`${targetId}-ancor`).classList.add("active");
  }
  else {
    document.getElementById(`${targetId}-ancor`).classList.remove("active");
  }
}

// email form validation
$("#email-form").submit(function(e) {
  e.preventDefault();
  $('.alert-success').css({
    'padding': '3px',
    'height': 'auto'
  });
});

// video button click behavior
$('.share__video-button').on('click', function() {
  $(this).replaceWith(`<iframe class="share__video-button" width="${$(this).outerWidth()}" height="${$(this).outerHeight()}" src="https://www.youtube.com/embed/1FWK-TM0S08?si=91k-J66cvXiaMXw2&amp;controls=0;&autoplay=1;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
})

// download button behavior
$('.cta-button').on('click', function () {
  if($(this).hasClass('playstore')) {
    window.open('https://play.google.com/store/apps/details?id=com.adobe.lrmobile&hl=uk&pli=1');
  }
  if($(this).hasClass('appstore')){
    window.open('https://apps.apple.com/ua/app/lightroom-%D0%B4%D0%BB%D1%8F-%D1%84%D0%BE%D1%82%D0%BE-%D1%96-%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/id878783582?l=uk')
  }
});

// ancor behavior
$('.nav-item a').on('click', function(e) {
  e.preventDefault();

  const headerHeight = $('header').outerHeight() - ($('#burger-button').css('display') == 'none' ? 0 : $('.navbar-collapse').outerHeight());

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - headerHeight
  }, 300, 'easeOutQuad')
});