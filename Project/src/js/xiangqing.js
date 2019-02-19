$(function(){
	var dataid = decodeURI(location.search);//获取从列表页传来的数据
//	console.log(dataid);
	var now = dataid.slice(1);//切割
	$.ajax({
		type:"post",
		url:"../api/xiangqing.php",
		async:true,
		data:{
			num:now
		},
		success:function(str){
			var arr = JSON.parse(str);
//			console.log(arr);
			var res = arr.map(function(item){
				return `<h1>${item.name}</h1>
							<div class="sam-grid-text">
								<p></p>
								<div class="sam-grid-text">
									<ul>
										<li><span>卖点</span>${item.maidian}</li>
										<li><span>优惠</span>下单优惠400元</li>
										<li><span>活动</span>登录会员先领券 再购物
											<a href="javascript:void(0)" onclick="gotogetcoupon()" style="color:#0000ff;text-decoration: underline;">点击领取</a>
										</li>
										<li><span>赠品</span>立式无线充+数据线</li>
										<li><span>免息</span>购机享12期免息分期</li>
										<li><span>套购</span>Galaxy Note9 智能套装，至高优惠1117元
											<a href="javasctript:;" style="color:#0000ff;text-decoration: underline;">详情点击</a>
										</li>
										<li><span>配件</span>Note9 专属保护套
											<a href="javasctript:;" style="color:#0000ff;text-decoration: underline;">详情点击</a>
										</li>
										<li><span>备注</span>使用信用租机方式购机的用户不享受买赠赠品</li>
									</ul>
								</div>
								<p></p>
							</div>`;
			}).join('');
			
			var res1 = arr.map(function(item){
				return `<li>
						<a href="../index.html">网上商城</a>
					</li>
					<li class="divider">&gt;</li>
					<li>
						<a href="list.html" title="智能手机">智能手机</a>
					</li>
					<li class="divider">&gt;</li>
					<li>${item.name}</li>`;
			}).join('');
			
			var res2 = arr.map(function(item){
				return `<p class="sam-block-deposit" myattr="p1"><span myattrid="salePrice" id="prices">${item.price}</span></p>`;
			}).join('');
			
			var res3 = arr.map(function(item){
				return `<label class="icon-neicun"><p>
											6GB RAM<br>
											128GB ROM
										</p>
										<span>${item.price}</span>
									</label>`;
			}).join('');
			
			var res4 = arr.map(function(item){
				return item.img7;
			}).join('');
			var res5 = arr.map(function(item){
				return item.img2;
			}).join('');
			var res6 = arr.map(function(item){
				return item.img3;
			}).join('');
			var res7 = arr.map(function(item){
				return item.img4;
			}).join('');
			var res8 = arr.map(function(item){
				return item.img5;
			}).join('');
//			console.log(res3);
			$('.sam-grid-line').html(res);
			$('.list-inline').html(res1);
			$('#prependId').html(res2);
			$('#ramprice').html(res3);
//			$('#img1').attr('src',res4);
			$('#img2').attr('src',res5);
			$('#img3').attr('src',res6);
			$('#img4').attr('src',res7);
			$('#img5').attr('src',res8);
		}
	});
//	
	
	//鼠标滑过加入购物车，以旧换新按钮
	$('#addCart').hover(function(){
		$(this).css({'background':'#000','color':'#fff'});
	},function(){
		$(this).css({'background':'#fff','color':'#000'});
	});
	
	$('.huanxin-button').hover(function(){
		$(this).css({'background':'#fff','color':'#2f0d9b'});
	},function(){
		$(this).css({'background':'#2f0d9b','color':'#fff'});
	})
	var colors = '';
	$('.xuanzecolor').on('click','a',function(){
		$('.xuanzecolor a').attr('class','');
		$(this).attr('class','is-active');
		colors = $(this).children('label').text().trim();
		color(colors);
	});

		
	function color(colors) {
		console.log(colors);
		$('#xuancolor').html(colors);
	}
	
	
	

	//加入购物车
	$('#addCart').click(function(){
		console.log(colors)
		
		if ($.cookie('username')) {
			var pricess = $('#prices').html();
			var ps1 = pricess.slice(1);
			var ps2 = ps1.replace(',','');
				$.ajax({
				type:"post",
				url:"../api/cart.php",
				async:true,
				data:{
					a:'jiaru',
					user:$.cookie('username'),
					dataid:now,
					price:$('#prices').html(),
					img:$('#img2').attr('src'),
					color:$('#xuancolor').html(),
					name:$('.sam-grid-line h1').html(),
					num:1,
					jifen:parseInt(ps2)
				},
				success:function(){
					alert('加入购物车成功');
					location.href = 'cart.html?' + now;
				}
			});

			
		} else{
			alert('请先登录');
			location.href = 'login.html';
		}
	});
	
	
	//放大镜渲染
//	$.ajax({
//		type:"post",
//		url:"../api/xiangqing.php",
//		async:true,
//		data:{
//			num:now
//		},
//		success:function(str){
//			var arr = JSON.parse(str);
//			var res = arr.map(function(item){
//				return `<li>
//						<div class="small-img">
//							<img src="${item.img7)}" />
//						</div>
//					</li>
//					<li>
//						<div class="small-img">
//							<img src="${item.img2)}" />
//						</div>
//					</li>
//					<li>
//						<div class="small-img">
//							<img src="${item.img3)}" />
//						</div>
//					</li>
//					<li>
//						<div class="small-img">
//							<img src="${item.img4)}" />
//						</div>
//					</li>
//					<li>
//						<div class="small-img">
//							<img src="${item.img5)}" />
//						</div>
//					</li>`;
//			}).join('');
//			$('.animation03').html(res);
//		}
//	});
	
	
});