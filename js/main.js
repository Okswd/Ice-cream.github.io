$(function(){
  $('.slider').slick({
    prevArrow:'<img class="slider__arrow slider__arrow-left" src="img/arrow-left.svg" alt="arrow-left">',
    nextArrow:'<img class="slider__arrow slider__arrow-right" src="img/arrow-right.svg" alt="arrow-right">',
    infinite: true,
    speed: 500,
    fade: true,
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('active');
  });
});











