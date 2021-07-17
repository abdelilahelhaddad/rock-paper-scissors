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
const game = document.querySelector(".game");
const picked = document.querySelector(".picked");
const playAgain = document.querySelector(".playAgain");
const computerSelection = document.querySelector("#computerSelection");
const userSelection = document.querySelector("#userSelection");
const winning = document.querySelector("#winning");

const computerChoices = ["paper", "scissors", "rock"];

let gameScore = 0;
let userChoice = undefined;

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    userChoice = circle.getAttribute("data-choice");
    checkWinner();
  });
})

playAgain.addEventListener("click", () => {
  game.style.display = "flex";
  picked.style.display = "none";
})

function checkWinner() {
  const computerChoice = computerRandomChoice();

  updateSelection(userSelection, userChoice);
  updateSelection(computerSelection, computerChoice);

  if (userChoice === computerChoice) {
    //draw
    winning.innerText = "Draw"
  } else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper")) {
    //user won
    winning.innerText = "You Win"
    updateScore(1);
  } else {
    //user lost
    winning.innerText = "You Lose"
    updateScore(-1);
  }

  game.style.display = "none";
  picked.style.display = "flex";
}

function updateScore(value) {
  gameScore += value;

  scoreEl.innerText = gameScore;
}

function computerRandomChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function updateSelection(selectedEL, choice) {

  selectedEL.children[2].classList.remove("paperBorder");
  selectedEL.children[2].children[0].classList.remove("paper");
  selectedEL.children[2].classList.remove("scissorsBorder");
  selectedEL.children[2].children[0].classList.remove("scissors");
  selectedEL.children[2].classList.remove("rockBorder");
  selectedEL.children[2].children[0].classList.remove("rock");

  const img = selectedEL.querySelector(".icon-img");

  selectedEL.children[2].classList.add(`${choice}Border`);
  selectedEL.children[2].children[0].classList.add(choice);
  img.src = `./assets/images/icon-${choice}.svg`;
  img.alt = choice;
}