const mongoose = require('mongoose');
const schema = mongoose.schema

const toformSchema = new mongoose.Schema({
    country1:{
        type: String
    },
    fname1:{
        type:String
    },
    lname1:{
        type:String
    },
    houseadd2:{
        type:String
    },
    Landmark1:{
        type:String
    },
    city1:{
        type:String
    },
    state1:{
        type:String
    },
    postcode1:{
        type:String
    },
    phone1:{
        type:String
    },
    email1:{
        type:String
    },
})

const toform = mongoose.model('shiptodetails', toformSchema)
module.exports = toform;