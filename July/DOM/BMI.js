const age = document.getElementById("Age");
const heightFeet = document.getElementById("Height1");
const heightInches = document.getElementById("Height2");
const weight = document.getElementById("Weight");
const button = document.getElementById("Calculate");
const bmival= document.getElementById('bmival')
const category=document.getElementById('Category')

const FtToMt=0.3048
const InToMt=0.0254
button.addEventListener('click',()=>

{
// console.log(age.value)
// console.log(heightFeet.value);
// console.log(heightInches.value);
// console.log(weight.value);
    const heightinMeters= Number(heightFeet.value)*FtToMt+Number(heightInches.value)*InToMt
    const bmi= Math.round(Number(weight.value)/(heightinMeters*heightinMeters))
    bmival.textContent=`BMI is ${bmi}`

if (bmi < 16) {
    category.textContent = "Severe Thinness";
}
else if (bmi < 17) {
    category.textContent = "Moderate Thinness";
}
else if (bmi < 18.5) {
    category.textContent = "Mild Thinness";
}
else if (bmi < 25) {
    category.textContent = "Normal";
}
else if (bmi < 30) {
    category.textContent = "Overweight";
}
else if (bmi < 35) {
    category.textContent = "Obese Class I";
}
else if (bmi < 40) {
    category.textContent = "Obese Class II";
}
else {
    category.textContent = "Obese Class III";
}
    


})


