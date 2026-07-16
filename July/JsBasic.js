// Arrays,Object


let arr=['apple','banana','coffee','milk']

console.log(arr[2]);
console.log(arr)

arr[6]='kiwi'

//op
// coffee
// [ 'apple', 'banana', 'coffee', 'milk' ]
// [ 'apple', 'banana', 'coffee', 'milk', <2 empty items>, 'kiwi' ]

console.log(arr)

//Pushing the array items
//Push add the elements in the end of array

arr.push('mango')
//Can also push 2 items at one go

arr.push('abc','xyz')

console.log(arr)

// Removing element from Array
// Pop removes the element from the array fro the end 

// arr.pop();
// If want to remove multiple items from Array need to use pop multiple times

// To remove elemnt from mid of array- > Splice

// so arr.splice(indexvalue, Delete count)

// example
// let num=[1,2,3,4,5,6,7,8,9]

// // num.splice(3,5);
// // // This will delete the items from index 3 -> to after that 5 items 
// // // so o/p-> 1,2,3,9.            5 items 4,5,6,7,8,9 are deleted! 
// // console.log(num)

// // if want to remove one element now so eg want to remove 5? 
// num.splice(2,2)
// // 2-> index you are targetting 
// // 1-> only 1 element 

// // o/p-> 1,2,4,5,6,7,8,9

// // If we do splice(2,2)- > 1,2,5,6,7,8,9


// // What if we do splice(2,0)-> No elemnts are deleted-> 1,2,3,4,5,6,7,8,9
// console.log(num)



// okay Splice is used for both adding and removing element as well!!

// so now 

// If i want to add element how does it work??????


// num.splice(indexvalue,Delete_count,itemtoadd)

// The third param adds the element where the first/ targetted value is marked! eg-2 


// let num=[1,2,3,4,5,6,7,8,9]

// num.splice(2,1,44)
// here it will delete index2-> 3 and add 44 on that place

// console.log(num)

// *******
// let num=[1,2,3,4,5,6,7,8,9]

// num.splice(2,0,44)
// console.log(num)
// o/p-> 1,2,44,3,4,5,6,7,8,9

//Now here The targetted value is on index 2-> 3, but its not deleted as delete is 0 elements . So what it does is it adds element on same index - 2 and pushes the existing element to further inde




// **************************************************?

// Objects in JS , and imp question why arrays in JS are objects/or treated as objects
// eg-> console.log(typeof(arr))-> Object? WHYYYYY? 

// first we will do obj revision

// let obj={
//     Name:'om',
//     City:'nagpur',
//     Age:50,
//     Hobbies: ['Dance','paint','Gaming']
// }
// console.log(obj)
// // it gives o/p like----->>>>> 



// {
//   Name: 'om',
//   City: 'nagpur',
//   Age: 50,
//   Hobbies: [ 'Dance', 'paint', 'Gaming' ]
// }

// IN arrays There are index numbers are given 
// like
// let arr=[55,44,33,11,22,11]
//         0   1   2   3   4


// So why array an obj? 
// Becz JS converts and array intenally into obj. There is a proof eg

// suppose take a array, and if we print it we get data with index
// let array=[1,2,3,4,5,]
// console.log(array)
// (5) [1, 2, 3, 4, 5]0:1 1:2 2:3 3:4 4:5.   length: 5[[Prototype]]: Array(0)


// This can be changed and proved. Dont use it in real world example !

// let array= [1,2,3,4,5]
// array['newele']='6'
// console.log(array)
// o/p is 

// [ 1, 2, 3, 4, 5, newele: '6' ]
// ****** so here if we show index of element it shows newele instead of index 5! 
// its same as obj o/p shown


// (5) [1, 2, 3, 4, 5, newele: '6']
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// newele: "6"
// length: 5
// [[Prototype]]: Array(0)

