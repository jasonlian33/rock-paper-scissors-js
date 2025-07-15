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

