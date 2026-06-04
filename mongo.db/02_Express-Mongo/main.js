import mongoose  from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let connection = await mongoose.connect("mongodb://localhost:27017/")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({title: "Todo First line", desc: "Description of this Todo", isDone: false})
    todo.save();
    res.send('After Refresh Query Run! Joyyyyy');
})

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo);
    
    res.json({todo: todo.title, desc: todo.desc})
})  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})