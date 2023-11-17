# 1. Components
컴포넌트로 html마크업은 3개의 컴포넌트로 구성 되어있습니다.

### navigation 컴포넌트, main 컴포넌트, footer 컴포넌트

넷플릭스 페이지를 만들기 위해 3개의 컴포넌트를 만들었습니다. 상단에 있는 로고, 언어 선택 박스, 그리고 로그인 페이지로 연결 시켜주는 로그인 링크 영역은 navigation이라는 컴포넌트로 구분했습니다.

화면 중앙에 있는 텍스트, 이메일 입력 구간, 그리고 메일 입력구간에 력한 내용을 form으로 전달 해주는 버튼을 main 컴포넌트로 구성했습니다.

# 2. HTML
```
<body>
  <div class= "content-container">
    <nav></nav>
    <main></main>
  </div>
  <footer></footer>
</body>
```

컴포넌트를 사용해서 만든 웹사이트의 구조는 위와 같이 돼있습니다.
네비게이션과 메인 컨텐트를 감싸주는 `content-container`을 만든 이유는 샘플에서 나오는 것과 같이, 배경이 footer영역까지는 채우지 않기 위해 `div`로 감쌌습니다.

# 3. CSS
<img width="95" alt="Screen Shot 2023-11-17 at 8 07 14 PM" src="https://github.com/dldnlee/home-work/assets/83799987/4c5f00fb-c364-4f8f-9322-61bfd5e3d59e">
<br>
CSS으로 작업을 하면서, 공통된 요소들은 :root: 속성 안에서 선언을 하고 사용했으며 `mission-03.css` 안에서 @import을 사용해서 모든 컴포넌트의 css파일을 한 파일에 통합 시켰습니다.
CSS부분에서 새롭게 사용해봤던 요소는 `select` 태그를 스타일링 하는 것였습니다. 이 부분에 필요한 이미지/로고들을 삽입하기 위해서는 img파일을 html에 마크업 하는 것 보다, 언어를 바꿨을 때
반복되는 코드가 없기위해 백그라운드 이미지를 지정했습니다.

# 4. JavaScript

자바스크립트 코드는 mission-02에서 사용한 코드를 재사용 했습니다. 인풋 영역이 `focus`됐을 경울 placeholder가 올라가고, 만약 그 안에 텍스트가 있다면 그대로 위치를 유지하고, 이메일 형식이 맞지 않을 경우에 에러 메세지가 뜨도록 구현 했습니다. 

```
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
```

# 4. 결과
영상 링크: https://youtu.be/kUKAdDnqmdQ
<br>
<img width="1273" alt="image" src="https://github.com/dldnlee/home-work/assets/83799987/93eefdb0-8f4d-4a68-9835-5cfd248374c4">
<br>


