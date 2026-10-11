let button=document.getElementById('button')
let text=document.getElementById('h2')
const soundEffect = new Audio('rollingsound.mp3');

button.addEventListener('click',()=>
{
    text.innerText='Roll for new count'
})


roll=()=>
{
    let dice= document.getElementById('dice')
    let random= Math.floor(Math.random()*6)+1
    dice.classList.add('spin')
    soundEffect.play()
    
    setTimeout(()=>
    {
        dice.classList.remove('spin')
        dice.innerText=random
    },1000)
    
    // console.log('Rolling')
}



Createbox=()=>
{
    let parentBoxdiv= document.getElementById('ParentBox')
    let newdiv=document.createElement('div')
    newdiv.classList.add('box')
    parentBoxdiv.appendChild(newdiv)

}


let userArray=[]
let UserContainer= document.getElementById('UserContainer')
AddUser=()=>
{

    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let display=document.getElementById('display')
    let user={
        Name: name,
        Email: email
    }
    userArray.push(user)
    renderuser(user)
}

renderuser=(newuser)=>
{
 

    let div= document.createElement('div')
    let name=document.createElement('p')
    let email=document.createElement('p')
    div.classList.add('Userdetails')
    name.innerText=newuser.Name
    email.innerText=newuser.Email
    UserContainer.appendChild(div)
    div.appendChild(name)
    div.appendChild(email)


}