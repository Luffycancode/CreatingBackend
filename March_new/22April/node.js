// // const os= require('os')

const { readFile } = require("node:fs")
const { nextTick } = require("node:process")
const { callbackify } = require("node:util")
const { promiseHooks } = require("node:v8")
const { createBrotliCompress } = require("node:zlib")

// // // Learning few things about os module

// // const platform=os.platform();
// // console.log(platform);
// // console.log(os.arch());
// // console.log(os.cpus());
// // console.log(os.totalmem());




// // Promise example


// // let url= fetch('https://jsonplaceholder.typicode.com/posts')
// // .then((response)=>
// // {
// //     return response.json()
// // })
// // .then((data)=>
// // {
// //     console.log(data[0])
// // })

// // console.log(a)
// // let a=20

// // console.log(data)



// // Async and Callback! 


 

// // function greet(name)
// // {
// // console.log('Hello ',name)
// // }


// // function user()
// // {
// //     greet('Omkar')
// // }

// // user();


// // setTimeout(()=>{
// //     console.log('Hahahhaha')

// // },3000)

// // Similar to this 

// setTimeout(function hey()
// {
// console.log('Hahahhaha')
// },4000)

// setTimeout(function ()
// {
// console.log('Hahahhaha')
// },4000)



// const baz = () => console.log('baz');
// const foo = () => console.log('foo');
// const zoo = () => console.log('zoo');
// const start = () => {
//   console.log('start');
//   setImmediate(baz);
//   new Promise((resolve, reject) => {
//     resolve('bar');
//   }).then(resolve => {
//     console.log(resolve);
//     process.nextTick(zoo);
//   });
//   process.nextTick(foo);
// };
// start();


// DryRun

// Print- start, foo, bar ,zoo, baz


// dry

// callback of readFile
// callback of nextTick
// callback of promis
// callback of settimeout

// o/p
// nexttick1
// promiseresolv1
// settimeout1
// readfile1


// now again 3 callback

// cb of setImmediate
// cb of nextTick
// cb of promis

// now 

// nexticekinside readfile
// promiseresolce inside readfile
// setimmediate inside readfile


