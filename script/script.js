$(document).ready(function(){
	$('#menu').on('click','a',function(event){
		event.preventDefult();
		id = $(this).attr('href');
		top = id.offset().top;
		$('body,html').animate({scrollTop: top},2000,true);
	});
});