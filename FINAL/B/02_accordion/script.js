var $title = $('.question');
var $panel = $('.answer');

$title.click(function(){
	$(this).toggleClass('active');
	$(this).siblings('.question').removeClass('active');
	$(this).next('.answer').slideToggle();
	$(this).next('.answer').siblings('.answer').slideUp();
});