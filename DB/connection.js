require("dotenv").config()
const mongoose = require('mongoose')
const URL = process.env.MONGOODB_URI;
mongoose.set('strictQuery', false);
mongoose.connect(URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( ()=>{
    console.log("Connected to Databse.")
})
.catch((e)=>{
    console.log(e)
})