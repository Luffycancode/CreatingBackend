// // let math=require('./mathFunctions')

// // console.log(math.add(3,4))
// // console.log(math.subtract(0,1))





// Task 3: Create an HTTP Server to Generate Random Numbers
// Create a new file named randomNumberServer.js.

// Create an HTTP server that:

// Generates a random number every 2 seconds.

// Sends this number as a response to the client in the form of an HTML page (e.g., Random Number: <random_number>).

// Use setInterval to generate a random number every 2 seconds.

// const http= require('http')



// setInterval(() => {
//     RandomNumber = Math.round(Math.random() * 100000);
// }, 2000);
// const server= http.createServer((req,res)=>
// {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });

//     res.end(`<h1>Random Number: ${RandomNumber}</h1>`);
    
// })


// server.listen(8000)




// Task 4: Log Events Using the fs Module
// In the randomNumberServer.js file, log the events of the server:

// Log the time the server starts running.

// Log when a request is received with details like the IP address or timestamp.

// Create a log file named server.log in the same directory using fs.

// Append logs to the file every time an event occurs (server start, incoming request).


const http= require('http')
const fs=require('fs')
const url=require('url')
const { connect } = require('http2')

const server= http.createServer((req,res)=>
{
if(req.url==='/favicon.ico'){ return res.end()}
else{
const logTime = new Date().toString().split(' ').slice(0, 5).join(' ');
const ipAddress = req.socket.remoteAddress;
const reqDetails = `[${logTime}] IP: ${ipAddress} | Method: ${req.method} | URL: ${req.url}\n`;
console.log(reqDetails.trim());

let MyURL= url.parse(req.url,true)
console.log(MyURL)

let imp_url= MyURL.pathname;

if(imp_url==='/')
{
            res.writeHead(200, {

            'Content-Type': 'text/html'

        });
    let name=MyURL.query.username
    return  res.end(`<h2>Hello ${name}. Welcome back</h2>`)
}

fs.appendFile('server.log',reqDetails,(err)=>
{
if(err){console.log('Error! Kindly please check again')}
})
return res.end('Server running on 8000')
}
})


server.listen(8000,(err)=>
{
    const startTime = new Date().toString().split(' ').slice(0, 5).join(' ');
    console.log(`[${startTime}] Server successfully started and running on port 8000`);
})