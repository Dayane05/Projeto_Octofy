<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupere os dados do formulário
    $primeiroNome = $_POST["primeiroNome"];
    $email = $_POST["email"];
    $endereco = $_POST["endereco"];
    $cidade = $_POST["cidade"];
    $estado = $_POST["estado"];
    $cep = $_POST["cep"];
    $nomeNoCartao = $_POST["nomeNoCartao"];
    $numeroCartao = $_POST["numeroCartao"];
    $mesExp = $_POST["mesExp"];
    $anoExp = $_POST["anoExp"];
    $cvv = $_POST["cvv"];

    // Agora você pode processar esses dados da maneira que desejar
    // Por exemplo, você pode inserir os dados em um banco de dados ou realizar outras operações.

    // Neste exemplo, apenas exibiremos os dados recebidos
    echo "Dados do formulário recebidos com sucesso:<br>";
    echo "Primeiro Nome: $primeiroNome<br>";
    echo "Email: $email<br>";
    echo "Endereço: $endereco<br>";
    echo "Cidade: $cidade<br>";
    echo "Estado: $estado<br>";
    echo "CEP: $cep<br>";
    echo "Nome no Cartão: $nomeNoCartao<br>";
    echo "Número do Cartão: $numeroCartao<br>";
    echo "Mês de Expiração: $mesExp<br>";
    echo "Ano de Expiração: $anoExp<br>";
    echo "CVV: $cvv<br>";
} else {
    // Se não for uma solicitação POST, redirecione para a página de origem ou faça algo apropriado.
    header("Location: index.html");
    exit();
}

?>
