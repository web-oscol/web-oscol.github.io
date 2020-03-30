$(document).ready(function(){
	$('li a').on('click',function(){
		
		var id = this.id;
		var clasblok ='.'+ id ;
		var clascection = $(clasblok);
		var allsection = $('.tort, .cake, .pie')

		allsection.removeClass('visibl')
		clascection.addClass('visibl');


		var idnav =  '#'+id;
		var idnavactiv = $(idnav);
		var allnav = $('#tort, #cake, #pie')
		allnav.removeClass('active');
		idnavactiv.addClass('active');
		
	})
	});	


