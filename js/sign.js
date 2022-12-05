const sign_form = document.getElementById("sign_form");
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById("submit")




submit.addEventListener('click', xx_function =>{
  xx_function.preventDefault();
  check_inputs();
})
document
function check_inputs() {
const email_value = email.value.trim();
const password_value = password.value.trim();
const password2_value = password.value.trim();
const username_value = username.value.trim();

  if (username_value=='') {
    set_error_for(username, "username cannot be blank");
  }else{
    success(username);
  }
  
  if (email_value == "") {
    set_error_for(email, "email cannot be blank");
  } else {
    success(email);
  }
  
  if (password_value == "") {
    set_error_for(password, "password cannot be blank");
  } else {
    success(password);
  }
  
  if (password2_value == " ") {
    set_error_for(password2, "please re-entre password");
  } else {
    if (password2_value == password_value) {
      success(password2);
    
    } else {
      set_error_for(password2, "passwords does not match");
      
    }
  }
}






function set_error_for(input, mssg){
  const form_sec = input.parentElement;
  const t = form_sec.querySelector('small');
  t.innerText = mssg;
  form_sec.className = "error";
  
  
}

function success(input) {
  const form_sec = input.parentElement;
  form_sec.className = "success";
}