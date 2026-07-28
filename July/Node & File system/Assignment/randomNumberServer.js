const http= require('http')
const fs= require('fs')

let RadomNumber=0;

setInterval(()=>{
    RadomNumber=Math.floor(Math.random()*10000)
    // console.log(RadomNumber)
},2000)


const server= http.createServer((req,res)=>
{     
    const Time= new Date().toLocaleString();
    // To get proper date
    const method = req.method;
    //Shows req type made to server
    const url = req.url;
    // URL /,/home
    const ip = req.socket.remoteAddress;
    //ip address

    fs.appendFile('server.log',`\nTime: ${Time}. The details are : ${method}, ${url}, ${ip}`,(err)=>
    {
        if(err) throw err
    })
    

    console.log(`Time: ${Time}. The details are : ${method}, ${url}, ${ip}`)

    res.setHeader('Content-Type', 'text/html');
    // To get proper data
    res.end(`<h2>Random Number: ${RadomNumber}</h2>`);
})



const serverstartlog= `\nServerTimeStart: ${new Date().toLocaleString()} | Server started on port 8000`;

server.listen(8000,()=>
{

    fs.appendFile('server.log',`\n${serverstartlog}`,(err)=>
    {
        if(err) throw err
    })
    console.log('Server running on 8000')
})