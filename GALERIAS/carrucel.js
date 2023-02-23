$(function() { 
    $('.center').slick({
        
        infinite:true,
		slidesToShow: 3,
    slidesToScroll: 1,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 3900,
		dots: true,
		centerModel:true,
        centerPadding:'60px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

    });})