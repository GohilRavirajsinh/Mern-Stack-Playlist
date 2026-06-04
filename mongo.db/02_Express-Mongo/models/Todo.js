import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: {type: String, require: true, default: "Defualt Value is Set on Title"},
  desc: String,
  isDone: Boolean,
});

export const Todo = mongoose.model('Todo', TodoSchema);