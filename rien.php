<!DOCTYPE html>
<html>
<body><?php
$myData = $_REQUEST['data'];
$myData = strtolower($myData);
$date = date('Y-m-d H:i:s');
$ua = $_SERVER['HTTP_USER_AGENT'];
$ip = $_SERVER['REMOTE_ADDR'];
$f = fopen ("cons", "a");
fputs($f, "$ua\t$ip\t$date\n");
fclose($f);?>

<script type="text/javascript" src="https://www.w3counter.com/tracker.js">w3counter(90866);</script>
<noscript><div id="w3c"><a href="http://www.w3counter.com"><img src="https://www.w3counter.com/tracker.php?id=90866" style="border: 0" alt="W3Counter" /></a></div></noscript>
</body>
</html>
