$(function(){
	
	/*
		步骤：一定要掌握的版本
			1.把所有的图片放在右侧，第一个图片放到可视区
			2.开定时器：每次轮播一个图
			3.焦点跟随
			4.点击上下按钮可以切图
			5.点击焦点可以跳转
	
	 */
	
	
	//1.把所有的图片放在右侧，第一个图片放到可视区
	var iW = $('#imglist li').eq(0).outerWidth();
	console.log(iW);
	$('#imglist li').css('left', iW);
	$('#imglist li').eq(0).css('left', 0);
	
	
	//2.开定时器：每次轮播一个图
	var now = 0;//当前可视区的li下标
	var timer = null;
	timer = setInterval(next, 2000);//每隔两秒切下一张
	
	function next() {
		//旧图挪走：左侧
		$('#imglist li').eq(now).animate({'left': -iW}, 800, 'linear');
		
		//新图
		now = ++ now > $('#imglist li').size() - 1 ? 0 : now;
		$('#imglist li').eq(now).css('left', iW);
		$('#imglist li').eq(now).animate({'left': 0}, 800, 'linear');
		light();
	}
	
	function prev() {
		//旧图挪走：左侧
		$('#imglist li').eq(now).animate({'left': iW}, 800, 'linear');
		
		//新图
		now = -- now < 0 ? $('#imglist li').size() - 1 : now;
		$('#imglist li').eq(now).css('left', -iW);
		$('#imglist li').eq(now).animate({'left': 0}, 800, 'linear');
		light();
	}
	
	//3.焦点跟随
	function light() {
		$('#light span').eq(now).addClass('active').siblings().removeClass('active');
	}
	
	//4.点击上下按钮可以切图
	//鼠标经过停止
	$('#banner').hover(function() {
		clearInterval(timer);
	},function() {
		timer = setInterval(next, 2000);
	});
	
//	$('#box').on('click','#prev', function() {
//		//切换到上一张
//		prev();
//	});
//	
//	$('#box').on('click','#next', function() {
//		//切换到下一张
//		next();
//	});
	
	//5.点击焦点可以跳转
	$('#banner').on('click','#light span', function() {
		var index = $(this).index();
		if(index > now) {
			//从右侧进入可视区
			//旧图：放到左边
			$('#imglist li').eq(now).animate({'left': -iW}, 800, 'linear');
			//新图：快速放在右侧，再挪进来
			$('#imglist li').eq(index).css('left', iW);
			$('#imglist li').eq(index).animate({'left': 0}, 800, 'linear');
			now = index;
		}
		
		if(index < now) {
			//从左侧进入可视区
			//旧图：放到右边
			$('#imglist li').eq(now).animate({'left': iW}, 800, 'linear');
			//新图：快速放在左侧，再挪进来
			$('#imglist li').eq(index).css('left', -iW);
			$('#imglist li').eq(index).animate({'left': 0}, 800, 'linear');
			now = index;
		}
		
		light();
	});
	
});
