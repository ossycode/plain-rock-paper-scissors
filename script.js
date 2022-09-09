const items = Array('rock', 'paper', 'scissors')


// Function for the computer to randomly pick a hand
function getComputerChoice(){
    return items[Math.floor(Math.random() * items.length)]
}


// Setting the initial scores for the player and computer
let pScore = 0
let compScore = 0

const buttons = document.querySelectorAll('.button');

function playerChoice(e){
    let playerpick = (e.target.innerText ).toLowerCase();
    let = computerpick =  getComputerChoice().toLowerCase();
    console.log("Player: " + playerpick)
    console.log("Computer: " + computerpick)
    playRound(playerpick, computerpick)
}

buttons.forEach(button => button.addEventListener('click', playerChoice));

// Checking if the game is over
function gameOver(){
    if (pScore === 5 || compScore === 5){
        
        if (pScore > compScore){

            results.textContent = '\n You won!';
            buttons.forEach(button => button.removeEventListener('click', playerChoice));
        }
        else{
            results.textContent = '\n You  Lost!';
            buttons.forEach(button => button.removeEventListener('click', playerChoice));
            return;
        }
        
    }
   
}


// Function to play a round of game
function playRound(playerSelection, computerSelection){

    if (computerSelection === 'rock' && playerSelection === 'scissors'){
        compScore++
        const ComputerScore = document.querySelector("#ComputerScore")
        ComputerScore.textContent = "Computer Score: " + compScore
        const notification = document.querySelector("#notification")
        notification.textContent  = "Oh no! Rock beats Scissors, try again!!"

        // console.log('lost') 
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        pScore++
        const playerScore = document.querySelector("#playerScore")
        playerScore.textContent = "Your Score: " + pScore
        const notification = document.querySelector("#notification")
        notification.textContent  = "You get this round! Rock beats Scissors!"
        // console.log('win')
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock'){
        // "You lose! Paper beats Rock!"
        compScore++
        const ComputerScore = document.querySelector("#ComputerScore")
        ComputerScore.textContent = "Computer Score: " + compScore
        const notification = document.querySelector("#notification")
        notification.textContent  = "Oh no! Paper beats Rock, try again!!"

        // console.log('lost')
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper'){
        // "You win! Paper beats Rock!"
        pScore++
        const playerScore = document.querySelector("#playerScore")
        playerScore.textContent = "Your Score: " + pScore
        const notification = document.querySelector("#notification")
        notification.textContent  = "You get this round! Paper beats Rock!"
        // console.log('win')
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        // "You lose! Scissors beats Paper!"
        compScore++
        const ComputerScore = document.querySelector("#ComputerScore")
        ComputerScore.textContent = "Computer Score: " + compScore
        const notification = document.querySelector("#notification")
        notification.textContent  = "Oh no! scissors beats paper, try again!!"
        // console.log('lost')

    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        // "You win! Scissors beats Paper!"
        pScore++
        const playerScore = document.querySelector("#playerScore")
        playerScore.textContent = "Your Score: " + pScore
        const notification = document.querySelector("#notification")
        notification.textContent  = "You get this round! Scissors beats Paper!"
        // console.log('win')
    }
    else if (computerSelection ===  playerSelection){
        // "It's a draw"
        const notification = document.querySelector("#notification")
        notification.textContent  = "Try again, this round is  a draw!"
        // console.log("draw")
    }
    else{
        const notification = document.querySelector("#notification")
        notification.textContent  = "Try again, this round is  a draw!"
        // console.log("Invalid selection!")
    }
    gameOver()
}
    





// looping through the round 5 times to play 5 rounds 
// and calculate the scores before declaring the winner 

// function game(){
//     for(i=0; i<5; i++) {
//      const playerPick = prompt("Rock, Paper, or Scissors ?: ").toLowerCase();
//      const computerPick =  getComputerChoice();
//      let roundScore =  playRound(playerPick, computerPick)
//      if (roundScore === "win"){
//         playerScore++
         
//      }
//      else if (roundScore === "lost"){
//           computerScore++
//      }
     
//     }

//       console.log("Game Over")
//     if (playerScore > computerScore){
//     console.log('You win! Your Score: '+playerScore + ' Computer score: '+computerScore)
//     }
//     else if (playerScore < computerScore){
//     console.log('You Lose! Your Score: '+playerScore + ' Computer score: '+computerScore)
//      } 
//    else {
//   console.log('A draw! Your Score: '+playerScore + ' Computer score: '+computerScore)
//     }
// };


// game();

// const playerPick = prompt("Rock, Paper, or Scissors ?: ").toLowerCase();
//  const computerPick =  getComputerChoice();

// playRound(playerPick, computerPick)
