<?php
	//中文乱码
	header("content-type:text/html;charset=utf-8");
	
	$severname = 'localhost';
	$username = 'root';
	$password = '';
	$name = 'zshoppingmall';
	
	$conn = new mysqli($severname,$username,$password,$name);
	
	if($conn->connect_error){
		die('连接失败'.$conn->connect_error);
	}else{
//			echo '连接成功';
	};
	
	$phone = isset($_POST['name'])?$_POST['name']:'';
	$password = isset($_POST['pyt'])?$_POST['pyt']:'';
	
//	echo $phone, $password;
	
	$sql = "INSERT INTO reg(phone,password) VALUES('$phone','$password')";
	
	$result = $conn->query($sql);
	
//	$row = $result->fetch_all(MYSQLI_ASSOC);
	
//	$num = $result->num_rows;
	
	echo json_encode($result);
?>