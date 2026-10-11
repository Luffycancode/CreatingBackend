// IMP

// shift/unshift/slice/concat 

// Shift concept*****************************
// let arr= [1,2,3,4,5,6]
// arr.shift()

// console.log(arr)


//unshift*******************************
// arr.unshift(20)
// console.log(arr)
// arr.unshift(30,470,232,22)
// console.log(arr)

// ---> 
// [ 2, 3, 4, 5, 6 ] It removes the first element of the array! 
// The Front of the Array
// shift(): Removes the first element.     Only 1 item. Takes no arguments
// unshift(): Adds to the front.           Multiple items. Pass them as a comma-separated list

// The End of the Array
// push(): Adds to the end.                Multiple items. Pass them as a comma-separated list.
// pop(): Removes the last element.-      Only 1 item. Takes no arguments






// slice*****************************
// The JavaScript slice() method copies a section of an array and returns it as a new array.
// Its a shallow copy only to level 1, nested items are affected

// let arr= [1,2,3,4,5,6,7,8,9]
// let arr2=arr.slice(2,6)
// console.log(arr2)

// --> [ 3, 4, 5, 6 ]



// Concat*********************
// Used to combine 2 arays 


// let arr= [1,2,3,4,5]
// let arr2= [5,4,2,3,90]
// let arr3= arr.concat(arr2)
// console.log(arr3)




// Array and obj desrtutring *****************************

// let arr= [1,2,3,4,5]

// We can seperate values using like
// let a=arr[0]
// let b=arr[1]
// but oner more method to destructure

// let [a,b,c]=arr;
// console.log(a,b,c)
//-> 1 2 3


// If we want to skip middle value if required then 
// let [a,b,,d,e]=arr
// console.log(a,b,d,e)
// ---> 1 2 4 5


// Now Obj destructuring**************

// let obj={Name:'Rohan', age:20, city:'banpur'}

// let {name,age}= obj
// let {city}=obj
// console.log(name,age)
// console.log(city)
//For objects specific names are required accoring to the obj KEYs are required and value is matched! 



// Spread operator ' ...  '   *********************


// small example

// let arr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]


// let [a,b,c,d,e,...f]=arr
//The f will have all the rest items of arr. This is spread operator. 
// f contains all remaining items as in array

// o/p
// console.log(a,b,c,d,e,f)
// // ---->.   1 2 3 4 5 [6,7,8,9,10,11,12,13,14,15,16]

// let arr2= [-5,-4,-3,-2,-1,0]

// let arr3= [...arr2,...arr]
// //Concating the array! 

// console.log(arr3)
//-> 
// [
//   -5, -4, -3, -2, -1,  0,  1,
//    2,  3,  4,  5,  6,  7,  8,
//    9, 10, 11, 12, 13, 14, 15,
//   16
// ]




// Same for objects as well- using the spread operator

// let person={
// name:'Om',
// age:22,
// city:'vsr'
// }
// let personmoredetails={
// hobby:'Reading',
// bloodgrp:'+A'

// }

// let person2={...person}
// console.log(person2)
// o/p->{ name: 'Om', age: 22, city: 'vsr' }

//Same we can combine the objects like arrays in spread operator

// let person3={...person,...personmoredetails}
// console.log(person3)
// o/p-> { name: 'Om', age: 22, city: 'vsr', hobby: 'Reading', bloodgrp: '+A' }
//If both objecs by chance have 2 same key names ie age . It will take the second object age as a property when we try to combine



// Now
// Reference Data types*********************************************
// {}, [], () This are basically used for refernce data types

// ARRAY
// let a=[1,2,3,4,5,6]
// let b=a;
// // This works as SHALLOW copy! It looks like we have copied the data but its not. It points to same memoery address that of a. So if try to change data of b it affects a as well! So they point to same memory.

// b.pop()
// console.log(a);
// --->1,2,3,4,5 
// console.log(b);
// --->1,2,3,4,5

// Same goes for Obj. If we try to assign to another it only shows its copied but its not. Its a shallow copy.Changing ones data will affect other

//Object

// let person={Name:'Omkar',age:20,city:'omar',profession:'job'}
// person2=person;

// person2.city='Jaipur'
// console.log(person,person2)
// --> Both cities of the person will be changed to jaipur as they point to same memory address! Its shallowcopy



// So What to do if we want too copy data without being affected or no shallow copy? 
//---> That is Spread operator
// But is it a Deep copy?? NO!!! Not 100%. Its deep copy to some extent/level but not completly. Inner brackets, loops data points to same memory address, normal level are deep copy but inner are shallow. Eg
//Inner data level using brackets 

// let a=[1,2,3,4,5,[6,7,8,9],10,11,12]
// let b=[...a]
//Copied using spread operator. Its deep copy but not 100% 

// First we try to change data to some level

// b.pop()

// console.log(a)
// // --> [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9 ], 10, 11, 12 ]
// console.log(b)
// --> [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9 ], 10, 11 ]

//Here data of a is not affected as its on specific level so it works as deep copy here
//But if we try to manipulate data to inside level its not deep copy its shallow copy. A will be affected too

// b[5][1]=99999
//Targetting internal level data

