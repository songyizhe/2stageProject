$(function(){
	var list = document.getElementById('sku_list');
	function xuanran(str){
		
			var arr = JSON.parse(str);
			var res = arr.datalist.map(function(item){
				return `<div class="col-12-3 col-sm-12-6 col-xs-12-12 list-rowr">
									<div class="list-boximg">
										<a href="###" data-id="${item.dataid}">
											<img class="images123" src="${item.img1}"></a>
										<div class="icon-active-box">
											<label class="icon1 icon-orange" style="display:${item.zhekou1attr}">
									<span>${item.zhekou1}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
											<label class="icon1 icon-orange" style="display:${item.zhekou2attr}">
									<span>${item.zhekou2}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
											<label class="icon1 icon-orange" style="display:${item.zhekou3attr}">
									<span>${item.zhekou3}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
											<label class="icon1 icon-orange" style="display:${item.zhekou4attr}">
									<span>${item.zhekou4}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
										</div>
									</div>

									<div class="list-scroll-all">

										<div class="product-name">
											<h2>
							<a href="###" class="name2" data-id="${item.dataid}">${item.name}</a>
						</h2>
											<p class="red">${item.price}<del style="display:${item.oldpriceattr}">  ${item.oldprice}</del>
											</p>
										</div>

										<div class="scroll-list">
											<div class="scroll scroll-gallery events-scroll-gallery float-clearfix" data-scroll="spice.kvScroll">
												<div class="pc-jian img-list-pdcenter">
													<ul class="img-cor-list mg-l-imp" style="margin-left: 0px; margin-top: 0px;">
														<li class="cur">
															<a class="thumbnail" style="background:#66343f">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#000000">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#606d9b">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#9e44b4">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#5e869f">
																<i class=""></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>`;
			}).join('');
			$('#sku_list').html(res);
		
		
	}
	
	
	
	
	$.ajax({
		type:"get",
		url:"../api/list.php",
		async:true,
		data: {
			a:'xuanran',
			page:1,
			qty:12
		},
		success: function(str){xuanran(str)}
	});
	
	var num = 2;
	$('.loading').click(function(){
		$.ajax({
			type:"get",
			url:"../api/list.php",
			async:true,
			data: {
				a:'xuanran',
				page:num,
				qty:12
			},
			success: function(str){
				var arr = JSON.parse(str);
				var page1 = arr.total;
				
				var res = arr.datalist.map(function(item){
				return `<div class="col-12-3 col-sm-12-6 col-xs-12-12 list-rowr">
									<div class="list-boximg">
										<a href="###" data-id="${item.dataid}">
											<img class="images123" data-id="${item.dataid}" src="${item.img1}"></a>
										<div class="icon-active-box">
											<label class="icon1 icon-orange" style="display:${item.zhekou1attr}">
									<span>${item.zhekou1}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
											<label class="icon1 icon-orange" style="display:${item.zhekou2attr}">
									<span>${item.zhekou2}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
											<label class="icon1 icon-orange" style="display:${item.zhekou3attr}">
									<span>${item.zhekou3}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
											<label class="icon1 icon-orange" style="display:${item.zhekou4attr}">
									<span>${item.zhekou4}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
										</div>
									</div>

									<div class="list-scroll-all">

										<div class="product-name">
											<h2>
							<a href="###" class="name2" data-id="${item.dataid}">${item.name}</a>
						</h2>
											<p class="red">${item.price}<del style="display:${item.oldpriceattr}">  ${item.oldprice}</del>
											</p>
										</div>

										<div class="scroll-list">
											<div class="scroll scroll-gallery events-scroll-gallery float-clearfix" data-scroll="spice.kvScroll">
												<div class="pc-jian img-list-pdcenter">
													<ul class="img-cor-list mg-l-imp" style="margin-left: 0px; margin-top: 0px;">
														<li class="cur">
															<a class="thumbnail" style="background:#66343f">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#000000">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#606d9b">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#9e44b4">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#5e869f">
																<i class=""></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>`;
			}).join('');
				list.innerHTML += res;
				num ++;
				var num1 = Math.ceil(page1 / 12);
				if (num > num1) {
					$('.loading').html('到底啦');
				}
			}
		});
	});
	
	
	
	
	
	
	
	//跳转详情页
	$('#sku_list').on('click','.list-boximg a',function(){
		var daid = $(this).attr('data-id');
		console.log(daid);
		location.href = 'xiangqing.html?'+daid;
	});
	$('#sku_list').on('click','h2',function(){
		var daid = $(this).children('a').attr('data-id');
		console.log(daid);
		location.href = 'xiangqing.html?'+daid;
	})
	
	
	function shaixuan(str){
		
				var arr = JSON.parse(str);
				var res = arr.map(function(item){
					return `<div class="col-12-3 col-sm-12-6 col-xs-12-12 list-rowr">
									<div class="list-boximg">
										<a href="###" data-id="${item.dataid}">
											<img class="images123" data-id="${item.dataid}" src="${item.img1}"></a>
										<div class="icon-active-box">
											<label class="icon1 icon-orange" style="display:${item.zhekou1attr}">
									<span>${item.zhekou1}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
											<label class="icon1 icon-orange" style="display:${item.zhekou2attr}">
									<span>${item.zhekou2}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
											<label class="icon1 icon-orange" style="display:${item.zhekou3attr}">
									<span>${item.zhekou3}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
											<label class="icon1 icon-orange" style="display:${item.zhekou4attr}">
									<span>${item.zhekou4}</span>  
									<i class="arrow-top"></i>
									<i class="arrow-bottom"></i>
								</label>
										</div>
									</div>

									<div class="list-scroll-all">

										<div class="product-name">
											<h2>
							<a href="###" class="name2" data-id="${item.dataid}">${item.name}</a>
						</h2>
											<p class="red">${item.price}<del style="display:${item.oldpriceattr}">  ${item.oldprice}</del>
											</p>
										</div>

										<div class="scroll-list">
											<div class="scroll scroll-gallery events-scroll-gallery float-clearfix" data-scroll="spice.kvScroll">
												<div class="pc-jian img-list-pdcenter">
													<ul class="img-cor-list mg-l-imp" style="margin-left: 0px; margin-top: 0px;">
														<li class="cur">
															<a class="thumbnail" style="background:#66343f">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#000000">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#606d9b">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#9e44b4">
																<i class=""></i>
															</a>
														</li>
														<li class="cur">
															<a class="thumbnail" style="background:#5e869f">
																<i class=""></i>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>`;
				}).join('');
//				location.reload();
				$('#sku_list').html(res);
				$('.loading').css('display','none');
			
	}
	
	//筛选
	//类别筛选
	$('#sanxuan-s').click(function(){
		$('#shaixuan-jiage').children('li').children('label').children('i').css('background-position','0 -408px');
		$('#jiagepaixun').css({'background':'#fff','color':'#666'});
		$('.icon-caret-down').css('color','#666');
		$('.icon-caret-up').css('color','#666');
		$.ajax({
			type:"get",
			url:"../api/chaxun.php",
			async:true,
			data:{
				a:'s'
			},
			success:function(str){
				shaixuan(str);
			}
		});
	});
	
	$('#shaixuan-a').click(function(){
		$('#shaixuan-jiage').children('li').children('label').children('i').css('background-position','0 -408px');
		$('#jiagepaixun').css({'background':'#fff','color':'#666'});
		$('.icon-caret-down').css('color','#666');
		$('.icon-caret-up').css('color','#666');
		$.ajax({
			type:"get",
			url:"../api/chaxun.php",
			async:true,
			data:{
				a:'a'
			},
			success:function(str){
				shaixuan(str);
			}
		});
	});
	
	$('#shaixuan-n').click(function(){
		$('#shaixuan-jiage').children('li').children('label').children('i').css('background-position','0 -408px');
		$('#jiagepaixun').css({'background':'#fff','color':'#666'});
		$('.icon-caret-down').css('color','#666');
		$('.icon-caret-up').css('color','#666');
		$.ajax({
			type:"get",
			url:"../api/chaxun.php",
			async:true,
			data:{
				a:'n'
			},
			success:function(str){
				shaixuan(str);
			}
		});
	});
	
	
	//价格区间筛选
	$("#shaixuan-jiage").on('click','li',function(){
		$('#jiagepaixun').css({'background':'#fff','color':'#666'});
		$('.icon-caret-down').css('color','#666');
		$('.icon-caret-up').css('color','#666');
		$('#shaixuan-jiage').children('li').children('label').children('i').css('background-position','0 -408px');
		var jg = $(this).children('label').children('i').attr('tid');
		var arr1 = jg.split(',');
		$(this).children('label').children('i').css('background-position','-44px -408px');
//		console.log(arr1);
		var xiao = arr1[0];
		var da = arr1[1];
		$.ajax({
			type:"get",
			url:"../api/chaxun.php",
			async:true,
			data:{
				a:'jiage',
				xiao:xiao,
				da:da
			},
			success:function(str){
				shaixuan(str);
			}
		});
	});
	
	
	//价格大小排序
	var isok4 = true;
	$('#jiagepaixun').click(function(){
		$('#shaixuan-jiage').children('li').children('label').children('i').css('background-position','0 -408px');
		$('#jiagepaixun').css({'background':'#1428a0','color':'#fff'});
		$('.icon-caret-down').css('color','#757ca4');
		$('.icon-caret-up').css('color','#757ca4');
		if (isok4) {
			$('.icon-caret-up').css('color','#fff');
			$.ajax({
				type:"get",
				url:"../api/chaxun.php",
				async:true,
				data:{
					a:'true'
				},
				success:function(str){
					shaixuan(str);
				}
			});
			
		} else{
			$('.icon-caret-down').css('color','#fff');
			$.ajax({
				type:"get",
				url:"../api/chaxun.php",
				async:true,
				data:{
					a:'false'
				},
				success:function(str){
					shaixuan(str);
				}
			});
		}
		
		
		isok4 = !isok4;
	});
	
});