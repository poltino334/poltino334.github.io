const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const backToTopButton = document.querySelector(".back-to-top");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    menuButton.setAttribute(
      "aria-expanded",
      String(navLinks.classList.toggle("is-open"))
    );
  });
}

if (backToTopButton) {
  const toggleBackToTop = () =>
    backToTopButton.classList.toggle("is-visible", window.scrollY > 240);

  toggleBackToTop();
  window.addEventListener("scroll", toggleBackToTop);

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
