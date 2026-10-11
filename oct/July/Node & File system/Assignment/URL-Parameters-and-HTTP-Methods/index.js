const http= require ('http')
const fs= require('fs')
const url = require('url')

const server= http.createServer((req,res)=>
{

const requrl= url.parse(req.url,true)
const time= new Date().toLocaleString()
const urlPath= requrl.pathname
const method= req.method
const reqQuery= JSON.stringify(requrl.query)


if(urlPath!='/favicon.ico')
{
    fs.appendFile('server.log',`\nTime: ${time}, \nURL: ${urlPath}, \nMethod: ${method}, \nQueryparameters: ${reqQuery}\n`,(err)=>
        {
            if(err) throw err
        })

if(urlPath==='/home')
{
    res.end('On home page')
}
else if(urlPath==='/profile')
{
    res.end('On profile page')
}
else if(urlPath==='/search')
{
    res.end('On search page')
}
else res.end("Server is up and Running")
}








})


server.listen(8000,(err)=>
{
if (err) throw err

console.log(`Running Port: 8000,   TimeLog:  ${new Date().toLocaleString()}`)
})

