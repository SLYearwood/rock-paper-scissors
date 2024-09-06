function getComputerChoice() {
  let computerMove = '';
  if (Math.random() < 1/3) {
    computerMove = 'rock';
  } else if (Math.random() < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors'
  }
}