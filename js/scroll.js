$(function () {

	var jbOffset = $('.head-nomal-sg-lnb').offset();
	$(window).scroll(function () {
		if ($(document).scrollTop() > jbOffset.top) {
			$('.head-nomal-sg-lnb').addClass('head-nomal-sg-lnb_fx');
		} else {
			$('.head-nomal-sg-lnb').removeClass('head-nomal-sg-lnb_fx');
		}
	});

});