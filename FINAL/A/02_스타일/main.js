//document.addEventListener('DOMContentLoaded',function(){...});

$(document).ready(function(){ 

    //jQuery 선택자    
    $('h1').css('color','red');
    // document.querySelector('h1').style.color = 'red'; jQuery 라이브러리 변환

    //클래스명 list의 배경색을 실버로
    $('.list').css('background-color','silver');

    $('.list .red').css('background-color','red');

    // h2 투명도 50%, 회전 45도
    
    /*
    $('h2').css({
        opacity:0.5,
        transformOrigin:'0 0',
        transform: 'rotate(20deg)'
    });
    */

    let contentTT = $('h2');

    /*
    contentTT.css({opacity:0.5});
    contentTT.css({fontSize:'40px'});
    contentTT.css({color:'blue'});
    */

    //메서드체인
    contentTT.css({opacity:0.5}).css({fontSize:'40px'}).css({color:'blue'});

});
