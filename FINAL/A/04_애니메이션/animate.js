let title = $('h2');

/*
대상.animate({속성:값, 속성:값});
대상.animate({속성:값, 속성:값}, 시간, 이징, 종료되면 할일);
이징 linear(등속). swing
할일 function(){...}
*/
title.animate({fontSize: '100px'}, 2000, 'easeOutBack', function(){
    title.animate({fontSize: '50px'});
});
$('.box').mouseover(function(){
    $(this).stop().animate({backgroundColor:'green'},1500, 'swing');
})
.mouseout(function(){
    $(this).stop().animate({backgroundColor:'blue'},1500, 'swing');
});