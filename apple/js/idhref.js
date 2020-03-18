$(document).ready(function(){
    $('.phone__href').click(function(e){
    	  e.preventDefault();
        var clickId = this.id;
        var clicname =$(this).text();//взяли текст
        var src = $(this).find('img').attr('src');   //нашли img и взяли src
       	var nav =$('.nav-link.active');
       	var	navactiv = nav.attr('id');

       	          
         
        localStorage.setItem('clickId', clickId);
        localStorage.setItem('clicname', clicname);
        localStorage.setItem('src', src);
        localStorage.setItem('navactiv', navactiv);
        document.location.href = "repiphone.html";

      
        
    });

});
