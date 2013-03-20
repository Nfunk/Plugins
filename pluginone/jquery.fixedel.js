$(document).ready(function(){	
// Фиксированные элементы
	var offsetTop = $('#navigation').offset();

	$(window).scroll(function(){
		var fixElm = $('#navigation, .menu-list'),
				scrollElm = $('.menu-view, #restaurant-list, #restaurant-all');

		if ($(window).scrollTop() > offsetTop.top) {
			fixElm.addClass('fixed');
			scrollElm.addClass('adaptive').css('margin-top', function(val){return val + $('#navigation').outerHeight();});
		}
		else {
			fixElm.removeClass('fixed');
			scrollElm.removeClass('adaptive').css('margin-top','0');
		};
	});
});