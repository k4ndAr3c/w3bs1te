var req = false;
if (window.XMLHttpRequest){
	req = new XMLHttpRequest();
}else if (window.ActiveXtargetElementect){
	req = new ActiveXtargetElementect("Microsoft.XMLHTTP");
};
var $ = function(id){
	return document.getElementById(id);
};
var scoreh = 0;
var scorec = 0;
function shifumi(){
	cleandiv('cons');
	deshuf();
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
	        return(">The result is a tie");
	    }else if (choice1 == "rock"){
	        if (choice2 == "scissors"){
		    scoreh += 1;
	            return("id=win>[+] YOU win");}
	        else {
		    scorec += 1;
	            return("id=loose>[-] HE wins");}
	    }else if (choice1 == "paper"){
	        if (choice2 == "rock"){
		    scoreh += 1;
	            return("id=win>[+] YOU win");}
	        else {
		    scorec += 1;
	            return("id=loose>[-] HE wins");}
	    }else if (choice1 == "scissors"){
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
	    }else if (choice1 == "mimi"){
	    	combo(1);
		scoreh += 1;
	    }else if (choice1 == "mira"){
	    	combo(1);
		scoreh += 1;
	    }else if (choice1 == "mirabelle"){
	    	combo(1);
		scoreh += 1;
	    }else if (choice1 == "encode"){
	    	vidz(3);
		scoreh += 1;
	    }else if (choice1 == "encodeChar"){
	    	vidz(4);
		scoreh += 1;
	    }else if (choice1 == "samurai"){
	    	combo(2);
		scoreh += 1;
	    }else if (choice1 == "citation"){
	    	citation();
		scoreh += 1;
	    }else if (choice1 == "test"){
	    	fun();
		scoreh += 1;
	    }else if (choice1 == "loulou"){
	    	loulou();
		scoreh += 1;
	    }else if (choice1 == "dragon"){
		combo(3);
		scoreh += 1;
	    }


	}
	document.getElementById("results").innerHTML = "<p align=center "+compare(userChoice, computerChoice)+" |:.</p>" ;
	$("score").innerHTML = "<font color=green>V= "+scoreh+"</font> / <font color=red>D= "+scorec+" </font>";
	indice();
	scoreCook();
	return;
};
function vide(){$("phrase").innerHTML = "<p align='center' style='font-family:Courier; color:#1589FF'><b>-- Allez ,.. test something !:. --</b></p>";};
function artii(w){
	cleanAll();
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
	scoreh += 1
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
	cleanAll();
	var h = document.createElement('img');
	h.src="1M9/Heart_Beating.gif";
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
	$("sentence").innerHTML = "<p align='center' style='font-family:Courier; color:#1589FF'><b>"+res+"</b></p>";
};
function writeResult2(res){
	$("sentence").innerHTML += "<p align='center' style='font-family:Courier; color:#1589FF'><b>"+res+"</b></p>";
};
function indice(){
	if (scoreh == 3){writeResult2("Clue/indice : some functions can be trigger by keywords / certaines fonctions se déclenchent par mots-clés")};
	if (scoreh == 6){writeResult2("Try : love      .or.      music")};
	if (scoreh == 14){quatorze()};
};
window.onload = function(){
//	var phpLogs = "http://www.clairemaindor.fr/rien.php";
//	req.open("GET", phpLogs);
//	req.send();
	date();
	cons();
	getScore();
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
	krucial = new Date();
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
//function createList(d,s){
//	if (s == "metal"){g = ["DimmuBorgir", "Finntroll", "Horna", "Kronos", "Gronibard"];}
//	else if (s == "rap"){g = ["Hugo", "IAm", "NTM", "Solaar"];}
//	else if (s == "dub"){g = ["PandaDub", "Kanka", "LeePerry", "KaliLiveDub"];}
//	else if (s == "jazz"){g = ["PatMartino", "DjangoReinhardt", "JoePass", "WesMontgomery", "LouisArmstrong"];}
//	else if (s == "radios"){g = ["St-Affrique", "Larzac", "LeDjam"];}
//	$(d).innerHTML = "<select class='shifumiBou' name='"+s+"' id='"+s+"' size='1'><option value='-'>-</option>"
//	for (i=0; i<g.length; i++){
//		$(d).innerHTML += "<option value='"+g[i]+"'>"+g[i]+"</option"
//		};
//	$(d).innerHTML += "</select>"
//};
function music(){
	cleandiv('radio');
	cleanAll();
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
	$("musicc").innerHTML = "<select class='shifumiBou' name='metal' id='metal' size='1'><option value='-'>-</option><option value='dimmu'>Dimmu Borgir</option><option value='finntroll'>FinnTroll</option><option value='horna'>Horna</option><option value='kronos'>Kronos</option></select>                              <select class='shifumiBou' name='rap' id='rap' size='1'><option value='-'>-</option><option value='iam'>I Am</option><option value='assassin'>Assassin</option><option value='ntm'>NTM</option></select>                                     <select class='shifumiBou' name='dub' id='dub' size='1'><option value='-'>-</option><option value='panda'>Panda Dub</option><option value='kanka'>Kanka</option><option value='kaly'>Kaly Live Dub</option></select>                                                     <select class='shifumiBou' name='jazz' id='jazz' size='1'><option value='-'>-</option><option value='martino'>Pat Martino</option><option value='django'>Django Reinhardt</option></select>                                       <select class='shifumiBou' name='elec' id='elec' size='1'><option value='-'>-</option><option value='krush'>DJ Krush</option></select>                                        <select class='shifumiBou' name='radios' id='radios' size='1'><option value='-'>-</option><option value='0'>St-Affrique</option><option value='1'>Larzac</option><option value='2'>LeDjam</option></select>"
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
	if (grou == "dimmu"){g = ["Masses For The New Messiah", "Alt lys er svunnet hen"];}
	else if (grou == "finntroll"){g = ["Blodsvept"];}
	else if (grou == "horna"){g = ["Hornanvaki"];}
	else if (grou == "kanka"){g = ["Melomania"];}
	else if (grou == "kaly"){g = ["Jahsalfraid"];}
	else if (grou == "assassin"){g = ["L'Odysée Suit Son Cours"];}
	else if (grou == "panda"){g = ["Dub Music Is My Way Of Life"];}
        else if (grou == "kronos"){g = ["Supreme Nordik Reign"];}
        else if (grou == "ntm"){g = ["Ma Benz :)", "Laisse Pas Trainer Ton Fils"];}
        else if (grou == "django"){g = ["Daphné", "Nuages"];}
        else if (grou == "krush"){g = ["Toshinori Kondo-Sun is Shining", "Ko-Ku"];}
        else if (grou == "martino"){g = ["Do You Have A Name ?"];}
        else if (grou == "iam"){g = ["Demain c'est loin"];}
	for (i=0; i<g.length; i++){$("music2").innerHTML += "<input type ='radio' name='artist' value='"+i+"'>"+g[i]+"<br>"};
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
	s.src = "http://www.clairemaindor.fr/c1z/"+aut+songval+".mp3";
	document.body.appendChild(s);
	cplayer = document.createElement("div");
        cplayer.id="cplayer";
	document.body.appendChild(cplayer);
	sleep("200");
	document.getElementById('player').play();
	$("cplayer").innerHTML = "<button class='shifumiBou' onclick=document.getElementById('player').play()>PlAy</button><button class='shifumiBou' onclick=document.getElementById('player').pause()>PaUsE</button><button class='shifumiBou' onclick=document.getElementById('player').volume+=0.1>Vol Up</button><button class='shifumiBou' onclick=document.getElementById('player').volume-=0.1>Vol Down</button><p> Playing : "+aut;
};
function quatorze(){
	cleanAll();
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
    cleanAll();
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
	cleanAll();
	imgs = ["1M9/combo.jpg", "1M9/mimi.jpg", "1M9/samurai-small.jpg", "1M9/fire-dragon-wallpaper.png"];
	var h = document.createElement('img');
	h.src = imgs[i];
	h.id = "i"+i;
	h.setAttribute("data-animation",  "combo");
	h.setAttribute("align", "right");
	document.body.appendChild(h);
	$("i"+i).className= "loupe";
	$("i"+i).style.webkitAnimationPlayState = "running";
	$("i"+i).setAttribute("onclick", "replay()");
};
function replay(){
	$("phrase").innerHTML = "<p align='center' style='font-family:Courier; color:#1589FF'><b> .: °RePLaYinG° :. </b></p>";
	var img = document.getElementsByClassName("loupe");
	a = img[0].id;
	f = a[1];
	combo(f);
	//$(a).style.webkitAnimationPlayState = "paused";
	//$(a).style.webkitAnimationPlayState = "running";
	//var oimg = img[0];
	//var nimg = oimg.cloneNode(true);
	//oimg.parentNode.replaceChild(nimg, oimg);
};
function vidz(v){
	cleanAll();
	urls = ["https://www.youtube.com/embed/JjaUltnVmWg", "https://www.youtube.com/embed/SncapPrTusA", "http://www.randomfunfacts.com", "jsEncoder.html", "js_enc_dec.html"];
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
function citation(){
	cleanAll();
        var citS = ["'Les logiciels vendus par Microsoft sont pré-équipés de pare-feu, et sur les logiciels libres, il peut y avoir des pare-feu. Par exemple au ministère de la Culture nous avons Open-Office qui est un pare-feu.' ==> <font color=red><i>Christine Albanel</i></font>, ancienne ministre de la Culture sous Sarkozy, aujourd'hui membre du conseil d'administration d'<font color=orange>Orange</font>. ", "L'information n'est pas la connaissance. La connaissance n'est pas la sagesse. La sagesse n'est pas la vérité. La vérité n'est pas la beauté. La beauté n'est pas l'amour. L'amour n'est pas la musique. La musique est la meilleure des choses. ==> <font color=red><i>Frank Zappa</i></font>"];
        var c = citS[Math.floor(Math.random() * citS.length)];
	writeResult(c);
};
function cleanAll(tokeep){
	$("sentence").innerHTML = "";
	var divS = ["scode", "vidz", "combo", "artii", "heart", "vplayer"];
	//var s = divsS.indexOf(tokeep);
	//var divS = divsS.splice(s, 1);
	for (i=0; i<divS.length; i++){cleandiv(divS[i])};
	for (j=0; j<10; j++){cleandiv("i"+j)};
};
function loulou(){
     s = document.createElement("video");
     s.id="vplayer";
     s.type="video/mp4";
     s.src = "1M9/m3BozenDo.m4v";
     s.controls = true;
     document.body.appendChild(s);                                                                                              
     sleep("200");
     document.getElementById('vplayer').play();
};
function scoreCook(){
        var d = new Date();
        d.setTime(d.getTime() + (1*3*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = "sc0r3S="+scoreh+"/"+scorec+";"+expires;
};
function getScore(){
	co = document.cookie.split(';')[0];
	scoreh = parseInt(co.split('=')[1].split("/")[0]);
	scorec = parseInt(co.split('=')[1].split("/")[1]);
	if (isNaN(scoreh) == true){scoreh =0};
	if (isNaN(scorec) == true){scorec =0};
};
