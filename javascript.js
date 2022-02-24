function computerPlay() {
  const compArray = ["rock", "paper", "scissors"];
  let randomSelection = compArray[Math.floor(Math.random() * compArray.length)];
  return randomSelection;
}

let computerSelection = computerPlay();

console.log(computerSelection);

let playerInput = prompt("Choose rock, paper, or scissors");
let playerSelection = playerInput.toLowerCase();

console.log(playerSelection);

//one round that takes player selection and computer selection
//return string that declares winner of round
//player selection case insensitive
function oneRound(playerSelection, computerSelection) {
  let result = "";

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      result = "It's a tie!";
    } else if (computerSelection === "paper") {
      result = "You lose!";
    } else if (computerSelection === "scissors") {
      result = "You win!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "You win!";
    } else if (computerSelection === "paper") {
      result = "It's a tie!";
    } else if (computerSelection === "scissors") {
      result = "You lose!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "You lose!";
    } else if (computerSelection === "paper") {
      result = "You win!";
    } else if (computerSelection === "scissors") {
      result = "It's a tie!";
    }
  } else {
    console.log("baa");
  }
  return result;
}

console.log(oneRound(playerSelection, computerSelection));
