const express= require('express')
const {connectdb} = require('./config/db');
const { User } = require('./models/user');
const app = express()
require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json())
const {router}= require('./routes/user')
const {logger}=require('./middleware/logger')

connectdb() 

app.use('/api/users',logger,router)



// app.post('/api/users',(req,res)=>
// {

//     const {username,email}=req.body

//     User.create({
//         username:username,
//         email:email
//     })
//     res.json("User has been created")
// })







app.listen(PORT,(err)=>
{
    if(err){console.log(err)}
    else{{console.log('Server running on 3000')}}
})

