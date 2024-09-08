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

let numbers = [4, 7, 10, 12, 1, 8, 20, 16];
let sum = 0;
let highest = numbers[0];
let lowest = numbers[0];


for ( let i = 0; i < numbers.length; i++) {
     sum += numbers[i]; 
     avg = sum / numbers.length;
     if (numbers[i] > highest){
        highest = numbers[i];
     }
     if (numbers[i] < lowest){
        lowest = numbers[i];
     }
}

console.log("Sum:", sum);
console.log("Average:", avg);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
