const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    fname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true})
const user = mongoose.model("user",userschema);
module.exports=user;