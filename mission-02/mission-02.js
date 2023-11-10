const emailField = document.getElementById("login-email");
const emailIcon = document.querySelector('.email-validator-mark');
const emailLabel = document.querySelector('.input-label-email')

const pwField = document.getElementById("login-password");
const pwIcon = document.querySelector('.pw-validator-mark');
const pwLabel = document.querySelector('.input-label-password')

// function eventListeners(input, icon, label) {
//   input.addEventListener('keydown', function(e) {
//     if(input.checkValidity() === true) {
//       icon.classList.remove('hidden');
//       icon.src = "./images/valid-icon.svg";
//     } else {
//       icon.classList.remove('hidden');
//       icon.src = "./images/invalid-icon.svg";
//     }
//   })
  
//   input.addEventListener('blur', function(e) {
//     if(input.value === "") {
//       icon.classList.add('hidden');
//       label.classList.remove('--is-active');
//     } else {
//       icon.classList.remove('hidden');
//     }
//   })

//   input.addEventListener('focus', function(e) {
//     label.classList.add('--is-active');
//   })
// }


// eventListeners(emailField, emailIcon, emailLabel)
// eventListeners(pwField, pwIcon, pwLabel)


function email() {
  emailField.addEventListener('keydown', function(e) {
    if(emailField.checkValidity() === true) {
      emailIcon.classList.remove('hidden');
      emailIcon.src = "./images/valid-icon.svg";
    } else {
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

const pwVisible = document.querySelector('.pw-visibility');
const pwEye = document.querySelector('.eye');

function password() {
  pwField.addEventListener('keydown', function(e) {
    if(pwField.checkValidity() === true) {
      pwIcon.classList.remove('hidden');
      pwIcon.src = "./images/valid-icon.svg";
      pwVisible.classList.remove('hidden');
    } else {
      pwIcon.classList.remove('hidden');
      pwIcon.src = "./images/invalid-icon.svg";
    }
  })
  
  pwField.addEventListener('blur', function(e) {
    if(pwField.value === "") {
      pwIcon.classList.add('hidden');
      pwVisible.classList.add('hidden');
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


    pwEye.classList.toggle("eye");
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