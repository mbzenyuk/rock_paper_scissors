// ** Rock Paper Scissors ** 

//Computer randomly selects 'Rock', 'Paper, 'Scissors'



function computerPlay(){
    let computerArray = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = computerArray[Math.floor(Math.random()*computerArray.length)];
    return computerSelection;
}

let playerSelection = prompt('Choose Rock, Paper, Scissors')
console.log(computerPlay())
computerSelection = computerPlay()

//Play one round where the funciton takes the player's selection and the computer's selection and prints "You Lose! Paper beats Rock." Input is not case sensitive.




function playRound(playerSelection, computerSelection){
    if(playerSelection === 'rock' && computerSelection === 'Paper'){
        return `You lose! Paper beats Rock`

    } 
    
    if (playerSelection === 'paper' && computerSelection === 'Scissors'){
        return `You lose! Scissors beats Paper`

    } 
    
    if (playerSelection === 'scissors' && computerSelection === 'Rock'){
        return `You lose! Rock beats scisors`
    } 
    
    else {
        return `It's a tie! Play again!`
    }

};

console.log(playRound(playerSelection, computerSelection));