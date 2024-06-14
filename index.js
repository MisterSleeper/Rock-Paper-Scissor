//Código do Usuário

function  getHumanChoice(){ 

    UserAnswer = window.prompt("What you choose?")

    return UserAnswer

}

//Código do computador
function getComputerChoice() {
    
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
    

function Playround(HumanChoice, ComputerChoice){

    
    for (let ComputerScore = 0; ComputerChoice > HumanChoice; ComputerScore++){

        if ("Rock" < "Paper"){

    } else if ("Paper" < "Scissor"){

    } else ("Scissor" < "Rock");{

    }

    return "Computer Score: " + ComputerScore + " Human Score: " + HumanScore;
    
}

console.log(Playround(getHumanChoice(), getComputerChoice()))



//function Playround(HumanChoice, ComputerChoice) {
    
    //let HumanScore = 0
    //let ComputerScore = 0

    //if ("Rock" < "Paper"){
        //ComputerScore + 1
    //} else if ("Paper" < "Scissor"){
        //ComputerScore + 1
    //} else if ("Scissor" < "Rock"){
        //ComputerScore + 1
    //} else if ("Paper" === "Paper"){
        //ComputerScore + 1, HumanScore + 1
    //} else if ("Scissor" === "Scissor"){
        //ComputerScore + 1, HumanScore + 1
    //} else if ("Rock" === "Rock"){
        //ComputerScore + 1, HumanScore + 1
    //} else if ("Rock" > "Scissor"){
        //HumanScore + 1
    //} else if ("Paper" > "Rock"){
        //HumanScore + 1
    //} else if ("Scissor" > "Paper")
        //HumanScore + 1

    //return "Computer Score: " + ComputerScore + " Human Score: " + HumanScore
    
//:^}|}}}}}