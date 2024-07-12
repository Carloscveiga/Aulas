let readlineSync = require("readline-sync");

console.log("Name?");
let username = readlineSync.question("> ");

while (username != "joe") {
    console.log("I dont know you...");
    console.log("try again.");
    username = readlineSync.question("> ");
}

console.log("Welcome " + username);