
// ******************************************************************************************************* //
// ******************************************************************************************************* //

// *********** //
// Exercise 12 //
// *********** //

// Write a program that asks the user for a name and outputs that name backwards.

// ------------------------------------------------------------------------------------------------------- //

// let readlineSync = require("readline-sync");

// console.log("Please input a name:");
// let name = readlineSync.question("> ");

// const reversedName = name.split('').reverse().join('');

// console.log(reversedName);


// ******************************************************************************************************* //
// ******************************************************************************************************* //

// *********** //
// Exercise 13 //
// *********** //

// Write a program that asks the user for a sentence and outputs the words in the console, one per line,
// in a rectangular frame.
// For example the sentence "Hello World in a frame" gets printed as:

// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

// ------------------------------------------------------------------------------------------------------- //

// let readlineSync = require("readline-sync");

// console.log("Please input a sentence:");
// let sentence = readlineSync.question("> ");


// const sentenceSplitted = sentence.split(' ') // criar array com as palavras separadas por espaco(space character)

// let longestWordIndex = 0;
// let longestWordLength = 0;


// for (let i = 0; i < sentenceSplitted.length; i++) { // procurar o indice com maior numero de chars
//     if (sentenceSplitted[i].length > longestWordLength) {
//         longestWordLength = sentenceSplitted[i].length;
//         longestWordIndex = i;
//     }
// }

//console.log("The longest word is:", sentenceSplitted[longestWordIndex]);
//console.log("Index of the longest word is:", longestWordIndex);
//console.log("Length of the longest word is:", longestWordLength);


// const starsCount = longestWordLength + 4; // calc numero de (*) inicial e final da frame

// let stars = "";
// for (let i = 0; i < starsCount; i++) {
//     stars += "*";
// }



// console.log(stars); // print inicial da frame 

// print das words no array
// for (let i = 0; i < sentenceSplitted.length; i++) {
//     let word = sentenceSplitted[i];

// calcular o espacamento entre a word e o final da frame
//     let spaces = "";
//     let spaceCount = longestWordLength - word.length;
    
//     for (let j = 0; j < spaceCount; j++) {
//         spaces += " "; //adicionar o space character
//     }

//     console.log("* " + word + spaces + " *");
// }


// console.log(stars); // print final da frame 


// ******************************************************************************************************* //
// ******************************************************************************************************* //

// *********** //
// Exercise 14 //
// *********** //

// Triangles
// Write a programa that asks the user for a size s and then outputs a triangle with the height and width of s
// Also ask the user for how many triangles to print.

// Example:
// User inputs size 3
// User inputs times 2
// Output:

// *
// **
// ***
// *
// **
// ***

// ------------------------------------------------------------------------------------------------------- //

// let readlineSync = require("readline-sync");

// console.log("Please input a numeric size:");
// let size = readlineSync.question("> ");

// console.log("Please input how many times you would like to print:");
// let counter = parseInt(readlineSync.question("> "));

// let stars = "";

// for (let i = 0; i < counter; i++) {
//     stars = ""; 
//     for (let j = 0; j < size; j++) {
//         stars += "*";
//         console.log(stars);
//     }
// }

// ******************************************************************************************************* //
// ******************************************************************************************************* //

// *********** //
// Exercise 15 //
// *********** //

// Xmas tree
// Write a programa that asks the user for a height h and then output a Xmas Tree with an height of h.

// Example:
// User inputs 5
// Output:

//     *
//    ***
//   *****
//  *******
// *********
//     I

// Don't forget the stem.

// ------------------------------------------------------------------------------------------------------- //

// let readlineSync = require("readline-sync");

// console.log("Please input the height of the Christmas tree:");
// let height = parseInt(readlineSync.question("> ")); 

// for (let i = 0; i < height; i++) {
//     let spaces = "";    
//     let numOfSpaces = height - i - 1; // numero de space chars por row

//     for (let j = 0; j < numOfSpaces; j++) {
//         spaces += " ";
//     }

//     let stars = "";
//     let numOfStars = 2 * i + 1; // numero de estrelas por row

//     for (let j = 0; j < numOfStars; j++) {
//         stars += "*";
//     }

//     console.log(spaces + stars);
// }

// let treeTrunkSpaces = height - 1; // numero de espacos para o tronco
// let trunkSpaces = "";

// for (let i = 0; i < treeTrunkSpaces; i++) {
//     trunkSpaces += " "; //adicionar o space character para o tronco
// }
// console.log(trunkSpaces + "I")

// ******************************************************************************************************* //
// ******************************************************************************************************* //

// *********** //
// Exercise 16 //
// *********** //

//List a table that multiplies all the numbers from 1 to 10.
//Format your output to something like this:

// 1   2   3   4   5   6   7   8   9  10
// 2   4   6   8  10  12  14  16  18  20
// 3   6   9  12  15  18  21  24  27  30
// 4   8  12  16  20  24  28  32  36  40
// 5  10  15  20  25  30  35  40  45  50
// 6  12  18  24  30  36  42  48  54  60
// 7  14  21  28  35  42  49  56  63  70
// 8  16  24  32  40  48  56  64  72  80
// 9  18  27  36  45  54  63  72  81  90
//10  20  30  40  50  60  70  80  90 100

// ------------------------------------------------------------------------------------------------------- //

let result = "";
const maxIterations = 10; 
let counter = 1; 

for (let i = 1; i <= maxIterations; i++) {
  for (let j = 1; j <= 10; j++) {
    const currentValue = j * counter;
    
    if (currentValue < 10) {
      result += " " + currentValue; // adicionar 1 espaco antes do currentvalue quando valor menor que 10
    } else {
      result += currentValue; // sem espaco antes do currentvalue quando valor maior ou igual que 10
    }
    
    if (j < 10) {
      const nextValue = (j + 1) * counter;
      if (nextValue < 10) {
        result += "  "; // 3 espacos para 1 digito
      } else if (nextValue < 100) {
        result += "  "; // 2 espacos para 2 digitos
      } else {
        result += " ";  // 1 espaco para 3 digitos
      }
    }
  }
  result += "\n"; 
  counter++; 
}

console.log(result);



