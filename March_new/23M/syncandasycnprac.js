// read and write file in  async/
let fs= require('fs')
let path='/Users/omkarjoshi/Documents/imp/CodePracs/March_new/23M/largefile.txt';
fs.readFile(path,'utf-8',(err,data)=>
{
    if(err)
    {
        console.log(err)
        return
    }

    fs.writeFile('newfile.txt',data,'utf8',(err)=>
    {
        if(err)
    {
        console.log(err)
        return
    }

    })
    console.log('From inside')
})
console.log('Hi')


