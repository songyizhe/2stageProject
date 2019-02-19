<?php
	
	//连接数据库
	include 'connect.php';
	$a=isset($_POST['a']) ? $_POST['a'] : '';

    
    if($a=='login'){
        $name = isset($_POST['username']) ? $_POST['username'] : '';
        $password = isset($_POST['password']) ? $_POST['password'] : '';
        // echo $name,$password;
        $res = $conn->query("SELECT * FROM user where username='$name' and password='$password'");
        $len=$res -> num_rows;
        // echo $len;
        if($len>0){
            echo '1';
        }
        else{
            echo '0';
        }
    }


    if($a=='yz'){
        $name = isset($_POST['username']) ? $_POST['username'] : '';
        // echo $name,$password;
        $res = $conn->query("SELECT * FROM user where username='$name'");
        $len=$res -> num_rows;
        // echo $len;
        if($len>0){
            echo '1';
        }
        else{
            echo '0';
        }
    }


    if($a=='reg'){
        $name = isset($_POST['username']) ? $_POST['username'] : '';
        $password = isset($_POST['password']) ? $_POST['password'] : '';
        // echo $name,$password;
        $res = $conn->query("insert into user(username,password) value('$name','$password')");
        // echo $len;
            echo '注册成功！';
        
    }
?>