$(function() {
	$('.sx-login').click(function() {
		$('#login1').css('display', 'none');
		$('#login2').css('display', 'block');
	});

	//获取焦点并验证
	$('.iam-input-container').click(function() {
		$(this).children('label').css({
			'top': '-1.9em',
			'left': 'auto',
			'fontSize': '0.875em',
			'color': '#1428a0'
		});

		$(this).children('input').blur(function() {
			if(!$(this).val()) {
				$(this).prev().css({
					'top': '-3px',
					'left': 'auto',
					'fontSize': '1.142em',
					'color': '#767676'
				});
			} else {
				$(this).prev().css('color', '#767676');
			}

		});
	});
	if(!($('#iptLgnPlnID').val())) {
		$('#iptLgnPlnID').prev().css({
			'top': '-1.9em',
			'left': 'auto',
			'fontSize': '0.875em',
			'color': '#1428a0'
		});
	}
	if(!($('#iptLgnPlnPD').val())) {
		$('#iptLgnPlnPD').prev().css({
			'top': '-1.9em',
			'left': 'auto',
			'fontSize': '0.875em',
			'color': '#1428a0'
		});
	}

	//	登录
	
	$('#signInButton').click(function() {
		$.ajax({
			type: "post",
			url: "../api/login.php",
			async: true,
			data: {
				a: 'login',
				username: $('#iptLgnPlnID').val(),
				password: $('#iptLgnPlnPD').val()
			},
			success: function(str) {
				var username = $("#iptLgnPlnID").val();
				var password = $("#iptLgnPlnPD").val();
				if(str == 1) {
					if($("#remIdChkYN").prop("checked")) {
						

						$.cookie("remember", "true", {
							expires: 7
						});
						$.cookie("username", username, {
							expires: 7
						});
						$.cookie("password", password, {
							expires: 7
						});
					} else {
						$.cookie("remember", "false", {
							expires: -1
						});
						$.cookie("username", "", {
							expires: -1
						});
						$.cookie("password", "", {
							expires: -1
						});
					}
					$.cookie("username",username,{ expires: 1,path :'/'})
					location.href = '../index.html';
				} else {
					alert('用户名或密码错误');
				}
			}
		});
	});

	//验证用户名
	var isok = false;
	var isok6 = false;
	var reg = /^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/;
	$('#signUpID').on('blur', function() {
		if($('#signUpID').val()) {
			$.ajax({
				type: "post",
				url: "../api/login.php",
				async: true,
				data: {
					a: 'yz',
					username: $('#signUpID').val()
				},
				success: function(str) {
					console.log(str);
					if(str == 1) {

						$('#signUpID').next().css({
							'display': 'block'
						}).html('用户名已存在');
					} else {
						$('#signUpID').next().css({
							'display': 'none'
						});
						isok6 = true;
					}
					var name = $('#signUpID').val().trim();
					var istrue = reg.test(name);
					if(istrue){
						$('#signUpID').next().css({
							'display': 'none'
						});
					}else{
						$('#signUpID').next().css({
							'display': 'block'
						}).html('邮箱格式不正确');
					}
					if (istrue&&isok6) {
						isok = true;
					}
				}
			});
		} else {
			$(this).next().css({
				'display': 'block'
			}).html('请输入用户名');
		}
	});

	//注册
	$('#zhuce').click(function() {
		if($('#signUpID').val() && $('#signUpPsw')) {

			if(isok) {
				$.ajax({
					type: "post",
					url: "../api/login.php",
					async: true,
					data: {
						a: 'reg',
						username: $('#signUpID').val(),
						password: $('#signUpPsw').val()
					},
					success: function(str) {
						alert('注册成功！');
						var username = $('#signUpID').val();
						$.cookie("username",username,{ expires: 1,path :'/'})
						location.href = '../index.html';
					}
				});
			} else {
				alert('注册失败');
			}
		}
	});

	//验证码
	var arr = ['0', '1', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	function yzm() {
		var str = "";
		for(var i = 0; i < 4; i++) {
			var num = parseInt(Math.random() * arr.length);
			str += arr[num];
		}
		$('#recaptcha_image').html(str);
	}
	yzm();

	$('.captchaBtns').click(function() {
		yzm();
	});
	$('#yanzhengma').on('blur', function() {
		var tex = $('#yanzhengma').val();
		var text2 = $('#recaptcha_image').html();
		if(text2.toLowerCase() == tex.toLowerCase()) {
			$(this).next().css({
				'display': 'block',
				'color': '#58bc58'
			}).html('验证成功');
		} else {
			$(this).next().css({
				'display': 'block'
			}).html('验证失败');
		}
	});
	
	
	//登录退出
	function userout(){
		//登录状态
		if ($.cookie("username")) {

        		$('#user').html($.cookie("username"));
        		$('#user').parent().attr('href','javasctript:;');
        		$('#login').hover(function(){
        			$('.yincang').css('display','block');
        		
        		},function(){
        			$('.yincang').css('display','none');
        		});
        		
        		
        		//退出
        		$('#user-out').on('click',function(){

					$.removeCookie('username',{path:'/'});
					console.log(111);
					$('#user').html('登录');
        			$('#user').parent().attr('href','html/login.html');
        			$('.yincang').css('display','none');
        			$('#login').unbind();
        			
				});
        	}        
	}

});