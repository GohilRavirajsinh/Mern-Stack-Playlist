adjectives = {
    one: "Crazy",
    two: "Amazing",
    three: "Fire"
}
shop_name = {
    one: "Engine",
    two: "Foods",
    three: "Garments"
}
another_word = {
    one: "Bros",
    two: "Limited",
    three: "Hub"
}

const random = Math.random();
let first, second, third;
// console.log(random)

if (random < 0.33) {
    first = adjectives.one
} else if (random < 0.66 && random >= 0.33) {
    first = adjectives.two
} else {
    first = adjectives.three
}

if (random < 0.33) {
    second = shop_name.one
} else if (random < 0.66 && random >= 0.33) {
    second = shop_name.two
} else {
    second = shop_name.three
}

if (random < 0.33) {
    third = another_word.one
} else if (random < 0.66 && random >= 0.33) {
    third = another_word.two
} else {
    third = another_word.three
}

const createdWord = `${first} ${second} ${third}`;
console.log(createdWord)