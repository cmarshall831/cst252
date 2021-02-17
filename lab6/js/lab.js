//lab.js
//Learning how to use Javascript and using arrays and objects
//Author: Connor Marshall <cmarshall@csumb.edu>
//Source: Wes wmodes
//Created: February 2021
//License: Pubic Domain


//variables
myTransport = ["Ford Fusion", "skateboard"];


//Declare all variables created in task 1

myMainRide = {
  make: "Ford",
  model: "Fusion",
  color: "White",
  year: 2011,
  age : function() {
    return 2021 - this.year;
  }

}


//use document.writeln() to Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>"
JSON.stringify(myMainRide, null, '\t'), "</pre>";
document.writeln("The age of my ", myMainRide.model, "is ", myMainRide.age(), "years.");
