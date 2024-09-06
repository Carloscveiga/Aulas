// ## Exercise 3
// ### Currency converter
// Write a program that asks the user for an amount in USD.<br />
// Output that amount converted to EURO.

// > **Bonus goal:**<br />
// > Use a precision of 2 decimal points: `3.45€`.

let readlineSync = require("readline-sync");

const usdValue = 0.95;
console.log("Please enter the amount to convert:");
let usdAmount = readlineSync.question(": ");
const convertedValue = (usdAmount * usdValue).toFixed(2);

console.log("Hello. " + usdAmount + " USD is equal to " + convertedValue + " EUR.");
 


