let a3 = [1,2,3];
let a2 = [4,5,6];
let a1 = [7,8,9];

// console.log(a1.concat(a2,a3))
let str = [...a1,...a2,...a3]
// console.log(str)
// console.log(str.sort())
arr = [0, 1, 2, 3, 4, 5]
console.log(arr.splice(1,3))
console.log(arr.slice(0,3))
console.log(arr.toString())

const latters = ["R","A","V","I"]
console.log(latters.join("Comma"))

console.log("                      ")
console.log("For loop with Array")
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}

// arr.forEach((value, index, arr) => {
//     console.log(value, index, arr)
// })

console.log("                      ")
console.log("For in loop with Array in object it cannot be run")
let obj = {
    Anand: "Jay",
    Dwarka: "Dwarkadhish",
    Vidyanagar: "Krishna"       
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];   
    console.log(key, element)
    }
}

console.log("                      ")
console.log("For of loop with Array")

for (const value of arr) { //in objeft this loop cannot run because object is not iterable!
    console.log(value)
}