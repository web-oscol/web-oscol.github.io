$(document).ready(function(){
	var id = localStorage.getItem('cli');
	var idblok = '#' + id;
	var allblok = $(idblok);
	allblok.addClass('active');

	var clasblok ='.'+ id ;
	var clascection = $(clasblok);
	clascection.addClass('visibl');
	 

	

		
});	