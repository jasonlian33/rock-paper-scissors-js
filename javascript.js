console.log("hello!")

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3); // randomly chooses a number 0,1,2
    console.log(randomNum);

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

console.log(getHumanChoice());