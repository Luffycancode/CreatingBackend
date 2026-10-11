const express= require('express')
const router= express.Router()
const {getusers}= require('../controllers/user')


router.get('/', getusers)


module.exports={router}