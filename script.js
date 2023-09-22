// Mobile nav toggle
const toggleButton = document.getElementById("hamburger");
const navButtons = document.getElementsByClassName("nav-link ion-icon");
const nav = document.getElementById("nav");
const main = document.getElementsByClassName("main");
let turn = false;
const btn = [
  document.getElementById("btn1"),
  document.getElementById("btn2"),
  document.getElementById("btn3"),
  document.getElementById("btn4"),
  document.getElementById("btn5"),
  document.getElementById("btn6"),
  document.getElementById("btn7"),
  document.getElementById("btn8"),
  document.getElementById("btn9"),
];
let checked = [false, false, false, false, false, false, false, false, false];

const toggleNavbar = function () {
  nav.classList.toggle("active");
};

toggleButton.addEventListener("click", toggleNavbar);
navButtons.addEventListener("click", toggleNavbar);

//Game Logic

// Switching turns

function playerSwitch(i) {
  if (turn === true && checked[i] === false) {
    btn[i].innerHTML += '<img src="./Assets/X.svg" />';
    turn = false;
    checked[i] = true;
  } else if (checked[i] === false) {
    btn[i].innerHTML += '<img src="./Assets/O.svg" />';
    turn = true;
    checked[i] = true;
  }
}
