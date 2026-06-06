const express= require ('express');
// const server= express()
const UserModel = require ('../Models/User_models')
// server.use(express.json())



async function loginUser(req,res)
{
const {email, username}=req.body

const user = await UserModel.findOne({email})
if(!user)
{
    return res.status(401).json(
    {
        success: false,
        message: 'User not found'
    })
}
else
{
    const name = await UserModel.findOne({username})
    if(!name)
    {
        return res.status(401).json(
        {
            success: false,
            message: 'Wrong Username'
        })

    }
    else
    {
        return res.status(200).json(
        {
            success: true,
            message: 'Login successful'
        })
    }

}



}

async function registerUser(req,res)
{
const {name,age,username,gender,email} = req.body
//Creating a new user obj

const newuser = new UserModel({name,age,username,gender,email})


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