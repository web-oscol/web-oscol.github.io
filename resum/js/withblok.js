$(document).ready(function(){
	var who  = document.body.clientWidth;
	var	wno = $('#nw').width();
	var	wnt = $('#nt').width();
	var whr = who - wnt
	var wmo = who - wno ;
	if (who > 845) {
		$('.mee-bg, .skils-bg').css({'width' : wmo});
	}else{
		$('.mee-bg, .skils-bg').css({'width' : whr});
	}
	
		$( window ).resize(function(){
			var wh  = document.body.clientWidth;
			if (wh > 845) {
				var	wn = $('#nw').width();
				var wm = wh - wn ;
				$('.mee-bg, .skils-bg').css({'width' : wm});
			
			}else{
				var wht  = document.body.clientWidth;
				var	wnt = $('#nt').width();
				var wmt = wht - 60;
				$('.mee-bg, .skils-bg').css({'width' : wmt});

			}
	});

})