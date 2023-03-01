require("dotenv").config()
const port = process.env.PORT ;
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routers/routes')
const db = require('./DB/Connection')
const cookieParser = require('cookie-parser');
const { checkUser } = require('./middleware/authMiddleware');



const app = express()

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({extended : true}))

//static css and js
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static('assets'))
app.use(express.static('vendor'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.listen(port,()=>{
    console.log("Server is Listening")
})

app.get('*', checkUser);
app.use('/',router)
app.use('/login',router)
app.use('/signup',router)
app.use('/categry',router)
app.use('/contact',router)
app.use('/form',router)
app.use('/listing',router)