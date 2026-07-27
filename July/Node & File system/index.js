// To create an HTTP server

const http= require('http')


const server =http.createServer((req,res)=>
{
res.end('Server is up and running')
})


server.listen(3000,'localhost',()=>
{
    console.log('Running on 3000')
})