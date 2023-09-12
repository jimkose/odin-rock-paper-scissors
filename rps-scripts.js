/*
*   rock = 0, paper = 1, scissors = 2
*   [userChoice, computerChoice, result]
*/

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) return 'rock';
    if (number === 1) return 'paper';
    if (number === 2) return 'scissors';
    // console.log(getComputerChoice());
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') return ['rock', 'rock', 'draw'];
        if (computerChoice === 'paper') return ['rock', 'paper', 'computer wins'];
        if (computerChoice === 'scissors') return ['rock', 'scissors', 'player wins'];
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') return ['paper', 'rock', 'player wins'];
        if (computerChoice === 'paper') return ['paper', 'paper', 'draw'];
        if (computerChoice === 'scissors') return ['paper', 'scissors', 'computer wins'];
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') return ['scissors', 'rock', 'computer wins'];
        if (computerChoice === 'paper') return ['scissors', 'paper', 'player wins'];
        if (computerChoice === 'scissors') return ['scissors', 'scissors', 'draw'];
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        // console.log(event.target.textContent);
        const round = playRound(event.target.textContent, getComputerChoice());
        
        if (round[2] === 'player wins') {
            const score = document.querySelector('#player-score');
            score.textContent = Number(score.textContent) + 1;
            if (Number(score.textContent) === 5) alert('Player wins');
        } else if (round[2] === 'computer wins') {
            const score = document.querySelector('#computer-score');
            score.textContent = Number(score.textContent) + 1;
            if (Number(score.textContent) === 5) alert('Computer wins');
        }

        const playerMove = document.querySelector('#player-move');
        const computerMove = document.querySelector('#computer-move');

        playerMove.textContent = round[0];
        computerMove.textContent = round[1];

        const result = document.querySelector('#round-result');
        result.textContent = round[2];
    })
})

