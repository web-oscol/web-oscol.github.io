$(document).ready(function(){
	var sl = $('.mee-review-slide');
	setInterval(()=>{
		let tic = 0

		
			let idSetTimeout = setTimeout((q) => {
			sl.css({'transform' : 'translateX(-50%)'});
				
				
			},3000);

			setTimeout(() => {
					sl.css({'transform' : 'translateX(-100%)'});
						
					},6000);
			setTimeout(() => {
					sl.css({'transform' : 'translateX(0%)'});
						
					},9000);
			
			
			
					
	console.log(tic);
	},12000);
	
  	
});


