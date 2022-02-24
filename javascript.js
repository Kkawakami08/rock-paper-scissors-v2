let playerScore = 0;
let computerScore = 0;

const body = document.getElementsByTagName("body")[0];

const container = document.getElementById("container");

const container2 = document.createElement("div");

body.appendChild(container2);

let endResult = document.createElement("p");
endResult.id = "endResult";
endResult.innerText = "Rock, paper, scissors... Shoot!";
container.appendChild(endResult);

let cScore = document.createElement("p");
cScore.textContent = `Computer Score: ${computerScore}`;

let pScore = document.createElement("p");
pScore.textContent = `Your Score: ${playerScore}`;

container2.appendChild(cScore);
container2.appendChild(pScore);

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

  let result = "";

  if (e.target.value === "rock") {
    if (computerSelection === "rock") {
      result = "It's a tie!";
    } else if (computerSelection === "paper") {
      result = "You lose! Computer chose paper.";
      computerScore++;
    } else if (computerSelection === "scissors") {
      result = "You win! Computer chose scissors.";
      playerScore++;
    }
  } else if (e.target.value === "paper") {
    if (computerSelection === "rock") {
      result = "You win! Computer chose rock.";
      playerScore++;
    } else if (computerSelection === "paper") {
      result = "It's a tie!";
    } else if (computerSelection === "scissors") {
      result = "You lose! Computer chose scissors.";
      computerScore++;
    }
  } else if (e.target.value === "scissors") {
    if (computerSelection === "rock") {
      result = "You lose! Computer chose rock.";
      computerScore++;
    } else if (computerSelection === "paper") {
      result = "You win! Computer chose paper.";
      playerScore++;
    } else if (computerSelection === "scissors") {
      result = "It's a tie!";
    }
  }
  endResult.innerText = result;
  endResult.style.fontWeight = "bold";
  cScore.innerText = `Computer Score: ${computerScore}`;
  pScore.innerText = `Your Score: ${playerScore}`;

  if (computerScore == 5) {
    endResult.innerText = "Computer Wins!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (playerScore == 5) {
    endResult.innerText = "You win!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
