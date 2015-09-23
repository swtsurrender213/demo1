<!DOCTYPE html>
<html>
<head>
<title>Ajax Demo</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="js/processU.js"></script>
</head>
<body>

<h1>Ajax Demo</h1>
<form id="ajaxd1" name="ajaxd1" method="post" action="processP.php" >
  Username:<br>
  <input id="userN" type="text" name="username">
  <div style="color:orange;" id="result">&nbsp;</div>
  Password:<br>
  <input id="passW" type="password" name="password">
  <div style="color:red;" id="result1">&nbsp;</div>
  <br>
  <input name="Submit" type="submit" value="submit">
</form>
<br>


</body>
</html>