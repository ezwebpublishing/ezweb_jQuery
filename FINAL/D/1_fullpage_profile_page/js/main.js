$(function(){
    
    $('.wrapper').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        afterLoad: function(origin, destination, direction){
            if(destination.index == 1){
                animateChart();
            }
        },       
	});//fullpage

    var chart = $('.chart');
    
    function animateChart(){
        chart.each(function(){
            var item = $(this);
            var title = item.find('h2');
            var targetNum = title.attr('data-num');
            var circle = item.find('circle');

            $({rate:0}).animate({rate:targetNum},
                {
                    duration:1500,
                    progress:function(){
                        var now = this.rate;                    //1
                        var amount = 628 - (628*now/100);       //2
                        
                        title.text(Math.floor(now));            //3    
                        circle.css({strokeDashoffset:amount});  //4
                    }
            });

        }); //chart each
    } //animateChart

});