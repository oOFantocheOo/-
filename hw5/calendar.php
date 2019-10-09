#!/usr/local/bin/php
<?php print'<?xml version = "1.0" encoding="utf-8"?>'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>PHP: for loop example</title>
</head>
<body>
<p>


<?php
date_default_timezone_set('America/Los_Angeles'); 
$year = 2011;
$ts = mktime(0,0,0,1,1,$year);

for($day = 1; $day < 32; $day++)
{
    echo date('n/j/Y', $ts), "was a ", date('l', $ts), "<br/>";
	$ts += 24*3600;
}
?>


</p>
</body>
</html>
