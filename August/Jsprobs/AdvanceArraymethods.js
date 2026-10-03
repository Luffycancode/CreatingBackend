// shift removes the value from starting of the array
// unshift adds the value at the starting of the array
// slice, concat
// array & object destructuring
// spread operators
// reference data types
// shallow copy and deep copy
// how to create deep copies
// find()
// includes()
// some()
// toSpliced()






// shift/ unshift


// let arr=[1,2,4,5,6,7]

// arr.shift()

// console.log(arr)


// arr.unshift(34,55,22,66)
// console.log(arr)




// slice, concat

// let arr=[1,2,3,4,5,6]


// let arr2=arr.slice(0,3)

// console.log(arr2)

// // arr.splice(0,2,99,77,88,55,44)
// // console.log(arr)



// // concat


// let arr3=arr.concat(arr2)

// console.log(arr3)




// array & object destructuring


// let arr=[1,5,3,2,7,8,9]

// let [a,b,c]=arr
// console.log(a+b+c)

// let obj={
//     Name:'Omkar',
//     Age:33,
//     City:'udayour'
// }


// let {Name,City}=obj

// console.log(Name,City)



//Spread operator


// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// let [a,b,c,d,e,...f]=arr



// let arr2= [-5,-4,-3,-2,-1,0]

// let arr3= [...arr2,...arr]

// console.log(arr3)



// Obj speread



let obj={
    Name:'Omkar',
    Age:33,
    City:'udayour'
}


let obj2={...obj}

console.log(obj2)