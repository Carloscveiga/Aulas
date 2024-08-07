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

// ### 7.3
// Discount<br />
// Let's discount guests who stay for longer periods.<br />
// Continue from the last exercise and calculate a discount.<br />
// > 5 nights or more, 10%<br />
// > 10 nights or more, 15%<br />
// > 15 nights or more, 20%<br />
// ```
// Only the room is affected by the discount. Breakfast price stays the same.
// ```

let readlineSync = require("readline-sync");

const hotelNightCost = 90;
const hotelBreakfastCost = 10;
let isValidInput = false;

console.log("How many nights would you like to stay for?");

while (!isValidInput) {
  numberOfNights = readlineSync.question(": ");

  if (isNaN(numberOfNights)) {
      console.log("That is not a valid value. Please input a number.");
  } else if (parseInt(numberOfNights) <= 0) {
      console.log("That is not a valid positive value. Please input a positive number.");
  } else {
    let discount = 0;
    if (numberOfNights >= 15) {
      discount = 0.20;
    } else if (numberOfNights >= 10) {
      discount = 0.15;
    } else if (numberOfNights >= 5) {
      discount = 0.10;
    }    
    let roomCost = numberOfNights * hotelNightCost;
    let breakfastCost = numberOfNights * hotelBreakfastCost;
    let roomCostWithDiscount = (roomCost * (1 - discount)); //discount is applied only to room cost not brekie
    let totalCost = (roomCostWithDiscount + breakfastCost).toFixed(2);
    console.log("Hello. " + numberOfNights + " nights will cost " + totalCost + " EUR, including breakfast and a discount of " + (discount * 100) + "% on the room.");
    isValidInput = true; 
  }
}
