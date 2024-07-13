// ## Exercise 1
// ### Input and output
// Write a program that ask the user for his name and prints a greeting.
// ```
// Please enter your name:

// Hello <NAME>, welcome to the Learn to Code course.
// ```
let readlineSync = require("readline-sync");

console.log("Please enter your name:");
let username = readlineSync.question(": ");
console.log("Hello " + username + " , welcome to the Learn to Code course.");
