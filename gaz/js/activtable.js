$(document).ready(function(){
	$('.btn-tabl').click(function(){
		$('.card button ').removeClass('acti');
		$(this).addClass('acti');
		$('.card .tabl_num ').removeClass('actinum');
		//var $closest = $(this).closest('.card')
		$(this).closest('.card').children('.card-header').children('.tabl_num').addClass('actinum');
		//console.log($closest);
	});
})