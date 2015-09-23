$(document).ready( function(){
// variable to hold request
// bind to the submit event of our form
//form submitted
$("#userN").blur(function(){
 
	
    // setup some local variables
	// this object's elements stored in objects variables
    var $form = $(this);
    
    // serialize the data in the form
    //if you serialize you dont need to do this
    //$("#input_form").submit(function(){
    //var first name = $('input[name=first name]').val();
    //var last name = $('input[name=last name]').val();
    //var email = $('input[name=email]').val();
 
// serializedData is a string that contains form input variables
// The string is sent in the ajax request

	//all data object place in query string with name/value pairs
    var serializedData = $form.serialize();
	
	//alert(serializedData);
 
    // fire off the request to /form.php
    // request is a jqXHR object which handles the HTTP request and handles the callbacks 
    // of the request 
     var request;
	 
    request = $.ajax({
        //where data will be processed
        url: "process.php",
        //form method
        type: "post",
        //data from the form to be processed by test.php
        data: serializedData,
        //type of data to be returned to client(browser)
        dataType: "json"
    });
 
    // callback handler that will be called on success
    // response is the result of the processing by test.php, it is of type json
    // textStatus can be abort,error,notmodified,parsererror,success,timeout
    request.done(function (response, textStatus, jqXHR){
          //The json response object          
          //alert(response.returned_val);
          //Place the response in the div with id=result
          //you can access the response like you would an array
		  if(response.status!=0){
         $("#result").html(response.status);
		  }
		  else{
			  $("#result").html("<span style='color:green;'>Available</span>");
		  }
    });
 
    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // alert the error
        alert( "Request failed: " + textStatus + errorThrown);
    });
 
    // prevent default posting of form
    event.preventDefault();
});


//password
$("#passW").blur(function(){
 
	//alert('test');
    // setup some local variables
	// this object's elements stored in objects variables
    var $form = $(this);
    
    // serialize the data in the form
    //if you serialize you dont need to do this
    //$("#input_form").submit(function(){
    //var first name = $('input[name=first name]').val();
    //var last name = $('input[name=last name]').val();
    //var email = $('input[name=email]').val();
 
// serializedData is a string that contains form input variables
// The string is sent in the ajax request

	//all data object place in query string with name/value pairs
    var serializedData = $form.serialize();
	
	//alert(serializedData);
 
    // fire off the request to /form.php
    // request is a jqXHR object which handles the HTTP request and handles the callbacks 
    // of the request 
     var request;
	 
    request = $.ajax({
        //where data will be processed
        url: "processP.php",
        //form method
        type: "post",
        //data from the form to be processed by test.php
        data: serializedData,
        //type of data to be returned to client(browser)
        dataType: "json"
    });
 
    // callback handler that will be called on success
    // response is the result of the processing by test.php, it is of type json
    // textStatus can be abort,error,notmodified,parsererror,success,timeout
    request.done(function (response, textStatus, jqXHR){
          //The json response object          
          //alert(response.returned_val);
          //Place the response in the div with id=result
          //you can access the response like you would an array
		  if(response.status!=""){
         $("#result1").html(response.status);
		  }
		  else{
			  $("#result1").html("<span style='color:green;'>Your Password length is correct!</span>");
		  }
    });
 
    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // alert the error
        alert( "Request failed: " + textStatus + errorThrown);
    });
 
    // prevent default posting of form
    event.preventDefault();
});



});//end document