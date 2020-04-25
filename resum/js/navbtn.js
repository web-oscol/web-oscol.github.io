$(document).ready(function(){
	$('#btnnav').on('click',function(){
		$('.navtrans').addClass('nvtact');
		$('.nav_bg').addClass('nvactiv');
	})


	$('#btnnavdel').on('click',function(){
		$('.navtrans').removeClass('nvtact');
		$('.nav_bg').removeClass('nvactiv');
	})
})

