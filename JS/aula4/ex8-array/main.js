// array permite guardar varios valores indexados por um numero

let nomes = ["Helder","Miguel","Angelo","Luiz","Heraldo","Hugo"];
let numeros = [1,2,3,4,5];

// console.log(nomes[2]);

// for (let i = 0; i < 4; i++) {
//     console.log(i);
//     console.log(nomes[i]);
// }



for (let i = 0; i < numeros.length; i++) {
  if (i % 2 === 0) {  
    console.log(numeros[i]);
  }
}

console.log("----------------------");

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {  
    console.log(numeros[i]);
  }
}


