<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Receber a mensagem do cliente.
    $message = $_POST["message"];

    // Salvar a mensagem em um arquivo, banco de dados ou outro sistema de armazenamento.
    // Neste exemplo, apenas exibimos a mensagem no log do servidor.
    error_log("Received message: " . $message);
    // Se necessário, você pode processar a mensagem e enviar uma resposta ao cliente.
    echo "Message received successfully!";
} else {
    // Método de requisição não suportado.
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
