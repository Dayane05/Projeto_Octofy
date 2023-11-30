<?php

  $dbHost = 'LocalHost';
  $dbUsername = 'root';
  $dbPassword = '';
  $dbName = 'form-cadastro';
  $conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

  if(isset($_POST['submit_login'])){
    session_star();

    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = mysqli_query($conexao, "SELECT * FROM usuarios  WHERE email='$email' and senha='$password'");
        
        $result = mysqli_fetch_assoc($query);
        
        if (empty($result)){
            $_SESSION['msg'] = "Dados Inválidos!";
            header("location:login.php");
        }
        else {
            $_SESSION['email'] = $result['email'];
            $_SESSION['name'] = $result['name'];
            header("location:area.html");
        }
  }

?>