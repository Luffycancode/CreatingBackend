const express= require('express')
const app = express()
const DbConnect= require('./config/db')
const cookieParser = require('cookie-parser');
const PORT= process.env.PORT
const {Productrouter}= require('./Routes/product')
const {Userrouter}=require('./Routes/user')
const {checkauth}= require('./Middleware/checkauth')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());



app.use('/api/products',Productrouter)

app.use('/api/users',Userrouter)




//Server start and Database connection
async function ServerStart() {
    try
    {
        await DbConnect()
        app.listen(PORT,(err)=>{
            if(err){console.log(err)}
            else{console.log('Connected server on 3000')}
        })
    }
    catch(err)
    {
        console.log(err)
    }
}
ServerStart()



