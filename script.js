let items = Array('rock', 'paper', 'scissors')


// Function for the computer to randomly pick a hand
function getComputerChoice(){
    return items[Math.floor(Math.random() * items.length)]
}

// Setting the initial scores for the player and computer
let playerScore = 0
let computerScore = 0


// Function to play a round of game

function playRound(playerSelection, computerSelection){

    if (computerSelection === 'rock' && playerSelection === 'scissors'){
        // "You lose! Rock beats Scissors!"
        return 'lost'
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        // "You win! Rock beats Scissors!"
        return   'win'
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock'){
        // "You lose! Paper beats Rock!"
    
        return  'lost'
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper'){
        // "You win! Paper beats Rock!"
        return  'win'
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        // "You lose! Scissors beats Paper!"
        return 'lost'

    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        // "You win! Scissors beats Paper!"
        return 'win'
    }
    else if (computerSelection ===  playerSelection){
        // "It's a draw"
        return "draw";
    }
    else{
        return "Invalid selection!"
    }
}
    

// looping through the round 5 times to play 5 rounds 
// and calculate the scores before declaring the winner 

function game(){
    for(i=0; i<5; i++) {
     const playerPick = prompt("Rock, Paper, or Scissors ?: ").toLowerCase();
     const computerPick =  getComputerChoice();
     let roundScore =  playRound(playerPick, computerPick)
     if (roundScore === "win"){
        playerScore++
         
     }
     else if (roundScore === "lost"){
          computerScore++
     }
     
    }

      console.log("Game Over")
    if (playerScore > computerScore){
    console.log('You win! Your Score: '+playerScore + ' Computer score: '+computerScore)
    }
    else if (playerScore < computerScore){
    console.log('You Lose! Your Score: '+playerScore + ' Computer score: '+computerScore)
     } 
   else {
  console.log('A draw! Your Score: '+playerScore + ' Computer score: '+computerScore)
    }
};


game();


