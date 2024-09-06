function rectPerimeter(width, height) {
    perimetro = (width * 2) + (height *2);
    console.log(perimetro);
}

function rectArea(width, height) {
    area = width * height;
    console.log(area);
}

function circlePerimeter(radius) {
    perimetro = 2 * 3.14 * radius;
    console.log(perimetro);
}

function circleArea(radius) {
    area = (radius * radius) * 3.14;
    console.log(area);
}

const width = 2;
const height = 4;
const radius = 3;

rectPerimeter(width, height);
rectArea(width, height);
circlePerimeter(radius);
circleArea(radius);