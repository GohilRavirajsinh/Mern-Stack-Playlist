// Generate a dummy data in this format in a collection called employees in a db called company!

// create button name Generate data

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to archieve it
// Everytime the button is clicked, you should clear the collection

import express from "express";
import mongoose from "mongoose";
import Logic from "./models/Logic.js"
import Employee from "./models/Logic.js";

const app = express()
const port = 3000
const database = "Company"; // create database

// 1. Connect to MongoDB (Removed 'await' from string template, which was invalid)
await mongoose.connect(`mongodb://localhost:27017/${database}`);

// 2. Main Page: Displays the 'Generate Data' Button
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Employee Generator</title>
    </head>
    <body>
        <!-- Clicking this button triggers the /generate-data route -->
        <a href="/generate-data" class="btn">Generate Data</a>
    </body>
    </html>
  `);
});

app.get('/add', async (req, res) => {
    for (let i = 0; i < 10; i++) {
        const emp = new Employee({});
        await emp.save();
    }
    console.log("10 fresh random record inserted on button click!");
    res.send("After Refresh Query Run! Joyyyyy. Data added successfully!");

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})