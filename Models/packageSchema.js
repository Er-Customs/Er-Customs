const mongoose = require('mongoose');
const schema = mongoose.schema

const packageSchema = new mongoose.Schema({
    containertype:{
        type:String,
    },
    weight:{
        type:String,
    },
})

const package = mongoose.model('packagetype', packageSchema)
module.exports = package;