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
            results.innerText = "You lose! Paper beats Rock.";
            return 0;
        } else if (computerSelection === 'scissors') {
            results.innerText = "You win! Rock beats Scissors.";
            return 1;
        } else {
            results.innerText = "Tie game!";
            return 2;
        }
    } else if (noCaseChoice === 'paper') {
        if (computerSelection === 'scissors') {
            results.innerText = "You lose! Scissors beats Paper.";
            return 0;
        } else if (computerSelection === 'rock') {
            results.innerText = "You win! Paper beats Rock.";
            return 1;
        } else {
            results.innerText = "Tie game!";
            return 2;
        }
    } else if (noCaseChoice === 'scissors') {
        if (computerSelection === 'rock') {
            results.innerText = "You lose! Rock beats Scissors.";
            return 0;
        } else if (computerSelection === 'paper') {
            results.innerText = "You win! Scissors beats Paper.";
            return 1;
        } else {
            results.innerText = "Tie game!";
            return 2;
        }
    } else {
        alert("Error: wrong input. Please enter Rock, Paper, or Scissors");
        return 0;
    }
}

let results = document.querySelector('.results');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

rock.addEventListener('click', e => {
    playRound('rock', getComputerChoice());
});

paper.addEventListener('click', e => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', e => {
    playRound('scissors', getComputerChoice());
});