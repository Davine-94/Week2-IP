const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    function caseDate() {
        let dInput = document.getElementById('dTe').value;
        console.log(dInput);
        male = document.getElementById('mRadio'); 
        female = document.getElementById('fRadio');
    
        if(dInput == '') {
            alert('Please enter a date value');
        } 
        if (male.checked == false && female.checked == false) {
            alert('Please select gender');
            
        } else {
            date = new Date(dInput);
                console.log(date);
    
    
                // Finding the century
                CC = date.getFullYear();
                CC = CC.toString().substr(0, 2);
                console.log(CC);
    
                // Year
                YY = date.getFullYear();
                YY = YY.toString().substr(2, 4);
                console.log(YY);
                MM = date.getMonth();
                console.log(MM);
    
                // Date
                DD = date.getDate();
                console.log(DD);
    
                // Finding the day of the week
                d = date.getDay();
                D = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
                console.log(d);             
                
                    return d;
        }
    }
    validate = () => {
        caseDate();
        if(male.checked) {
            console.log(maleNames[d]);
            document.getElementById("display").innerHTML =`Akan Name is ` + `<span>` + maleNames[d] + `</span>` + `<br>` + `Shows you are a Male born on ` + date.toLocaleString('en-us', {weekday : 'long'});
        }
        else if (female.checked) {
            console.log(femaleNames[d]);
            document.getElementById("display").innerHTML =`Akan Name is ` + `<span>` + femaleNames[d] + `</span>` + `<br>` + `Shows you are a Female born on ` + date.toLocaleString('en-us', {weekday : 'long'});
        }
    }
    
    buttonRead = () => {
       validate(); 
    }