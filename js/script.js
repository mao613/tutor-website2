// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const toogleButton = document.querySelector(".navbar .mobile-menu-toogle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toogleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

// Change navbar background color on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
