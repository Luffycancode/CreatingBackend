const express= require('express')

const app=express();


//Hey adding the middleware now!!! 


const logger=(req,res,next)=>
{
console.log('From Middleware')
next()
}


//adding 2nd logger as middleware so basically there are 2 middlwares


const logger2=(req,res,next)=>
{
console.log('In 2nd logger now')
next()
}


app.get('/',[logger,logger2],(req,res)=>
{
res.send('On root path')
})


app.get('/movies/:movieid',logger,(req,res)=>
{

// const data= req.query
// console.log(data)

const data= movies.find((item)=>{return item.id===parseInt(req.params.movieid)})

if(!data)
{
    return res.status(404).send('Movie does not exist')
}
else
{
    res.send(data)
}



})



// creating server to listen on port 2000

app.listen(2000,()=>
{
    console.log('Running on 2000')
})



const movies=[
    {
        id:1,
        name:'HP1',
        rating:10
    },
    {
        id:2,
        name:'HP2',
        rating:8
    },
    {
        id:3,
        name:'HP3',
        rating:1
    }
]
