<?php
	include 'connect.php';

    $num = isset($_POST['num']) ? $_POST['num'] : '';
    // echo $num;
    $sql="SELECT * from goods where dataid='$num'";
    $res=$conn->query($sql);
    // echo $res;
    $row = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($row);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>