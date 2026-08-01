// // Map and filters

// const { use } = require("react")


// let array=[1,2,3,4,5,6,7,8,9,10]
// console.log(array)


// let a=array.map(i=>i*i)
// // console.log(a)


// let b=array.filter((i)=>
// {
// return i%2==0
// }).map(i=>i*i*i*i)
// // console.log(b)

// //Now splice methods revision ! 

// // removing 4,5 ffrom array

// // array.splice(3,2)

// // adding elements within an array
// // remove elements 3,4 and add 99,999 instead of that
// // array.splice(2,2,99,99999)

// // Now without removing it do it! add after 5-> 99,9999,99999 then 6 should come
// // array.splice(5,0,99,9999,99999)
// // console.log(array)





// // Now callback function, promises, async await! 



// // Callback. When a function is passed as an argument/parameter to other fucntion to perform some operation afterwards is called callback


// // greet=(callback)=>
// // {
// // let name='omkar'
// // callback(name)
// // }
// // name=(name)=>
// // {
// // console.log(`Hello ${name}`)
// // }

// // greet(name)
// let topping='Mushroom'

// makepizza=(topping,callback)=>
// {
// setTimeout(()=>
// {
//     callback(topping)
// },2000)
// }

// callback=(topping)=>
// {
//     console.log(`Your ${topping} pizza is ready sir`)
// }

// makepizza(topping,callback)



//Using Promise

// const myPromise= new Promise((resolve,reject)=>
// {

//     setTimeout(()=>
//     {
//         if(false)
//         {
//             resolve('Pizza is ready sir! ')
//         }
//         else
//         {
//             reject('Sorry sir! Pizza is not ready yet')
//         }
//     },2000)


// }).then((Message)=>
// {
// console.log(Message)
// }).catch((Message)=>
// {
// console.log(Message)
// })

// Async await


// async function pizzaorder(PizzainProcess)
// {
// let result = await PizzainProcess()
// console.log(result)
// }

// PizzainProcess=()=>
// {

//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log('Pizza is ready now')
//         }, 2000);
//     })

// }
// pizzaorder(PizzainProcess)



// Fetching users example using fetch whihc is kind of promise example

// const users=fetch('https://dummyjson.com/users').then((data)=>
// {
//    return data.json()
// })
// .then((users)=>
// {
//     console.log(users.users[0])
// })
// .catch((error)=>
// {
// console.log(error)
// })


// console.log(users)


// Using async


// async function fetchusers()
// {
// const response= await fetch('https://dummyjson.com/users')
// const data= await response.json()
// console.log(data) 

// }

// fetchusers()



//A promise Creation


const Mypromise = new Promise((res,rej)=>
{
if(false)
{
    res('The pizza is ready')
}
else
{
    rej('Pizza not ready yet, Wait for a while')
}
})


Mypromise.then((message)=>
{
console.log(message)
}).catch((message)=>
{
console.log(message)
})

