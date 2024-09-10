//Write a program that check wether a number exists inside an array of numbers.

// function inArray(a,b,c){
//     for (let i = 0; i < b.length; i++){
//         if (b[i] == a){
//             c = true;
//         } 
//     } 
//     console.log(c);
// }

// let n = 5;
// let numbers = [4, 7, 10, 12, 1, 8, 20];
// let isTrue = false;

// inArray(n,numbers,isTrue);



// -------------------------------------------------------------------------------------------------- //


//Write a program that prints 1 per line only the names on odd positions in an array of names.

// function oddNames (a){
//     for (let i = 0; i < a.length; i++){
//         if (i % 2 !== 0){
//             console.log(a[i]);
//         }
//     }
// }

// let names = ['Josie', 'Cathrin', 'Bob', 'Max', 'Hannah', 'Alex'];

// oddNames(names);


// -------------------------------------------------------------------------------------------------- //


// Write a program that calculates the sum, the average, the highest and the lowest numbers from an array.

// Example:
// Array: [4, 7, 10, 12, 1, 8, 20, 16]
// Output:

// Sum: 78
// Average: 9.75
// Highest: 20
// Lowest: 1


// *********************************************************************************************** //

let numbers1 = [4, 7, 10, 12, 1, 8, 20, 16];

function sumArray(numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; 
   }
   return sum;
}

function avgArray(numbers) {
   let sum = sumArray(numbers); 
   return sum / numbers.length;
}

function highestArray(numbers) {
   let highest = numbers[0]; 
   for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > highest) {
         highest = numbers[i];
      }
   }
   return highest;
}

function lowestArray(numbers) {
   let lowest = numbers[0]; 
   for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < lowest) {
         lowest = numbers[i];
      }
   }
   return lowest;
}



console.time("Execution Time"); // inicio do script

let sum = sumArray(numbers1);
let avg = avgArray(numbers1);
let highest = highestArray(numbers1);
let lowest = lowestArray(numbers1);

console.log("Sum:", sum);
console.log("Average:", avg);
console.log("Highest:", highest);
console.log("Lowest:", lowest);


console.timeEnd("Execution Time"); // fim do script

console.log('// *********************************************************************************************** //');


 // *********************************************************************************************** //

let numbers2 = [4, 7, 10, 12, 1, 8, 20, 16];

function doItAll(numbers) {
   let sum = 0;
   let highest = numbers[0];
   let lowest = numbers[0];
   let avg = 0;

   for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; 

      if (numbers[i] > highest) {
         highest = numbers[i];
      }
      if (numbers[i] < lowest) {
         lowest = numbers[i];
      }
   }
   avg = sum / numbers.length;

   return { sum, avg, highest, lowest }; 
}

console.time("Execution Time"); // inicio do script

let result = doItAll(numbers2);

console.log("Sum:", result.sum);
console.log("Average:", result.avg);
console.log("Highest:", result.highest);
console.log("Lowest:", result.lowest);

console.timeEnd("Execution Time"); // fim do script



