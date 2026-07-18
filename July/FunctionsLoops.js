// Normal functions

function greet()
{
    console.log('Hey')
}

greet()

//Functions with param
let name='Rahul'
function Greet(name)
{
console.log('Hey '+name)
}
Greet(name)


// More than 1 parameter
function add(x,y)
{
return x+y
}
console.log(add(4,5))



//Arrow function
const hello=()=>{
console.log('Hello from arrow function')
};
hello()


const addition=(a,b)=>a+b
console.log(addition(5,5))


minus=(a,b)=>
{
console.log(a-b)
}

minus(5,33)



// Loops
for(let i=0;i<9;i++)
{
    console.log(i)
}

let arr=[1,2,3,4,5,6,7,8,9999]

arr.forEach((i)=>console.log(i))
arr.forEach(i=>console.log(i))


//map method practice

let square = arr.map(i=>i*i)
console.log(square)


let evennum=arr.filter(i=>i%2==0)
console.log(evennum)
