const express= require ('express')
const app= express();



// First practice on middleware implement and basic routing example



// Handling the middleware now

const logger=(req,res,next)=>
{
console.log('You are in middleware')
// res.send('You are authenticated').  This is wrong statment. You are already sending resonse to client here which is not a purpose. You want to pass in endpoint 
next()
}

app.get('/',logger,(req,res)=>
{
res.send('We are on root Path')
})


app.listen(3000,()=>
{
    console.log('Its running on 5k')
})

