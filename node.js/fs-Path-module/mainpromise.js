// module type

import fs from "fs/promises"

let a = await fs.readFile("goku.txt") // we can access direct await because we are in module
// let b = await fs.writeFile("goku.txt", "\n\n\nThis Append Using Module Type")  // It replace whole file with new words.
let b = await fs.appendFile("goku.txt", "\n\n\nThis Append Using Module Type")
console.log(a.toString())