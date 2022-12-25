var img = $('.gallery img'),
    lightbox = $('#lightbox-overlay'),
    lightboxImg = lightbox.find('img');  

img.click(function(e){
    e.preventDefault();
    var target = $(this).attr('data-lightbox');
    console.log(target);

    lightboxImg.attr('src',target);
    lightbox.addClass('visible');
});


// lightbox.on('click',function(){
//     lightbox.removeClass('visible');
// });