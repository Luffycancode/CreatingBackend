// // function checkinventory()
// // {
// //     setTimeout(()=>{console.log("Cheking inventory")},3000)
// // }
// // function Createorder()
// // {
// //     console.log('Creating the order')
// // }

// // function confirmthePayment()
// // {
// //     console.log('Confirming the payment')
// // }


// // function main()
// // {
// //     checkinventory()
// //     Createorder()
// //     confirmthePayment()

// // }
// // main()








// function calc (data, newfun)
// {
//     newfun();

// }

// newfun()
// {
//     console.log('from callback')
// }

// Hello(20,callback)




function greet(data, helloo)
{

    console.log(data);
    helloo();

}
function intro()
{
    console.log(`hello`)
}


greet('omkar',intro)




const nums = [1, 2, 3];
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i] * 2);
// }


// array.forEach(element => {
    
// });

nums.forEach(ele=>{
    console.log(ele)
})

nums.forEach(function prinnt(num)
{
console.log(num)
})


// dotwice Practice cb