function getComputerChoice(){
    let number = Math.floor((Math.random()* 1000000) +1 )
    let r = "ROCK"
    let p = "PAPER"
    let s = "SCISSORS"
    if (number >= 10000){
        return r


    }else if (number <= 10){
        return p
    }else{
        return s
    }
    
}



function getHumanChoice(){
    let uChoice = prompt("1. ROCK, 2. PAPER, 3. SCISSORS ?")

    return uChoice
}


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice ){
    if (humanChoice.toLowerCase() == computerChoice.toLowerCase()){
        alert("its a tie")
    }else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper" ){
        alert("u won")

    }else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors" ){
        alert("u won")

    }else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors" ){
        alert("u lose")
    }else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper" ){
        alert("u won")
    }else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock" ){
        alert("u lose")
    }else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock" ){
        alert("u lose")
    }


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

