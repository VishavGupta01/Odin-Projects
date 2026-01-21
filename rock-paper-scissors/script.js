const arr = ["rock", "scissor", "paper"]
var computerScore = 0;
var humanScore = 0;
var gameOver = false;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

const btnRock = document.querySelector("#btnRock");
const btnScissor = document.querySelector("#btnScissor");
const btnPaper = document.querySelector("#btnPaper");

const getComputerChoice = function() {
    var randomNo = Math.floor(Math.random() * arr.length);
    return arr[randomNo];
}


const playRound = function(humanChoice) {
    if(gameOver) return;

    const computerChoice = getComputerChoice();

    if(humanChoice === computerChoice) {
        resultsDiv.textContent = `It's a tie! Both chose ${humanChoice}.`;
    } else {
        const winningRules = {
            "rock" : "scissor",
            "scissor" : "paper",
            "paper" : "rock"
        };

        if(winningRules[humanChoice] === computerChoice) {
            humanScore++;
            resultsDiv.textContent = `You win ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            resultsDiv.textContent = `You lose ${computerChoice} beats ${humanChoice}`;
        }
    }

    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    checkWinner();
}

const disableBtns = function() {
    btnPaper.disabled = true;
    btnRock.disabled = true;
    btnScissor.disabled = true;
}

const checkWinner = function() {
    if(humanScore == 5) {
        winnerDiv.textContent = `You won!`;
        gameOver = true;
        disableBtns();
    } else if (computerScore == 5) {
        winnerDiv.textContent = `Computer won!`;
        gameOver = true;
        disableBtns();
    }
}
btnRock.addEventListener("click", () => playRound("rock"));
btnPaper.addEventListener("click", () => playRound("paper"));
btnScissor.addEventListener("click", () => playRound("scissor"));