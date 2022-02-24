function computerPlay() {
  const compArray = ["rock", "paper", "scissors"];
  let computerSelection =
    compArray[Math.floor(Math.random() * compArray.length)];
  return computerSelection;
}

console.log(computerPlay());
