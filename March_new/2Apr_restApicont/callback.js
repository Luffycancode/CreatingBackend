// Lets try with setTimeout function style

// This is first type of settimeout style 
// simply calling the functoin one from first parameter and passing 2nd as timer time

// function one()
// {
// console.log('From one')
// }

// function two()
// {
// console.log('From Two')
// }

// setTimeout(one,3000)
// two()



// Now Second type. Directly declare and call fucntion in it! 

// setTimeout(()=>
// {
// console.log('From one')
// },3000)

// or

// setTimeout(function one()
// {
// console.log('From one')
// },3000)


// function two()
// {
// console.log('From Two')
// }
// two()



//Now the third scenario

// We have both functions normally, But now passing both from each other

// function one(callback)
// {
// console.log('one')
// setTimeout(callback,4000)
// }

// function two ()
// {
//     console.log('two')
// }

// setTimeout(()=>one(two),3000);



//Best example of Callback using the find method used for arrays. It takes param as callbacks


let arr=['Apple','Sitaphal','Mango','Dragon']


let fruit=arr.find((item)=>item=='Dragon')
// or

// let fruit=arr.find((item)=>
//     {
//        return item=='Dragon'
//     })

//Equal to
// let fruit=arr.find(function(item)
// {
// if(item=='Dragon')
// {
//     return item
// }
// })

console.log(fruit);