$(document).ready(function(){
	$('.clicid').on('click',function(e){
		
		 var cli = this.id
		 
		
		localStorage.setItem('cli', cli);
		
		
	});
});	
