const emailField = document.getElementById("login-email");
const emailIcon = document.querySelector('.email-validator-mark');
const emailLabel = document.querySelector('.input-label-email')


function email() {
  emailField.addEventListener('keyup', function(e) {
    if(emailField.checkValidity() === true) {
      emailIcon.classList.remove('hidden');
      emailIcon.src = "./images/valid-icon.svg";
    } else if (emailField.value === "") {
      emailIcon.classList.add('hidden');
    } 
    else {
      emailIcon.classList.remove('hidden');
      emailIcon.src = "./images/invalid-icon.svg";
    }
  })
  
  emailField.addEventListener('blur', function(e) {
    if(emailField.value === "") {
      emailIcon.classList.add('hidden');
      emailLabel.classList.remove('--is-active');
    } else {
      emailIcon.classList.remove('hidden');
    }
  })

  emailField.addEventListener('focus', function(e) {
    emailLabel.classList.add('--is-active');
  })
}

email();

// password field DOM elements

const pwField = document.getElementById("login-password");
const pwIcon = document.querySelector('.pw-validator-mark');
const pwLabel = document.querySelector('.input-label-password')
const pwVisible = document.querySelector('.pw-visibility');
const pwEye = document.querySelector('.eye');
let toggle = false;

function password() {
  pwField.addEventListener('keyup', function(e) {
    if(pwField.checkValidity() === true && pwField.value !== "") {
      pwIcon.classList.remove('hidden');
      pwIcon.src = "./images/valid-icon.svg";
      pwEye.classList.remove('hidden');
    } else if(pwField.checkValidity() !== true && pwField.value !== "") {
      pwIcon.classList.remove('hidden');
      pwEye.classList.remove('hidden');
    } 
    else if(pwField.value === "") {
      pwIcon.classList.add('hidden');
      pwEye.classList.add('hidden');
    } 
    else {
      pwIcon.classList.remove('hidden');
      pwIcon.src = "./images/invalid-icon.svg";
    }
  })
  
  pwField.addEventListener('blur', function(e) {
    if(pwField.value === "") {
      pwIcon.classList.add('hidden');
      pwEye.classList.add('hidden');
      pwLabel.classList.remove('--is-active');
    } else {
      pwIcon.classList.remove('hidden');
    }
  })

  pwField.addEventListener('focus', function(e) {
    pwLabel.classList.add('--is-active');
  })

  pwVisible.addEventListener('click', function(e) {
    const type = pwField.getAttribute('type') === "password" ? "text" : "password";
    pwField.setAttribute("type", type);
    
    if(toggle === false) {
      pwEye.src = "./images/hide-pw.svg";
      toggle = !toggle;
      
    } else if (toggle === true) {
      pwEye.src = "./images/show-pw.svg";
      toggle = !toggle;
    }
  })
}

password();








// const pwVisibility = document.querySelector('.pw-visibility')

// function togglePassword() {
//   pwField.addEventListener('focus', function(e) {
//     if(input.value === "") {
//       pwVisibility.classList.add('hidden');
//     } else {
//       pwVisibility.classList.remove('hidden');
//     }
//   })


//   pwField.addEventListener('blur', function(e) {
//     if(input.value === "") {
//       pwVisibility.classList.add('hidden');
//     } else {
//       pwVisibility.classList.remove('hidden');
//     }
//   })
// }



// togglePassword();