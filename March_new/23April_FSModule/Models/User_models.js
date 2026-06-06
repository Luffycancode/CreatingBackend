const mongoose= require('mongoose')


// mongoose.connect('mongodb://localhost:27017/bel20');
// No need here as Server is already handling the thing

const userSchema= new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true  
    },
    age: {
        type: Number,
        required: true,
        trim: true,
        min: 18
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    }   
})

const User= mongoose.model('User',userSchema)

// console.log(User.find())

module.exports=User;




