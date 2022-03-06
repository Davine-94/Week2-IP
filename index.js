const arrayMale= ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi', 'Kwame'];
const arrayFemale=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

dInput= "birthday";
mInput="male";
fInput="female";


function birthdate()
    {
    let dInput= document.getElementById("birthday").value;
    let mInput= document.getElementById("male");
    let fInput= document.getElementById("female");
}

if(dInput == '') {
    alert("please enter a valid birth value");
}
if(mInput == '') {
    alert("please select gender");
}
if (dInput == '') {
    alert("please select gender");
}

date= new Date(dInput);
console.log(date);