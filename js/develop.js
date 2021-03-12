$('.tittle-dev').click(function(){
	var index_dev = $(this).index();
	console.log(index_dev);
	$('.text-dev-position').eq(index_dev).fadeIn();
})
$('.pic-dev').click(function(){
	$('.text-dev-position').fadeOut();
})