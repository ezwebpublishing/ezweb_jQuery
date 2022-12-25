
// 변수 지정
var slideWrapper =  $('.slide-wrapper'), 						//1
	slideContainer  = slideWrapper.find('.slide-container'),	//2
	slides = slideContainer.find('> li'),						//3
	pager = slideWrapper.find('.pager'),						//4
	slideCount = slides.length,									//5
	currentIndex = 0,											//6
	pagerHTML = '',												//7
	timer = undefined;											//8			
	navPrev = $('#prev'),										//9
	navNext =  $('#next');	

// 슬라이드가 있으면 가로로 배열하기
slides.each(function(i){
	$(this).css({left: 100 * i + "%"});	
	pagerHTML += `<a href="">${i+1}</a>`;	
});
console.log(pagerHTML);
pager.html(pagerHTML);

var pagerBtn = pager.find('a');





// 슬라이드 이동 함수 

function goToSlide(index){										//1
	slideContainer.stop().animate({left:-100 * index + '%'}); 	//2
	currentIndex = index;										//3
	updateNav();												//4
}
// 버튼을 클릭하면 슬라이드 이동시키기
navPrev.on('click', function(e) {
	e.preventDefault();
	goToSlide(currentIndex - 1);
});

navNext.on('click', function(e) {
	e.preventDefault();
	goToSlide(currentIndex + 1);
});	


pagerBtn.click(function(e){
	e.preventDefault();
	var targetIdx = $(this).index();	//1
	goToSlide(targetIdx);				//2
});


// 버튼기능 업데이트 함수
function updateNav(){
	
	if(currentIndex == 0){				//1
		navPrev.addClass('disabled');
	}else{
		navPrev.removeClass('disabled');		
	}
	
	if(currentIndex == slideCount - 1){	//2
		navNext.addClass('disabled');
	} else {
		navNext.removeClass('disabled');	
	}	
	pagerBtn.removeClass('active');		//3
	pagerBtn.eq(currentIndex).addClass('active');
}


// 첫번째 슬라이드 먼저 보이도록 하기
updateNav();


// 자동 슬라이드
function startAutoSlide(){
	timer = setInterval(function(){						//1
		var nextSlide = (currentIndex + 1)%slideCount;	//2
		goToSlide(nextSlide);							//3
	}, 3000);											//4
}
function stopAutoSlide(){
	clearInterval(timer);
}

slideWrapper.mouseover(function(){
	stopAutoSlide();
})
.mouseout(function(){
	startAutoSlide();
});

startAutoSlide();
