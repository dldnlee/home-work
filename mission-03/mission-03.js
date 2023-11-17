
// 이메일 DOM Elements
const emailField = document.getElementById("email");
const emailLabel = document.querySelector('.email-label')
const emailMessage = document.querySelector('.email-invalid-text');



// 이메일 인풋 유동적 스타일 및 경고 메시지 표시 함수
function email() {
  emailField.addEventListener('keyup', function(e) {
    if(emailField.checkValidity() === true) {
      emailMessage.classList.add('hidden')
    } else if (emailField.value === "") {
      emailMessage.classList.add('hidden')
    } 
    else {
      emailMessage.classList.remove('hidden');
    }
  })
  
  emailField.addEventListener('blur', function(e) {
    if(emailField.value === "") {
      emailLabel.classList.remove('--is-active');
    } else {
    }
  })

  emailField.addEventListener('focus', function(e) {
    emailLabel.classList.add('--is-active');
  })
}

email();
