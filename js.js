var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
document.write("<div align=middle>Computer: <b id=cchoice>" + computerChoice + "</b></div><br />");

function compare(choice1, choice2){
    if (choice1 == choice2){
        return(">The result is a tie!");
    }else if (choice1 == "rock"){
        if (choice2 == "scissors"){
            return("id=win>YOU win");}
        else {
            return("id=loose>HE win");}
    }else if (choice1 == "paper"){
        if (choice2 == "rock"){
            return("id=win>YOU win");}
        else {
            return("id=loose>HE win");}
    }else if (choice1 == "scissors"){
        if (choice2 == "paper"){
            return("id=win>YOU win");}
        else {
            return("id=loose>HE win");}
    }
}
document.write("<p align=center "+compare(userChoice, computerChoice)+"</p>");

