const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const address=document.getElementById("address");
const gender=document.getElementById("gender");
const dob=document.getElementById("dob");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const phoneno=document.getElementById("phoneno");
form.addEventListener("submit", checkInputs());
function checkInputs(){
    let check = false;
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const genderValue = gender.value.trim();
    const dobValue = dob.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phonenoValue = phoneno.value;
    if(usernameValue === ""){
        setErrorFor(username, "Username cannot be blank");
        check =  false;
    } else{
        check = true;
        setSuccessFor(username);
    }
    if(emailValue === ""){
        setErrorFor(email, "Email cannot be blank");
        check =  false;
    } else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid");
        check = false;
    } else {  
        setSuccessFor(email);
        check = true;
    }
    if(addressValue === ""){
        setErrorFor(address, "Address cannot be blank");
        check = false;
    } else{
        check = true;
        setSuccessFor(address);
    }
    if(genderValue === ""){
        setErrorFor(gender, "Gender cannot be blank");
        check = false;
    } else{
        check = true;
        setSuccessFor(gender);
    }
    if(dobValue === ""){
        setErrorFor(dob, "Date of birth cannot be blank");
        check = false;
    } else{
        check = true;
        setSuccessFor(dob);
    }
    if(passwordValue === ""){
        check = false;
        setErrorFor(password,"Password cannot be blank");
    } else if(passwordValue.length < 8){
        setErrorFor(password,"Password should contain minimum 8 characters");
        check = false;
    } else {    
        setSuccessFor(password);
        check = true;
    }
    if(password2Value === ""){
        setErrorFor(password2,"Confirm Password cannot be blank");
        check = false;
    } else if(password2Value.length < 8){
        setErrorFor(password2,"Password should contain minimum 8 characters");
        check = false;
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords doesn't match");
        check = false;
    } else {    
        setSuccessFor(password2);
        check = true;
    }
    if(phonenoValue === ""){
        setErrorFor(phoneno, "Phone number cannot be blank");
        check = false;
    } else if(!isPhoneNo(phonenoValue)) {
        setErrorFor(phoneno, "Phone number is not valid");
        check = false;
    } else { 
         setSuccessFor(phoneno);
         check = true;    
    }
    if(check === true){
        location.assign = "login.html";
    }
}
function setErrorFor(input, message) {
    const section = input.parentElement;
    const small = section.querySelector("small");
    small.innerHTML = message;
    section.className = "section error";
}
function setSuccessFor(input) {
    const section = input.parentElement;
    section.className = "section success";
}
function isEmail(email){
    return /^([\w\.]+)@([\w]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/.test(email);
}
function isPhoneNo(phoneno) {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneno); 
            
}
function validatePassword(password) {
                
    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Poor";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}    
