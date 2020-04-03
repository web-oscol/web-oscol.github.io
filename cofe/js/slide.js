

$('#rigth').on('click',function(){
	var  classYes = $('#item_slide').hasClass('active');
		if(classYes == true){
			$('#item_slide').removeClass('active')
		};
	$('.item_two').addClass('active');
						
});

$('#left').on('click',function(){
	var  classYes = $('#item_slide').hasClass('active');
		if(classYes == true){
			$('#item_slide').removeClass('active')
		};
	$('.item_three').addClass('active');
	 	 					
});

$('#rigth1').on('click',function(){
	$('.item_two').removeClass('active')
		
	$('.item_three').addClass('active');
	 	 					
});

$('#rigth2').on('click',function(){
	$('.item_three').removeClass('active')
		
	$('.item_one').addClass('active');
	 	 					
});

$('#left2').on('click',function(){
	$('.item_three').removeClass('active')
	$('.item_two').addClass('active'); 
							
});

$('#left1').on('click',function(){
	$('.item_two').removeClass('active')
		
	$('.item_one').addClass('active');
	 	 					
});	

