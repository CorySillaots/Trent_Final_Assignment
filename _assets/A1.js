﻿// JavaScript Document

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
function array_onClick(){
var groceries = [];
let item = prompt("What do you need from the grocery store?");
groceries.push(item + "<br/>" );
document.getElementById("items").innerHTML = groceries;
};


//Script for built in object example 1.7
function runBuiltIn_onClick(){
	let answer = prompt("Please enter a number with a decimal spot");
	let rounded = Math.floor(answer);
	alert("You're number rounded down to the nearest integer is " + rounded);	
}

//Script for event example 2.3
function event_onClick(){
	alert("Nobodies home. Come back later!")
}

//Script for functions example 1.5
function function_onClick(){
	alert("Please enter two numbers to multiply together.")
	let userInput = prompt("What is your first number?")
	let userInputTwo = prompt("What is your second number?")
	let answer = userInput * userInputTwo;
	alert(`${userInput} x ${userInputTwo} = ${answer}`);
}



//Script for loops example 1.4
function loop_onClick(){
	let endNum = prompt("What position in the index would you like your for loop to end at?")
	let userInput = "";
for (let i = 0; i < endNum; i++) {
  userInput += i + `<br/>`;
}
document.getElementById("loop").innerHTML = userInput;
}

//Script for string example 1.9
function string_onClick(){
	alert("The text you are reading in this window is stored in a string!")
}








