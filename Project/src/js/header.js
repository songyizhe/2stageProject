$(function(){
	$('#nav').on('mouseenter','li', function() {
		$(this).children('.sub-menu').stop().slideDown(200);
	});
	$('#nav').on('mouseleave','li', function() {
		$(this).children('.sub-menu').stop().slideUp(200);
		
	});
	
	//吸顶菜单
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		if (top >= 36) {
//		$('.header-2').css({'display':'flex','top':0});
			$('.header-2').css({'position':'fixed','top':0});
		}else{
			$('.header-2').css('position','relative');
		}
		
	});
	
	
	//在线咨询
	$('#zixun').click(function(){
		$('#w-icon').css('display','block');
	});
	
	//咨询窗口点击关闭
	$('#close').click(function(){
		$('#w-icon').css('display','none');
	});
	
	
	//回到顶部
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		if (top >= 100) {
			$('#toTop').css('display','block');
		}else{
			$('#toTop').css('display','none');
		}
	});
	$('#toTop').click(function(){
		$('html ,body').animate({scrollTop: 0}, 300);
	});
	
	
	
});