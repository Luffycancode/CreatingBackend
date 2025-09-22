// // let a=8;
// // let a=9;

// var b=8
// var b=0



// {
// var test= 1
// }
// console.log(test)


// hoisting

console.log(value)

var value=22;


console.log('1'+ 22);
// Add option always works on as a string side
// output is 122

// Where as * multiplication works as real multiply Option
console.log('44'* 67)
// -> 2948 multiply results



function hello()
{
    console.log('hello');
}

hello();


function sum()
{
let ans=0;
for(let i=1;i<arguments.length;i++)
{
ans=ans+arguments[i];
}
return ans
}

console.log(sum(44,33,11,44,55,66,74,13));

// next topic ARROW functions