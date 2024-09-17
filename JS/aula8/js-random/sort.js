const names = [
    "Zack",
    "Josie",
    "Alex",
    "Maria",
    "Babs",
]

console.log(names);

names.sort(); // altera os indices do array
console.log(names);

const sortedNames = names.toSorted(); // retorna o array sem alterar os indices do mesmo
console.log(sortedNames);