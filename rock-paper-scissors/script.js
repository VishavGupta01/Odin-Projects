const arr = ["rock", "scissor", "paper"]

const getComputerChoice = function() {
    var randomNo = Math.floor(Math.random() * arr.length);
    return arr[randomNo];
}

const getHumanChoice = function() {
    console.log("0 -> Rock, 1 -> Scissors, 2 -> Paper");
    var choice = parseInt(prompt("Enter your choice: "));
    if (choice < 3 && choice >= 0) {
        return arr[choice];
    }
    return "Wrong Choice!";
}

var computerScore = 0;
var humanScore = 0;

const playRound = function(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        return "It's a Tie!";
    }

    const winningRules = {
        "rock" : "scissor",
        "scissor" : "paper",
        "paper" : "rock"
    };

    if(winningRules[humanChoice] === computerChoice) {
        humanScore++;
        return "You win " + humanChoice + " beats " + computerChoice + " !";
    } else {
        computerScore++;
        return "You lose " + computerChoice + " beats " + humanChoice + " !";
    }
}

const playGame = function(rounds) {
    computerScore = 0;
    humanScore = 0;

    for (let index = 0; index < rounds; index++) {
        const humanMove = getHumanChoice();

        if (humanMove === "Wrong Choice!") {
            console.log("Invalid input! Round skipped.");
            continue;
        }

        const computerMove = getComputerChoice();

        const result = playRound(humanMove, computerMove);
        console.log(`Round ${index + 1}: ${result}`);
    }

    console.log("-----------------------");
    console.log(`FINAL SCORE: Human: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("🏆 YOU WON THE GAME!");
    } else if (humanScore < computerScore) {
        console.log("🤖 COMPUTER WON THE GAME!");
    } else {
        console.log("😐 IT'S A DRAW!");
    }
}

playGame(5);