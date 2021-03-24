$(document).ready(function(){

    $('.infoSlider').on('init', function(event, slick){
        let $dotsUl = slick.$dots.find('ul');
        let $dotsLi = slick.$dots.find('li');
        $dotsUl.remove();
        $dotsLi.remove();
     });

    $('.infoSlider').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        infinite: true,
        dots: true,
        swipe: true,
        swipeToSlide: true,
        arrows: false,
        dotsClass: "dotsNone"
    });
  });