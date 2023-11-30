const searchBar = document.querySelector(".users .search input"),
  searchBtn = document.querySelector(".users .search button");

searchBtn.onclick = () => {
  searchBar.classList.toggle("active");
  searchBar.focus();
  searchBtn.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos relevantes
  var searchInput = document.querySelector(".search input");
  var userList = document.querySelectorAll(".users-list a");

  // Adiciona um evento de escuta ao campo de pesquisa
  searchInput.addEventListener("input", function () {
    // Obtém o termo de pesquisa em letras minúsculas
    var searchTerm = searchInput.value.toLowerCase();

    // Itera sobre os usuários e mostra ou oculta com base no termo de pesquisa
    userList.forEach(function (user) {
      var userName = user
        .querySelector(".details span")
        .textContent.toLowerCase();
      var userMessage = user
        .querySelector(".details p")
        .textContent.toLowerCase();

      // Verifica se o nome do usuário ou a mensagem contêm o termo de pesquisa
      if (userName.includes(searchTerm) || userMessage.includes(searchTerm)) {
        user.style.display = "flex"; // Exibe o usuário
      } else {
        user.style.display = "none"; // Oculta o usuário
      }
    });
  });
});
