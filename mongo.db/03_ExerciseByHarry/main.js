import express from 'express';
import Employee from './models/Employee.js'         // import syntax
// const Employee = require('./models/Employee.js') // require syntax
const app = express()
const port = 3000

import mongoose from 'mongoose';
await mongoose.connect('mongodb://localhost:27017/HarrysCompany')


app.set('view engine', 'ejs')

const getRandom = (arr) => {
    let randomNumber = Math.floor(Math.random() * arr.length)
    return arr[randomNumber]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' })
})

app.get('/generate', async (req, res) => {
    // Clear the Collection Employee
    await Employee.deleteMany({})
    // Generate Random Data

    let randomNames = ["Goku", "Ravi", "Stark"]
    let randomLanguages = ["Mern", "C++", "Python"]
    let randomCities = ["Tokyo", "Japan", "Spein"]
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 25000),
            language: getRandom(randomLanguages),
            city: getRandom(randomCities),
            isManager: Math.random() > 0.5 ? true : false
        })

        // await e.save()
    }

    res.render('index', { foo: 'FOO' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})