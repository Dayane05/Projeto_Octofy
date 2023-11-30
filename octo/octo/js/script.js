// Pegamos o botão que tem o id "mobile-menu-button"
const mobileMenuButton = document.getElementById('mobile-menu-button')

// Falamos pro JavaScript que queremos adicionar um "ouvinte de eventos" pra esse botão, e sempre que ele for clicado ("click"), queremos executar o que vier depois da virgula (neste caso, a função "menuShow")
mobileMenuButton.addEventListener('click', menuShow)

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../img/close.svg";
    }
}