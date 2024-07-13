// ## Exercise 7
// ### Beachwalk Hotel 🏖 <br />
// Let's calculate how much a hotel stay costs at the fantastic Beachwalk Hotel

// ### 7.1
// The price for night is `90€`<br />
// Ask the user for how many nights he would like to stay and print the total cost.

// ### 7.2
// Breakfast is an extra `10€`<br />
// Continue from the last exercise and ask the user if he would like to include breakfast.<br />
// Print the total cost.


let readlineSync = require("readline-sync");

const hotelNightCost = 90;
const hotelBreakfastCost = 10;
console.log("How many nights would like to stay for?");
let numberOfNights = readlineSync.question(": ");
let roomCost = numberOfNights * hotelNightCost;
let breakfastCost = numberOfNights * hotelBreakfastCost;
const hotelCost = (roomCost + breakfastCost).toFixed(2);

console.log("Hello. " + numberOfNights + " nights will cost " + hotelCost + " EUR, including breakfast.");
