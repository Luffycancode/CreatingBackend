const express= require('express')
const app= express()
const fs=require('fs')
let users= require('./MOCK_DATA.json');
const { json } = require('stream/consumers');
// const { useEffect } = require('react');
app.use(express.json());




app.route('/users')
.get((req,res)=>
{
res.json(users)
})
.post((req,res)=>
{
    let userdetails= req.body
    let userid= Number(userdetails.id)

    let finduserData= users.findIndex(i=>i.id===userid)
    if(finduserData!=-1)
    {
        return res.json('User already exists')
    }
    else
    {
        users.push(userdetails)
                fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err)=>
                {
                    if(err){
                        console.log(err)
                        return res.json('Failed to save user data');
                    }
                    else{ return res.json('User Created')}
                })
    }

})



app.route('/users/:userid')
.get((req,res)=>
{
userid= Number(req.params.userid)
let userexist= users.find(i=>i.id===userid)

if(!userexist){return res.json('User not found')}
else{return res.json(userexist)}

})
.patch((req,res)=>
{

    let userdetails= req.body
    let userid= Number(req.params.userid)
    let finduserData= users.findIndex(i=>i.id===userid)

    if(finduserData===-1){ return res.json('User does not exist')}

    let data= {...users[finduserData],...userdetails}
    users[finduserData]=data
    return res.json({ message: 'User Modified', user: data });

})
.delete((req,res)=>
{
let userid= Number(req.params.userid)
let userexist= users.find(i=>i.id===userid)
if(!userexist){res.json('User does not exist')}

let finduserData= users.findIndex(i=>i.id===userexist.id)
users.splice(finduserData,1)
fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err)=>
{
if(err){console.log(err)}
else{res.json('Deleted')}
})

})









app.listen(3000,(err)=>
{
    if(err)
    {
        console.log(err)
    }
})