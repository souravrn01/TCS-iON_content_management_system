const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserSchema = new schema({
    name: String,
    email:String,
    password:String,
    phone: Number,
    isAdmin:{
        type: Boolean,
        default: false
    }
})

let userData = mongoose.model('user-data',UserSchema)
module.exports = userData