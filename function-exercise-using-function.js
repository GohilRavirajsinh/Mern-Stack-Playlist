adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}
shop_name = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}
another_word = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

function getRandom(obj) {
    // Step 1: get all keys from object
    const keys = Object.keys(obj);
    // console.log(keys)

    // Combine All Steps 2-3-4 & 5 in single line
    return obj[keys[Math.floor(Math.random() * keys.length)]];
    /*
    → return {1:"Crazy",2:"Amazing",3:"Fire"} [ ["1","2","3"] [ Math.floor(Math.random()*3) ] ]
    → return {1:"Crazy",2:"Amazing",3:"Fire"} [ ["1","2","3"] [ Math.floor(0–2.999) ] ]
    → return {1:"Crazy",2:"Amazing",3:"Fire"} [ ["1","2","3"] [ 0 ya 1 ya 2 ] ]
    → return {1:"Crazy",2:"Amazing",3:"Fire"} [ "1" ya "2" ya "3" ]
    → return {1:"Crazy",2:"Amazing",3:"Fire"}["1"] = "Crazy"
          ya {1:"Crazy",2:"Amazing",3:"Fire"}["2"] = "Amazing"
          ya {1:"Crazy",2:"Amazing",3:"Fire"}["3"] = "Fire"
    */

    /* // Step 2: pick random index
    const randomIndex = Math.floor(Math.random() * keys.length);

    // Step 3: get random key
    const randomKey = keys[randomIndex];

    // Step 4: get value using that key
    const value = obj[randomKey];

    // Step 5: return final value
    return value; */
}

const createdWord = `${getRandom(adjectives)} ${getRandom(shop_name)} ${getRandom(another_word)}`;
console.log(createdWord)