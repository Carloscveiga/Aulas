const people = [
    {
        name: "Joe",
        height: 180,
    },
    {
        name: "Jane",
        height: 170,
    },
    {
        name: "Max",
        height: 165,
    }
];

// qual a media da altura

let media = ((people[0].height + people[1].height + people[2].height) / 3);
console.log(media)

let sum = 0;
for (let i = 0; i < people.length; i++) {
    sum += people[i].height;
    const avg = sum / people.length;
}

