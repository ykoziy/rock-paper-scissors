(function () {

    let scoreBoard = {
        playerScore: 0,
        computerScore: 0,
        round: 0
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function computerPlay() {
        const choices = ["rock", "paper", "scissors"];
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
    
    function resetScoreBoard() {
        scoreBoard.playerScore = 0;
        scoreBoard.computerScore = 0;
        scoreBoard.round = 0;
    }
    
    function updateScore(roundResult) {
        if (roundResult[1] === 1) {
            scoreBoard.playerScore += 1;
        } else if (roundResult[1] === -1) {
            scoreBoard.computerScore += 1;
        }
        scoreBoard.round += 1;
        if (scoreBoard.playerScore == 5) {
            displayRoundResult(`You win the game of ${scoreBoard.round} round(s).`);
            resetScoreBoard();
        } else if (scoreBoard.computerScore == 5) {
            displayRoundResult(`You lost, AI takes over the world because of you!`);
            resetScoreBoard();
        }
    }
    
    function displayScore() {
        const scoreField = document.querySelector('.container__scoreboard p');
        scoreField.textContent = `${scoreBoard.playerScore} - ${scoreBoard.computerScore}`;
    }
    
    function displayRoundResult(roundResult) {
        const resultField = document.querySelector('.container__result p');
        resultField.textContent = roundResult;
    }
    
    function buttonClick(e) {
        const playerChoice = this.dataset.choice;
        const computerChoice = computerPlay();
        let roundResult = playRound(playerChoice, computerChoice);
        displayRoundResult(roundResult[0]);
        updateScore(roundResult);
        displayScore();
    }
    
    const buttons = Array.from(document.querySelector(".container__buttons").children);
    buttons.forEach(btn => btn.addEventListener("click", buttonClick));
    
})();

