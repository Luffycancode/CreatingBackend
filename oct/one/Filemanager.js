const fs = require ('fs');


//sync file reading and writing
const syncdata =fs.readFileSync('input.txt','utf8');
console.log(syncdata)

fs.writeFileSync('input.txt','Hello i am omkar from sync file function writing on inputt','utf-8')




//async file reading and writing
fs.readFile('input.txt','utf-8',(err,data)=>
{
console.log(data)
})


fs.writeFile('input.txt','Heyhelloiamasycn',(err)=>
{
console.log(err)
})
