$(document).ready(function(){
	$('#back').on('click',function(){
		
		$('.nav__vertical').css('transform','translateX(-101%)');     
	});

});

$(window).resize(function () {
    if($(window).width() >= 576){
        $('.nav__vertical').css('transform','');
    };
});
