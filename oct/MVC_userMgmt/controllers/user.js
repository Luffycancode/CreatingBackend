const express= require('express')
const { User } = require('../models/user')
// const model= require(User.)


async function getusers(req,res) {

    const AllUsers= await User.find({})
    res.json(AllUsers)
}

module.exports={getusers}