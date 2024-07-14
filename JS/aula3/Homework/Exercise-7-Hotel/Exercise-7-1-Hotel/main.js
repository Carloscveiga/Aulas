// ## Exercise 7
// ### Beachwalk Hotel 🏖 <br />
// Let's calculate how much a hotel stay costs at the fantastic Beachwalk Hotel

// ### 7.1
// The price for night is `90€`<br />
// Ask the user for how many nights he would like to stay and print the total cost.


let readlineSync = require("readline-sync");

const hotelNightCost = 90;
console.log("How many nights would like to stay for?");
let numberOfNights = readlineSync.question(": ");
let hotelCost = (numberOfNights * hotelNightCost).toFixed(2);

console.log("Hello. " + numberOfNights + " nights is " + hotelCost + " EUR.");
