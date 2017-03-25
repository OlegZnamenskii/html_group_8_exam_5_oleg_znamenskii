$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  mobileFirst: true,
  adaptiveHeight: true,
  responsive: [

   {
      breakpoint: 480,
      settings: {
        arrows: false,
      
     
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
    
        

      }
    },
  ]
});
