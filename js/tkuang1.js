// JavaScript Document

$(function() {
	$('.activator').click(function(){
		$('.overlay').fadeIn('fast',function(){
			$('.box1').animate({'top':'0px'},500);
		});
	});
	$('.boxclose').click(function(){
		$('.box1').animate({'top':'-1800px'},500,function(){
			$('.overlay').fadeOut('fast');
		});
	});

});


$(function() {
	$('.activator2').click(function(){
		$('.overlay1').fadeIn('fast',function(){
			$('.box2').animate({'top':'0px'},500);
		});
	});
	$('.boxclose').click(function(){
		$('.box2').animate({'top':'-1800px'},500,function(){
			$('.overlay1').fadeOut('fast');
		});
	});

});


$(function() {
	$(function(){
		$('.overlay2').fadeIn('fast',function(){
			$('.box3').animate({'top':'0px'},500);
		});
	});
	$('.boxclose').click(function(){
		$('.box3').animate({'top':'-1800px'},500,function(){
			$('.overlay2').fadeOut('fast');
		});
	});

});