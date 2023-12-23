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

let playerScore = 0;
let computerScore = 0;

document.getElementById('computer').innerText = computerScore;
document.getElementById('player').innerText = playerScore;

function playRound(playerSelection, computerSelection) {
    let noCaseChoice = playerSelection.toLowerCase();
    if (noCaseChoice === 'rock') {
        if (computerSelection === 'paper') {
            results.innerText = "You lose! Paper beats Rock.";
            computerScore += 1;
            document.getElementById('computer').innerText = computerScore;
        } else if (computerSelection === 'scissors') {
            results.innerText = "You win! Rock beats Scissors.";
            playerScore += 1;
            document.getElementById('player').innerText = playerScore;
        } else {
            results.innerText = "Tie game!";
        }
    } else if (noCaseChoice === 'paper') {
        if (computerSelection === 'scissors') {
            results.innerText = "You lose! Scissors beats Paper.";
            computerScore += 1;
            document.getElementById('computer').innerText = computerScore;
        } else if (computerSelection === 'rock') {
            results.innerText = "You win! Paper beats Rock.";
            playerScore += 1;
            document.getElementById('player').innerText = playerScore;
        } else {
            results.innerText = "Tie game!";
        }
    } else if (noCaseChoice === 'scissors') {
        if (computerSelection === 'rock') {
            results.innerText = "You lose! Rock beats Scissors.";
            computerScore += 1;
            document.getElementById('computer').innerText = computerScore;
        } else if (computerSelection === 'paper') {
            results.innerText = "You win! Scissors beats Paper.";
            playerScore += 1;
            document.getElementById('player').innerText = playerScore;
        } else {
            results.innerText = "Tie game!";
        }
    }
    if (playerScore === 5) {
        results.innerText = "You won the game!!!";
        playerScore = 0;
        computerScore = 0;
        document.getElementById('player').innerText = playerScore;
        document.getElementById('computer').innerText = computerScore;
    } else if (computerScore === 5) {
        results.innerText = "You lost the game! :(";
        playerScore = 0;
        computerScore = 0;
        document.getElementById('player').innerText = playerScore;
        document.getElementById('computer').innerText = computerScore;
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
