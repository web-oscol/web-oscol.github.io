$(document).ready(function(){
	$('.nav-link').on('click',function(e){
		e.preventDefault();
		$('.nav-item a').removeClass('activnav');
		$(this).addClass('activnav');

		var activid = $(this).attr('data-id');
		var dataname = '.' + activid;
		var	q = $(dataname);

		$('.d-flex').children().removeClass('activbloc');
		q.addClass('activbloc');

		
	})
})






