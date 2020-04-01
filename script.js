const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Show success outline 

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid

function checkEmail(input){
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if(regex.test(input.value)) {    
    showSuccess(input)

  } else {    
    showError(input, '⚠️ Email is not valid')
  }
}

//Check required fields

function checkRequired(inputArray) {
  inputArray.forEach(function(input){
    if(input.value.trim() === '') {
      showError(input, `⚠️ ${getFieldName(input)} is required`)
    } else {
      showSuccess(input);
    }
  })
}

//Check input Length
function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `⚠️ ${getFieldName(input)} must be as least ${min} characters`)
  } else if(input.value.length > max) {
    showError(input, `⚠️ ${getFieldName(input)} must be less than ${max} characters`)
  } else {
    showSuccess(input);
  }
}

//Check passwords match

function checkPasswordMatch(input1, input2) {
  if(input1.value !== input2.value) {
    showError(input2, '⚠️ Passwords do not match')
  }
}

// Get field name

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Event Listeners
form.addEventListener('submit', function(event){
  event.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 30);
  checkLength(password, 5, 15);
  checkEmail(email);
  checkPasswordMatch(password, password2);

});





