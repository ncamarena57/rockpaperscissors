function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
        return 'rock';
    } else if (randNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let noCaseChoice = playerSelection.toLowerCase();
    if (noCaseChoice === 'rock') {
        if (computerSelection === 'paper') {
            console.log("You lose! Paper beats Rock.");
            return 0;
        } else if (computerSelection === 'scissors') {
            console.log("You win! Paper beats Rock.");
            return 1;
        } else {
            console.log("Tie game!");
            return 2;
        }
    } else if (noCaseChoice === 'paper') {
        if (computerSelection === 'scissors') {
            console.log("You lose! Scissors beats Paper.");
            return 0;
        } else if (computerSelection === 'rock') {
            console.log("You win! Paper beats Rock.");
            return 1;
        } else {
            console.log("Tie game!");
            return 2;
        }
    } else if (noCaseChoice === 'scissors') {
        if (computerSelection === 'rock') {
            console.log("You lose! Rock beats Scissors.");
            return 0;
        } else if (computerSelection === 'paper') {
            console.log("You win! Scissors beats Paper.");
            return 1;
        } else {
            console.log("Tie game!");
            return 2;
        }
    } else {
        alert("Error: wrong input. Please enter Rock, Paper, or Scissors");
        return 0;
    }
}

function game() {
    let games = 5;
    let playerScore = 0;
    let computerScore = 0;

    while (games > 0) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        let outcome = playRound(playerChoice, getComputerChoice());
        if (outcome === 0) {
            computerScore++;
        } else if (outcome === 1) {
            playerScore++;
        }
        games--;
    }
    if (playerScore > computerScore) {
        return "You won!";
    } else if (computerScore > playerScore) {
        return "You lost!";
    } else {
        return "Tie!";
    }
}