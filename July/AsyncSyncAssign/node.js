const button=document.getElementById('GenerateButton')
const display=document.getElementById('output')
button.addEventListener('click',()=>
{
    RandomUser()
})


async function RandomUser()
{
const users= await fetch('https://randomuser.me/api/')
const data= await users.json()
const user=data.results[0]



display.innerHTML = `
<img src="${user.picture.medium}" width="100" style="border-radius:50%;"><br><br>

<b style="display:inline-block;width:100px;">Name:</b> ${user.name.title} ${user.name.first} ${user.name.last}<br>
<b style="display:inline-block;width:100px;">Gender:</b> ${user.gender}<br>
<b style="display:inline-block;width:100px;">Age:</b> ${user.dob.age}<br>
<b style="display:inline-block;width:100px;">Email:</b> ${user.email}<br>
<b style="display:inline-block;width:100px;">Phone:</b> ${user.phone}<br>
<b style="display:inline-block;width:100px;">Cell:</b> ${user.cell}<br>
<b style="display:inline-block;width:100px;">Username:</b> ${user.login.username}<br>
<b style="display:inline-block;width:100px;">Password:</b> ${user.login.password}<br>
<b style="display:inline-block;width:100px;">DOB:</b> ${new Date(user.dob.date).toLocaleDateString()}<br>
<b style="display:inline-block;width:100px;">Street:</b> ${user.location.street.number}, ${user.location.street.name}<br>
<b style="display:inline-block;width:100px;">City:</b> ${user.location.city}<br>
<b style="display:inline-block;width:100px;">State:</b> ${user.location.state}<br>
<b style="display:inline-block;width:100px;">Country:</b> ${user.location.country}<br>
<b style="display:inline-block;width:100px;">Postcode:</b> ${user.location.postcode}<br>
<b style="display:inline-block;width:100px;">Latitude:</b> ${user.location.coordinates.latitude}<br>
<b style="display:inline-block;width:100px;">Longitude:</b> ${user.location.coordinates.longitude}<br>
<b style="display:inline-block;width:100px;">Timezone:</b> ${user.location.timezone.description}<br>
<b style="display:inline-block;width:100px;">Nationality:</b> ${user.nat}<br>
<b style="display:inline-block;width:100px;">UUID:</b> ${user.login.uuid}<br>
<b style="display:inline-block;width:100px;">Registered:</b> ${user.registered.age} years ago
`;


}





