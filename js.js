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
	cleandiv('cons');
	var userChoice = prompt("Do you choose rock, paper or scissors ?");
	var computerChoice = Math.random();
	
	if (computerChoice < 0.34) {
	    computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
	} else {
	    computerChoice = "scissors";
	}
	document.getElementById("choice").innerHTML = "<div align=middle><font color=green><i>("+userChoice+") </i></font><img alt='Try Again .!.' id='imgRes' src="+userChoice+".png /><font size=6px><b> VS </b></font>computer: <img id='imgRes' src="+computerChoice+".png /><i id=cchoice>("+computerChoice+")</i></div><br />";
	
	function compare(choice1, choice2){
	    if (choice1 == choice2){
		deshuf();
	        return(">The result is a tie");
	    }else if (choice1 == "rock"){
		deshuf();
	        if (choice2 == "scissors"){
		    scoreh += 1;
	            return("id=win>[+] YOU win");}
	        else {
		    scorec += 1;
	            return("id=loose>[-] HE wins");}
	    }else if (choice1 == "paper"){
		deshuf();
	        if (choice2 == "rock"){
		    scoreh += 1;
	            return("id=win>[+] YOU win");}
	        else {
		    scorec += 1;
	            return("id=loose>[-] HE wins");}
	    }else if (choice1 == "scissors"){
		deshuf();
	        if (choice2 == "paper"){
		    scoreh += 1;
	            return("id=win>[+] YOU win");}
	        else {
		    scorec += 1;
	            return("id=loose>[-] HE wins");}

//#########################################################################
//#   Ci-dessous: les différents mots-clef;                               #
//#		Just below: different keywords;                           #
//#########################################################################

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
		vidz(0);
		scoreh += 1;
	    }else if (choice1 == "fun"){
		vidz(2);
		scoreh += 1;
	    }else if (choice1 == ""){
	    	vide();
	    }else if (choice1 == "null"){
		scoreh += 1;
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
	    }else if (choice1 == "14"){
	    	writeResult("7 + 7 = ?");
		scoreh += 1;
	    }else if (choice1 == "ping"){
		vidz(1);
		scoreh += 1;
	    }else if (choice1 == "pong"){
	    	vidz(1);
		scoreh += 1;
	    }else if (choice1 == "musique"){
	    	music();
		scoreh += 1;
	    }else if (choice1 == 0){
	    	radio("0");
		writeResult("radio St-Aff");
		scoreh += 1;
	    }else if (choice1 == 1){
	    	radio("1");
		writeResult("radio Larzac");
		scoreh += 1;
	    }else if (choice1 == "radio"){
	    	radio(prompt("st-aff=0, larzac=1, ledjam=2, choose a radio."));
		scoreh += 1;
	    }else if (choice1 == 2){
	    	radio("2");
		writeResult("radio LeDjam");
		scoreh += 1;
	    }else if (choice1 == "combo"){
	    	combo(0);
		scoreh += 1;
	    }



	}
	document.getElementById("results").innerHTML = "<p align=center "+compare(userChoice, computerChoice)+" |:.</p>" ;
	$("score").innerHTML = "<font color=green>V= "+scoreh+"</font> / <font color=red>D= "+scorec+" </font>";
	indice();
	return;
};
function vide(){$("phrase").innerHTML = "<p align='center' style='font-family:Courier; color:#1589FF'><b>-- Allez ,.. test something !:. --</b></p>";};
function artii(w){
	cleandiv("scode");
	cleandiv("combo");
	cleandiv("vidz");
	cleandiv("heart");
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
//    cleandiv("scode");
//    cleandiv("artii");
//    cleandiv("heart");
//    cleandiv("vidz");                                                                                                      
//    var a = document.createElement('iframe');
//    a.id="claire";
    document.location="http://www.clairemaindor.fr";
//    a.frameborder="0";
//    document.body.appendChild(a);
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
	cleandiv("artii");
	cleandiv("combo");
	cleandiv("scode");
        cleandiv("vidz");
	var h = document.createElement('img');
	h.src="Heart_Beating.gif";
	h.id = "heart";
	h.setAttribute("data-animation",  "coeur");
	h.setAttribute("align", "right");
	document.body.appendChild(h);
	$("heart").className= "rotateImg";
	$("heart").style.webkitAnimationPlayState = "running";
        s = document.createElement("audio");
        s.id="madplayer";
        s.type="audio/mp3";
        s.src = "no.no.no.mp3";
        document.body.appendChild(s);
	document.getElementById('madplayer').play();
};
function writeResult(res){
	$("phrase").innerHTML = "<p align='center' style='font-family:Courier; color:#1589FF'><b>"+res+"</b></p>";
};
function indice(){
	if (scoreh == 3){writeResult("Clue/indice : some functions can be trigger by keywords / certaines fonctions se déclenchent par mots-clés")};
	if (scoreh == 6){writeResult("Try : love      .or.      music")};
	if (scoreh == 14){quatorze()};
};
window.onload = function(){
//	var phpLogs = "http://www.clairemaindor.fr/rien.php";
//	req.open("GET", phpLogs);
//	req.send();
	date();
	cons();
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
	DinaHeure = heure0 + heure + "h" + min0 + min  + "m"+sec0 + sec + "s - " + jour + "/" + mois + "/" + annee;
	which = DinaHeure
	if (document.getElementById){
		document.getElementById("date").innerHTML=which;
	}
	setTimeout("date()", 1000)
};
//function displayList(id){
//	var listValue = $(id).value;
//	$(listValue).style.visibility = "visible";
//}
function music(){
	cleandiv("combo");
        cleandiv("artii");
        cleandiv("scode");
        cleandiv("heart");
	cleandiv("radio");
        var a = document.createElement('div');
        a.id="music";
	a.setAttribute("align", "center");
        document.body.appendChild(a);
	sleep("200");
	$("music").innerHTML = "<select name='musique' id='musique' class='shifumiBou' size='1'><option value='-'>-</option><option value='metal'>MeTaL</option><option value='rap'>RaP</option><option value='dub'>DuB</option><option value='jazz'>JaZz</option><option value='elec'>ElEcTrO</option><option value='radios'>RaDiOs</option></select>"
        var r = document.createElement('div');
        r.id="musicc";
	r.setAttribute("align", "center");
        document.body.appendChild(r);
	$("musicc").innerHTML = "<select class='shifumiBou' name='metal' id='metal' size='1'><option value='-'>-</option><option value='dimmu'>Dimmu Borgir</option><option value='finntroll'>FinnTroll</option><option value='horna'>Horna</option><option value='kronos'>Kronos</option><option value='gronibard'>Gronibard</option></select><select class='shifumiBou' name='rap' id='rap' size='1'><option value='-'>-</option><option value='hugo'>Hugo</option><option value='iam'>I Am</option><option value='assassin'>Assassin</option><option value='ntm'>NTM</option><option value='mcsolaar'>Solaar</option></select><select class='shifumiBou' name='dub' id='dub' size='1'><option value='-'>-</option><option value='panda'>Panda Dub</option><option value='kanka'>Kanka</option><option value='dubalyzer'>Dubalyzer</option><option value='perry'>Lee Perry</option><option value='kali'>Kali Live Dub</option></select><select class='shifumiBou' name='jazz' id='jazz' size='1'><option value='-'>-</option><option value='martino'>Pat Martino</option><option value='django'>Django Reinhardt</option><option value='joepass'>Joe Pass</option><option value='wes'>Wes Montgomery</option><option value='louis'>Louis Armstrong</option></select><select class='shifumiBou' name='elec' id='elec' size='1'><option value='-'>-</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select><select class='shifumiBou' name='radios' id='radios' size='1'><option value='-'>-</option><option value='0'>St-Affrique</option><option value='1'>Larzac</option><option value='2'>LeDjam</option></select>"
	sleep("200");
	$("musique").onchange = function(){
        	var listValue = $("musique").value;
		$("metal").style.visibility = "hidden";
		$("rap").style.visibility = "hidden";
		$("dub").style.visibility = "hidden";
		$("jazz").style.visibility = "hidden";
		$("elec").style.visibility = "hidden";
		$("radios").style.visibility = "hidden";
        	$(listValue).style.visibility = "visible";
		songs();
		};
};
function showSongs(grou){
	$("music2").innerHTML = ""	
	if (grou == "dimmu"){g = ["fIRST", "sEC", "tROIs"];}
	else if (grou == "finntroll"){g = ["Blodsvept", "Two", "3", "4"];}
	else if (grou == "horna"){g = ["Prems", "Deux"];}
	for (i=0; i<g.length; i++){
		$("music2").innerHTML += "<input type ='radio' name='artist' value='"+i+"'>"+g[i]+"<br>"
		};
	$("music2").innerHTML += "<input type='button' name='playButton' value='°:. Play .:°' onclick=start('"+grou+"'); class='shifumiBou' id='playbut'>"
};
function songs(){
	cleandiv("music2");
	var b = document.createElement('form');
	b.id="music2";
	b.name="artiste";
	b.setAttribute("align", "center");
	document.body.appendChild(b);
	sleep("200");
	var style = $("musique").value;
	document.getElementById(style).onchange = function(){
		var art = document.getElementById(style).value;
		if (art == "0"){radio(art);}
                else if (art == "1"){radio(art);}
                else if (art == "2"){radio(art);}
		else {showSongs(art);}
		};
};
function start(aut){
	cleandiv("player");
	cleandiv("cplayer");
	s = document.createElement("audio");
	songval = document.forms.artiste.artist.value;
	//document.forms.artiste.check.checked = false;
	s.id="player";
	s.type="audio/mp3";
	s.src = "http://www.clairemaindor.fr/z1c/"+aut+songval+".mp3";
	document.body.appendChild(s);
	cplayer = document.createElement("div");
        cplayer.id="cplayer";
	document.body.appendChild(cplayer);
	sleep(200);
	document.getElementById('player').play();
	$("cplayer").innerHTML = "<button class='shifumiBou' onclick=document.getElementById('player').play()>PlAy</button><button class='shifumiBou' onclick=document.getElementById('player').pause()>PaUsE</button><button class='shifumiBou' onclick=document.getElementById('player').volume+=0.1>Vol Up</button><button class='shifumiBou' onclick=document.getElementById('player').volume-=0.1>Vol Down</button><p> Playing : "+aut;
};
function quatorze(){
	cleandiv("combo");
	cleandiv("artii");
	cleandiv("heart");
	cleandiv("vidz");
        var a = document.createElement('div');
        req.open("GET", "js.js", true);
        req.setRequestHeader('Content-type', 'text/plain');
        req.onreadystatechange = function() {
                if(req.readyState == 4 && req.status == 200) {
                        a.align = "center";
                        a.id = "scode";
                        document.body.appendChild(a);
			writeResult("[+] WiNNeR !");
                        document.getElementById("scode").innerHTML = "<pre><code>"+req.responseText+"</code></pre>";
                };
        };
        req.send();
};
function cleandiv(id){
	if (olddiv = document.getElementById(id)){
	document.body.removeChild(olddiv);
}};
function cons(){
	var a = document.createElement('iframe');
	a.align = "left";
	a.width="0"; 
	a.height="0";
	a.id="cons";
	a.src="http://www.clairemaindor.fr/rien.php";
	a.frameborder="0";
	document.body.appendChild(a);
	//sleep(13500);
	//cleandiv('cons');
};
function radio(r){
    cleandiv("radio");
    cleandiv("artii");
    cleandiv("scode");
    cleandiv("combo");
    cleandiv("vidz");
    cleandiv("heart");
    var rads = ["http://www.radiosaintaffrique.com/en-direct", "http://www.radiolarzac.org:8000/radiolarzac.m3u", "http://www.ledjamradio.com"];
    var a = document.createElement('iframe');
    a.setAttribute("align", "middle");
    a.width="640";
    a.height="360";
    a.id="radio";
    a.src=rads[r];
    a.frameborder="0";
    document.body.appendChild(a);
};
function combo(i){
	cleandiv("artii");
	cleandiv("combo")
	cleandiv("scode");
        cleandiv("vidz");
	cleandiv("heart");
	imgs = ["combo.jpg"]
	var h = document.createElement('img');
	h.src = imgs[i];
	h.id = "combo";
	h.setAttribute("data-animation",  "combo");
	h.setAttribute("align", "right");
	document.body.appendChild(h);
	$("combo").className= "loupe";
	$("combo").style.webkitAnimationPlayState = "running";
};
function vidz(v){
	cleandiv("scode");
	cleandiv("vidz");
	cleandiv("combo");
        cleandiv("artii");
        cleandiv("heart");
	urls = ["https://www.youtube.com/embed/JjaUltnVmWg", "https://www.youtube.com/embed/SncapPrTusA", "http://www.randomfunfacts.com"]
//0=SanKyo,1=BrucePong,
	var a = document.createElement('iframe');
	a.align = "middle";
	a.width="640";
	a.height="360";
	a.id="vidz";
	a.src=urls[v];
	a.frameborder="0";
	document.body.appendChild(a)[0];
};
