// const someNumber = Math.random();
// console.log(someNumber);

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

const someNumber = Math.random() * 100;
console.log(someNumber);

const someNumber2 = Math.floor(Math.random() * 100);
console.log(someNumber2);

const someNumber3 = Math.ceil(Math.random() * 100);
console.log(someNumber3);

const min = 0;
const max = 14;


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const z = randomInt(1, 1);
console.log(z);

let count1 = 0;
let count2 = 0;

for (let i = 0; i < 200; i++) {
    const x =  randomInt(1, 2);
    if (x == 1) {
        count1++;
    } else {
        count2++
    }
}

console.log(count1);
console.log(count2);

// Exercicio
// gerar um array com 5 numeros aleatorios: maximo 50.

// var randomArray = [];
// for (var i = 0; i < 5; i++) {
//     randomArray.push(Math.floor(Math.random() * 50) + 1);
// }
// console.log(randomArray);

// function exists(needle, haystack) {
//     for (let i = 0; i < haystack.length; i++){
//         if (needle === haystack[i]) {            
//             return true;
//         }
//     }
//     return false;
// }

// criar um array
// com 5 numeros aleatorios entre 1 e 9
// sem repeticao

var randomArray2 = [];
for (let i = 0; i < 5;) {
    let randomNum = Math.floor(Math.random() * (9 - 1)) + 1;  
    if (!randomArray2.includes(randomNum)) {
        randomArray2.push(randomNum);
        i++;  
    }
}

randomArray2.sort(function(a, b) {
    return a - b;  
});

console.log(randomArray2);
