const express= require('express')
const mongoose= require('mongoose')
const app= express()
const {getusers,createuser,getIUserByID,deleteUser,updateUser}= require('../controllers/user')
const userroute=express.Router()


userroute.route('/').get(getusers).post(createuser);
userroute.route('/:userid').get(getIUserByID).delete(deleteUser).patch(updateUser);

module.exports={userroute}
