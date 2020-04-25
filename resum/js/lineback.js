$(document).ready(function(){
	setTimeout(() => {	

	  $('#lb1 ').css('transform', 'translateX(-20%)');
	  $('#lb2 ').css('transform', 'translateX(-30%)');
	  $('#lb3 ').css('transform', 'translateX(-34%)');
	  $('#lb4 ').css('transform', 'translateX(-40%)');

	 	var output = $('#l1'),
		start = 0,
		end = 80,
		timer = setInterval(function () {
			output.text(start++ + '%');
		if (start > end) {
			clearInterval(timer);
		}
		}, 10);

		var output1 = $('#l2'),
		start1 = 0,
		end1 = 75,
		timer1 = setInterval(function () {
			output1.text(start1++ + '%');
		if (start1 > end1) {
			clearInterval(timer1);
		}
		}, 10);


		var output2 = $('#l3'),
		start2 = 0,
		end2 = 85,
		timer2 = setInterval(function () {
			output2.text(start2++ + '%');
		if (start2 > end2) {
			clearInterval(timer2);
		}
		}, 10);

		var output3 = $('#l4'),
		start3 = 0,
		end3 = 70,
		timer3 = setInterval(function () {
			output3.text(start3++ + '%');
		if (start3 > end3) {
			clearInterval(timer3);
		}
		}, 10);


	
		




	},500);
	
});



//lb1
//lineback