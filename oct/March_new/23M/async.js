const fs= require('fs')
let before= Date.now();
let path='/Users/omkarjoshi/Documents/imp/CodePracs/March_new/23M/largefile.txt';
fs.readFile(path,'utf8',(err,data)=>
{
    if(err)
    {
        console.log('err')
    }
    console.log('Hey from inside')
})
console.log(`${Date.now()-before}`)