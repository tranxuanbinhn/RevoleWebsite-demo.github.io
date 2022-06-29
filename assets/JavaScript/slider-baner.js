

  $(document).ready(function(){
    $('.slider').not('.slick-initialized').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
    
      prevArrow:"<button type='button' class='btn_slider btn_slider_pre'><i class='fa-solid fa-chevron-right'></i></button>",
            nextArrow:"<button type='button' class='btn_slider btn_slider_ne'><i class='fa-solid fa-chevron-left'></i></button>"
      
    });
  });	