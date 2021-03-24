

$(document).ready(function(){

    $('.infoSlider').on('init', function(event, slick){
        var $items = slick.$dots.find('li');
        $items.remove();
       
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