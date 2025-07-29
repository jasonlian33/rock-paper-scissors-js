console.log("hello!")

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3); // randomly chooses a number 0,1,2

    if (randomNum === 0){
        return "Rock";
    } else if (randomNum === 1){
        return "Paper";
    } else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("What do you choose?");

    if (choice.toLowerCase() === "rock"){
        return "Rock";
    } else if (choice.toLowerCase() === "paper"){
        return "Paper";
    } else if (choice.toLowerCase() === "scissors"){
        return "Scissors";
    } else{
        return "Invalid Choice"
    }
}


var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){
    console.log(humanChoice, computerChoice);
    if (humanChoice === "Rock" && computerChoice === "Scissors"){
        humanScore ++; 
        return "You Win! Rock beats Scissors";
    } else if (humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore ++; 
        return "You Win! Paper beats Rock";
    } else if (humanChoice === "Scisssors" && computerChoice === "Paper"){
        humanScore ++; 
        return "You Win! Scissors beats Paper";
    } else if (humanChoice === computerChoice){
        return "It's a tie";
    } else{ 
        computerScore ++; 
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

const selection = document.querySelectorAll(".button");

selection.forEach(button => {
    button.addEventListener('click', function(event){
        const playerChoice = event.target.textContent;  
        const computerChoice = getComputerChoice();
        //console.log(event.target.textContent);
        
        const container = document.querySelector("#container");

        const div = document.createElement("div");
        const result = playRound(playerChoice, computerChoice);
        div.textContent = `${result}`;

        const score = document.createElement("div");
        score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

        
        container.append(div);
        container.append(score);
    });
});





/*
function playGame(){
    let rounds = 0;

    while (rounds < 5){
        var newHumanChoice = getHumanChoice();
        var newComputerChoice = getComputerChoice();
        playRound(newHumanChoice, newComputerChoice);
        rounds ++;
    }

    if (humanScore > computerScore){
        return "You Win!"
    } else if (humanScore < computerScore){
        return "You Lose!"
    } else{
        return "You Draw!"
    }
}
*/

//console.log(playGame());