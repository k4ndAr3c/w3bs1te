<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Little Game</title>
	<link rel="stylesheet" type="text/css" href="s.css">
    </head>
    <body>
        <h1 align=right> Hello World! </h1>
<?php
$date = date('Y-m-d H:i:s');
$ua = $_SERVER['HTTP_USER_AGENT'];
$ip=$_SERVER['REMOTE_ADDR'];
$f = fopen ("cons", "a");
fputs($f, "$ua\t$ip\t$date\n");
fclose($f);
?>
<div align=center><p>Voici un petit jeu, have fun .!.</p></div>
<br /><script type="text/javascript" src="js.js"></script>
    </body>
</html>
