const select = document.getElementById("movie-select");
const container = document.getElementById("movies-container");

function loadMovies() {
  const query = select.value;
  /** 
   * Načte a zobrazí seznam seriálů
   */ 
  fetch("https://api.tvmaze.com/search/shows?q=" + encodeURIComponent(query))
    .then((response) => response.json())
    .then((data) => {
      container.innerHTML = ""; // Pokaždé vyprázdní seznam při selectnuté nové kategorie

      data.forEach((item) => {
        // Zobrazí obrázek pouze pokud existuje
        if (item.show.image && item.show.image.medium) {
          const img = document.createElement("img");
          img.src = item.show.image.medium;
          img.alt = item.show.name;
          container.appendChild(img);
        }
      });
    });
}

select.addEventListener("change", loadMovies);
window.addEventListener("DOMContentLoaded", loadMovies);
