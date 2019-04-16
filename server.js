// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//everything above this line was FCC boilerplate | everthing below is camper supplied

//define the route, making sure to notice it's optional via the '?'
app.get("/api/timestamp/:date_string?", function (req, res) {
  //get the date parameter from the request
  let date_string = req.params.date_string;  
  
  //define the object that we will send back in the response
  let myObj;
   
  //handles empty values (e.g. 'https://freecodecamp-boilerplate-project-timestamp-15.glitch.me/api/timestamp')
  //the date_string parameter has an ? which makes it optional. If the user does not provide a time to convert, then supply the current time.
  //check if the date_string? value is blank.
  if (date_string == null){
    //if it is then generate the timestamp for now and supply it.
    var naturalDate = new Date().toUTCString()
    //return the unix epoch time from a Date object via Date.parse
    var unixDate = Date.parse(naturalDate);
    //construct the response object
    myObj = {unix: unixDate, utc: naturalDate}  
  }
  
  //check for valid unix epoch time values (e.g. '1450137600000')
  //the supplied value is a string so convert it to a number via Number()
  //then create a new Date object with that number
  //then get the value of the date object in milliseconds and make sure it's valid by being greater then 0
  else if ((new Date(Number(date_string))).getTime() > 0){
    //convert the input string to a number so it can successfully be turned into a date
    var date_numb = Number(date_string);
    //create a new date object via the epoch time supplied
    var naturalDate = new Date(date_numb).toUTCString()
    //simply set the var to the epoch time provided
    var unixDate = date_numb
    //construct the response object
    myObj = {unix: unixDate, utc: naturalDate}
  }
  
  //check for valid natural date time values (e.g. 2015-12-15)
  //make sure the value has at least one '-' in it to know it's a date string
  //&& get the value of the date object in milliseconds and make sure it's valid by being greater then 0 (e.g. fials on '/api/timestamp/-')
  //then create a new Date object with the supplied date string
  else if (date_string.includes("-") == true && (new Date(date_string)).getTime() > 0) {
    ///create a new date object via the string date time supplied
    var naturalDate = new Date(date_string).toUTCString()
    //return the unix epoch time from a Date object via Date.parse
    var unixDate = Date.parse(naturalDate);
    //construct the response object
    myObj = {unix: unixDate, utc: naturalDate}
  }
  
  // catch anything else
  else if(Number(date_string.getTime) == null || isNaN((Number(date_string.getTime)))) {
    myObj = {"error" : "Invalid Date" }
  }
  
  //send the json object back in the response
  res.json(myObj)
});