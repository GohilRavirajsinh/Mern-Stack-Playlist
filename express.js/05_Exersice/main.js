import fs from "fs/promises"
import fsn from "fs"

let files = await fs.readdir("A:\\Node-js\\Sigma-Web-Dev\\express.js\\05_Exersice")
console.log(files);

let extensions = []
for (const item of files) {
    console.log(item);
    let ext = item.split(".")[item.split(".").length - 1]
    console.log(ext);
    if(fsn.existsSync(ext)){
        // Move the file to this directory
    }
    else{
        fs.mkdir(ext)
    }
    console.log(item);   
}
// directory create hoti hai par directory check krni hai, direct main folder me create hota hai to hme 05_Exersice vale me krna hai to code adhura hai check krna baki hai!