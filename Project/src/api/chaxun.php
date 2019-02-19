<?php
	include 'connect.php';
	$a=isset($_GET['a']) ? $_GET['a'] : 's';
	
	if($a == 's'){
		$res = $conn->query("SELECT * FROM goods WHERE `name` LIKE 'Galaxy S%'");
		$data=$res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($data,JSON_UNESCAPED_UNICODE);
	}
	if($a == 'a'){
		$res = $conn->query("SELECT * FROM goods WHERE `name` LIKE 'Galaxy A%'");
		$data=$res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($data,JSON_UNESCAPED_UNICODE);
	}
	if($a == 'n'){
		$res = $conn->query("SELECT * FROM goods WHERE `name` LIKE 'Galaxy N%'");
		$data=$res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($data,JSON_UNESCAPED_UNICODE);
	}
	if($a == 'jiage'){
		$xiao=isset($_GET['xiao']) ? $_GET['xiao'] : '';
		$da=isset($_GET['da']) ? $_GET['da'] : '';
		$res = $conn->query("select * from goods where jifen between $xiao and $da");
		$data=$res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($data,JSON_UNESCAPED_UNICODE);
	}
	
	if($a == 'true'){
		$res = $conn->query("select * from goods order by jifen asc");
		$data=$res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($data,JSON_UNESCAPED_UNICODE);
	}
	if($a == 'false'){
		$res = $conn->query("select * from goods order by jifen desc");
		$data=$res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($data,JSON_UNESCAPED_UNICODE);
	}
?>