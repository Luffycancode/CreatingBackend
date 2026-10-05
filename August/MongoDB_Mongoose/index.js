const express= require('express')
const mongoose= require('mongoose')
const app = express()
app.use(express.json());


// compass
// mongodb+srv://Cluster74999:<db_password>@backendnode.bauceb8.mongodb.net/


mongoose.connect('mongodb+srv://Cluster74999:omkar@backendnode.bauceb8.mongodb.net/UserDatabase?appName=BackendNode')
.then(()=>{console.log('Database connected')})
.catch((err)=>{console.log(err)})


let userSchema= mongoose.Schema({
  username: String,
  email: String
})


//Creating user model

let User= mongoose.model('user',userSchema)
 

app.post('/users',(req,res)=>{

let userdata= req.body

const newUser = new User({
    username: userdata.username,
    email: userdata.email
})

// newUser.save()
// .then(()=>{res.json('User created')})
// .catch((err)=>{console.log(err)})




newUser.save()
.then((data) => {
    console.log("SAVED USER:", data)
    res.json('User created')
})
.catch((err) => {
    console.log("SAVE ERROR:", err)
})


})



app.listen(3000,(err)=>
{
    console.log('Conected on 3000')
})