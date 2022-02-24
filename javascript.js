function computerPlay() {
  const compArray = ["rock", "paper", "scissors"];
  let randomSelection = compArray[Math.floor(Math.random() * compArray.length)];
  return randomSelection;
}

let computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;

function game() {
  for (i = 1; i <= 5; i++) {
    let playerInput = prompt("Choose rock, paper, or scissors");
    let playerSelection = playerInput.toLowerCase();
    console.log(`Computer chose: ${computerSelection}`);
    console.log(`You chose: ${playerSelection}`);
    console.log(oneRound(playerSelection, computerSelection));
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer's score: ${computerScore}`);
  }
  if (computerScore > playerScore) {
    console.log(
      `Final score: Computer = ${computerScore} Human = ${playerScore}`
    );
    console.log("You lose!!!!");
  } else if (computerScore < playerScore) {
    console.log(
      `Final score: Computer = ${computerScore} Human = ${playerScore}`
    );
    console.log("You win!!!!!");
  }
}

console.log(game());

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
      computerScore++;
    } else if (computerSelection === "scissors") {
      result = "You win!";
      playerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "You win!";
      playerScore++;
    } else if (computerSelection === "paper") {
      result = "It's a tie!";
    } else if (computerSelection === "scissors") {
      result = "You lose!";
      computerScore++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "You lose!";
      computerScore++;
    } else if (computerSelection === "paper") {
      result = "You win!";
      playerScore++;
    } else if (computerSelection === "scissors") {
      result = "It's a tie!";
    }
  } else {
    console.log("baa");
  }
  return result;
}
