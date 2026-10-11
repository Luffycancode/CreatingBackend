console.log('Hi')



const countvalue= document.getElementById('count')
const inc=document.getElementById('inc')
const dec=document.getElementById('dec')


let count=0

inc.addEventListener('click',()=>
{
    count+=1
    countvalue.textContent=count
})


dec.addEventListener('click',()=>
{
    if(count>0)
    {
        count-=1
        countvalue.textContent=count
    }
    
})
