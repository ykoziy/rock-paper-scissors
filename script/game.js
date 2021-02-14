function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomInt(0, 2)];
}

// 1, player wins
// -1, computer winds
// 0, tie
function playRound(playerSelection, computerSelection) {
    const rock = "rock", paper = "paper", scissors = "scissors";
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    if (
        (playerChoice === rock && computerChoice === scissors) ||
        (playerChoice === paper && computerChoice === rock) ||
        (playerChoice === scissors && computerChoice === paper)) {
        return [`You win, ${playerChoice} beats computers ${computerChoice}!`, 1];
    } else if (
        (playerChoice === scissors && computerChoice === rock) ||
        (playerChoice === rock && computerChoice === paper) ||
        (playerChoice === paper && computerChoice === scissors)) {
        return [`You loose, computer choose ${computerChoice} and it beats ${playerChoice}!`, -1];
    } else {
        return ["It's a tie.", 0];
    }
}

function getPlayerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let playerChoice = prompt("Make your choice (type in rock, paper or scissors):");
    playerChoice = playerChoice.toLocaleLowerCase();
    let isInputValid = false;
    while (!isInputValid) {
        if (playerChoice === undefined || !choices.includes(playerChoice)) {
            playerChoice = prompt("Invalid input, try again (type in rock, paper or scissors):");
            playerChoice = playerChoice.toLocaleLowerCase();
        } else {
            isInputValid = true;
        }
    }
    return playerChoice;
}

function printScore(scoreBoard) {
    return `Current score:
    Player: ${scoreBoard.playerScore}
    Computer: ${scoreBoard.computerScore}
    Rounds played: ${scoreBoard.round}`;
}

function game(numberOfRounds = 5) {
    let scoreBoard = {
        playerScore: 0,
        computerScore: 0,
        round: 0
    }

    console.log(`Playing ${numberOfRounds} rounds.`);

    for (let currentRound = 1; currentRound <= numberOfRounds; currentRound++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult[1] === 1) {
            console.log(roundResult[0]);
            scoreBoard.playerScore += 1;
        } else if (roundResult[1] === -1) {
            console.log(roundResult[0]);
            scoreBoard.computerScore += 1;
        } else {
            console.log(roundResult[0]);
        }
        scoreBoard.round += 1;
        console.log(printScore(scoreBoard));
    }

    if (scoreBoard.playerScore > scoreBoard.computerScore) {
        console.log(`You win the game of ${numberOfRounds} round(s).`);
    } else if (scoreBoard.playerScore < scoreBoard.computerScore) {
        console.log(`You lost, AI takes over the world because of you!`);
    } else {
        console.log(`It's a tie after ${numberOfRounds} round(s).`);
    }
}

game();