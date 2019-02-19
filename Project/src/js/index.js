$(function(){	
	var timer = null;
	function next(){
		$('.banner-in').stop().animate({'marginLeft': -1920},300,function(){
			$('.banner-in li:lt(1)').insertAfter($('.banner-in li:last'));
			$('.banner-in').css('margin-left',0);
		});
	}
	timer = setInterval(next,2000);
	//鼠标放在上面清除定时器
	$('.banner-in').hover(function(){
		clearInterval(timer);
	},function(){
		clearInterval(timer);
		timer = setInterval(next,2000);
	});
	//点击小点跳转到指定轮播图
	$('.xiaodian span').click(function(){
		var index = $(this).index();
		console.log(index);
		
	});
	
	//渲染
	$.ajax({
		type:"get",
		url:"api/zhuye.php",
		async:true,
		
		success:function(str){
			var arr = JSON.parse(str);
			var res = arr.map(function(item){
				return `<div class="fen8-2">
								<a href="javasctript:;">
									<img src="${item.img}" / style="opacity: 1;">
								</a>
								<h3 data-name="${item.name}">${item.name}</h3>
								<p>¥${item.price}.00</p>
							</div>`;
			}).join('');
			$('#baohu').html(res);
		}
	});
	
	
	//配件轮播
	var now2 = 0;//当前可视区的li下标
	var peijian = null;
	$('#peijian li').css('opacity', 0);
	$('#peijian li').eq(0).css('opacity', 1);
	peijian = setInterval(lunbo, 3000);//每隔两秒切下一张
	
	function lunbo(){
		$('#peijian li').eq(now2).animate({'opacity':0},200);
		now2 = ++ now2 > $('#peijian li').size() - 1 ? 0 : now2;
		$('#peijian li').eq(now2).css('opacity', 0);
		$('#peijian li').eq(now2).animate({'opacity': 1}, 200);
		jiaodian();
	}
	function jiaodian() {
		$('.num-peijian li').eq(now2).addClass('active').siblings().removeClass('active');
	}
	$('.num-peijian').on('click','li',function(){
		var index = $(this).index();
//		console.log($(this));
		$('#peijian li').eq(now2).animate({'opacity':0},200);
		$('#peijian li').eq(index).css('opacity', 0);
		$('#peijian li').eq(index).animate({'opacity': 1}, 200);
		now2 = index;
		jiaodian();
	});
	$('.peijian').hover(function() {
		clearInterval(peijian);
	},function() {
		peijian = setInterval(lunbo, 2000);
	});
	
	
	//点击播放下一张
	$('#arr-right').on('click', function() {
		//切换到上一张
		lunbo();
	});
	
	$('#arr-left').on('click', function() {
		$('#peijian li').eq(now2).animate({'opacity':0},200);
		now2 = -- now2 < 0 ? $('#peijian li').size() - 1 : now2;
		$('#peijian li').eq(now2).css('opacity', 0);
		$('#peijian li').eq(now2).animate({'opacity': 1}, 200);
		jiaodian();
	});
	
	
	
	//推荐
	var now3 = 0;//当前可视区的li下标
	var tuijian = null;
	$('#tuijian li').css('opacity', 0);
	$('#tuijian li').eq(0).css('opacity', 1);
	tuijian = setInterval(lunbo1, 3000);//每隔两秒切下一张
	
	function lunbo1(){
		$('#tuijian li').eq(now3).animate({'opacity':0},200);
		now3 = ++ now3 > $('#tuijian li').size() - 1 ? 0 : now3;
		$('#tuijian li').eq(now3).css('opacity', 0);
		$('#tuijian li').eq(now3).animate({'opacity': 1}, 200);
		jiaodian1();
	}
	function jiaodian1() {
		$('.num-tuijian li').eq(now3).addClass('active').siblings().removeClass('active');
	}
	$('.num-tuijian').on('click','li',function(){
		var index = $(this).index();
//		console.log($(this));
		$('#tuijian li').eq(now3).animate({'opacity':0},200);
		$('#tuijian li').eq(index).css('opacity', 0);
		$('#tuijian li').eq(index).animate({'opacity': 1}, 200);
		now3 = index;
		jiaodian1();
	});
	$('.tuijian').hover(function() {
		clearInterval(tuijian);
	},function() {
		tuijian = setInterval(lunbo1, 2000);
	});
	
	
	//点击播放下一张
	$('#tuijian-right').on('click', function() {
		//切换到上一张
		lunbo1();
	});
	
	$('#tuijian-left').on('click', function() {
		$('#tuijian li').eq(now3).animate({'opacity':0},200);
		now3 = -- now3 < 0 ? $('#tuijian li').size() - 1 : now3;
		$('#tuijian li').eq(now3).css('opacity', 0);
		$('#tuijian li').eq(now3).animate({'opacity': 1}, 200);
		jiaodian1();
	});
	
	
	//本周热销
	var isok5 = true;
	$('#hot-left,#hot-right').click(function(){
		if (isok5) {
			$('.hot-bottom ul').animate({'margin-left':'-610px'},200);
		} else{
			$('.hot-bottom ul').animate({'margin-left':'0'},200);
		}
		isok5 = !isok5;
	});
	
	
	
	
	
	//去购物车
	$('.licart').click(function(){
		if ($.cookie('username')) {
			location.href = 'html/cart.html';
		} else{
			alert('请先登录');
			location.href = 'html/login.html';
		}
	});
});
