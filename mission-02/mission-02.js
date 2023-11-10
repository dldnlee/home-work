
// 이메일 DOM Elements
const emailField = document.getElementById("login-email");
const emailIcon = document.querySelector('.email-validator-mark');
const emailLabel = document.querySelector('.input-label-email')
const emailMessage = document.querySelector('.email-error-message');


// 비밀번호 DOM Elements
const pwField = document.getElementById("login-password");
const pwIcon = document.querySelector('.pw-validator-mark');
const pwLabel = document.querySelector('.input-label-password')
const pwVisible = document.querySelector('.pw-visibility');
const pwMessage = document.querySelector('.password-error-message');
const pwEye = document.querySelector('.eye');
let toggle = false;



// 이메일 인풋 유동적 스타일 및 경고 메시지 표시 함수
function email() {
  emailField.addEventListener('keyup', function(e) {
    if(emailField.checkValidity() === true) {
      emailIcon.classList.remove('hidden');
      emailIcon.src = "./images/valid-icon.svg";
      emailMessage.classList.add('hidden')
    } else if (emailField.value === "") {
      emailIcon.classList.add('hidden');
      emailMessage.classList.add('hidden')
    } 
    else {
      emailIcon.classList.remove('hidden');
      emailIcon.src = "./images/invalid-icon.svg";
      emailMessage.classList.remove('hidden');
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



// 비밀번호 인풋 유동적 스타일 및 경고 메시지 표시 함수
function password() {
  pwField.addEventListener('keyup', function(e) {
    if(pwField.checkValidity() === true && pwField.value !== "") {
      pwIcon.classList.remove('hidden');
      pwIcon.src = "./images/valid-icon.svg";
      pwEye.classList.remove('hidden');
      pwMessage.classList.add('hidden');
    } else if(pwField.checkValidity() !== true && pwField.value !== "") {
      pwIcon.classList.remove('hidden');
      pwEye.classList.remove('hidden');
      pwMessage.classList.remove('hidden');
    } else if(pwField.value === "") {
      pwIcon.classList.add('hidden');
      pwEye.classList.add('hidden');
      pwMessage.classList.add('hidden');
    } else {
      pwIcon.classList.remove('hidden');
      pwIcon.src = "./images/invalid-icon.svg";
      pwMessage.classList.remove('hidden');
    }
  })
  
  pwField.addEventListener('blur', function(e) {
    if(pwField.value === "") {
      pwIcon.classList.add('hidden');
      pwEye.classList.add('hidden');
      pwMessage.classList.add('hidden');
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


email();
password();
