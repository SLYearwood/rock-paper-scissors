let scoreboard = localStorage.getItem("scoreboard") 
? JSON.parse(localStorage.getItem("scoreboard"))
: {wins: 0, losses: 0, ties: 0};
 


function getComputerChoice() {
  let randomNum = Math.random();
  if (randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum < 2 / 3) {
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
  const score = document.querySelector(".scoreboard"); 
  const result = document.querySelector(".results");
  const computerMove = getComputerChoice();
  if (humanMove === computerMove) {
    scoreboard.ties ++;
    result.textContent = `Tie! You both picked ${humanMove}!`;
  } else if (
    (humanMove === "rock" && computerMove === "scissors") || 
    (humanMove === "paper" && computerMove === "rock") ||
    (humanMove === "scissors" && computerMove === "paper") 
  ) {
      scoreboard.wins ++;
      result.textContent = `You Win! You picked ${humanMove}`;
   } else {
    scoreboard.losses ++;
    result.textContent = `You Lose! You picked ${humanMove}`;
   }
   score.textContent = `Wins: ${scoreboard.wins} Losses: ${scoreboard.losses} Ties: ${scoreboard.ties}`;
   localStorage.setItem("scoreboard", JSON.stringify(scoreboard));

}

