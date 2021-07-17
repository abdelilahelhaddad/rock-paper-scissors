const open_nav = document.querySelector('#open_nav');
const close_nav = document.querySelector('#close_nav');
const nav_modalo = document.querySelector('#ham-nav-modal_container');

open_nav.addEventListener('click', () => {
  nav_modalo.classList.add('show');
  open_nav.style.visibility = "hidden";
});

close_nav.addEventListener('click', () => {
  nav_modalo.classList.remove('show');
  open_nav.style.visibility = "visible";
});

const circles = document.querySelectorAll(".circles");
const scoreEl = document.querySelector("#score");

const computerChoices = ["paper", "scissors", "rock"];

let gameScore = 0;
let userChoice = undefined;

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    userChoice = circle.getAttribute("data-choice");
    checkWinner();
  });
})

function checkWinner() {
  const computerChoice = computerRandomChoice();

  if (userChoice === computerChoice) {
    //draw
  } else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper")) {
    //user won
    updateScore(1);
  } else {
    //user lost
    updateScore(-1);
  }
}

function updateScore(value) {
  gameScore += value;

  scoreEl.innerText = gameScore;
}

function computerRandomChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}