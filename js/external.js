"use strict";

console.log("Hello World!");

alert("Welcome to my Website!");

console.log("Hello from external JavaScript");

var userInput = prompt("What is your favorite color?");
console.log('User entered: ' + userInput);

if(userInput = "Red") {
    alert("Red is also my favorite color!");
}

// Exercise 3 answers (previous assigment

var mermaid = 3;
var bear = 5;
var hercules = 1;

function moviePrice(){
    return ((mermaid + bear + hercules ) * 3)
}

alert("Total pay for the jobs is " + ((400 * 10) + (380 * 6) + (350 * 4)));

var openSeat = confirm("Is there an open seat?");
var noConflict= confirm("Does it conflict with your schedule?");
alert("You are able to enroll." + (openSeat && noConflict));

var premiumMember = confirm("Are you a premium member?");
var cartSize = Number(prompt("How many items are in the cart?"));
var validOffer= confirm("Is the coupon expired?");
alert("You are eligible for the discount." + (validOffer && (cartSize > 2 || premiumMember)));

var username = 'codeup';
var password = 'notastrongpassword';

var fiveCharacterPassword = password.length >= 5;
var passwordIsNotUsername = !password.includes(username);
var usernameLessThan20chars = username.length < 20;
var noWhitespace = password === password.trim() && username === username;

console.log(fiveCharacterPassword);
console.log(passwordIsNotUsername);
console.log(usernameLessThan20chars);
console.log(noWhitespace);


