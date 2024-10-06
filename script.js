document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");
  const mobileMenu = document.querySelector("#mobile-menu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
