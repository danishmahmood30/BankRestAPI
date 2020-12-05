var mongoose = require('mongoose')

const Schema = mongoose.Schema

module.exports.CustomerSchema = new Schema({
    aadhaar: {
        type:Number,
        length:12
        
    },
    name: {
        type:String
    },
    age: {
        type:Number
    },
    address1: {
        type:String
    },
    address2: {
        type:String
    },
    state: {
        type:String
    }
})