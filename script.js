// Mobile nav toggle
const toggleButton = document.getElementById("hamburger");
const navButtons = document.getElementsByClassName("nav-link ion-icon");
const nav = document.getElementById("nav");

const toggleNavbar = function () {
  nav.classList.toggle("active");
};

toggleButton.addEventListener("click", toggleNavbar);
navButtons.addEventListener("click", toggleNavbar);

//
