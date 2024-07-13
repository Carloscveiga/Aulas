// ## Exercise 4
// ### Sum loop
// Write a program that asks the user for a number `n` and prints the sum of the numbers `1` to `n`.

// > **Example:**<br />
// > User inputs `5`<br />
// > Output:<br />
// > `1 + 2 + 3 + 4 + 5 = 15`

let readlineSync = require("readline-sync");
let list = "";
let sum = 0;
console.log("Please enter the value:");
let number = readlineSync.question(": ");
for (let i = 1; i <= number; i++) {
    sum += i;
    if (list == "") {
        list += i;
    } else {
        list += " + " + i;
    }
}
console.log( list +" = " + sum);
