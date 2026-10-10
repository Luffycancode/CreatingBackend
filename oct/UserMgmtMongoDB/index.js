const express= require('express')
const mongoose= require('mongoose')
const app= express()
app.use(express.json())

mongoose.connect('mongodb+srv://Cluster74999:unknownpassword@backendnode.bauceb8.mongodb.net/BackendDatabase?appName=BackendNode')


const userSchema = mongoose.Schema({

  username:{type:String,required:true},
  email:{type:String,required:true,unique:true}

})


const User= mongoose.model('user',userSchema)


app.get('/users', async(req,res)=>
{
const userData= await User.find({})
console.log(userData)
res.json('All the users are displayed')
})

app.get('/users/:id', async(req,res)=>
{
const userID= req.params.id
const userData= await User.findById(userID)
console.log(userData)
res.json('User displayed')
})

app.patch('/users/:id',async(req,res)=>
{
const userID= req.params.id
const userdetails= req.body
const userData= await User.findByIdAndUpdate(userID, userdetails, { new: true })
console.log(userData)
res.json('User Updated')
})


app.delete('/users/:id',async(req,res)=>
{
const userID= req.params.id
const userData= await User.findByIdAndDelete(userID)
console.log(userData)
res.json('User Deleted')
})



app.post('/users',async (req,res)=>
{
const userdata= req.body

try{
let data= await User.create({
    username: userdata.username ,
    email: userdata.email
})
    console.log(data)
    return res.json('User has been created')
}catch(err)
{
    console.log(err)
    return res.json(err)
}





res.json('User created')
})


app.listen(3000,(err)=>
{
if(err){console.log(err)}
else{console.log('Server connected on 3000')}
})
