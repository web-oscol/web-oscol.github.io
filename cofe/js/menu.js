$(document).ready(function(){
	$('#rigthm').on('click',function(evt){
		evt.preventDefault();
		var activContainer = $('.container,.activ');
		var activContainerIndex =$('.container.activ').index();
		var nextContainerIndex = activContainerIndex;
		var nextContainer = $('.container').eq(nextContainerIndex);
		var longarr = activContainer.length;
		console.log(activContainer);
		console.log(longarr);
		console.log(nextContainer);
			
				activContainer.fadeOut(0);
				activContainer.removeClass('activ');
				

		if (nextContainerIndex==longarr) {
			$('.container').eq(0).fadeIn(1000);
			$('.container').eq(0).addClass('activ');
		}else {
			nextContainer.fadeIn(1000);
			nextContainer.addClass('activ');

		}
		
		});

	$('#leftm').on('click',function(evt){
		evt.preventDefault();
		var activContainer = $('.container,.activ');
		var activContainerIndex =$('.container.activ').index();
		var prevContainerIndex = activContainerIndex-1;
		var prevContainer = $('.activ').prev();
		var longarr = activContainer.length;
			
			activContainer.fadeOut(0);
			activContainer.removeClass('activ');
		if (prevContainerIndex==0) {
			$('.container').filter(":last").fadeIn(1000);
			$('.container').filter(":last").addClass('activ');
		}	
			else{	
			prevContainer.fadeIn(1000);
			prevContainer.addClass('activ');
		}	
				
		});

});







	

