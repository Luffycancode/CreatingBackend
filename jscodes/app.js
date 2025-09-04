const add= require('./Simple')
const fs= require('fs')


fs.readFile('/Users/omkarjoshi/Documents/imp/CodePracs/jscodes/remote_change','utf8',(err,data)=>
{
if(err)
{
    throw err
}
else{
    console.log(data)
}
})

add.add(6,99);


fs.writeFile
(
'/Users/omkarjoshi/Documents/imp/CodePracs/jscodes/writedfile','HeyI have writtena file',(err,data)=>{
if(err)
{
    console.log('oops error 😊')
}
else{
    console.log('no error 😊')
}
}
)


