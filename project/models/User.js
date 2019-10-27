const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const UserSchema =new Schema({
    name:{
        type:string,
        required :true
    },
   email:{
        type:string,
        required :true
    },
    password:{
        type:string,
        required :true
    },
    avator:{
        type:string,
        required :true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports = User = mongoose.model('users'User);