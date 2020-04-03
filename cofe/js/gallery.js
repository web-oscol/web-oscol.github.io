$(document).ready(function(){
	$('.item-img_slid a') .click(function(evt){
		evt.preventDefault();				//исключили стандартную реакцию на клик
		var imgPath = $(this).attr('href');  // взяли в переменную ссылку по клику
		var oldImage = $('#img_head img');   // выборка с элементими img из div с id img_head
		var newImage = $('<img src="'+imgPath+'">');  //добавляем новый элемент img src добавляем переменную imgPath(там уже содержится адрес картинки) закрываем кавыйчки
	$('#img_head').prepend(newImage);
	newImage.fadeIn(1000);
	oldImage.fadeOut(1000,function(){
		$(this).remove();
		});	
	});
	$('.item-img_slid  a:first').click();
});