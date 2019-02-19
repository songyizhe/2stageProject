<?php
    include 'connect.php';

    // $res=$conn->query('select * from goodlist');
    // $row = $res->fetch_all(MYSQLI_ASSOC);
    // $res->num_rows;
    // echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $page = isset($_POST['page']) ? $_POST['page'] : '1';
    $qty = isset($_POST['qty']) ? $_POST['qty'] : '12';
    //echo $page,$qty;
    
    $index=($page-1)*$qty;
    $sql = "SELECT * FROM goods LIMIT $index,$qty";
    $res = $conn->query("SELECT * FROM goods  order by id LIMIT $index, $qty");
    //print_r($res);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    $sql2 = 'SELECT * FROM goods';
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