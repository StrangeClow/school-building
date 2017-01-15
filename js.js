
$("document").ready(function(){
/*==================学院概述======================================*/
var height01 = $('.section-f .right-f .one').height();

$('.section-f .left-f').css('height',height01);
		
$('.section-f .left-f ul li').click(function(){
		$('.section-f .right-f div').eq($(this).index()).show().siblings().hide();
		
		var height01 = $('.section-f .right-f div').eq($(this).index()).height();
		
		var height02 = $('.section-f .right-f div').eq($(this).index()).outerHeight();
		
		var height03= $('.section-f .right-f div').eq($(this).index()).outerHeight(true);
	
	var height02 = $('.section-f .right-f div').eq($(this).index()).outerHeight();
	$('.section-f .left-f').css('height',height02);
		
		});
			
	
	$('.section-f .left-f ul li').hover(function(){
		$(this).focus().addClass("force");},function(){
			$(this).focus().removeClass("force");
			});
		/**/
	/*   获取div的高度*/	
	
		
});