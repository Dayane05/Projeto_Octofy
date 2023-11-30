document.addEventListener("DOMContentLoaded", function () {
  const categoryFilter = document.getElementById("category-filter");
  const articles = document.querySelectorAll(".post article");

  categoryFilter.addEventListener("change", function () {
    const selectedCategory = categoryFilter.value;

    articles.forEach((article) => {
      const articleCategories = article
        .getAttribute("data-category")
        .split(",");

      if (
        selectedCategory === "all" ||
        articleCategories.includes(selectedCategory)
      ) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  });
});
