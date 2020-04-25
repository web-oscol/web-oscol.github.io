$(document).ready(function(){
	$('.next').on('click',function(){
		var allsleder = $('.caruselmy img');
		if ($('.caruselmy img').hasClass('itemzeroTwo')) {
			allsleder.eq(2).removeClass('itemzero')	.addClass('itemzeroTwo')
			allsleder.eq(3).removeClass('itemone').addClass('itemzero');
			allsleder.eq(4).removeClass('itemtwo').addClass('itemone');
			allsleder.eq(5).removeClass('itemthre').addClass('itemtwo');
			allsleder.eq(6).removeClass('itemseven itemfour').addClass('itemthre');
			
		}
		else if ($('.caruselmy img').hasClass('itemzeroOne')) {
			allsleder.eq(1).removeClass('itemzero')	.addClass('itemzeroTwo')
			allsleder.eq(2).removeClass('itemone').addClass('itemzero');
			allsleder.eq(3).removeClass('itemtwo').addClass('itemone');
			allsleder.eq(4).removeClass('itemthre').addClass('itemtwo');
			allsleder.eq(5).removeClass('itemfour').addClass('itemthre');
			allsleder.eq(6).removeClass('itemfive').addClass('itemfour');
		 
		 
		}
		else if ($('.caruselmy img').hasClass('itemzero')) {
			
			allsleder.eq(0).removeClass('itemzero')	.addClass('itemzeroOne')
			allsleder.eq(1).removeClass('itemone').addClass('itemzero');
			allsleder.eq(2).removeClass('itemtwo').addClass('itemone');
			allsleder.eq(3).removeClass('itemthre').addClass('itemtwo');
			allsleder.eq(4).removeClass('itemfour').addClass('itemthre');
			allsleder.eq(5).removeClass('itemfive').addClass('itemfour');
		    allsleder.eq(6).removeClass('itemsix').addClass('itemfive');
		
		
		}else{

			allsleder.eq(0).removeClass('itemone').addClass('itemzero');
			allsleder.eq(1).removeClass('itemtwo').addClass('itemone');
			allsleder.eq(2).removeClass('itemthre').addClass('itemtwo');
			allsleder.eq(3).removeClass('itemfour').addClass('itemthre');
			allsleder.eq(4).removeClass('itemfive').addClass('itemfour');
			allsleder.eq(5).removeClass('itemsix').addClass('itemfive');
		}
			
	});

	$('.prev').on('click',function(){
		var allsleder = $('.caruselmy img');
		if ($('.caruselmy img').hasClass('itemzeroTwo')) {
			allsleder.eq(2).removeClass('itemzero')	.addClass('itemzeroTwo')
			allsleder.eq(3).removeClass('itemone').addClass('itemzero');
			allsleder.eq(4).removeClass('itemtwo').addClass('itemone');
			allsleder.eq(5).removeClass('itemthre').addClass('itemtwo');
			allsleder.eq(6).removeClass('itemseven itemfour').addClass('itemthre');
			
		}
		else if ($('.caruselmy img').hasClass('itemzeroOne')) {
			allsleder.eq(1).removeClass('itemzero')	.addClass('itemzeroTwo')
			allsleder.eq(2).removeClass('itemone').addClass('itemzero');
			allsleder.eq(3).removeClass('itemtwo').addClass('itemone');
			allsleder.eq(4).removeClass('itemthre').addClass('itemtwo');
			allsleder.eq(5).removeClass('itemfour').addClass('itemthre');
			allsleder.eq(6).removeClass('itemfive').addClass('itemfour');
		 
		 
		}
		else if ($('.caruselmy img').hasClass('itemzero')) {
			
			allsleder.eq(0).removeClass('itemzero')	.addClass('itemzeroOne')
			allsleder.eq(1).removeClass('itemone').addClass('itemzero');
			allsleder.eq(2).removeClass('itemtwo').addClass('itemone');
			allsleder.eq(3).removeClass('itemthre').addClass('itemtwo');
			allsleder.eq(4).removeClass('itemfour').addClass('itemthre');
			allsleder.eq(5).removeClass('itemfive').addClass('itemfour');
		    allsleder.eq(6).removeClass('itemsix').addClass('itemfive');
		
		
		}else{

			allsleder.eq(0).removeClass('itemone').addClass('itemtwoprex');
			allsleder.eq(1).removeClass('itemtwo').addClass('itemthreprev');
			allsleder.eq(2).removeClass('itemthre').addClass('itemfour');
			allsleder.eq(3).removeClass('itemfour').addClass('itemfive');
			allsleder.eq(4).removeClass('itemfive').addClass('itemfive');
			allsleder.eq(5).removeClass('itemsix').addClass('itemprevzero');
		}
		console.log(allsleder);
	});
})