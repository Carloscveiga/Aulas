// == != < <= > >=

// Tipos de valores:
// number (int, long, float, double)
// JS so tem:
//  number
//  string
//  boolean (true/false)

let resultado = 56 == 20;
console.log(resultado)

let resultado2 = 56 == 56;
console.log(resultado2)

let resultado3 = 20 * 2 == 10 + 10 +20;
console.log(resultado3)

let resultado4 = true;
console.log(resultado4)

let resultado5 = "bob" != "Bob";
console.log(resultado5);

let resultado6 = "bob" != "bob";
console.log(resultado6);

let resultado7 = 4 > 2;
console.log(resultado7);

let resultado8 = 4 >= 4;
console.log(resultado8);

if (true) {
    console.log("OLA");
}
console.log("FIM");

if (false) {
    console.log("OLA2");
}
console.log("FIM2");

let age = 34;
if (age >= 18) {
    console.log("Ola");
    console.log("toma la uma cerveja");
}

let age2 = 17;
if (age2 >= 18) {
    console.log("Ola");
    console.log("toma la uma cerveja");
} else {
    console.log("Ola");
    console.log("Nao tens idade para isso");
}

console.log("Ola");
let age3 = 17;
if (age3 >= 18) {
    console.log("toma la uma cerveja");
} else {
    console.log("Nao tens idade para isso");
}

console.log("Ola");
let age4 = 5;
if (age4 >= 18) {
    console.log("toma la uma cerveja");
} else {
    if (age4 < 10) {
        console.log("Toma la um bongo");
    } else {
        console.log("Toma la uma pepsi");
    }
}

console.log("Ola");
let age5 = 6;
if (age5 >= 18) {
    console.log("toma la uma cerveja");
} else if (age5 < 10) {
    console.log("Toma la um bongo");
} else {
    console.log("Toma la uma pepsi");
}