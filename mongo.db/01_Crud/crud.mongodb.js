// Crud Opertaions
use("CrudDB")

db.createCollection("courses")

// INSERT

// db.courses.insertOne({
//     "name": "",
//     "gameName": "Free Fire",
//     "favPlayer": "Virat Kohli"
// })

// db.courses.insertMany([
//   {
//     "name": "Ravi",
//     "gameName": "BGMI",
//     "favPlayer": "Hardik Pandya"
//   },
//   {
//     "name": "Rahul",
//     "gameName": "Free Fire",
//     "favPlayer": "Virat Kohli"
//   },
//   {
//     "name": "Om",
//     "gameName": "Valorant",
//     "favPlayer": "MS Dhoni"
//   },
//   {
//     "name": "Krish",
//     "gameName": "COD Mobile",
//     "favPlayer": "Rohit Sharma"
//   },
//   {
//     "name": "Aman",
//     "gameName": "PUBG",
//     "favPlayer": "Sachin Tendulkar"
//   },
//   {
//     "name": "Yash",
//     "gameName": "Minecraft",
//     "favPlayer": "KL Rahul"
//   },
//   {
//     "name": "Harsh",
//     "gameName": "GTA V",
//     "favPlayer": "Suryakumar Yadav"
//   },
//   {
//     "name": "Nirav",
//     "gameName": "Fortnite",
//     "favPlayer": "Jasprit Bumrah"
//   },
//   {
//     "name": "Dev",
//     "gameName": "Apex Legends",
//     "favPlayer": "Shubman Gill"
//   },
//   {
//     "name": "Parth",
//     "gameName": "FIFA",
//     "favPlayer": "Ravindra Jadeja"
//   }
// ])

console.log();
// FIND

// let a = db.courses.find({"gameName": "Valorant"})
// console.log(a);
// console.log(a.count());

console.log();
// UPDATE

// db.courses.updateMany({"gameName": "Free Fire", "favPlayer": "Virat Kohli"},
//     {$set:{"gameName": "BGMI", "favPlayer": "MS Dhoni"}}
// )

// DELETE

// db.courses.deleteMany({"gameName": "Free Fire", "favPlayer": "Virat Kohli"})