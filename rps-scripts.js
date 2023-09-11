/*
*   rock = 0, paper = 1, scissors = 2
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
        if (computerChoice === 'rock') return 'User: Rock, Computer: Rock. Draw.'
        if (computerChoice === 'paper') return 'User: Rock, Computer: Paper. You lose.'
        if (computerChoice === 'scissors') return 'User: Rock, Computer: Scissors. You win.'
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') return 'User: Paper, Computer: Rock. You win.'
        if (computerChoice === 'paper') return 'User: Paper, Computer: Paper. Draw.'
        if (computerChoice === 'scissors') return 'User: Paper, Computer: Scissors. You lose.'
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') return 'User: Scissors, Computer: Rock. You lose.'
        if (computerChoice === 'paper') return 'User: Scissors, Computer: Paper. You win.'
        if (computerChoice === 'scissors') return 'User: Scissors, Computer: Scissors. Draw.'
    }
}

function game() {
    let numRounds = 5;
    let userInput = '';
    for(; numRounds = 0; numRounds--) {
        userInput = prompt('Enter choice: ');
        console.log(playRound(userInput, getComputerChoice()));
    }
}