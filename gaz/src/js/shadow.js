$(document).ready(function(){
	$('.carousel-indicators img').click(function(){
		$('.carousel-indicators img').removeClass('activ');
		$(this).addClass('activ');
	});

	$('.carousel-control-next').click(function(){
		var	$allslide = $('.slidename');
		var $data = $('.carousel-indicators');
		var $dt = $data.find('.activ');
		var $datanum = $dt.attr('data-slide-to');
		var	$datanumq =  $datanum++ ;
		$allslide.removeClass('activ');
		if ($datanumq<=3) {
			$allslide.eq($datanum ).addClass('activ');	
		}else{
			$allslide.eq(0).addClass('activ');	
		}
			
	});

	$('.carousel-control-prev').click(function(){
		var	$allslide = $('.slidename');
		var $data = $('.carousel-indicators');
		var $dt = $data.find('.activ');
		var $datanum = $dt.attr('data-slide-to');
		var	$datanumq =  $datanum-- ;
		$allslide.removeClass('activ');

		$allslide.eq($datanum ).addClass('activ');		
	});
		

});



