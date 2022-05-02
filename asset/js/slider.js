$(document).ready(function () {
    $('.image-slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: '.wwanext',
        prevArrow: '.wwaprev',
        dots: true
    });
});
$('.content__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });

  $('.recommend__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
  $('.discover__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });