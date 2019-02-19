<?php
	include 'connect.php';
	$a = isset($_POST['a']) ? $_POST['a'] : 'xuanran';
	
	$user = isset($_POST['user']) ? $_POST['user'] : 'bbb';
		
	if($a=='jiaru'){
		$img = isset($_POST['img']) ? $_POST['img'] : '';
		$dataid = isset($_POST['dataid']) ? $_POST['dataid'] : '';
		
		$price = isset($_POST['price']) ? $_POST['price'] : '';
		$color = isset($_POST['color']) ? $_POST['color'] : '';
		$num = isset($_POST['num']) ? $_POST['num'] : '';
		$name = isset($_POST['name']) ? $_POST['name'] : '';
		$jifen = isset($_POST['jifen']) ? $_POST['jifen'] : '';
		
		//从数据库查询是否存在该数据，如果存在则num+1，如果不存在则添加该数据
		$res1 = $conn->query("SELECT * FROM cart WHERE name='$name' AND color='$color' AND user='$user'");
		
		$len=$res1 -> num_rows;
		if($len>0){
			//数据库已存在该数据，则num加1
//			echo '1';
			$res2 = $conn->query("UPDATE cart set num=num+1 WHERE name='$name' AND color='$color' AND user='$user';");
			echo '加入购物车成功';
		}else{
			//数据库不存在该数据，则创建该数据
//			echo '0';
			
			$res = $conn->query("INSERT INTO cart(`user`,dataid,img,price,color,num,name,jifen) VALUES('$user','$dataid','$img','$price','$color','$num','$name','$jifen')");
			echo '加入购物车成功';
			
		}
		
		
		
		
	
	}
	
	if($a=='xuanran'){
		$res = $conn->query("SELECT * FROM cart WHERE `user`='$user'");
		$row = $res->fetch_all(MYSQLI_ASSOC);
		//查询是否存在该用户的购物车
		$isdata = $res -> num_rows;
		if($isdata){
			echo json_encode($row,JSON_UNESCAPED_UNICODE);
	   		$res->close();
		}else{
			echo 0;
		}
		}
		
		
	if($a=='zengshan'){
		$color = isset($_POST['color']) ? $_POST['color'] : '';
		$num = isset($_POST['num']) ? $_POST['num'] : '';
		$name = isset($_POST['name']) ? $_POST['name'] : '';
		$res = $conn->query("UPDATE cart set num=$num WHERE name='$name' AND color='$color' AND user='$user';");
	}
	
	
	if($a=='shanchu'){
		$color = isset($_POST['color']) ? $_POST['color'] : '';
		$name = isset($_POST['name']) ? $_POST['name'] : '';
		$res = $conn ->query("DELETE FROM cart WHERE name='$name' AND color='$color' AND user='$user'");
	}
	
?>