<!DOCTYPE html>
<html><?php
$myData = $_REQUEST['data'];
$myData = strtolower($myData);
$date = date('Y-m-d H:i:s');
$ua = $_SERVER['HTTP_USER_AGENT'];
$ip = $_SERVER['REMOTE_ADDR'];
$f = fopen ("cons", "a");
fputs($f, "$ua\t$ip\t$date\n");
fclose($f);
?></html>
