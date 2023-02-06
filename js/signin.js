const email=document.getElementById("email")
let emailError=document.getElementById("email-error")

const password=document.getElementById("password")
let passwordError=document.getElementById("password-error")

// email validation

function emailValidation(){
    const emailFormat=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(emailFormat.test(email.value)){
        emailError.innerHTML="<small>email validated</small>"
        emailError.style.color="green"
        return true
    }
    else{
        emailError.innerHTML="<small>invalid email</small>"
        emailError.style.color="red"
        return false
    }
}

// password validation
function passwordValidation() {
    const passwordFormat =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
    if(password.value.length>=8){
      
     if (passwordFormat.test(password.value)){
      passwordError.innerHTML="<small>correct password</small>"
      passwordError.style.color="green"
      password.style.border="1px solid green"
      return true
     }
     else{
      passwordError.innerHTML="<small>Incorrect password</small>"
      passwordError.style.color="red"
      password.style.border="1px solid red"
      return false
     }
    }
    else{
      passwordError.innerHTML="<small>Incorrect password</small>"
      passwordError.style.color="red"
      password.style.border="1px solid red"
      return false
    }
  }

  function validation(){
    if(emailValidation()){
        if(passwordValidation()){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
  }