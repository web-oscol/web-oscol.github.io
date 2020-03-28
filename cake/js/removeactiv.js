$(document).ready(function(){
	$('#back').on('click',function(){
		
		$('.nav__vertical').removeClass('nav__vertical--vis');
	});

});

$(window).resize(function () {
    if($(window).width() >= 576){
        $('.nav__vertical').removeClass('nav__vertical--vis');
    };
});