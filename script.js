function handleClick(){
    alert("JS File is Working!");
}


//Function that returns random choice between stone paper scissors to be used as Computer Choice.
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(choices.length* Math.random());

    return choices[randomIndex];
}

//Function that plays game for one round
function playRound (playerChoice, computerSelection){
    if(playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        console.log("You lose! PAPER beats ROCK");
        
        return "You lose! Paper beats Rock";
    }

    else if(playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        
        console.log("You win! ROCK beats SCISSORS");
        return "You win! Rock beats Scissors";
    }

    else if(playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        console.log("You win! PAPER beats ROCK");
        return "You win! Paper beats Rock";
    }

    else if(playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        console.log("You lose! SCISSORS beats PAPER");
        
        return "You lose! Scissors beats Paper";
    }

    else if(playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        console.log("You lose! ROCK beats SCISSORS");
        
        return "You lose! Rock beats Scissors";
    }

    else if(playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        console.log("You win! SCISSORS beats PAPER");
        return "You win! Scissors beats Paper";
    }

    else {
        
        
        return "It's a Draw!"
    }
}

// Event Listener for Rock
const rockButton = document.querySelector('.rock');
console.log(rockButton);
rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    return;
});

//Event Listener for Paper
const paperButton = document.querySelector('.paper');
console.log(paperButton);
paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    return;
});

//Event Listener for Scissors
const scissorsButton = document.querySelector('.scissors');
console.log(scissorsButton);
scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    return;
});



//The Function thats resonsible for the Actual Game of 5 rounds of Rock-Paper-Scissors

/*function game(){
    let userScore = 0;
    let comScore = 0;
    for(let i = 0; i < 5; i++){
        
        let userChoice = prompt("Enter your choice.");
        console.log("Your choice--> " + userChoice.toUpperCase());
        let computerChoice = getComputerChoice();
        console.log("Computer's Choice--> " + computerChoice.toUpperCase());
        let winnerVar = playRound(userChoice, computerChoice);
        if(winnerVar === "You win! Paper beats Rock" || winnerVar === "You win! Rock beats Scissors" || winnerVar === "You win! Scissors beats Paper" ){
            console.log("Congrats you Win the round");
            userScore++;
        }
        else if(winnerVar === "It's a Draw!"){
            console.log("It's a Draw!");
        }
        else {
            console.log("Sorry you Lose the round");
            comScore++;
        }
        console.log("x---------------------------------------x---------------------------------------------------x")
    }

    if(userScore > comScore){
        console.log("Congrats you Win the Game! Your score = " + userScore + " Computer's score = " + comScore);
    }
    else if(userScore < comScore){
        console.log("Sorry you Lose the Game! Your score = " + userScore + " Computer's score = " + comScore);
    }

    else{
        console.log("The game ends in a Draw! Your score = " + userScore + " Computer's score = " + comScore);
    }
}*/

//game();