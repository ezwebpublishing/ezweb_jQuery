$(function(){   

    var $btt = $('#go-top');
    var $window = $(window);

    $window.on('scroll',function(){
        var scrollAmount = $(this).scrollTop();          
        
        if(scrollAmount > 300){
            $btt.addClass('active');
        } else{
            $btt.removeClass('active');
        }
    });

    $btt.on('click', function(e){
        e.preventDefault(); 

        $('html,body').animate({scrollTop: 0}, 500, 'easeInCubic');

    });

});