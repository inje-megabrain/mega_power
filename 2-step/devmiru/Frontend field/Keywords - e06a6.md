# Keywords - Frontend field

- 목차

---

## 1. HTML (Hypertext Markup Language)

<aside>
💡 **웹 페이지의 모습을 기술하기 위한 규약. HTML은 프로그래밍 언어가 아니다.** (마크업 언어이다.)

</aside>

```html
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        Hello, world!
    </body>
</html>
```

- 우리가 보는 웹 페이지가 어떤 구조로 되어있는지 알 수 있는 [마크업 언어](https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EC%97%85_%EC%96%B8%EC%96%B4)이다.

---

## 2. CSS (Cascading Style Sheet)

<aside>
💡 **HTML등의 마크업 언어**로 작성된 코드가 **실제로 웹사이트에 표현되는 방법을 정해주는** 스타일 시트 언어

</aside>

```css
p{
    font-size: 110%;
    font-family: garamond, sans-serif;
}
h2{
    color: red;
    background: white;
}
.highlight{
    color: red;
    background: yellow;
    font-weight: bold;
}

#test_id {
    color: blue;
    background: white;
}
```

- HTML이 웹사이트의 신체라면, CSS는 옷과 악세서리처럼 꾸미는 역활을 담당한다.
- 그림자 효과, 그라데이션, 변형 등 레이아웃과 스타일을 정의할때 자유도가 높으며, 이는 기존에 사용되었지만 보안 문제로 현재는 지원이 종료된 Adobe Flash를 어느정도 대체할수 있다.

---

## 3. JavaScript (JS)

<aside>
💡 그 커피잔 객체지향 언어인 **Java와는 관련 없다.**

</aside>

```jsx
document.write("<p>Hello World!</p>");
```

- 넷스케이프와 모질라 재단에서 개발한 스크립트 언어

- HTML과 CSS와는 다르게 프로그래밍 언어 중 스크립트 언어이며, 정적인 HTML과 CSS로 제작된 웹페이지를 동적으로 변경해주는 역할을 담당한다. 쉽게 말해서 웹에 숨을 붙혀주는 역할을 한다.

- TMI지만 JS가 왜 JS인지 아는가? 그 여러분들이 알고있는 Java가 유행타서 그냥 붙혔다고 한다. 진짜다. 하지만 두 회사(모질라와 오라클)은 서로 관계없다.

<aside>
🌐 **HTML로 뼈대와 몸체를 만들고,**

**CSS로 옷과 악세서리를 입혀주고,**

**JS로 웹을 숨쉬게 한다.**

우리가 웹을 개발할때 이 세가지 언어를 배워야하 하는 이유이다.

</aside>

---

## 4. 웹 보안 지식

### HTTP와 HTTPS

<aside>
💡 **HTTP**는 **Hypertext Protocol**의 약자 즉, 문서를 전송하기 위한 약속으로 해석된다.

</aside>

- 하이퍼텍스트(HTML)을 빠르게 교환하기 위한 프로토콜(통신 규약)의 일종으로 즉, 서버와 클라이언트(프로그램) 사이에서 어떻게 메시지를 교환할지 정해놓은 규칙이다.

<aside>
💡 **HTTPS**는 앞서 말한 **HTTP에 Secure을 곁들였다.** TLS기술을 기반으로 암호화된 연결을 한다.

</aside>

- **우선 TLS에 대한 개념을 짚고 넘어가야 한다.**

TLS(Transport Layer Security)는 인터넷에서 정보를 암호화해서 송수신하는 기술이다. SSL에 기반한 기술이라 SSL로도 많이 불린다.

- **암호화된 연결으로 인한 안전성**

암호화되지 않은 HTTP에 비해 중간자 공격, 도청등 해킹으로부터 안전하다.

---

### 교차 출처 자원 공유 (CORS)

<aside>
💡 **Cross-Origin Resource Sharing**

</aside>

![Untitled](Keywords%20-%20e06a6/Untitled.png)

- 웹 페이지 상 제한된 리소스를 도메인 밖의 다른 도메인으로부터 요청할 수 있게 허용하는 구조이다. 글보다 위 사진으로 개념을 더욱 쉽게 이해할 수 있다!

---

### 콘텐츠 보안 정책 (CSP) - Front에서 깊게 다루는 주제는 아님

<aside>
💡 **Content Security Policy**

</aside>

- 신뢰된 웹 페이지에서 악의적인 콘텐츠를 실행하는 공격을 예방하기 위해 도입된 컴퓨터 보안의 표준이다. [사이드 간 스크립팅(XSS)](https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8C%85), [클릭재킹](https://ko.wikipedia.org/wiki/%ED%81%B4%EB%A6%AD%EC%9E%AC%ED%82%B9), [코드 인젝션](https://ko.wikipedia.org/wiki/%EC%BD%94%EB%93%9C_%EC%9D%B8%EC%A0%9D%EC%85%98) 등의 공격을 예방할 수 있다. 보안의 표준인 만큼, 현대의 웹 브라우저에 폭넓게 지원된다.

---

## 5. 패키지 매니저

<aside>
💡 **JavaScript 개발을 위한 패키지 관리자**

</aside>

- **npm (Node Package Manager)**

Node.js에서 사용하는 모듈들을 패키지로 만들어 npm을 통하여 관리하고 배포할 수 있다. 즉, 다른 사람들이 잘 만든 모듈들을 npm을 통하여 편리하게 사용이 가능하다는 말이다.

- **yarn**

앞서 말한 npm과 같은 JS의 패키지 관리자이며, 메타(페이스북)에서 만들었다.

- 개념적인 이야기와는 멀지만 **npm이 있는데도 yarn이 개발된 이유가 있지 않을까?**

yarn은 여러 패키지를 병렬로 설치해, 퍼포먼스가 npm에 비해 빠르다는 특징이 있으며, npm에 비해 보안이 강화되었다. 다른 패키지를 즉시 포함시킬 수 있는 코드를 자동으로 실행하는 npm과 달리, 필수적인 파일만 설치한다. 

참고 문서 : [npm과 yarn의 차이점을 알아보자](https://developer0809.tistory.com/128)
같이 읽어보면 좋을 문서 : [yarn의 차세대, Yarn Berry](https://toss.tech/article/node-modules-and-yarn-berry)

---

## 6. 코드 포맷터와 린터

<aside>
💡 **서로 다른 코드 스타일은 이제 그만
통일된, 깔끔한 코드 스타일을 도와주는 든든한 친구**

</aside>

- 포맷터와 린터의 차이를 알고가자. 서로 다르다.
    
    <aside>
    ⚠️ **포맷터**는 개발자마다 다른 코드 작성 스타일을 포맷터의 도움으로 일치화시켜주는 것이며, **린터**는 문법 교정기이다. 문법적인 오류등을 수정해준다.
    
    </aside>
    

- **Prettier (포맷터)**

작성한 코드를 정해진 코딩 스타일을 따르도록 변환 해 주는 도구이며, 코드 포맷터 중에서도 가장 인기있어 거의 표준이 되고있는 JS의 라이브러리

- **ESLint (린터)**

JS, JSX의 정적 분석 도구로 즉, 코드를 분석해 문법적인 오류나 안티 패턴(문법을 그렇게 쓸 수 있지만 쓰면 안좋은 것)을 찾아주고 일관된 코드 스타일로 작성하도록 도와주는 JS의 라이브러리