const apikeymovielink='https://www.omdbapi.com/?apikey=42d5d9fa&t='
const button= document.getElementById('button')
const search= document.getElementById('search')


button.addEventListener('click',()=>
{
    const moviename=search.value
    showmovie(moviename)
})


// using ashnc await
// async function showmovie(moviename)
// {
// try{
// const datafetch= await fetch(apikeymovielink+moviename)
// let data= await datafetch.json()
// console.log(data)
// }catch(error)
// {
// console.log(error)
// }
// }


// now using promises

function showmovie(moviename)
{
fetch(apikeymovielink+moviename).then((data)=>
{
    return data.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>
{
    console.log(error)
})
}
