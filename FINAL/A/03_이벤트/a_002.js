$(function(){
    let mainTT = $('h1');
    /*
    이벤트 적용
    대상.on('이벤트종류',할일);    
    할일 function(){실제할일}    
    function() --->  ()=>
    */
   /*
    mainTT.on('mouseover',function(){
        mainTT.css({color:'blue'});
    });
    mainTT.on('mouseout',function(){
        mainTT.css({color:'black'});
    });
   
    mainTT.mouseover(function(){
        mainTT.css({color:'blue'});
    });
    mainTT.mouseout(function(){
        mainTT.css({color:'black'});
    });
    */
    mainTT.mouseover(function(){
        $(this).css({color:'blue'});
    })
    .mouseout(function(){
        $(this).css({color:'black'});
    });   

    /*
    $('h2, h3').mouseover(function(){
        $(this).css({backgroundColor:'silver'});
    })
    .mouseout(function(){
        $(this).css({backgroundColor:''});
    });
    */
    $('h2, h3').hover(
        function(){ //mouseover
            $(this).css({backgroundColor:'silver'});
        }, 
        function(){ //mouseout
            $(this).css({backgroundColor:''});
        } 
    );
    /*
    mouseover, mouseout  -> hover()
    click, dblclick

    keydown = 키보드를 눌렀을 때(한번), keyup 키를 땔때,  키보드 전체
    keypress = 키보드를 눌렀을 때(계속), 텍스트로 입력되는 키 

    focus, blur = 링크, input, button 포커스 걸리면, 풀리면
    change = input, select 값이 변경되면
    scroll
    */
    
    $('button').click(function(){
        $(this).css({backgroundColor:'black', color:'#fff'})
    });
    /*
    대상 내용 확인 innerHTML innerText
    대상 내용 변경
    A.text(b)   a요소의 내용으로 b를 글씨로 추가(교체)
    A.html(b)   a요소의 내용으로 b를 html tag 추가(교체)
    */
    var i = 0;
    $('input').keypress(function(){
        // $(this).css({backgroundColor:'black', color:'#fff'})
        
        $('.box').text(i+=1);
    });
    // $('input').keyup(function(){
    //     $(this).css({backgroundColor:'', color:''})
    // });

    $('input').focus(function(){
        $(this).css({backgroundColor:'blue'});
    });
    $('input').blur(function(){
        $(this).css({backgroundColor:''});
    });

    $('#favorite_color').change(function(){
        /*
        사용자가 선택한 옵션의 값을 변수 result저장 //javascript this.value
        // jquery $(this).val() 
        result값으로 body 배경색을 변경
        */
       var result = $(this).val();
       $('body').css({backgroundColor:result});

    }); 

    $(window).scroll(function(){
        var scrollAmt = $(this).scrollTop();
        console.log(scrollAmt);
    });


});//document ready 할일