<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
    
    <title>Login</title>
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
            <img src="img/colors-waiting-for-upload-or-download 1.png" />
          </div>
        <!-- </div> -->
        </div>
        
      <div class="form">
        <form action="#">
          <div class="form-header">
            <div class="title">
              <h1>Login</h1>
            </div>
            

          <div class="imput-group">
            
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
            
          </div>
        
          <div class="login">

            <div class="login-information">
              <a href="" class="recuperar-senha">Esqueceu a senha?</a>
            <div class="login-checkbox">
              <input type="checkbox" name="login" id="login"> 
              <label for="login">Salvar login</label>
            </div>
            </div>
            

            <div class="login-button">
              <button name="submit_login" type="submit">Login</button>
            </div>
          </div>
          <div class="login-info">
            <h5>Não tem uma conta? <a href="../form-cadastro/index.php">Cadastre-se</a></h5>
          </div>
            
          </div>
        </form>
      </div>
    </div>
  </body>
</html>
<?
  session_star();
  $name = $_SESSION['name'];

  $dbHost = 'LocalHost';
  $dbUsername = 'root';
  $dbPassword = '';
  $dbName = 'form-cadastro';

  $conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

 

?>
