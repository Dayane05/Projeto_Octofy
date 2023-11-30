// jvscript.js

document.addEventListener('DOMContentLoaded', function() {
    // Este código será executado após o carregamento do DOM

    // Por exemplo, você pode adicionar um evento de clique a um botão:
    const button = document.querySelector('.submit-btn');
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que o formulário seja submetido
        alert('Formulário enviado!'); // Exibe um alerta
        // Adicione aqui o código que você deseja executar quando o botão for clicado
    });
});
