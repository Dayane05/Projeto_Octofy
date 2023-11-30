<?php

  $dbHost = 'LocalHost';
  $dbUsername = 'root';
  $dbPassword = '';
  $dbName = 'form-cadastro';

  $conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

  if($conexao->connect_errno)
  {
    echo "Erro";
  }
  else
  {
    echo "conexao efetuada com sucesso";
  }

?>