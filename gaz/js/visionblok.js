$(document).ready(function(){
	
	$(window).scroll(function(){
		var target = $('#comp');
		var targetPos = target.offset().top;  //кординаты топ
		var winHeight = $(window).height();
		var scrollToElem = targetPos - winHeight; 
		var winScrollTop = $(this).scrollTop();
		if (winScrollTop > scrollToElem) {
			$('#comp .transition--left').css('transform', 'translateX(0)');
			$('#comp .transition--right').css('transform', 'translateX(0)');
		}
	});

	$(window).scroll(function(){
		var target = $('#work');
		var targetPos = target.offset().top;  //кординаты топ
		var winHeight = $(window).height();
		var scrollToElem = targetPos - winHeight; 
		var winScrollTop = $(this).scrollTop();
		if (winScrollTop > scrollToElem) {
			$('#work .transition--left').css('transform', 'translateX(0)');
            $('#work .transition--right').css('transform', 'translateX(0)');
        }
	});
	

});







