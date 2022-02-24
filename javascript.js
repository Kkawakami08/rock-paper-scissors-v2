const body = document.getElementsByTagName("body")[0];

const container = document.getElementById("container");
container.style.backgroundColor = "red";

const container2 = document.createElement("div");

body.appendChild(container2);

let endResult = document.createElement("p");
container2.appendChild(endResult);

let playerScore = 0;
let computerScore = 0;

// function game() {
//   for (i = 1; i <= 5; i++) {
//     let playerInput = prompt("Choose rock, paper, or scissors");
//     let playerSelection = playerInput.toLowerCase();
//     console.log(`Computer chose: ${computerSelection}`);
//     console.log(`You chose: ${playerSelection}`);
//     console.log(oneRound(playerSelection, computerSelection));
//     console.log(`Your score: ${playerScore}`);
//     console.log(`Computer's score: ${computerScore}`);
//   }
//   if (computerScore > playerScore) {
//     console.log(
//       `Final score: Computer = ${computerScore} Human = ${playerScore}`
//     );
//     console.log("You lose!!!!");
//   } else if (computerScore < playerScore) {
//     console.log(
//       `Final score: Computer = ${computerScore} Human = ${playerScore}`
//     );
//     console.log("You win!!!!!");
//   }
// }

// console.log(game());
let rockButton = document.getElementById("rockbtn");
rockButton.value = "rock";

let paperButton = document.getElementById("paperbtn");
paperButton.value = "paper";

let scissorsButton = document.getElementById("scissorsbtn");
scissorsButton.value = "scissors";

rockButton.addEventListener("click", oneRound);
paperButton.addEventListener("click", oneRound);
scissorsButton.addEventListener("click", oneRound);

function oneRound(e) {
  function computerPlay() {
    const compArray = ["rock", "paper", "scissors"];
    let randomSelection =
      compArray[Math.floor(Math.random() * compArray.length)];
    return randomSelection;
  }

  let computerSelection = computerPlay();

  console.log(`You chose: ${e.target.value}`);
  console.log(`Computer chose: ${computerSelection}`);

  let result = "";

  if (e.target.value === "rock") {
    if (computerSelection === "rock") {
      result = "It's a tie!";
    } else if (computerSelection === "paper") {
      result = "You lose!";
      computerScore++;
    } else if (computerSelection === "scissors") {
      result = "You win!";
      playerScore++;
    }
  } else if (e.target.value === "paper") {
    if (computerSelection === "rock") {
      result = "You win!";
      playerScore++;
    } else if (computerSelection === "paper") {
      result = "It's a tie!";
    } else if (computerSelection === "scissors") {
      result = "You lose!";
      computerScore++;
    }
  } else if (e.target.value === "scissors") {
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
  endResult.innerText = result;
  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  console.log("");
}

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
