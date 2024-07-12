let readlineSync = require("readline-sync");

console.log("Please input a number:");
let number = readlineSync.question("> ");
// let number = 7;

let counter = 0;
while (counter < 10) {
    counter++;

    let result = counter * number;
    console.log(number + " x " + counter + " -> " + result);
}