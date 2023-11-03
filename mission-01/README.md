# 1. 구조
HTML문서의 구조를 설계하는 과정에서 항상 flex를 사용했던 저는 이번에 float과 position:absolute을 적극적으로 활용해보는 노력을 해봤습니다.

전체적인 구조는 아래처럼 설계했습니다.
```
<main class="content-container">
  <div class="top-group"></div>
  <div class="bottom left-group"></div>
  <div class="bottom right-group"></div>
</main>
```

구조 설계 과정은 다음과 같습니다:
1. 블록 3개를 감싸는 메인 컨테이너 content-container.
2. top과 bottom으로 구분햇으며 위에는 top한개와 밑에 bottom요소 2개로 구성됨.
3. 부모요소 content-container에게 `position:relative` 속성을 부여하고 bottom 요소들에게는 `position: absolute` 속성 부여
4. 세로 배치는 top의 너비와 높이를 변수로 지정해서 bottom요소들에게 `top: var(--top-group-height);` 부여 함으로서 top-group 바로 밑에 배치됨
5. bottom-left에게 `left: 0;`으로 왼쪽에 붙여주고 bottom-right에게`right: 0;`으로 오른쪽으로 붙여줌.
세부적인 속성들은 재외하고 설명한대로 속성들을 부여하면 아래와 같은 결과가 나옵니다.
<br>![image](https://github.com/dldnlee/home-work/assets/83799987/521cb54d-726d-4a0c-82c5-dd3dc139ae13)


## 1-1 top-group블록 구조
과제 예시와 같이 윗 블록 아이템들을 배치하기 위해 두개의 블록을 추가했습니다.
```
<div class="top-group">
  <div class="pic-container ottugi"></div>
  <div class="pic-container ottugi"></div>
</div>
```
오뚜기 로고와 텍스트가 들어가 있는 `pic-container ottugi`블록과 제품 이미지가 들어갈 `pic-container honey-tea` 두가지로 구성했습니다.
각 블록에게는 `text-align: center;` 속성을 부여해서 각자의 부모요소 가로기준 중앙에 배치되도록 구현했습니다. 

마지막으로 두개의 블록들을 나란히 배치하기 `float:left;` 속성을 부여 했으며 margin을 통해 중앙배치를 했습니다.
```
.pic-container {
  text-align: center;
  width: 222px;
  float: left;
}

.ottugi {
  margin: 80px 15px auto 15px;
}

.honey-tea {
  margin: 20px 10px auto 10px;
}

```

## 1-2 bottom left-group / right-group블록 구조
bottom블록의 내부 구조는 `text-align: center` 속성으로 중앙 정렬 하는 것 제외하고는 스타일링 부분에서 특별했던 부분이 업습니다.

# 2. 버튼
버튼을 화면에 배치하기 위해 `position: absolute`속성을 활용했습니다. 3개의 큰 블록들 내부의 구조에 영향을 미치지 않도록 맨 밑에다 마크업을 했으며, purchase-button 이라는 클래스 이름을 부여했습니다
화면에 나오는 버튼들은 다 같은 스타일과 작동 방식이 같았기에 purchase-button이라는 클래스 하나로 스타일을 통일했습니다.

과제 예시에서 나오는 것과 같이 사진 위에 배치를 하기 위해 버튼에 `position: absolute;` 이라는 속성을 주었고, top-group에는 부여된 `position` 값이 `static`이었기에 `position:relative;` 을 주었고 bottom 블록 두개는 전체 배치하는 과정에서
`position: absolute;` 속성을 선언했기에 따로 속성을 부여할 필요가 없었습니다.
버튼의 위치는 각 부모 요소 왼쪽 하단에 배치되기 위해 `left: 20px;` 과 `bottom: 20px;`를 주었습니다.

## 2-1. 버튼 hover 요소
해당 버튼은 마우스를 올렸을 때 너비, 배경색, 그리고 "구매하기"라는 텍스트가 추가되는 것을 볼 수 있습니다. 
<br>![image](https://github.com/dldnlee/home-work/assets/83799987/17cb7db6-1801-4ab3-ba64-5b4199325378)



해당 조건들을 만족하기 위해 버튼에 `:hover` 와 `:hover:before` 유사클래스를 사용했습니다.
`:hover` 에는 마우스가 올라갔을때 배경색, 너비, 그리고 커서가 바뀌도록 했습니다.
```
.purchase-button:hover {
  background: #0074E9;
  cursor: pointer;
  width: 112px;
}
```

`:hover:before` 는 버튼 스타일이 바뀌면서 "구매하기"라는 텍스트가 화살표 아이콘 전에 생길 수 있도록 `:before` 유사 클래스로 선택한뒤 `content: '구매하기';`로 텍스트 추가할 수 있었습니다.
```
.purchase-button:hover::before {
  content: '구매하기';
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
}
```

# 3. 접근성
Screen Reader를 사용했을 때 가장 먼저 읽어주어야 하는 부분은 각 블록을 가장 잘 설명헤주는 요소들이라고 생각했습니다. 사용자가 tab키 하나 만으로 전체 페이지를 빠르고 간결하게 접근할 수 있도록
각 블록의 `h2` 타이틀 요소들에게 tabindex="0"을 주었습니다. 그리고 사진들은 불필요하다는 생각이 들어 `alt`를 지정해둔 `img`들에게 `aria-hidden="true"` 속성을 부여함으로서 Screen Reader에 읽히지 않도록 지정했습니다.
그렇기에 읽어주는 순서는 `타이틀 -> 구매하기 버튼 -> 타이틀 2 -> 구매하기 버튼 2 -> 타이틀3 -> 구매하기 버튼 3`으로 변경했습니다. 

# 4. 결과 / 느낀점
![image](https://github.com/dldnlee/home-work/assets/83799987/e6018025-bde1-414a-9d56-d7cba3cfd175)


독학으로 html과 css를 배웠을 당시 배치하고 싶은 블록들을 `div`로 묶어서 `display: flex`만 사용했던 저에게는 신선히고 새로웠던 부분이었습니다. 한편으로는 flex로 빨리 끝내고 싶다는 마음도 있었지만 색다른 방법으로 해보니 뿌듯하고 확실
css에 대한 이해도가 높아진다는 생각이 들었습니다. 물론 편하고 대중적인 방법이 쉽고 빠르겠지만, 앞으로도 새로운 방법과 색다른 방식으로 문제에 접근해보고 싶다는 욕심이 생겼습니다. 
