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
    infinite: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });