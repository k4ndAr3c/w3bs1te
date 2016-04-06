function shifumi(){
	var userChoice = prompt("Do you choose rock, paper or scissors?");
	var computerChoice = Math.random();
	
	if (computerChoice < 0.34) {
	    computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
	} else {
	    computerChoice = "scissors";
	}
	document.getElementById("choice").innerHTML = "<div align=middle>Computer: <b id=cchoice>" + computerChoice + "</b></div><br />";
	
	function compare(choice1, choice2){
	    if (choice1 == choice2){
	        return(">The result is a tie!");
	    }else if (choice1 == "rock"){
	        if (choice2 == "scissors"){
	            return("id=win>YOU win");}
	        else {
	            return("id=loose>HE wins");}
	    }else if (choice1 == "paper"){
	        if (choice2 == "rock"){
	            return("id=win>YOU win");}
	        else {
	            return("id=loose>HE wins");}
	    }else if (choice1 == "scissors"){
	        if (choice2 == "paper"){
	            return("id=win>YOU win");}
	        else {
	            return("id=loose>HE wins");}
	    }else if (choice1 == "Love"){
		artii("Love");
	    }else if (choice1 == "Evil"){
		artii("Evil");
	    }else if (choice1 == "Strange"){
		strange();
	    }else if (choice1 == "Claire"){
		clairemaindor();
	    }


	}
	document.getElementById("results").innerHTML = "<p align=center "+compare(userChoice, computerChoice)+"</p>" ;
	return;
}

function artii(w){
	var a = document.createElement('div');
	var http = new XMLHttpRequest();
	http.open("GET", w+".artii", true);
	http.setRequestHeader('Content-type', 'text/plain');
	http.send();
	a.align = "right";
	a.id = "artii";
	document.body.appendChild(a);
	alert('Be curious .!.');
	document.getElementById("artii").innerHTML = "<pre>"+http.responseText+"</pre>";
	return;
}
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}
function strange(){
	
}
function clairemaindor(){
	document.location = "http://www.clairemaindor.fr/";
}

