// JavaScript Document

//Script Sample for Variables 1.1
function runCodeVariables_onClick() {
//setting up the response text. Using "\n" to force a new line when needed
      var GreetingString = "Hello ";
	  var ageString1 = "\nWOW, you are ";
	  var ageString2 = " years old!";
	  var contactString1 = "\nI will contact you by phone ";
	  var contactString2 = " or email ";
	  
	  // getting information from the user for each item.
	  var myName = prompt("Please enter your name:", "");
	  var myAge = prompt("Please enter your age:", "");
	  var phone = prompt("Please enter your phone number:", "");
	  var email = prompt("Please enter your email address:", "");
	  
	  //putting it all together into a single string for the alert message response
	  var thanksForResponding = GreetingString + myName  + ageString1 + myAge + ageString2
	  + contactString1 + phone + contactString2 + email + "\nThank you!";
	  
	  //returning the assembled information in an alert message
	  alert(thanksForResponding);
}




//Script sample for Operators 1.2
function runCodeOperators_onClick() {
	var question = prompt("Yes or No?");
	((question == "Yes") || (question == "yes")) ? alert("true") : alert("false");
}


//Script for Conditionals example 1.3
function answers_onClick(){
	var answer = prompt("Rock, Paper or Scissors?");
	if (answer = "rock"){
		alert("You beat scissors but look out for paper!");
	} else if (answer = "paper"){
		alert("You beat rock but you're no match for scissors!");
	} else if (answer = "scissors"){
		alert("You cut paper but you'll never beat a rock!");
	} else (
		alert("No cheating! That's not in the game!")
	)
}




//Script for Arrays example 1.8
var groceries = []



function array_onClick(){
let item = prompt("What do you need from the grocery store?");
groceries.push(item + "<br/>" );

document.getElementById("items").innerHTML = groceries;
};

















