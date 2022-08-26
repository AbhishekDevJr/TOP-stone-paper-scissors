function handleClick(){
    alert("JS File is Working!");
}

//console.log(Math.floor(2.7));
//Function that returns random choice between stone paper scissors to be used as Computer Choice.
function getComputerChoice(){
    let choices = ["stone", "paper", "scissors"];
    let randomIndex = Math.floor(choices.length* Math.random());
    //console.log(randomIndex);
    //console.log(choices.length);
    //console.log(choices[randomIndex]);
    return choices[randomIndex];
}

//Function that plays game for one round
function playRound (playerChoice, computerSelection){
    
}

getComputerChoice();