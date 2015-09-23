<?php
// Create connection
$conn = mysqli_connect("localhost", "root", "", "mycompany");

// Check connection
if (mysqli_connect_error()){
   
   echo "Failed to connect to mysql:" . mysqli_connect_error();
}


// sql query for the username
$sql="SELECT * FROM `users` where username='".$_POST["username"]."'";
// execute 
$result = mysqli_query($conn, $sql);
//get the result in association array
$row = mysqli_fetch_assoc($result);
//see the number of rows
$rowcount = mysqli_num_rows($result);
//echo out if username already exist

if($rowcount>0){
//echo"username already exist";	
//convert into usable javascript json object
$returnData = array("status" => $_POST["username"]. "&nbsp;username is already exist");
echo json_encode($returnData);
}
else {
$returnData = array("status" => 0);	
echo json_encode($returnData);
}
	
mysqli_close($conn);
?>