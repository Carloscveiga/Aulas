// ## Exercise 7
// ### Beachwalk Hotel 🏖 <br />
// Let's calculate how much a hotel stay costs at the fantastic Beachwalk Hotel

// ### 7.1
// The price for night is `90€`<br />
// Ask the user for how many nights he would like to stay and print the total cost.


let readlineSync = require("readline-sync");

const hotelNightCost = 90;
let numberOfNights;
let isValidInput = false;

console.log("How many nights would you like to stay for?");

while (!isValidInput) {
    numberOfNights = readlineSync.question(": ");

    if (isNaN(numberOfNights)) {
        console.log("That is not a valid value. Please input a number.");
    } else if (parseInt(numberOfNights) <= 0) {
        console.log("That is not a valid positive value. Please input a positive number.");
    } else {
        let hotelCost = (numberOfNights * hotelNightCost).toFixed(2);
        console.log("Hello. " + numberOfNights + " nights is " + hotelCost + " EUR.");
        isValidInput = true; 
    }
}


