// // const data= fetch('https://randomuser.me/api/')

// // console.log(data)

// //o/p-> Promise { <pending> }

// const dataa= fetch('https://randomuser.me/api/')
// dataa.then((res)=>
// {
// console.log(res)
// })
// .catch((err)=>
// {
//     console.log(err)
// })






// // Promise code for file download

// const promise = new Promise((res,rej)=>
// {
//     let data=true
//     if(data)
//     {
//         res('Data downloaded successfully')
//     }
//     else
//     {
//         rej('Could not download the data. Please check the internet connection')
//     }
// })

// promise.then((message)=>
// {
//     console.log(message)
// }).catch((error)=>
// {
//     console.log(error)
// })



// Using async Await

async function quotes()
{
const data = await fetch('https://randomuser.me/api/')
let quote= await data.json()
console.log(quote)
}
quotes()



