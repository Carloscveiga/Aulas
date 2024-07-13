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

// ### 7.4
// Deluxe Suites <br />
// Continue from the last exercise.<br />
// Ask the user which type of room they would like<br />
// >  Base price per room:<br />
// >  Normal room: 90€<br />
// >  Deluxe room: 120€<br />
// >  Deluxe suites: 150€<br />

let readlineSync = require("readline-sync");

console.log("How many nights would you like to stay for?");
let numberOfNights = readlineSync.question(": ");
console.log("What type of room would you like? We have a normal room, a deluxe room or a deluxe suite. (Enter 'normal', 'deluxe' or 'deluxeXL')");
let typeOfRoom = readlineSync.question(": ");

let hotelNightCost;
if (typeOfRoom == "normal") {
  hotelNightCost = 90;
} else if (typeOfRoom == "deluxe") {
  hotelNightCost = 120;
} else if (typeOfRoom == "deluxeXL") {
  hotelNightCost = 150;
}

let roomCost = numberOfNights * hotelNightCost;
const hotelBreakfastCost = 10;
let breakfastCost = numberOfNights * hotelBreakfastCost;

let discount = 0;
if (numberOfNights >= 15) {
  discount = 0.20;
} else if (numberOfNights >= 10) {
  discount = 0.15;
} else if (numberOfNights >= 5) {
  discount = 0.10;
}
let totalCost = ((roomCost + breakfastCost) - ((roomCost + breakfastCost) * discount)).toFixed(2);

console.log("Hello. " + numberOfNights + " nights will cost " + totalCost + " EUR, including breakfast and a discount of " + (discount * 100) + "% for a " + typeOfRoom + " room.");
