<?php
    include 'connect.php';

    // $res=$conn->query('select * from goodlist');
    // $row = $res->fetch_all(MYSQLI_ASSOC);
    // $res->num_rows;
    // echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $page = isset($_POST['page']) ? $_POST['page'] : '';
    $qty = isset($_POST['qty']) ? $_POST['qty'] : '';
    //echo $page,$qty;
    
    $index=($page-1)*$qty;
    $sql = "SELECT * FROM goodlist LIMIT $index,$qty";
    $res = $conn->query("SELECT * FROM goodlist  order by goodid LIMIT $index, $qty");
    //print_r($res);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    $sql2 = 'SELECT * FROM goodlist';
    $res2 = $conn->query($sql2);
    $num = $res2->num_rows;

    $datalist = array(
        'total' => $num,
        'list' => $row,
        'page' => $page,
        'qty' => $qty
    );

echo json_encode($datalist,JSON_UNESCAPED_UNICODE);//'{}'
    $res->close();
	$res2->close();
	$conn->close();
    
?>