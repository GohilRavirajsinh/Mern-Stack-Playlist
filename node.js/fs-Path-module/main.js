// 'require' commonjs type

const fs = require("fs")  
// console.log(fs)

// console.log("Starting")
// fs.writeFileSync("First.txt", "The file is created!")
// console.log("Ending")

// console.log("Starting")
// fs.writeFile("Second.txt", "Created and print in console using callback when it's completed!", () => {
//     console.log("Creted Successfulluy!")
//     fs.readFile("Second.txt", (error, data)=>{
//         console.log(error, data)
//     })
// })
// console.log("Ending")

console.log("Starting")
fs.appendFile("goku.txt", "In Future I'll be Professional Esports Player!", (e, d) => {
    console.log(e)
    console.log(d)
})
console.log("Ending")