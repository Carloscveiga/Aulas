function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function existsInArray(needle, haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {            
            return true;
        }
    }
    return false;
}

function randomUniqueArray(min, max, size) {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < size) {
        let x = randomInt(min, max);
        if (!existsInArray(x, uniqueNumbers)) {
            uniqueNumbers.push(x);
        }
    }
    return uniqueNumbers;  
}

function euroMilhoes() {
    const numbers = randomUniqueArray(1, 50, 5);  // Gera 5 numeros diferentes entre 1 e 50
    const stars = randomUniqueArray(1, 12, 2);   // Gera 2 estrelas diferentes entre 1 e 12
    const result = {
        numbers: numbers,
        stars: stars
    };
    return result;
}

for (let i = 0; i < 1; i++) {
    const em1 = euroMilhoes();
    console.log(em1);
}