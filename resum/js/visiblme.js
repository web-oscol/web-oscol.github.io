$(document).ready(function(){
	$(window).scroll(function(){
		var target = $('.flip-container');
		var targetPos = target.offset().top;
		var winHeight = $(window).height();
		var scrollToElem = targetPos - winHeight; 
		var winScrollTop = $(this).scrollTop();
		var allcard = $('.mee-card .flip-container');
		if (winScrollTop > scrollToElem) {
			allcard.eq(0).css({'transform': 'translateY(0)',
		                       'transition': '1s'         });
			allcard.eq(1).css({'transform': 'translateY(0)',
		                       'transition': '1.2s'         });
			allcard.eq(2).css({'transform': 'translateY(0)',
		                       'transition': '1.5s'         });
		}
		console.log(allcard);
	})
})