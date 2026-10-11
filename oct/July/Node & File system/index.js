// To create an HTTP server

const http=require('http')
const fs=require('fs')


const server =http.createServer((req,res)=>
{
// res.end('Server is up and running')
// fs.writeFile('FilecreatedfromServer','File has been created after server creation',(err,data)=>
// {
// return
// })
let log= `${Date.now()} Request received: ${req.url}\n`

fs.appendFile('FilecreatedfromServer',log,()=>
{
if(req.url=='/')
{
    res.end('Hello from server->   / ')
}
else if(req.url=='/home')
{
    res.end('Hello from server->   /home ')
}
    
})


})


server.listen(3000,'localhost',()=>
{
    console.log('Running on 3000')
})


