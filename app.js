//jshint esversion:6
//we require two  package which we install express,body-parser
const express = require("express");
const bodyParser = require("body-parser");
//creating app constant by express
const app = express();
//create a get route that just send the brouser
//the word Hello whenusre tries to access home route
app.get("/", function(req, res){
//create a variable that store today date by funstion Date()
  var today = new Date();
//there 0 for sunday 6 for satuerday
  if(today.getDay()===6 ||today.getDay()===0){
    res.send("hii todat ie weackend");
  } else{
    res.send("booo. toay is working day");
  }
});
//we listen on port 3000and ew console log
//that our server has started
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
