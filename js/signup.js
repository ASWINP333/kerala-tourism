const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");

let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let passwordError = document.getElementById("password-error");
let repeatPasswordError = document.getElementById("repeatPassword-error");

// email validation

function emailValidation() {
  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailFormat.test(email.value)) {
    emailError.innerHTML = "<small>valid email</small>";
    emailError.style.color = "green";
    return true;
  } else {
    emailError.innerHTML = "<small>invalid email</small>";
    emailError.style.color = "red";
    return false;
  }
}

// phone validation

function phoneValidation() {
  const phoneFormat1 = /^[0-9]{10}$/;
  const phoneFormat2 = /^([0-9]{3})-([0-9]{3})-([0-9]{4}) $/;
  const phoneFormat3 = /^([0-9]{3}).([0-9]{3}).([0-9]{4}) $/;
  const phoneFormat4 = /^([0-9]{3}) ([0-9]{3}) ([0-9]{4}) $/;

  if (
    phoneFormat1.test(phone.value) ||
    phoneFormat2.test(phone.value) ||
    phoneFormat3.test(phone.value) ||
    phoneFormat4.test(phone.value)
  ) {
    phoneError.innerHTML = "<small>valid phone number</small>";
    phoneError.style.color = "green";
    return true;
  } else {
    phoneError.innerHTML = "<small>invalid phone number</small>";
    phoneError.style.color = "red";
    return false;
  }
}
// password validation
function passwordValidation() {
  const passwordFormat =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
 if(password.value.length>=8){
  if (passwordFormat.test(password.value)){
    if (password.value.length == 8) {
      passwordError.innerHTML = "<small>password strength is poor!</small>";
      password.style.border = "1px solid red";
      passwordError.style.color = "red";
      return false;
    } else if (password.value.length > 8 && password.value.length  <12) {
      passwordError.innerHTML = "<small>password strength is medium!</small>";
      password.style.border = "1px solid blue";
      passwordError.style.color = "blue";
      return false;
    } else if (password.value.length == 12) {
      passwordError.innerHTML = "<small>password strength is strong!</small>";
      password.style.border = "1px solid green";
      passwordError.style.color = "green";
      return true;
      
    }
  }
    else{
      passwordError.innerHTML =
      "<label>Password must contain Minimum 12 characters, at least one uppercase, and one lower case, must contain at least one number</label>";
    password.style.border = "1px solid red";
    passwordError.style.color = "#red";
    return false;
    }
    
 } 
 else{
  passwordError.innerHTML = "<label>Password is too short</label>";
  password.style.border = "1px solid red";
  passwordError.style.color = "red";
  return false;
}
}

function repeatPasswordValidation() {
  if (password.value === repeatPassword.value) {
    repeatPasswordError.innerHTML = "<small>password matched</small>";
    repeatPasswordError.style.color = "green";
    repeatPassword.style.border = "1px solid green";
    return true;
  } else {
    repeatPasswordError.innerHTML = "<small>password does'nt matched</small>";
    repeatPasswordError.style.color = "red";
    repeatPassword.style.border = "1px solid red";
    return false;
  }
}

function validate() {
  if (emailValidation()) {
    if (phoneValidation()) {
      if (passwordValidation()) {
        if (repeatPasswordValidation()) {
          return true ,alert("Successfully signed in...");
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
