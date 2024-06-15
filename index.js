//Código do Usuário

function  getHumanChoice(UserAnswer){ 

    UserAnswer = window.prompt("What you choose?")
    return UserAnswer

}

//Código do computador
function getComputerChoice(ComputerAnswer) {
    
    ComputerAnswer = Math.floor(Math.random() * 3) + 1;

    if (ComputerAnswer === 1){
    ComputerAnswer = "Rock"
} else if (ComputerAnswer === 2){
    ComputerAnswer = "Paper"
} else if (ComputerAnswer === 3){
     ComputerAnswer = "Scissor"
}

    return ComputerAnswer
}


//Pontuação
    let HumanScore = 0
    let ComputerScore = 0
    

    function playRound(humanChoice, computerChoice) { 

        

        switch(humanChoice){
            case "ROCK":
                    if (computerChoice === "Paper"){
                        result = "You lose! Paper beats Rock"
                        return result
                    } else if (computerChoice === "Scissor"){
                        result = "You win! Rock beats Scissor"
                        return result
                    } else (computerChoice === "Rock");{
                        result = "It's a tie"
                        return result
                    }
            break;
            case "SCISSOR":
                    if (computerChoice === "Rock"){
                               result = "You lose! Rock beats Scissor"
                        return result
                    } else if (computerChoice === "Paper"){
                               result = "You win! Scissor beats Paper"
                        return result
                    } else (computerChoice === "Scissor");{
                               result = "it's a tie"
                        return result
                    }
            break;
            case "PAPER":
                    if (computerChoice === "Rock"){
                        result = "You win! Paper beats Rock"
                        return result
                      }else if (computerChoice === "Paper"){
                        result = "It's a tie"
                        return result
                      }else (computerChoice === "Scissor");{
                        result = "You lose! Scissor beats Paper"
                        return result
                    }
            break;        
            } 
      }
      
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();

      console.log(humanSelection)
      console.log(computerSelection)
      
      console.log(playRound(humanSelection, computerSelection));
     