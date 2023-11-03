# 구조
HTML문서의 구조를 설계하는 과정에서 항상 flex display를 사용했던 저는 이번에 float과 position:absolute을 적극적으로 활용해보는 노력을 해봤습니다.

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
![image](https://github.com/dldnlee/home-work/assets/83799987/2210fc87-95bc-4c12-a5fc-034c1421ade7)

