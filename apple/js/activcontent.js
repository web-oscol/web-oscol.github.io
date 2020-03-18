$(document).ready(function(){
	var id = localStorage.getItem('clickId');
	var xah = '#'
	var idblok = xah + id;
	var allblok = $(idblok);
	allblok.addClass('activ');

	var nemephone = localStorage.getItem('clicname');
	$('.baner__name').text(nemephone);
	

	var src = localStorage.getItem('src');
	
	$('.activ').find('#src').attr('src',src);


	var navactiv = localStorage.getItem('navactiv');
	var	activnav = xah + navactiv;
	var activnavblok = $(activnav);
	activnavblok.addClass('active');
	
});