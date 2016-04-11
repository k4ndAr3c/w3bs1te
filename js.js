var req = false;
if (window.XMLHttpRequest){
	req = new XMLHttpRequest();
}else if (window.ActiveXtargetElementect){
	req = new ActiveXtargetElementect("Microsoft.XMLHTTP");
};
var scorec = 0
var scoreh = 0
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
		deshuf();
	        return(">The result is a tie!");
	    }else if (choice1 == "rock"){
		deshuf();
	        if (choice2 == "scissors"){
		    scoreh += 1;
	            return("id=win>YOU win");}
	        else {
		    scorec += 1;
	            return("id=loose>HE wins");}
	    }else if (choice1 == "paper"){
		deshuf();
	        if (choice2 == "rock"){
		    scoreh += 1;
	            return("id=win>YOU win");}
	        else {
		    scorec += 1;
	            return("id=loose>HE wins");}
	    }else if (choice1 == "scissors"){
		deshuf();
	        if (choice2 == "paper"){
		    scoreh += 1;
	            return("id=win>YOU win");}
	        else {
		    scorec += 1;
	            return("id=loose>HE wins");}
	    }else if (choice1 == "love"){
		artii("Evil");
		scoreh += 1;
	    }else if (choice1 == "evil"){
		artii("Love");
		scoreh += 1;
	    }else if (choice1 == "strange"){
		strange();
		scoreh += 1;
	    }else if (choice1 == "maman"){
		clairemaindor();
		scoreh += 1;
	    }else if (choice1 == "hack"){
		writeResult(".:|  Find a piXel  |:.");
		scoreh += 1;
	    }else if (choice1 == "bozendo"){
		bozendo();
		scoreh += 1;
	    }else if (choice1 == "fun"){
		fun();
		scoreh += 1;
	    }else if (choice1 == ""){
	    	vide();
	    }else if (choice1 == "madnana"){
	    	madnana();
		scoreh += 1;
	    }else if (choice1 == "nayyma"){
	    	writeResult("madnana");
		scoreh += 1;
	    }else if (choice1 == "music"){
	    	music();
		scoreh += 1;
	    }






	}
	document.getElementById("results").innerHTML = "<p align=center "+compare(userChoice, computerChoice)+"</p>" ;
	$("score").innerHTML = "<font color=green>V="+scoreh+"</font> / <font color=red>D= "+scorec+" </font>";
	indice();
	return;
};
function vide(){$("phrase").innerHTML = "<p align='center' style='font-family:Courier; color:#1589FF'><b>-- Allez !:. --</b></p>";};
function artii(w){
	var a = document.createElement('div');
	req.open("GET", w+".artii", true);
	req.setRequestHeader('Content-type', 'text/plain');
	req.onreadystatechange = function() {
		if(req.readyState == 4 && req.status == 200) {
			a.align = "right";
		        a.id = "artii";
        		document.body.appendChild(a);
        		writeResult('Be curious .!.');
        		document.getElementById("artii").innerHTML = "<pre><code>"+req.responseText+"</code></pre>";
		};
	};
	req.send();
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
	$("date").setAttribute("align", "left");
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
	//req.withCredentials = true;
	//req.setRequestHeader('Content-type', 'text/html');
	req.overrideMimeType("text/xml");
	req.onreadystatechange = function(){
		if (req.readyState == 4 && req.status == 200){
			var htmlPage = req.responseXML;
			//alert(htmlPage);
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
function writeResult(res){
	$("phrase").innerHTML = "<p align='center' style='font-family:Courier; color:#1589FF'><b>"+res+"</b></p>";
};
function indice(){
	if (scoreh == 3){writeResult("Clue/indice : some functions can be trigger by keywords / certaines fonctions se déclenchent par mots-clés")};
	if (scoreh == 6){writeResult("Try : love")};
};
window.onload = function(){
	//var phpLogs = "http://www.clairemaindor.fr/rien.php";
	//req.open("GET", phpLogs);
	//req.send();
	date();
};
//function date(){
//	//req.overrideMimeType("text/xml");
//	req.open("GET", "http://www.clairemaindor.fr/date.php");
//	req.onreadystatechange = function() {
//		if(req.readyState == 4 && req.status == 200) {
//			var res = req.responseText;
//			$("date").innerHTML = res;
//		};
//	};
//	req.send();
//};
function date(){
	krucial = new Date;
	heure = krucial.getHours();
	min = krucial.getMinutes();
	sec = krucial.getSeconds();
	jour = krucial.getDate();
	mois = krucial.getMonth()+1;
	annee = krucial.getFullYear();
	if (sec < 10)
		sec0 = "0";
	else
		sec0 = "";
	if (min < 10)
		min0 = "0";
	else
		min0 = "";
	if (heure < 10)
		heure0 = "0";
	else
		heure0 = "";
	if (jour == 1)
		jour1 = "er";
	else
		jour1 = "";
	DinaHeure = heure0 + heure + "h" + min0 + min  + "m"+sec0 + sec + "s - " + jour + jour1 + "/" + mois + "/" + annee;
	which = DinaHeure
	if (document.getElementById){
		document.getElementById("date").innerHTML=which;
	}
	setTimeout("date()", 1000)
};
