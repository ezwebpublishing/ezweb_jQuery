$(function(){

	const swiper = new Swiper('.basic-swiper', {//1
		// Optional parameters
		direction: 'horizontal',
		loop: true,	  

		 // If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',			//2
			clickable : true			//3
		},
  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		}

	});//기본 슬라이드

	const controlSwiper = new Swiper('.control-swiper .swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,	  
  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-parent .button-next', //1
		  prevEl: '.swiper-parent .button-prev', //2
		}

	});//좌우 컨트롤러

	const multipleSwiper = new Swiper('.multiple-swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true, 			//1
		slidesPerView: 3,		//2
        spaceBetween: 30,		//3  
  
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}	

	});//multiple-swiper

	const responsiveSwiper = new Swiper('.responsive-swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true, 			
		slidesPerView: 3,		
        spaceBetween: 30,		  
  
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// Responsive breakpoints
        breakpoints: {
            // 윈도의 크기가 480px 이상일때
            480: {
            slidesPerView: 1,
            spaceBetween:0
            },
            // 윈도의 크기가 600px 이상일때
            600: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // 윈도의 크기가 800px 이상일때
            800: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }

	}); //responsive-swiper	


	const controlSwiper2 = new Swiper('.control-swiper2 .swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true
	});//좌우 컨트롤러2

	$('.control-swiper2 .prev').click(function(){
		controlSwiper2.slidePrev();
	});

	$('.control-swiper2 .next').click(function(){
		controlSwiper2.slideNext();
	});


});//document ready jquery 