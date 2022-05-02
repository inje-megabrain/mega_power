# 3. HTML5와 CSS3

- shortcut icon
    
    ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled.png)
    

- reset.css
    - 브라우저마다의 기본 디폴트 스타일 값을 초기화
    
    ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%201.png)
    
- HTML5 구성요소
    
    ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%202.png)
    
    - header
        - HTML 페이지나 section 부분에 대한 header
        - 각 페이지의 맨 위에 출력되는 텍스트나 이미지등의 조합
            
            ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%203.png)
            
    - nav
        - link의 집합
        - 문서 내의 모든 링크
            
            ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%204.png)
            
    - section
        - 제목을 가지고 있으며, HTML 문서의 전체적인 내용과 관련이 있는 콘텐츠들의 집합
            
            ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%205.png)
            
    - article
        - HTML 문서에서 독립적인 하나의 기사(article) 부분 정의
        - 문서의 전체적인 내용과는 별도의 독립적인 내용이 들어갈 때 사용
            
            ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%206.png)
            
    - figure와 figcaption
        - figure : HTML 문서에서 그래픽과 비디오 등의 독립적인 콘텐츠 정의
        - figcaption : figure 요소를 위한 캡션을 정의할 때 사용
            
            ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%207.png)
            
    - footer
        - 일반적으로 사이트의 작성자나 그에 따른 저작권 정보, 연락처 등을 명시한다
            
            ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%208.png)
            
        
- img태그
    - alt 속성 : 이미지를 보여줄 수 없을 때 해당 이미지를 대체할 텍스트를 명시한다
        - <img alt="텍스트">
        
- input태그
    - 닫는 태그가 없다
    - 사용자로부터 정보를 받아들이는 용도로 사용
        - type : 입력 태그의 유형
        - vlaue : 입력 태그의 초기값을 말하며 사용자가 변경 가능
        - name : 서버로 전달되는 이름 (사용자 임의 지정)
    - type 속성값
        
        
        | text | 텍스트 입력 창 생성 |
        | --- | --- |
        | password | 비밀번호 입력 창 생성 |
        | radio | 라디오 버튼 생성 |
        | checkbox | 체크박스 생성 |
        | file | 파일 이름 입력 창 생성 |
        | image | 이미지 전송 버튼 생성 |
        | hidden | 사용자에게 보이지는 않지만 서버로 전송됨 |
        | submit | 서버로 제출/전송하는 버튼 생성 |
        | button | 일반 버튼 생성 |
    
- CSS 애니메이션
    - 애니메이션의 중간 상태 기술
        - @keyframes : CSS 애니메이션에서 구간을 정하고 각 구간별로 어떤 스타일을 적용시킬지 정하는 문법
            - animation : 이름 지정, 지속시간, 속도 조절 등을 지정할 수 있는 속성
                
                
                | name | @keyframes의 이름 |
                | --- | --- |
                | duratuion | 동작 시간 설정 |
                | timing-function | 속도 조절 |
                | delay | 시작 전 지연시간 설정 |
                | iteration-count | 반복 횟수 지정 |
                | direction | 반복 방향 설정 |
                | fill-mode | 시작/끝 상태 제어 |
            - 스테이지 : from-to로 0~100%의 구간
            - CSS 스타일 : 각 스테이지(구간)에 적용시킬 스타일
    - transform / rotate : 요소를 회전시킬 수 있다
- flex
    - 가로 방향으로 배치
    - 자신이 가진 내용물의 width 만큼만 차지한다 height는 컨테이너의 높이만큼 늘어난다
        - float 와 flex
            
            ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%209.png)
            
    - justify : 메인축 방향으로 정렬 (가로) → justify-content
    - align : 수직축 방향으로 정렬 (세로) → align-items
        
        ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%2010.png)
        
    
- line-height
    - 텍스트 간의 줄 높이 조절
- cursor
    - cursor: pointer;  → 마우스를 갖다대면 손 모양으로 바뀜
- word-break
    - 줄바꿈할 때 어떤 기준으로 줄바꿈할 지 정하는 속성
    - word-break: keep-all;  → 단어 단위로 줄바꿈
- infinite linear
    - infinite : 계속 도는것
    - linear : 가속도가 붙지 않음
- box-shadow:
    - 10px 5px 5px red;
        
        ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%2011.png)
        
    - 60px -16px teal;
        
        ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%2012.png)
        
    - 12px 12px 2px 1px rgba(0, 0, 255, .2);
        
        ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%2013.png)
        
    - inset 5em 1em gold;
        
        ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%2014.png)
        
    - 3px 3px red, -1em 0 .4em olive;
        
        ![Untitled](3%20HTML5%E1%84%8B%E1%85%AA%20CSS3%20e3c5e0cddbfc4c02a24842cbb3e711a5/Untitled%2015.png)
        

---

# Reference

- HTML5 구성요소
    
    [HTML 입문 | HTML5 시작 | HTML5 시멘틱(semantic) 요소 | devkuma](https://www.devkuma.com/docs/html/html5-%EC%8B%9C%EB%A9%98%ED%8B%B1-semantic-%EC%9A%94%EC%86%8C/)
    
- input 태그
    
    [HTML - input태그와 그 속성 type, value, name - 입력태그 (1) (tistory.com)](https://yangbari.tistory.com/28)
    
- CSS 애니메이션
    
    [CSS 애니메이션 구현 - @keyframes 와 animation 속성을 이용하여 (tistory.com)](https://pro-self-studier.tistory.com/108)
    
- flex
    
    [이번에야말로 CSS Flex를 익혀보자 – 1분코딩 (studiomeal.com)](https://studiomeal.com/archives/197)
    
- box-shadow:
    
    [box-shadow - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow)