const mongoose = require('mongoose');
const { isEmail } = require('validator');

const schema = mongoose.schema
const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Please enter your name'],
    },
    surname:{
        type: String,
        required: [true,'Please enter your surname'],
    },
    email:{
        type: String,
        required: [true, 'Please enter an email'],
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    message:{
        type: String
    }
})

const contact = mongoose.model('contactus_Coll', contactSchema)
module.exports = contact;