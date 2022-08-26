function handleClick(){
    alert("JS File is Working!");
}

//console.log(Math.floor(2.7));
//Function that returns random choice between stone paper scissors to be used as Computer Choice.
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(choices.length* Math.random());
    //console.log(randomIndex);
    //console.log(choices.length);
    //console.log(choices[randomIndex]);
    return choices[randomIndex];
}

//Function that plays game for one round
function playRound (playerChoice, computerSelection){
    if(playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        console.log("You lose! Paper beats Rock");
        return "You lose! Paper beats Rock";
    }

    else if (playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        //alert("You Win!");
        console.log("You win! Rock beats Scissors");
        return "You win! Rock beats Scissors";
    }

    else if (playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        console.log("You win! Paper beats Rock");
        return "You win! Paper beats Rock";
    }

    else if (playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        console.log("You lose! Scissors beats Paper");
        return "You lose! Scissors beats Paper";
    }

    else if (playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        console.log("You lose! Rock beats Scissors");
        return "You lose! Rock beats Scissors";
    }

    else if (playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        console.log("You win! Scissors beats Paper");
        return "You win! Scissors beats Paper";
    }

    else {
        //alert("It's a Draw!");
        
        return "It's a Draw!"
    }
}

//getComputerChoice();

//playRound("rock", "rock");

function game(){
    let userScore = 0;
    let comScore = 0;
    for(let i = 0; i < 5; i++){
        let userChoice = prompt("Enter your choice.");
        console.log("Your choice--> " + userChoice);
        let computerChoice = getComputerChoice();
        console.log("Computer's Choice--> " + computerChoice);
        if(playRound(userChoice, computerChoice) === "You win! Paper beats Rock" || playRound(userChoice, computerChoice) === "You win! Rock beats Scissors" || playRound(userChoice, computerChoice) === "You win! Scissors beats Paper" ){
            console.log("Congrats you Win the round");
            userScore++;
        }

        else {
            console.log("Sorry you Lose the round");
            comScore++;
        }

    }

    if(userScore > comScore){
        console.log("Congrats you Win the Game! Your score = " + userScore);
    }
    else if(userScore < comScore){
        console.log("Sorry you Lose the Game! Your score = " + userScore);
    }

    else{
        console.log("It's a Draw! " + userScore);
    }
}

game();