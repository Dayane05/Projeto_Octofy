document.addEventListener('DOMContentLoaded', function () {
    // Altera o texto dinâmico
    var dynamicText = document.getElementById('dynamicText');
    dynamicText.innerHTML = 'Texto dinâmico alterado com JavaScript!';

    // Adiciona um evento de clique ao conteiner
    var conteiner = document.getElementById('conteiner');
    conteiner.addEventListener('click', function () {
        alert('Clicou no conteiner!');
    });
});