const fs= require('fs');

const time= Date.now();
fs.readFile('random.txt','utf8',function cb(err,data)
{
if(err)
{
    console.log('Err')
}
else
{
    console.log('Read done')
}

})
console.log(`${Date.now()-time} ms`)

console.log('testing');
