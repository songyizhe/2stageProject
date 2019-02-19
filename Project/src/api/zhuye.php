<?php
	include 'connect.php';
	
//	$a = isset($_GET['a']) ? $_GET['a'] : '';
	$sql="SELECT * FROM `index`";
    $res=$conn->query($sql);
    // echo $res;
    $row = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($row);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
//  echo $a;
?>