// ## Exercise 4
// ### Sum loop
// Write a program that asks the user for a number `n` and prints the sum of the numbers `1` to `n`.

// > **Example:**<br />
// > User inputs `5`<br />
// > Output:<br />
// > `1 + 2 + 3 + 4 + 5 = 15`

// ## Exercise 6
// Modify Exercise 4 so that the program asks the user for a number `n` and gives them the possibility to choose between computing the sum or computing the product of 1 to n.

let readlineSync = require("readline-sync");
let list = "";
console.log("Please enter the value:");
let number = readlineSync.question(": ");
console.log("Do you want to compute the sum or the product? (Enter 'sum' or 'prod')");
let sumProd = readlineSync.question(": ");

if (sumProd == "sum") {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        result += i;
        if (list == "") {
            list += i;
        } else {
            list += " + " + i;
        }
    }
    console.log(list + " = " + result);
} else if (sumProd == "prod") {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
        if (list == "") {
            list += i;
        } else {
            list += " * " + i;
        }
    }
    console.log(list + " = " + result);
}


