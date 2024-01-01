'use strict'

// Global Variables
let playerScore=document.querySelector("#player-score");
let computerScore=document.querySelector("#computer-score");
let message=document.querySelector("#result");


// PLAY THE GAME AGAIN by Onclick on "Play again" button
const playAgain=()=>{
playerScore.innerHTML=0;
computerScore.innerHTML=0;
message.innerHTML="Choose your weapon!"
// console.log(message);
}

// Check if there is a winner and if the game is over ---> arrive from functions paper(), scissors(), rock()
const checkIfGameOver=()=>{
    if(playerScore.innerHTML==="10"||computerScore.innerHTML==="10")
    {
    // console.log("GAME OVER");
    message.innerHTML="Play again, to start a new game";
    return true 
    }
}

// COMPUTER RANDOM CHOISE ---> arrive from functions paper(), scissors(), rock()
const computerChoise=()=>{
const options=["paper","scissors","rock"];
const randomIndex=Math.trunc(Math.random()*options.length);
let randomCompChoise=options[randomIndex]; 
// console.log(randomCompChoise);
return randomCompChoise;

}




// check who wons/draw ---> arrive from functions paper(), scissors(), rock()
const winnerResult = (userChoise,compChoise)=>{
    // console.log(userChoise);
    // console.log(compChoise);
    if (userChoise===compChoise){
        message.innerHTML="It's a draw, please continue"
    }
    else if (
        (userChoise === "rock" && compChoise === "scissors") || 
        (userChoise === "paper" && compChoise === "rock") ||
        (userChoise === "scissors" && compChoise === "paper")
    ) {
        playerScore.innerHTML++;
        message.innerHTML="Win a point"
        if (playerScore.innerHTML==10){
            message.innerHTML="Congratulations !!! You won the game !"
        }
    } else {
        computerScore.innerHTML++;
        message.innerHTML="Loose a point"
        if (computerScore.innerHTML==10){
            message.innerHTML="You Lost the game :("
        }
    }
}

// Arrive by Onclick()
const paper=()=>{
    // First we Check if somebody already won the game
    if (checkIfGameOver()){return};
    const userChoise = "paper"
    let compChoise = computerChoise();
    winnerResult(userChoise,compChoise);
}

// Arrive by Onclick()
const scissors=()=>{
    // First we Check if somebody already won the game
    if (checkIfGameOver()){return};
    const userChoise = "scissors"
    let compChoise = computerChoise();
    winnerResult(userChoise,compChoise);
}

// Arrive by Onclick()
const rock=()=>{
    // First we Check if somebody already won the game
    if (checkIfGameOver()){return};
    const userChoise = "rock"
    let compChoise = computerChoise();
    winnerResult(userChoise,compChoise);
}
