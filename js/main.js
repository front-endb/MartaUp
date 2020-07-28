$(function (argument) {
	$('.header-slider').slick({
		arrows:false,
		vertical:true,
		dots: true,
		dotsClass:'header-dots',
		autoplay:5000,
	});
});
$(function(argument) {
	$('.menu__btn').click(function(event){
		$('.menu__btn,.menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});