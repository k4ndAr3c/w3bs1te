<!DOCTYPE html>
<html><?php
$date = date('Y-m-d H:i:s');
$ua = $_SERVER['HTTP_USER_AGENT'];
$ip=$_SERVER['REMOTE_ADDR'];
$f = fopen ("cons", "a");
fputs($f, "$ua\t$ip\t$date\n");
fclose($f);
?></html>
