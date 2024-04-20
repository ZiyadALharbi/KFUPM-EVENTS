let passwordError = document.createElement("p");
passwordError.textContent = "Please enter a password that contains captial letters, small letters and a numbers only. Length must be greater than 8.";

passwordError.classList.add("inputerror");

document.getElementById('password').addEventListener("blur", (event) => {
    
    if(!(containsInteger(event.target.value) && containsCapitalLetter(event.target.value) && containsLowercaseLetter(event.target.value))){
         document.getElementById('form').addEventListener('submit', (event) => {
             event.preventDefault();
     });
        event.target.parentElement.appendChild(passwordError);
    }
    else{
        if(event.target.parentElement.querySelector('.inputerror')){
            event.target.parentElement.removeChild(passwordError); 
        }
    }
})


let emailError = document.createElement("p");
emailError.textContent = "Please enter a valid email address with the following pattern: example@example.com";

emailError.classList.add("inputerror");

document.getElementById('email').addEventListener("blur", (event) => {
    
    if(!isValidEmail(event.target.value)){
         document.getElementById('form').addEventListener('submit', (event) => {
             event.preventDefault();
     });
        event.target.parentElement.appendChild(emailError);
    }
    else{
        if(event.target.parentElement.querySelector('.inputerror')){
            event.target.parentElement.removeChild(emailError); 
        }
    }
})


function containsInteger(str) {
    return /\d/.test(str);
}

function containsCapitalLetter(str) {
    return /[A-Z]/.test(str);
}

function containsLowercaseLetter(str) {
    return /[a-z]/.test(str);
}

function isValidEmail(email) {
    // Regular expression pattern for validating email addresses
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the pattern
    return pattern.test(email);
}