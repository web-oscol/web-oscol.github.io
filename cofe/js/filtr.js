$(document).ready(function(){
	$('#clic li ').on('click',function(evt){
		evt.preventDefault();
			var allMenu = $('.menuCard,.current');
			var clicMenu =$(this).index();
			var currentMenu = allMenu.eq(clicMenu);
			var allLi = $('#clic').find('a');
			var colorText = allLi.eq(clicMenu);
	$('#clic').find('a').removeClass('colortext');
		colorText.addClass('colortext');	

		allMenu.removeClass('current');
		currentMenu.addClass('current');
		
				
	});
});