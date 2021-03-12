var index_banner = 0;
var banner = $('.banner-pic');
var item_hyx =$('.banner-item');
	banner.fadeOut(100);
	banner.eq(index_banner).fadeIn(500);
item_hyx.click(function(){
	var ls= $(this).index()
	index_banner= ls;
	banner.fadeOut(100);
	banner.eq(index_banner).fadeIn(500);
	console.log(index_banner)
	item_hyx.eq(index_banner).addClass('snowbc').siblings().removeClass('snowbc');
})



/**
 * 发展现状
 * 
 */
var pictureShow = 0;
$('.arrow-pictureShow').click(function(){
	pictureShow = !pictureShow
	console.log(pictureShow)
	if(pictureShow){
		$('.real').fadeOut(1);
		$('.none').fadeIn(300);
		
	}
	else
	{
		$('.none').fadeOut(1);
		$('.real').fadeIn(300);
	}
})
