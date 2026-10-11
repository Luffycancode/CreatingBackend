const mongoose= require('mongoose')

const userSchema=mongoose.Schema({
    Name:{type:String},
    Age:{type:Number},
    Email:{type:String}
})

const User=mongoose.model('user',userSchema)

module.exports={User}
