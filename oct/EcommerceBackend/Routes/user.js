const express= require('express')
const Userrouter= express.Router()
const app=express()
const Productrouter= express.Router()
const {Allusers,CreateUser,Deleteuser,loginuser}= require('../Controllers/user')
const {checkauth}= require('../Middleware/checkauth')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');




Userrouter.route('/').get(Allusers)
Userrouter.route('/createuser').post(CreateUser)
Userrouter.route('/deleteuser/:id').delete(Deleteuser)
Userrouter.route('/login').get((req,res)=>{
res.render('login.ejs')
})
Userrouter.route('/loginconfirm').post(loginuser)

module.exports={Userrouter}