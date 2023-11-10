## 1. HTML
![image](https://github.com/dldnlee/home-work/assets/83799987/d298493a-17f9-4d07-b08f-bbaa610f55c1)
```
<div class="login-container">

    <div class="login-text">
    </div>

    <div class="login-form-container">

      <form action="/" class="login-form">

        <div class="email">
        </div>
        <div class="password">
        </div>

        <div class="save-email-container">
        </div>

        <div class="login-form-buttons">
        </div>

      </form>
    </div>
  </div>
```
HTML 구조는 로그인 텍스트와 인풋 폼이 있는 두개의 블록을 묶은 `login-container`에 display: flex;로 중앙 정렬 시켰습니다.
## 2. CSS

반응형웹을 만들기 위해, 일단 데스크탑을 기준으로 만들었고 `max-width:600px`을 지정해서 화면 크기가 600px보다 작아지는 순간 `@media(max-width:600px)`안에 들어가는 속성들이 적용됩니다. 
```

@media(max-width: 600px) {

  .login-container {
    /* background: white; */
    width: 100%;
  }

  .login-form-container {
    width: 80%;
    margin-top: 50px;
  }

  .login-form {
    width: 100%;
  }

  .login-form-container input {
    width: 100%;
    padding: 0;
  }

  .login-form-buttons {
    flex-flow: column;
    row-gap: 10px;

    & button {
      height: 2400px;
      width:100%;
    }
  }
}
```

## 3. JavaScript
자바스크립트에 대한 이해도와 숙련도가 높지는 않지만 가지고 있는 지식으로 어떻게 설계를 해봤습니다.

전체적인 설계구조는 이메일 필드 함수와 비밀번호 함수 두개로 나뉘었고, 그 안에서 사용자의 행동에 따라 웹 요소들이 바뀌는 방식으로 구현했습니다.

어떻게는 작동은 하지만, 확실히 코드가 마음에 들지는 않다는 생각이 들었습니다... 

```

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

```


## 4. 결과
결과는 유튜브로 보여드리도록 하겠습니다. 이번에는 함수 구현하는데 시간이 너무 많이 걸려서 README는 간결하게 적었습니다...
<br>
https://youtu.be/KUiiBlT7p2Y
