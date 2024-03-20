$("#menu-btn").click(function () {
    $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
    $("nav .navigation ul").removeClass("active");
});
$(document).ready(function(){
    $('.slick-carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    });
});

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel li');

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  slideIndex = index;
  const offset = -slideIndex * 100 + '%';
  document.querySelector('.carousel ul').style.transform = 'translateX(' + offset + ')';
}

function moveSlide(n) {
  showSlide(slideIndex + n);
}

showSlide(slideIndex);