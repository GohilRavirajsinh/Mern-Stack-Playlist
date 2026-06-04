// import {a, b, c} from "./mymodule.js"          // package.json  "type": "module"
// console.log(a, b, c)

// import DefaultExport from "./mymodule.js"      // package.json  "type": "module"
// console.log(DefaultExport)

const a = require("./mycommonjs.js")               // package.json  "type": "commonjs"

console.log(a, __dirname, __filename)