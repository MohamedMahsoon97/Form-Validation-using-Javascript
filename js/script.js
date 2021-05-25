// get my form
const myForm = document.getElementById("regForm");
var formLabels = document.querySelectorAll("label");
// this function do when form submitted 
myForm.onsubmit =  function(e) {
    e.preventDefault();
    var valid = false;
    // to validate the fullName input
    var fullName = document.RegisterForm.user_name.value; // get element by attribute name
    if (fullName == '') {
        formLabels[0].innerHTML = 'Full Name : * Required *';
        formLabels[0].style.color = 'red';
        valid = false;
    // if user write text this function return TRUE , and if write number return FALSE
    }else if(!isNaN(fullName)){ 
        formLabels[0].innerHTML = 'Full Name : * Text only *';
        formLabels[0].style.color = 'red';
        valid = false;
    } else{
        formLabels[0].innerHTML = 'Full Name : ';
        formLabels[0].style.color = 'black';
        valid = (valid) ? true : false;
    }

    // to validate the Email input
    var myEmail = document.RegisterForm.user_email.value; // get element by attribute name
    var at = myEmail.indexOf('@');
    var dotCom = myEmail.indexOf('.com');
    if (myEmail == '') {
        formLabels[1].innerHTML = 'Email : * Required *';
        formLabels[1].style.color = 'red';
        valid = false;
    // if user write text this function return TRUE , and if write number return FALSE
    }else if(at == -1 || dotCom == -1 || at > dotCom){ 
        formLabels[1].innerHTML = 'Email : * Incorrect Email *';
        formLabels[1].style.color = 'red';
        valid = false;
    } else{
        formLabels[1].innerHTML = 'Email : ';
        formLabels[1].style.color = 'black';
        valid = (valid) ? true : false;
    }
    
    // to validate the Password input
    var myPassword = document.RegisterForm.user_password.value; // get element by attribute name
    if (myPassword == '') {
        formLabels[2].innerHTML = 'Password : * Required *';
        formLabels[2].style.color = 'red';
        valid = false;
    // if user write text this function return TRUE , and if write number return FALSE
    }else if(myPassword.length < 8){ 
        formLabels[2].innerHTML = 'Password : * password must be > 8 charactrs *';
        formLabels[2].style.color = 'red';
        valid = false;
    } else{
        formLabels[2].innerHTML = 'Password : ';
        formLabels[2].style.color = 'black';
        valid = (valid) ? true : false;
    }

    // to validate the textArea input
    var myBio = document.RegisterForm.user_bio.value; // get element by attribute name
    if (myBio == '') {
        formLabels[3].innerHTML = 'Bio : * Optional *';
        formLabels[3].style.color = 'green';
        valid = false;
    // if user write text this function return TRUE , and if write number return FALSE
    }else if(myBio.length < 20){ 
        formLabels[3].innerHTML = 'Bio : * Bio must be more than 20 charactrs *';
        formLabels[3].style.color = 'red';
        valid = false;
    } else{
        formLabels[3].innerHTML = 'Bio : ';
        formLabels[3].style.color = 'black';
        valid = (valid) ? true : false;
    }
    return valid;
}


function ClearInp() {
    var LabelsArr = new Array()
        LabelsArr[0] = " Full Name : ";
        LabelsArr[1] = " Email : ";
        LabelsArr[2] = " Password : ";
        LabelsArr[3] = " Bio : ";
        LabelsArr[4] = " Job Role : ";

    for(let i = 0; i < LabelsArr.length; i++){
        formLabels[i].innerHTML = LabelsArr[i];
        formLabels[i].style.color = 'black';
    }
}