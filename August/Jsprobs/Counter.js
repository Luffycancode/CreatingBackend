let counter=document.getElementById('counter')
let inc=document.getElementById('inc')
let dec=document.getElementById('dec')
let count=0;



inc.addEventListener('click',()=>
{
    count++
    counter.textContent=count
})


dec.addEventListener('click',()=>
{
    count--
    counter.textContent=count
})





