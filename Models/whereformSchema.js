const mongoose = require('mongoose');
const schema = mongoose.schema

const whereformSchema = new mongoose.Schema({
    country:{
        type: String
    },
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    houseadd1:{
        type:String
    },
    Landmark:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    postcode:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    selectionofcontainer:{
        type:String
    }
})

const whereform = mongoose.model('shipfromdetails', whereformSchema)
module.exports = whereform;