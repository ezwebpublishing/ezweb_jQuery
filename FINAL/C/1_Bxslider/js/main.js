$(function(){
	
	/* ---------- 기본 사용 ---------- */
	$('.basic-slide').bxSlider({

	});

	/* ---------- 좌우 컨트롤 ---------- */	
	$('.custom-controller .control-slide').bxSlider({
		prevText:'이전',
		nextText:'다음'		
	});
	$('.custom-controller2 .control-slide').bxSlider({
		prevText:'<i class="fas fa-arrow-left"></i>',
		nextText:'<i class="fas fa-arrow-right"></i>'		
	});
	$('.custom-controller3 .control-slide').bxSlider({
		pager:false,
		prevSelector: '.custom-controller3 .controls .prev',		
		nextSelector: '.custom-controller3 .controls .next'
	});	
	/* ---------- 페이저 설정 ---------- */	
	$('.mypager .basic-slide-pager').bxSlider({
		controls:false,
		pagerSelector:'.mypager .pager'
	});	

	/* ---------- 멀티플 슬라이드 ---------- */
	$('.multiple-slide').bxSlider({
		pager:false,
		minSlides: 2,
		maxSlides : 3,
		moveSlides :1,
		slideWidth: 190,
		slideMargin:15
	});

	/* ---------- 현재 슬라이드 구분하기 ---------- */
	$('.active-slide').bxSlider({
		pager:false,
		onSliderLoad:function(){
			$('.active-slide li').eq(1).addClass('active');
		},
		onSlideAfter: function($slideElement){
			$slideElement.addClass('active').siblings().removeClass('active');
		}
	});

	/* ---------- 슬라이드 옵션 활용1 mode ---------- */
	$('.option-slide').bxSlider({
		mode:'vertical',
		speed: 2000,
		pager:false
	});


	/* ---------- 슬라이드 옵션 활용2 auto ---------- */

	$('.auto-slide').bxSlider({
		auto: true,
		autoHover: true,
		autoStart:true,
		autoHover:false,
		pause:3000
	});	

	/* ---------- 동영상 제어하기 ---------- */	
	$('.movie-slide').bxSlider({
		pager:false,
		onSlideAfter: function($slideElement){
			$slideElement.find('video').get(0).play();						//1
			$slideElement.siblings().find('video').get(0).pause();			//2	
			$slideElement.siblings().find('video').get(0).currentTime = 0;	//3		
		}
	});	

	/* ---------- 탭과 연동 ---------- */

	
});