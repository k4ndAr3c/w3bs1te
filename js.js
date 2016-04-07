var $ = function(id){
	return document.getElementById(id);
};
function shifumi(){
	var userChoice = prompt("Do you choose rock, paper or scissors ?");
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
	    }else if (choice1 == "love"){
		artii("Love");
	    }else if (choice1 == "evil"){
		artii("Evil");
	    }else if (choice1 == "strange"){
		strange();
	    }else if (choice1 == "maman"){
		clairemaindor();
	    }else if (choice1 == "hack"){
		alert(".:|  Find a piXel  |:.");
	    }else if (choice1 == "bozendo"){
		bozendo();
	    }else if (choice1 == "fun"){
		fun();
	    }else if (choice1 == ""){
	    	vide();
	    }else if (choice1 == "madnana"){
	    	madnana();
	    }




	}
	document.getElementById("results").innerHTML = "<p align=center "+compare(userChoice, computerChoice)+"</p>" ;
	return;
};
function vide(){$("phrase").innerHTML = "<p align='center' style='font-family:Courier; color:#1589FF'><b>-- Allez !:. --</b></p>";};
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
};
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
};
function strange(){
	
};
function clairemaindor(){
	document.location = "http://www.clairemaindor.fr/";
};
function pixel(){
	$("pixel").onmouseover = bingo();
};
function bingo(){
	$("titre").style.color = "red";
	$("titre").setAttribute("align", "left");
	$("titre").innerHTML = " Goodbye World! ";
	document.body.style.backgroundImage = "url('blackBG3.jpg')";
};
function bozendo(){
	var a = document.createElement('iframe');
	a.align = "middle";
	a.width="640" 
	a.height="360"
	a.src="https://www.youtube.com/embed/JjaUltnVmWg"
	a.frameborder="0" 
	document.body.appendChild(a)[0];
};
function shuffle(v){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};
function shufPhrase(){
	var phr = ["V","o","i","c","i"," ","u","n"," ","p","e","t","i","t"," ","j","e","u",","," ","h","a","v","e"," ","f","u","n"," ",".","!","."];
	hpr = shuffle(phr);
	var strhpr = ""
	for (var i=0;i<phr.length;i++){
		strhpr = strhpr+hpr[i];
	}
	$("phrase").innerHTML = strhpr;
};
function fun(){
	var req = new XMLHttpRequest();
	req.withCredentials = true;
	//req.setRequestHeader('Content-type', 'text/html');
	req.onreadystatechange = function(){
		if (req.readyState == 4 && req.status == 200){
			var htmlPage = req.responseXML;
			alert(htmlPage);
			var funfact = htmlPage.getElementsByTagName("i")[0].innerHTML;
			$("results").innerHTML = "<p align='center' id='fun'>"+ funfact+"</p>";
		}
	}
	req.open("GET", "http://www.randomfunfacts.com", true);
	//req.responseType = "document";
	req.send();
	req.onerror = function(){$("results").innerHTML = "<p align='center' style='font-family:Courier; color:#990012'><b> [-] Err0r in G3T .. </b></p>";}
};
function deshuf(){
	$("phrase").innerHTML = "Voici un petit jeu, have fun .!.";
};
function madnana(){
	var h = document.createElement('img');
	h.src="Heart_Beating.gif";
	h.id = "heart";
	h.setAttribute("data-animation",  "coeur");
	h.setAttribute("align", "right");
	document.body.appendChild(h);
	$("heart").className= "rotateImg";
	$("heart").style.webkitAnimationPlayState = "running";
};
