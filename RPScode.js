


function playGame() {

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    let choice = prompt("Lets play Rock, Paper, Scissors. Enter 'Rock', ' Paper' or 'Scissors'").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice. Please enter 'Rock', 'Paper' or 'Scissors");
        return getHumanChoice();
    
    }
} 
let humanScore = 0
let computerScore = 0

function playRound() {
    const computerChoice = getComputerChoice()
    const humanChoice = getHumanChoice()

    if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        return console.log("You win! Paper beats Rock!")
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        return console.log("You win! Scissors beat Paper!")
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        return console.log("You win! Rock beats Scissors!")
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        return console.log("You lose! Rock beats Scissors!")
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        return console.log("You lose! Paper beats Rock!")
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        return console.log("You lose! Scissors beat Paper")
    } else {
        return console.log("It's a tie!")
    }

}
for (let i = 0; i < 5; i++) {
    playRound();
    
    if (i === 4 && humanScore > computerScore) {
        console.log("YAY, you beat the computer!")
    } else if (i === 4 && humanScore < computerScore) {
        console.log("LOOSER!")
    }else if (i === 4 && humanScore === computerScore)  {
        console.log("Nobody won. BORING!")
    } else {
        console.log()
    }

    
}
 
}
playGame()