// console.log(a)
// // ---> [ 1, 2, 3, 4, 5, [ 6, 99999, 8, 9 ], 10, 11, 12 ]
// console.log(b)
// ---> [ 1, 2, 3, 4, 5, [ 6, 99999, 8, 9 ], 10, 11, 12 ]

// See here the data of a is also changed/affected as its on same addresss location. SO its not deep copy completely
// its shllawo copy


//Same goes for objects copied using spread operator. Its not completey deep copy. But to some extint 

// let person={
//     Name: 'Omkar',
//     age:20,
//     hobbies:['football','Hockey','reading'],
//     FavAnime: 'Naruto'
// }


// let person2={...person}

// Now targetting normal level in the Object. It works as deep copy

// person2.FavAnime='Pokemon'
//We have changed the proeprty of person 2 here which was copied from person using spread operator.
//This does not completly works as deep copy. Only to some level, inside level is shallow copy

// console.log(person)
// -->
// {
//   Name: 'Omkar',
//   age: 20,
//   hobbies: [ 'football', 'Hockey', 'reading' ],
//   FavAnime: 'Naruto'
// }


// console.log(person2)
// -->
// {
//   Name: 'Omkar',
//   age: 20,
//   hobbies: [ 'football', 'Hockey', 'reading' ],
//   FavAnime: 'Pokemon'
// }

//Here only second person property will be changed. SO here acts like deep copy

// Now if we try to change more deep level value It will affect the original value toolbar. Eg

//Insider array level
// person2.hobbies[1]='Volleyball'

// console.log(person)
// -->
// {
//   Name: 'Omkar',
//   age: 20,
//   hobbies: [ 'football', 'Volleyball', 'reading' ],
//   FavAnime: 'Naruto'
// }

// console.log(person2)
// -->
// {
//   Name: 'Omkar',
//   age: 20,
//   hobbies: [ 'football', 'Volleyball', 'reading' ],
//   FavAnime: 'Naruto'
// }

// It affects here. SO its not a deep copy at this level! It works at shallow
// So Spread operators are also not perfect deep level copy!!!!!

// This is specifically for reference data types! ie Objects and Array! Shallow copies are created becz of ref peroperties even using spread operator
//What can be done? 
//Solution is to convert them into String and again to convert them into Obj/Array

// Like Obj/Array-> Stringfy(Converting into string)->  Parse(Again converting to Normal Obj/Array)
// This creates the Original copy data DEEEEEP Copy!  no reference at any level
// Example


// let arr=[1,2,3,4,5,6];
// let obj={
//     Name:'Omkar',
//     City:'Pune',
//     JOB:'SDE'
// }


// //Here to first convert an Array/Obj into string. 
// let arr2=JSON.stringify(arr)
// let obj2=JSON.stringify(obj)

// console.log(arr2)
// console.log(obj2)
//o/p-> Converted into String
// [1,2,3,4,5,6]
// {"Name":"Omkar","City":"Pune","JOB":"SDE"}


// Now again changing to original obj/array data

// arr2=JSON.parse(arr2)
// obj2=JSON.parse(obj2)
// console.log(arr2)
// console.log(obj2)
//O/P-> Original copied data but NO reference to original one. This is 100% DEEEP Copy
// [ 1, 2, 3, 4, 5, 6 ]
// { Name: 'Omkar', City: 'Pune', JOB: 'SDE' }




// Find, includes, some, tospliced**************************

// Splice-> As we remember spilce array used for array data delete or insert. Tospliced is exactly same
// The main difference is that splice() changes the original array, while Tospliced() creates a new array and leaves the original one alone.

// let arr=[1,2,3,4,5,6]
// arr.splice(2,3)
// console.log(arr)
// o/p->[ 1, 2, 6 ] It changes the original array that is arr

// Tospliced creates new array with modified elements without modifying orignal array

// let arr2=arr.toSpliced(2,3)

// console.log(arr)
// console.log(arr2)
// [ 1, 2, 3, 4, 5, 6 ] Orignal is untouched/unmodfied
// [ 1, 2, 6 ] This is new array and have modified elements


// Find, includes, some

// Find()**********
// Loops through the array and returns the value of the first element that passes your test function.

// let arr=[1,2,3,4132,141,41,41,1,4,21]
// let data= arr.find(i=>i===4132)
// console.log(data)

// const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
// const user = users.find(u => u.id === 2);

// console.log(user); // { id: 2, name: 'Bob' }

// includes**********
// Checks if an array contains a specific primitive value (like a string or a number) exactly as written.
//Returns True or false

// const anime=['Naruto','One Piece','Hunter']
// console.log(anime.includes('Naruto'))----> True
// console.log(anime.includes('Pokemon'))-----> False

// some()  ***************
// Checks if at least one element in the array passes your custom test function. It stops scanning the moment it finds a match.
//Best for: Permissions, validations, or checking conditions inside objects.

// let arr=['apple','nadaw','amwdoaw','dawpdaw','oooowpwpwpwo']
// console.log(arr.some(i=>i==='dawpdaw'))
// // o/p----> True
// console.log(arr.some(i=>i==='dawpdawwww'))
// // o/p----> False



