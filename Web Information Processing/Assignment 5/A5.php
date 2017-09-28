<!DOCTYPE HTML>
<html>

<head>
    <title>Reading List</title>
    <link rel="stylesheet" type="text/css" href="A5.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<body>
    <div class="container">
        <?php


$GLOBALS["debug"] = 0;
function debug ($str) {
  if ($GLOBALS["debug"]) echo $str;
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

debug ("DEBUG Printing: ON!<br />");
        
 if ($_SERVER["REQUEST_METHOD"] == "POST") {

  switch ($_POST["submit"]) {
 
     case "New item entry" :
                // get the data from the form
                $CDate = $Name = $URL = $description = "";
                $CDate = test_input($_POST["CDate"]); 
                $Name = test_input($_POST["Name"]);
                $URL = test_input($_POST["URL"]);
                $description = test_input($_POST["description"]);
                debug("Creating new entry for: ".$Name."<br />");
                // insert data into database table
                $servername = "localhost"; $username = "root"; $password = "charlotte5";
                $dbname = "cs230"; $tablename = "ReadingList";
				$conn = new mysqli($servername, $username, $password, $dbname);
				if ($conn->connect_error) {
                    die ("Database ".$dbname.": connection failed: " . $conn->connect_error);
                }
                $sql = "INSERT INTO ReadingList (CDate,Name,URL,description) ".
                       "VALUES ('"."$CDate"."','".
                                $Name."','".
                                $URL."','".
                                $description."'
                                );";
                debug ("SQL: ".$sql."<br />");                                                
                if ($conn->query($sql) === TRUE) {
                   debug ("New item added!<br />");
                } else {
                   debug ("Error: " . $sql . "<br>" . $conn->error);
                }
                $conn->close();
                break;
  }
 }
        
        ?>
        
        <!--
   Zone One: This is the TABLE ROW INPUT FORM (always show the form for this assignment)
-->
<div class="row text-left"><h2>Insert Data to Reading List </h2></div>
<!-- self-referencing script - form and processor in single page app -->
<div class="container-fluid">
	 <form method="post" class="form-horizontal" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
         
       <div class="form-group">
         <label class="control-label col-sm-2" for="CDate">Entry date:</label>
         <div class="col-sm-10">
           <input type="DATE" class="form-control" id="CDate" name="CDate">
         </div>
       </div>
         
       <div class="form-group">
         <label class="control-label col-sm-2" for="Name">Item Name:</label>
         <div class="col-sm-10">
           <input type="text" class="form-control" id="Name" name="Name">
         </div>
       </div>
         
       <div class="form-group">
         <label class="control-label col-sm-2" for="URL">URL Link:</label>
         <div class="col-sm-10">
           <input type="text" class="form-control" id="URL" name="URL">
         </div>
       </div>
         
       <div class="form-group">
         <label class="control-label col-sm-2" for="description">Description:</label>
         <div class="col-sm-10">
           <input type="text" class="form-control" id="description" name="description">
         </div>
       </div>
  
         
       <div class="col-sm-offset-2 col-sm-10">
         <button type="submit" name="submit" value="New item entry" class="btn btn-default">Insert new Data</button>
       </div>
	 </form>
</div>	
<br /><br />


    </div> </body>
