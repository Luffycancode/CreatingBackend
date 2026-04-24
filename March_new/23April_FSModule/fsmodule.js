const fs= require('fs');


// async demos 

console.log('sampleA File reading in progress')

fs.readFile('sample.txt','utf8 ',(err,data)=>
{
    if(err)
    {
        console.log('Having errors in reading the file')
        return;
    }
    else
    {
        console.log(data)
    }
})

console.log('sampleA file Done')


// Now doing async

const dataa=fs.readFileSync('sample.txt','utf-8')
console.log('From sync')
console.log(dataa)
console.log('sync end')
