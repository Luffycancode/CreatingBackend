const express= require('express')
const app= express();


const movies =[
    {
        movieid:1,
        moviename:"golmaal",
        movierating: 24,
    },
    {
        movieid:2,
        moviename:"happysigh",
        movierating: 77,
    },
]

app.listen(3000,()=>
{
    console.log('server is running')
})

app.get('/',(req,res)=>
{
res.send('Hey')
})

app.get('/api/movies',(req,res)=>
{
res.send(movies)
}
)


app.get('/api/movies/1',(req,res)=>
{
res.send(movies[0])
}
)

console.log('hey')