const path = require('path');
const fs=require('fs')

const extensionname= path.extname('random.txt');
console.log(extensionname)

// const dataa=fs.readFile('/Users/omkarjoshi/Documents/imp/CodePracs/one/random.txt')

fs.readFile('/Users/omkarjoshi/Documents/imp/CodePracs/one/random.txt','utf8',(err,data)=>
{
    if(err)
    {
        console.log('Error')
        return
    }
    else{
        console.log(data)
    }
})

let addfun=(a,b)=>
{
return a+b;
}


console.log(addfun(40,90))



console.log(module)

setTimeout(() => {
        console.log('I am late')
    },1000)
// settimeout();

// setTimeout(() => {
//   alert("Hello after 3 seconds");
// }, 3000);


module.exports= addfun;