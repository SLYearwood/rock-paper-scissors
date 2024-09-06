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

function getPlayerChoice() {
  return (choice = prompt("What do you choose?"));
}

function playRound() {
  const humanMove = getPlayerChoice().toLowerCase();
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
  } else {
    console.log("Invalid Move");
    playRound();
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (scoreboard.wins > scoreboard.losses) {
    alert("YOU WIN!");
  } else if (scoreboard.wins < scoreboard.losses) {
    alert("YOU LOSE!");
  } else {
    alert("TIE!");
  }
}
playGame();
