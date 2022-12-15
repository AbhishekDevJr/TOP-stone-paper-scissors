function handleClick(){
    alert("JS File is Working!");
}


//Function that returns random choice between stone paper scissors to be used as Computer Choice.
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(choices.length* Math.random());

    return choices[randomIndex];
}
const roundH1 = document.querySelector('.score-round-h1');
//Function that plays game for one round
function playRound (playerChoice, computerSelection){
    if(playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        //console.log("You lose! PAPER beats ROCK");
        //const roundH1 = document.QuerySelector('.score-round-h1');
        roundH1.textContent = 'You lose! PAPER beats ROCK';
        
        return "You lose! Paper beats Rock";
    }

    else if(playerChoice.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        
        //console.log("You win! ROCK beats SCISSORS");
        roundH1.textContent = 'You win! ROCK beats SCISSORS';
        return "You win! Rock beats Scissors";
    }

    else if(playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        //console.log("You win! PAPER beats ROCK");
        roundH1.textContent = 'You win! PAPER beats ROCK';
        return "You win! Paper beats Rock";
    }

    else if(playerChoice.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        //console.log("You lose! SCISSORS beats PAPER");
        roundH1.textContent = 'You lose! SCISSORS beats PAPER';
        return "You lose! Scissors beats Paper";
    }

    else if(playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        //console.log("You lose! ROCK beats SCISSORS");
        roundH1.textContent = 'You lose! ROCK beats SCISSORS';
        return "You lose! Rock beats Scissors";
    }

    else if(playerChoice.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        //console.log("You win! SCISSORS beats PAPER");
        roundH1.textContent = 'You win! SCISSORS beats PAPER';
        return "You win! Scissors beats Paper";
    }

    else {
        
        roundH1.textContent = "It's a Draw!";
        return "It's a Draw!"
    }
}

//Event Listerner for Reload Button
const reloadButton = document.querySelector('.refresh-button');
reloadButton.addEventListener('click', () => {
    window.location.reload();
    return;
});

//Event Listener for Rock
const rockButton = document.querySelector('.rock');
console.log(rockButton.textContent);
rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    //let userChoice = rockButton.textContent;
    
    game(rockButton.textContent);
    
    return;
});

//Event Listener for Paper
const paperButton = document.querySelector('.paper');
console.log(paperButton.textContent);
paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    game(paperButton.textContent);
    return;
});

//Event Listener for Scissors
const scissorsButton = document.querySelector('.scissors');
console.log(scissorsButton.textContent);
scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    game(scissorsButton.textContent);
    return;
});





//The Function thats resonsible for the Actual Game of 5 rounds of Rock-Paper-Scissors

const userScoreH1 = document.querySelector('.user-score');
const comScoreH1 = document.querySelector('.com-score');
let userScore = 0;
let comScore = 0;
userScoreH1.textContent = 'Your Score :- ' + userScore;
comScoreH1.textContent = "Computer's Score :- " + comScore;
let counterVar = 0;

function game(userChoiceVar){
    //let userScore;
    //let comScore;
    // let userChoice = '';
    counterVar++;
    


    

   
        
        //let userChoice = prompt("Enter your choice.");
        //console.log("Your choice--> " + userChoiceVar.toUpperCase());
        let computerChoice = getComputerChoice();
        //console.log("Computer's Choice--> " + computerChoice.toUpperCase());
        let winnerVar = playRound(userChoiceVar, computerChoice);
        if(winnerVar === "You win! Paper beats Rock" || winnerVar === "You win! Rock beats Scissors" || winnerVar === "You win! Scissors beats Paper" ){
            //console.log("Congrats you Win the round");
            userScore++;
            userScoreH1.textContent = 'Your Score :- ' + userScore;
        }
        else if(winnerVar === "It's a Draw!"){
            //console.log("It's a Draw!");
        }
        else {
            //console.log("Sorry you Lose the round");
            comScore++;
            comScoreH1.textContent = "Computer's Score :- " + comScore;
        }
        //console.log("x---------------------------------------x---------------------------------------------------x")
    
        console.log(counterVar);


        if(counterVar > 4){
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;

            if(userScore > comScore){
                const finalScoreH1 = document.querySelector('.final-score-dec');
                finalScoreH1.textContent = "You :- " + userScore + " Computer :- " + comScore;
                const finalWinnerH1 = document.querySelector('.final-winner-dec');
                finalWinnerH1.textContent = "Congratulations You are the Winner!";

                const restartMessage = document.querySelector('.restart-message-div');
                restartMessage.textContent = 'Please hit "Restart Game" to play again';

            }
            else if(userScore == comScore){
                const finalScoreH1 = document.querySelector('.final-score-dec');
                finalScoreH1.textContent = "You :- " + userScore + " Computer :- " + comScore;
                const finalWinnerH1 = document.querySelector('.final-winner-dec');
                finalWinnerH1.textContent = "The Game ends in a Draw.";
                const restartMessage = document.querySelector('.restart-message-div');
                restartMessage.textContent = 'Please hit "Restart Game" to play again';
            }
            else{
                const finalScoreH1 = document.querySelector('.final-score-dec');
                finalScoreH1.textContent = "You :- " + userScore + " Computer :- " + comScore;
                const finalWinnerH1 = document.querySelector('.final-winner-dec');
                finalWinnerH1.textContent = "Sorry! You lose, better luck next time!";
                const restartMessage = document.querySelector('.restart-message-div');
                restartMessage.textContent = 'Please hit "Restart Game" to play again';
            }
        }
    /*if(userScore > comScore){
        console.log("Congrats you Win the Game! Your score = " + userScore + " Computer's score = " + comScore);
    }
    else if(userScore < comScore){
        console.log("Sorry you Lose the Game! Your score = " + userScore + " Computer's score = " + comScore);
    }

    else{
        console.log("The game ends in a Draw! Your score = " + userScore + " Computer's score = " + comScore);
    }*/
}

console.log(counterVar);

//game();