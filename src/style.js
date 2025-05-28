let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  if (!["rock", "paper", "scissors"].includes(choice)) {
    alert("Invalid choice, please enter rock, paper, or scissors.");
    return getHumanChoice();
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    alert( `You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    alert(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

function playGame() {
  for (let round = 1; round <= 3; round++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    alert(`Round ${round}:`);
    alert(playRound(humanChoice, computerChoice));
  }

  if (humanScore > computerScore) {
    alert( `Final Score: You ${humanScore} - Computer ${computerScore}\nYou win the game! 🎉`);
  } else if (humanScore < computerScore) {
    alert(`Final Score: You ${humanScore} - Computer ${computerScore}\nComputer wins the game! 😢`);
  } else {
    alert( `Final Score: You ${humanScore} - Computer ${computerScore}\nIt's a tie overall!`);
  }
}

let button=document.querySelector("button");
button.addEventListener("click", playGame);
