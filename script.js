const scoreboard = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function getComputerChoice() {
  let computerMove = "";
  if (Math.random() < 1 / 3) {
    computerMove = "rock";
  } else if (Math.random() < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}

let humanMove = '';
const movePool = document.querySelector(".selections");
movePool.addEventListener('click', (event) => {
  let playerMove = event.target;
  
  switch(true) {
    case playerMove.classList.contains('rock-button'):
      humanMove = 'rock';
      break;
    case playerMove.classList.contains('paper-button'):
      humanMove = 'paper';
      break;
    case playerMove.classList.contains('scissors-button'):
      humanMove = 'scissors';
      break;
  }
  playRound();
})


function playRound() {
  const computerMove = getComputerChoice();
  if (humanMove === "rock") {
    if (computerMove === "rock") {
      scoreboard.ties++;
      alert("Tie!");
    } else if (computerMove === "paper") {
      scoreboard.losses++;
      alert("Lose!");
    } else {
      scoreboard.wins++;
      alert("Win!");
    }
  } else if (humanMove === "paper") {
    if (computerMove === "paper") {
      scoreboard.ties++;
      alert("Tie!");
    } else if (computerMove === "scissors") {
      scoreboard.losses++;
      alert("Lose!");
    } else {
      scoreboard.wins++;
      alert("Win!");
    }
  } else if (humanMove === "scissors") {
    if (computerMove === "scissors") {
      scoreboard.ties++;
      alert("Tie!");
    } else if (computerMove === "rock") {
      scoreboard.losses++;
      alert("Lose!");
    } else {
      scoreboard.wins++;
      alert("Win!");
    }
  } 
}

