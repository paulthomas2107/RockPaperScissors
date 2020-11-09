// Scores
let userScore = 0;
let computerScore = 0;

//DOM Variables - cache DOM
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Functions
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertChoiceToType(choice) {
  let types = new Map();
  types.set("r", "Rock");
  types.set("p", "Paper");
  types.set("s", "Scissors");
  return types.get(choice);
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertChoiceToType(
    userChoice
  )}${smallUserWord} beats ${convertChoiceToType(
    computerChoice
  )}${smallCompWord}. You Win 🔥`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function fail(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const computerChoice_div = document.getElementById(computerChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertChoiceToType(
    userChoice
  )}${smallUserWord} loses to ${convertChoiceToType(
    computerChoice
  )}${smallCompWord}. You Lost 💩`;
  computerChoice_div.classList.add("red-glow");
  setTimeout(() => computerChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  const computerChoice_div = document.getElementById(computerChoice);
  result_p.innerHTML = `${convertChoiceToType(
    userChoice
  )}${smallUserWord} equals ${convertChoiceToType(
    computerChoice
  )}${smallCompWord}. You Draw 😄`;
  setTimeout(() => userChoice_div.classList.add("gray-glow"), 300);
  setTimeout(() => computerChoice_div.classList.add("gray-glow"), 300);
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
  setTimeout(() => computerChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      fail(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  // Event listeners
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
