$(document).ready(function(){
	$('.nav-link').on('click',function(e){
		
		 var cli = this.id
		 
		
		localStorage.setItem('cli', cli);
		
		
	});
});	
