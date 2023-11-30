<?php
  
  if(isset($_POST['submit']))
  {
  //   print_r($_POST['name']);
  //   print_r($_POST['email']);
  //   print_r($_POST['password']);

  include_once('config.php');
  
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  $result = mysqli_query($conexao, "INSERT INTO usuarios(nome,email,senha) 
  VALUES ('$name','$email','$password')");
  }
?>



<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
    
    <title>Cadastro</title>
  </head>
  <body>
      <div class="form-image">
        <!-- <div class="form-group"> -->
          <div class="back-image">
            <a href=""><img src="img/icons8-voltar-50.png" alt=""></a>
            
          </div>
          <div class="semi-title">
            <h1>
              Venha com a gente e não seja que nem 70% da população que tem 1000
              dívidas!!
            </h1>
          </div>
          <div class="form-gif">
            <img src="img/bouncy-security-with-fingerprint-verification.gif" />
          </div>
        <!-- </div> -->
        </div>
        
      <div class="form">
        <form action="index.php" method="POST">
          <div class="form-header">
            <div class="title">
              <h1>Cadastro</h1>
            </div>
            

          <div class="imput-group">
            <div class="input-box">
              <label for="name"></label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Nome"
                required
              />
            </div>
            <div class="input-box">
              <label for="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                required
              />
            </div>
            <div class="input-box">
              <label for="password"></label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                required
              />
              
            </div>
            <div class="input-box">
              <label for="confirmPassword"></label>
              <input
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirmar senha"
                required
              />
              
            </div>
          </div>
          <div class="login">
            <div class="login-info">
              <h5>Já tenho uma conta <a href="../login/index.html">Login</a></h5>
            </div>
            <div class="login-button">
              <button type="submit" name="submit" id="submit" class="btn_cad">Cadastre-se</button>
            </div>
          </div>
            <div class="use-term">
              <h6>
                Ao se cadastrar você aceita nossos
                <a href="">Termos de Uso</a> 
                <br>
                e
                <a href="">Politíca de Privacidade</a>
              </h6>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  </body>
</html>
