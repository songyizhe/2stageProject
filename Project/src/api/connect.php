<?php
	$servername='localhost';//主机名
	$username='root';//用户名
	$password='';//密码
	$dbname='project';//数据库名称
	
	//连接数据库
	$conn=new mysqli($servername,$username,$password,$dbname);
	
	//检测链接
	if ($conn->connect_error){
		die("连接失败：".$conn->connect_error);
	}
	
	//查询前设置编码，防止输出乱码
	$conn->set_charset('utf8');
//	echo "连接成功";
?>