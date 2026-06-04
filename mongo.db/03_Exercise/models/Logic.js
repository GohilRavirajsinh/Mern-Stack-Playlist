import mongoose from "mongoose";

const names = ['Alice Smith', 'Bob Jones', 'Charlie Brown'];
const languages = ['Smart AI Intelligence', 'AI Developer', 'Mern Stack'];
const cities = ['New York', 'United States', 'Australia'];

// Define Schema
const employeeSchema = new mongoose.Schema({
    name:               
    {
        type: String,
        enum: names,
        default: () => names[Math.floor(Math.random() * names.length)]
    },
    salary:             
    {
        type: Number,
        default: () => Math.round(Math.random() * 10 + 1) * 10000
    },
    language:           
    {
        type: String,
        enum: languages,
        default: () => languages[Math.floor(Math.random() * languages.length)]
    },
    city:               
    {
        type: String,
        enum: cities,
        default: () => cities[Math.floor(Math.random() * cities.length)]
    },
    isManager:          
    {
        type: Boolean,
        default: () => Math.random() >= 0.5
    }
}, {
    collection: 'employees' // collection is an inbuilt Mongoose option key, but its value can be changed to any name you want.
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;