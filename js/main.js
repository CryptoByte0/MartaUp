$(function(){
	$('.header-slider').slick({
		arrows: false,
		vertical: true,
		dots: true,
		dotsClass: 'header-dots',
		autoplay: true,
		autoplaySpeed: 2000,
		verticalSwiping: false
	});

	$('.menu__btn').on('click', ()=>{
		$('.menu__list').slideToggle();
	});

});