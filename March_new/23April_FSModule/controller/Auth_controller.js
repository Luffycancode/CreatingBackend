const express= require ('express');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET=process.env.JWT_SECRET
const UserModel = require ('../Models/User_models')
const bcrypt = require('bcrypt');
const { decrypt } = require('dotenv');



async function loginUser(req,res)
{
const {email, username}=req.body

const user = await UserModel.findOne({email})
if (!user) {  
    return res.status(401).json({
        success: false,
        message: 'User not found'
    });
}

const comparepassword= await bcrypt.compare(username,user.username)

if(comparepassword==false)
{
    return res.status(401).json(
    {
        success: false,
        message: 'Username or password is wrong'
    })
}
else
{
    // const Usernamefromdb = await UserModel.findOne({username})
    // // console.log(Usernamefromdb.username)
    const token = jwt.sign
    (
        {
            name: username,
            email: email
        },
        JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );


        // console.log(Usernamefromdb)
        // console.log(username)

    // if(!Usernamefromdb)
    // {
    //     return res.status(401).json(
    //     {
    //         success: false,
    //         message: 'Wrong Username'
    //     })
    // }
    // // else
    // {


        return res.status(200).json(
        {
            success: true,
            message: 'Login successful',
            token
        })
    // }

}



}

async function registerUser(req,res)
{
const {name,age,username,gender,email} = req.body
//Creating a new user obj

const Encryptedusername= await bcrypt.hash(username,10)

const newuser = new UserModel({name,age,username:Encryptedusername,gender,email})


//Saving in Database-> Two types
// 1)
// UserModel.insertOne({newuser})

//You can also use save method- > newuser.save()
//Suppose best way to do fucntion async

try
{
const responsefromdatabase= await newuser.save()

res.json({
    status: true,
    message: "User registered successfully",
    data: responsefromdatabase
})
}
catch(error)
{
res.status(500).json({
    status: false,
    message: "Could not register",
    Error: error.message
})

}




    
}

module.exports={loginUser,registerUser}








// module.exports=AuthController;



