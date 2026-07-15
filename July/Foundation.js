// console.log('Hey hello')
// console.warn('Dont!')
// console.error('Bad gateway')
// // O/p 

// // let,const,var(It is deprecated and not mostly used now)


// console.log(b)
// //undefined
// console.log(a)
// // Error


// let a=10
// const name='Om'
// var b=30

// // undefined,null
// let age=undefined;
// let year=null;


// Referncetype-> Obj


//Array
let stars=['salman','sharukh','ranvir']
console.log(stars)


//Obj
let person1={
    name:'raj',
    age:24,
    city:'mumbai'
}
console.log(person1)


console.log(typeof(stars))

console.log(typeof(person1))


// types of datatypes-> Primitive, referece(non-primitive)

// refrence-> [array],{obj},(fucntions)
// primitive-> numbers,string, boolean, null, undefined, bigInt

let person2=person1;
//This refers to same address, hence if changed anything in this original person 1 is also changed


person2.city='Delhi';

console.log(person1)