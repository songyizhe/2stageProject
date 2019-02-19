$(function(){
	var dataid = decodeURI(location.search);//获取从列表页传来的数据
//	console.log(dataid);
	var now = dataid.slice(1);//切割
//	console.log(now);
	$.ajax({
		type:"post",
		url:"../api/cart.php",
		async:true,
		data:{
			a:'xuanran',
			user:$.cookie('username')
		},
		success:function(str){
			if (str !=0) {
				var arr = JSON.parse(str);
				var res = arr.map(function(item){
					return `<div class="shopcart-list"><i class="icon icon-checked is-active"></i>
							<div class="shopcart-list-right float-clearfix">
								<div class="shopcart-goods">
									<div class="shopcart-list-leftimg">
										<a href="/item/EP-N6100.htm"><img src="${item.img}" alt=""></a><i class="icon icon-outOfStock-bg"></i></div>
									<a href="/item/EP-N6100.htm" class="goodname"><span class="goodname1">${item.name}</span>
										<p><span>${item.color}</span>&nbsp;6GB RAM
										<br />
										128GB ROM 公开版
										</p>
										
									</a>
								</div>
								<div class="shopcart-unit-price shopcart-unit-discount">
									<p style="color:#363d4c;font-weight: normal;">${item.price}</p>
								</div>
								<div class="shopcart-jifen jifens">${item.jifen}</div>
								<div class="shopcart-qty">
									<div class="calculate-num events-calculateNum">
										<a class="qty-btn-left events-minus"><i class="icon icon-left-minus"></i></a><input class="qty-input events-input" type="text" origindata="1" value="${item.num}">
										<a class="qty-btn-right events-plus"><i class="icon icon-left-plus"></i></a>
									</div>
									<a class="shopcart-remove events-shopcart-remove">删除</a>
								</div>
								<div class="shopcart-sum shopcart-sum-discount">
									<p style="color:#363d4c;font-weight: normal;">${item.price}</p>
								</div>
							</div>
						</div>`;
				}).join('');
				$('.shopcart-list-content').html(res);
				zongjia();
				quanxuan();
//				var zongjia = $('.jifens'); 
				
			}else if(str == 0){
				$('.shopcart-content').css('display','none');
				$('.shopcart-null-section').css('display','block');
			}
		}
	});
	
	function zongjia(){
		var zongjia = 0;
				for(var i = 0; i < $('.jifens').length; i++) {
					zongjia += $('.jifens').eq(i).html() * 1;
				}
				if (!isoks) {
					$('.totals').html('￥'+zongjia+'.00');
				$('.integral').html(zongjia);
				}
	}
	
	
	
	
	//点加号增加
	// $('.container1').on('click','.events-plus',function(){
	// 	var num = $(this).prev().val();
	// 	num ++;
	// 	$(this).prev().val(num);
	// 	var jifen = $(this).parent().parent().prev().prev().children('p').html();
	// 	var ps1 = jifen.slice(1);
	// 	var ps2 = ps1.replace(',','');
	// 	var ps3 =parseInt(ps2);
		
	// 	var jifen1 = ps3 * num;
	// 	$(this).parent().parent().prev().html(jifen1);
	// 	$(this).parent().parent().next().children('p').html('￥'+jifen1+'.00');
	// 	zongjia();
		
	// 	var name = $(this).parent().parent().prev().prev().prev().children('a').children('.goodname1').text();

	// 	var color = $(this).parent().parent().prev().prev().prev().children('a').children('p').children('span').text();

		
	// 	$.ajax({
	// 		type:"post",
	// 		url:"../api/cart.php",
	// 		async:true,
	// 		data:{
	// 			a:'zengshan',
	// 			name:name,
	// 			color:color,
	// 			num:$(this).prev().val(),
	// 			user:$.cookie('username')
	// 		}
	// 	});
		
		
		
		
		
		
		
		
		
		
		
		
	// });
	
	//点减号减少
	$('.shopcart-content').on('click','.events-minus',function(){
		var num = $(this).next().val();
		num --;
		if (num<1) {
			num =1;
		}
		
		$(this).next().val(num);
		var jifen = $(this).parent().parent().prev().prev().children('p').html();
		var ps1 = jifen.slice(1);
		var ps2 = ps1.replace(',','');
		var ps3 =parseInt(ps2);
		var jifen1 = ps3 * num;
		$(this).parent().parent().prev().html(jifen1);
		$(this).parent().parent().next().children('p').html('￥'+jifen1+'.00');
		zongjia();
		
		var name = $(this).parent().parent().prev().prev().prev().children('a').children('.goodname1').text();

		var color = $(this).parent().parent().prev().prev().prev().children('a').children('p').children('span').text();

		
		$.ajax({
			type:"post",
			url:"../api/cart.php",
			async:true,
			data:{
				a:'zengshan',
				name:name,
				color:color,
				num:$(this).next().val(),
				user:$.cookie('username')
			}
		});
		
	});
	
	//删除
	$('.shopcart-content').on('click','.events-shopcart-remove',function(){
		
		var name = $(this).parent().prev().prev().prev().children('a').children('.goodname1').text();

		var color = $(this).parent().prev().prev().prev().children('a').children('p').children('span').text();
		
//		console.log(name,color);

		var res = confirm('确定删除该商品吗？');
		if (res) {
			$.ajax({
			type:"post",
			url:"../api/cart.php",
			async:true,
			data:{
				a:'shanchu',
				name:name,
				color:color,
				user:$.cookie('username')
			},
			success:function(){
				alert('删除成功');
			}
			});
	
		$(this).parent().parent().parent().remove();
			zongjia();
			if ($('.shopcart-list').length == 0) {
				$('.shopcart-content').css('display','none');
				$('.shopcart-null-section').css('display','block');
			}
		}
		

	});
	var isoks = true;
	// 全选
	function quanxuan(){
		var num1 = $('.is-active').length;
		// console.log(num1);

		for(var j = 0;j<num1;j++){
			$('.is-active').css('background-position', '0 -408px');
		}
		
		
		
		$('#allcheck').click(function(){
			var zongjia1 = 0;
			if (isoks) {
				$('.is-active').css('background-position', '-44px -408px');
				var num = $('.is-active').length;
				for(var i=1;i<num;i++){
					var jifen4 = $('.is-active').eq(i).next().children('.jifens').html();
					zongjia1 = parseInt(zongjia1*1 + jifen4*1);

				}


				$('.container1').on('click','.events-plus',function(){
			var num1 = $(this).prev().val();
			++ num1;
			$(this).prev().val(num1);
			var jifen = $(this).parent().parent().prev().prev().children('p').html();
			var ps1 = jifen.slice(1);
			var ps2 = ps1.replace(',','');
			var ps3 =parseInt(ps2);
			
			var jifen1 = ps3 * num1;
			$(this).parent().parent().prev().html(jifen1);
			$(this).parent().parent().next().children('p').html('￥'+jifen1+'.00');
			zongjia();
			
			var name = $(this).parent().parent().prev().prev().prev().children('a').children('.goodname1').text();

			var color = $(this).parent().parent().prev().prev().prev().children('a').children('p').children('span').text();

			
			$.ajax({
				type:"post",
				url:"../api/cart.php",
				async:true,
				data:{
					a:'zengshan',
					name:name,
					color:color,
					num:$(this).prev().val(),
					user:$.cookie('username')
				}
			});
		
		});


				zongjia();


				$('.totals').html('￥'+zongjia1+'.00');
					$('.integral').html(zongjia1);
			}else{
				$('.is-active').css('background-position', '0 -408px');
				$('.totals').html('￥0.00');
					$('.integral').html(0);
			}
			isoks = !isoks;

		});
		var isokx = true;
		function zongjia3(){
			var zongjia = 0;
					for(var i = 0; i < $('.jifens').length; i++) {
						zongjia += $('.jifens').eq(i).html() * 1;
					}
					if (isokx) {
						$('.totals').html('￥0.00');
						$('.integral').html(0);
					}
					isokx = !isokx;
		}	
		zongjia3();
	}
	
	
	
	
});