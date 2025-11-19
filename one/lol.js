// // // // // // console.log(a);


// // // // // // let a=20

// // // // // // function tryy()
// // // // // // {
// // // // // //     console.log(a);
// // // // // //     var a=44
// // // // // //     console.log(a);
// // // // // // }
// // // // // // tryy()
// // // // // // console.log(tryy())



// // // // // let a=1;
// // // // // var b=1;


// // // // // // console.log(global.a)

// // // // // console.log(global.b); 


// // // // global.console.log('Hey mf')

// // // const c= 44;
// // // // c=20;

// // // let a={
// // // name:'Omkar',
// // // age:24,
// // // Count:3232
// // // }
// // // a.name='OM'



// // // let d=a;
// // // d.name='lol'
// // // console.log(d.name)

// // // let str='omkar'
// // // str='fk'
// // // console.log(str)

// // // console.log(typeof('5'+1) + '5'+1)

// // // console.log(typeof('5'-1))



// // // function hi()
// // // {
// // //     console.log('Hey')
// // // }

// // // let name=()=>
// // // {
// // //     let b=90;
// // // }

// // // name();

// // function abc(a,b)
// // {
// // return a+b
// // }

// // console.log(abc(4,5))

// // function hello(data)
// // {
// //     console.log('Hey inside')
// //     return abc;
// // }
// // hello(abc(4,5))

// // var daaata= function open()
// // {

// // }
// // var aadada=()=>
// // {
// //     dadadawd
// // }

// // let add=(a,b)=> a+b; 

// setTimeout(function(){
// console.log('hey')
// },3000) 

let result=0;
function display(cal,a,b)
{
result=a+b;
cal(result)
}
function cal(result)
{
    console.log(result)
}

display(cal,4,5)