<?php
$passW=$_POST["password"];


if (strlen($passW) < 8 ) {
$error= "Your password must be at least 8 characters.";
} else if(strlen($passW) > 29 ) {
$error="Your password must be less than 29 characters.";
} 
else $error="";

$returnData = array("status" => $error);

//print_r($returnData);
	
echo json_encode($returnData);
?>