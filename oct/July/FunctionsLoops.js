// Assignment 1
// Print the square of every number using a for loop.

// let numbers = [2, 4, 6, 8, 10, 12];


// for(let i=0;i<numbers.length;i++)
// {
//     console.log(numbers[i]*numbers[i])
// }



// Assignment 2
// Create an arrow function calculateDiscount(price) that returns the price after a 15% discount. Test it with all prices.

// let prices = [500, 1200, 999, 2500, 750];


// calculateDiscount=(price)=>
// {
// return price - (price * 15) / 100;
// }

// for(let i=0;i<prices.length;i++)
// {
// console.log(calculateDiscount(prices[i]))
// }



// Assignment 3
// Using forEach(), print the names of users whose age is 18 or above.

// let users = [
//   { name: "Aman", age: 16 },
//   { name: "Priya", age: 22 },
//   { name: "Rahul", age: 18 },
//   { name: "Neha", age: 14 },
//   { name: "Karan", age: 27 }
// ];

// users.forEach(i=>
// {
// if(i.age>18)
// {
// console.log(i.name)
// }
// }
// )


// Assignment 4
// Create a function calculateNetSalary(name, salary) that deducts 10% TDS and 5% PF, then returns the final in-hand salary. Call the function for every employee.

// let employees = [
//   { name: "Aman", salary: 50000 },
//   { name: "Priya", salary: 75000 },
//   { name: "Rahul", salary: 62000 },
//   { name: "Neha", salary: 48000 },
//   { name: "Karan", salary: 90000 }
// ];



// calculateNetSalary=(name,salary)=>
// {
//     let tds = salary * 0.10;
//     let pf = salary * 0.05;
//     let amount= salary - tds - pf;
//     return amount
// }


// employees.forEach(i=>
// {
//    console.log(i.name,calculateNetSalary(i.name, i.salary)) 
// }
// )


// Assignment 5 (Hard)
// Using the users array, print:

// Total users

// Number of adults (18+)

// Number of minors (<18)

// Name of the oldest user

// Average age of all users

let users = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 },
  { name: "Simran", age: 31 },
  { name: "Vikram", age: 45 },
  { name: "Riya", age: 19 }
];



userdetails=(users)=>
{
    
    let adultage=0;
    let nonadultage=0;
    let oldest=users[0].age
    let oldname=users[0].name;
    let total=0

users.forEach(i=>
{
    total=total+i.age

    if(oldest<i.age)
    {
        oldest=i.age
        oldname=i.name
    }

    if(i.age>=18)
    {
        adultage++
    }
    else
    {
        nonadultage++
    }
}

)

    console.log(`Total users are ${users.length}`)
    console.log(`Number of adults (18+) are ${adultage}`)
    console.log(`Number of minors (<18) are ${nonadultage}`)
    console.log(`Oldest is ${oldname}`)
    console.log(`Average age is ${total/users.length}`)
    


}
userdetails(users)