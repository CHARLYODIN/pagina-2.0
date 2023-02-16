const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "cerrar menu");
  } else {
    navToggle.setAttribute("aria-label", "abrir menu");
  }
})

const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function() {
    navMenu.classList.toggle("nav-menu_visible")
  })
})