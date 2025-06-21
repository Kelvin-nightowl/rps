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




function playRound(humanChoice, computerChoice ){
    let hScore = 0
    let cScore = 0
    if (humanChoice.toLowerCase() == computerChoice.toLowerCase()){
        return hScore == 0 && cScore == 0
    }else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper" ){
        return hScore + 1

    }else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors" ){
        return hScore + 1

    }else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors" ){
        return cScore + 1
    }else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper" ){
        return cScore + 1
    }else if (humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock" ){
        return cScore +1 
    }else if (humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock" ){
        return cScore +1
    }


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame(){
    let humanScore = 0
    let computerScore = 0
    
    

}

