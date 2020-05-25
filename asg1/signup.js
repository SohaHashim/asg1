const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const phoneno=document.getElementById("phoneno");
form.addEventListener("submit", (e) => {
     e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phonenoValue = phoneno.value;
    if(usernameValue === ""){
        setErrorFor(username, "Username cannot be blank");
    } else{
        
        setSuccessFor(username);
    }
    if(emailValue === ""){
        setErrorFor(email, "Email cannot be blank");
    } else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid");
    } else {  
        setSuccessFor(email);
    }
    if(passwordValue === ""){
        setErrorFor(password,"Password cannot be blank");
    } else if(passwordValue.length < 8){
        setErrorFor(password,"Password should contain minimum 8 characters");
    } else {    
        setSuccessFor(password);
    }
    if(password2Value === ""){
        setErrorFor(password2,"Confirm Password cannot be blank");
    } else if(password2Value.length < 8){
        setErrorFor(password2,"Password should contain minimum 8 characters");
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords doesn't match");
    } else {    
        setSuccessFor(password2);
    }
    if(phonenoValue === ""){
        setErrorFor(phoneno, "Phone number cannot be blank");
    } else if(!isPhoneNo(phonenoValue)) {
        setErrorFor(phoneno, "Phone number is not valid");
    } else { 
         setSuccessFor(phoneno);
    
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
