const fs= require('fs')

fs.writeFile('random.txt','Hello this is christiano',(err)=>
{
if(err)
{
    console.log(err)
}
else{
    console.log('File created and data is updated')
}
})


fs.appendFile('random.txt','Now this is updated data from append method',(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('Done append')
    }
})



try{
fs.writeFileSync('Randpmsyncfile','Hello this syncfiledata new updated now after try catch')
console.log('Sync file is created')
}
catch(error)
{
    console.log(error)
}
