$(document).ready(function(){
	var ws  = window.innerWidth
	if (ws>=768) {
		var	h = $('#nw').width();
		var hp = h+15;
		$('.mrmy').css({'margin-left' : hp} );
	}else{
		$('.mrmy').css({'margin-left' : 60 } );
	}
	
	$(window).resize(function(){
		var	w = $('#nw').width();
		var we  = window.innerWidth
		if (we >= 768) {
			var wp = w ;
			$('.mrmy').css({'margin-left' : wp} );
			
			
		}else{
			$('.mrmy').css({'margin-left' : 60 } );
			
			
		}
	
	
});
});


