const scrollBtn = document.getElementById("scrollToTop");
const secondSection = document.querySelector(".image-section");

window.addEventListener("scroll", () => {
  const triggerY = secondSection.offsetTop;

  /**
   * Pokud uživatel doscrolluje k .image-section,
   * zobrazí se tlačítko přidáním třídy .visible
   */

  if (window.scrollY >= triggerY - 400) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

/**
 * Po kliknutí na tlačítko se stránka plynule posune na začátek.
 */

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
