<h1>JS 기본</h1>

# Hello, world!

## Script 태그

- <script.> 태그를 이용하면 자바스크립트 프로그램을 HTML 문서 대부분의 위치에 삽입할 수 있습니다.

```html
<!DDCTYPE HTML>
<html>
	<body>
		<p>스크립트 전</p>
		
		<script>
		alter('Hello World!');
		</script>
		
		<p>스크립트 후</p>
	</body>
</html>
```

<aside>
💡 브라우저는 <script.>태그를 만나면 안의 코드를 자동으로 처리

</aside>

<aside>
💡 src 속성이 있으면 태그 내부의 코드는 무시됩니다

</aside>

## 엄격 모드(strict mode)

> 자바스크립트가 묵인했던 에러들의 에러 메시지를 발생
> 
- 기존에 작성한 코드는 절대 망가지지 않는다는 장점
- 자바스크립트 창시자들이 했던 실수나 불완전한 결정이 언어 안에 영원히 박제된다는 단점

### use strict

- 이 지시자가 스크립트 최상단에 오면 스크립트 전체가 “모던한"방식으로 동작

```jsx
"use strict"; 
var v = "Hi! I'm a strict mode script!";
```

<aside>
💡 use strict는 스크립트 최상단에 있어야 한다는 점 그렇지 않으면 엄격 모드가 활성화되지 않을 수 있습니다.

</aside>

<aside>
💡 use strict를 취소할 방법은 없습니다

</aside>

## 변수와 상수

### 변수

> 데이터를 저장할 때 쓰이는 ‘이름이 붙은 저장소'입니다.
> 
- `let` 키워드를 사용해 변수를 생성
- 할당 연산자 `=`를 사용해 변수 안에 데이터를 저장
- `var`는 let과 거의 동일하게 작동 대신 var는 오래된 방식입니다.
- 변수 명명 규칙
    1. 변수명에는 오직 문자와 숫자, 그리고 기호 $와 _만 들어갈 수 있습니다.
    2. 첫 글자는 숫자가 될 수 없습니다.

### 상수

> 변화하지 않는 변수를 선언할 땐 let대신 `const`를 사용합니다.
> 

<aside>
💡 상수는 재할당할 수 없으므로 상수를 변경하려고 하면 에러가 발생

</aside>

## 자료형

```jsx
let message ="hello";
message = 123456;
```

- 이처럼 자료의 타입은 있지만 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어를 동적 타입 언어라고 부릅니다.

### 숫자형

> 정수 및 부동소수점 숫자를 나타냅니다.
> 
- *,/,+,-
- Infinity, -Infinity, NaN ⇒ 특수 숫자 값
    - Infinity ⇒ 무한대
        - 어느 숫자든 0으로 나누면 무한대
        - 직접 참조 가능
    - NaN
        - 계산 중에 에러가 발생했다는 것을 나타내주는 값

### BigInt

- 내부 표현 방식 때문에 자바스크립트에선 (253-1)(9007199254740991) 보다 큰 값 혹은 -(253-1) 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없습니다.
- 길이에 상관없이 정수형을 나타낼 수 있다.
- Bigint 형은 값은 정수 리터널 끝에 n을 붙이면 만들 수 있습니다.

```jsx
const bigInt = 123456789012345678901234567890n
// 끝에 'n'이 붙으면 BigInt형 자료입니다.
```

### 문자형

> 자바스크립트에선 문자열을 따옴표로 묶습니다.
> 
- 따옴표 종류
    1. 큰 따옴표
    2. 작은 따옴표
    3. 역 따옴표

<aside>
💡 역 따옴표로 변수나 표현식을 감싼 후 `${…}`안에 넣어주면, 아래와 같이 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있습니다.

</aside>

```jsx
let name = "John";
alert('Hello, ${name}!'}; //Hello, John!
```

<aside>
💡 자바스크립트는 글자형을 지원하지 않습니다.

</aside>

### 불린형

> 불린형(논리 타입)은 true와 false 두 가지 값밖에 없는 자료형입니다.
> 

### ‘null’값

- null 값은 지금까지 소개한 자료형 중 어느 자료형에도 속하지 않는 값
- null 값은 오리지 null 값만 포함하는 별도의 자료형을 만듭니다.

<aside>
💡 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.

</aside>

### ‘undefined’값

- undefined 값도 null 값처럼 자신만의 자료형을 형성
- undefined는 ‘값이 할당되지 않은 상태'를 나타낼 때 사용
- 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당

### 객체와 심볼

- 객체형
    - 객체는 데이터 컬렉션이나 복잡한 개체를 표현할 수 있다.
- 심볼형
    - 객체의 고유한 식별자를 만들 때 사용

### typeof 연산자

> 인수의 자료형을 반환
> 

<aside>
💡 자료형에 따라 처리 방식을 다르게 하고 싶거나 변수의 자료형을 빠르게 알아내고자 할 때 유용

</aside>

- 문법
    1. 연산자 : typeof x
    2. 함수 : typeof (x)
    - typeof x를 호출하면 인수의 자료형을 나타내는 문자열을 반환
        
        ```jsx
        ‘typeof undefined // "undefined"
        
        typeof 0 // "number"
        
        typeof 10n // "bigint"
        
        typeof true // "boolean"
        
        typeof "foo" // "string"
        
        typeof Symbol("id") // "symbol’
        ```
        

## alert, prompt, confirm을 이용한 상호작용

### alert

> 이 함수가 실행되면 사용자가 ‘확인(ok)’버튼을 누를 때까지 메시지를 창이 계속 떠있게 됨
> 

### prompt

> 브라우저에서 제공하는 prompt 함수는 두 개의 인수를 받습니다.
> 

```jsx
result = prompt(title,[default]);
```

- 함수가 실행되면 텍스트 메시지와 입력 필드, 확인 및 취소 버튼이 있는 모달 창을 띄워줍니다.
- title : 사용자에게 보여줄 문자열
- default : 입력 필드의 초깃값

### confirm

> 매개변수로 받은 question(질문)과 확인 및 취소 버튼이 있는 모달 창을 보여줍니다.
> 

> 사용자가 확인을 누르면 true, 그 외 false
> 

## 형변환

### 문자형으로 변환

> `String(value)`을 사용하면 문자형으로 명시적 변환 가능
> 

### 숫자형으로 변환

> `Number(value)`로도 형 변환 가능
> 

### 불린형으로 변환

> `Boolean(value)`으로도 변환 가능
> 
- 0,null,undefined,NaN,”” ⇒ false
- 그 외의 값 ⇒ true

# 비교연산자

> 비교연산자는 우리가 배웠던 부분과 비슷한 부분은 빼고 시작하겠습니다
> 

## 문자열 비교

- 자바스크립트는 '사전’순으로 문자열을 비교합니다. '사전편집(lexicographical)'순 이라고 불리기도 하는 이 기준을 적용하면 사전 뒤쪽의 문자열은 사전 앞쪽의 문자열보다 크다고 판단됩니다.
- 문자열 비교 알고리즘
    1. 두 문자열의 첫 글자를 비교합니다.
    2. 첫 번째 문자열의 첫 글자가 다른 문자열의 첫 글자보다 크면(작으면), 첫 번째 문자열이 두 번째 문자열보다 크다고(작다고) 결론 내고 비교를 종료합니다.
    3. 두 문자열의 첫 글자가 같으면 두 번째 글자를 같은 방식으로 비교합니다.
    4. 글자 간 비교가 끝날 때까지 이 과정을 반복합니다.
    5. 비교가 종료되었고 문자열의 길이도 같다면 두 문자열은 동일하다고 결론 냅니다. 비교가 종료되었지만 두 문자열의 길이가 다르면 길이가 긴 문자열이 더 크다고 결론 냅니다.

<aside>
💡 정확히는 사전순이 아니라 유니코드 순이다!

</aside>

> 대문자 'A'와 소문자 'a'를 비교했을 때 소문자 'a'가 더 큽니다. 자바스크립트 내부에서 사용되는 인코딩 표인 유니코드에선 소문자가 대문자보다 더 큰 인덱스를 갖기 때문입니다.
> 
- ASCII
    - A~Z
        - 65 ~ 90
    - a ~ z
        - 97 ~ 122

### 다른 형을 가진 값 간의 비교

- 비교하려는 값의 자료형이 다르면 자바스크립트는 이 값들을 숫자형으로 바꿉니다.

```jsx
alter('2'>1); // true, 문자열 '2'가 숫자 2로 변환된 후 비교 진행
alter('01'==1); //true, 문자열 '01'이 숫자 1로 변환된 후 비교 진행
```

- 불린값의 경우 true는 1, false는 0으로 변환된 후 비교가 이루어짐

```jsx
alter(true==1); //true
alter(false==0); //true
```

<aside>
💡 동등 비교(==)시 true를 반환함

</aside>

<aside>
💡 논리 평가 시 값 하나는 true, 다른 값 하나는 false를 반환함

</aside>

```jsx
let a = 0;
alert(Boolean(a)); //false
let b ="0";
alert(Boolean(b)); //true
alter(a==b); //true
```

- 동등 비교 연산자 ‘==’는 (예시에서 문자열 "0"을 숫자 0으로 변환시킨 것처럼) 피연산자를 숫자형으로 바꾸지만, 'Boolean’을 사용한 명시적 변환에는 다른 규칙이 사용되기 때문입니다.

## 일치 연산자

- 동등 연산자 “==”은 0과 false 구별하지 못합니다.

<aside>
💡 일치 연산자 “===”를 사용하면 형 변환 없이 값을 비교할 수 있습니다.

</aside>

- 일치 연산자 ===가 동등 연산자 ==의 엄격한 버전인 것처럼 ‘불일치’ 연산자 !==는 부등 연산자 !=의 엄격한 버전입니다.

## null이나 undefined와 비교하기

### 일치 연산자 ===를 사용하여 null 과 undefined를 비교

- 두 값의 자료형이 다르기 때문에 일치 비교시 거짓이 반환

```jsx
alert(null===undefined); //false
```

### 동등 연산자 ==를 사용하여 null 과 undefined를 비교

- null과 undefined를 ‘각별한 커플'처럼 취급해 true가 반환

```jsx
alert(null==undefined); //true
```

### 산술 연산자나 기타 비교 연산자 <,>,≤,≥를 사용하여 null 과 undefined를 비교

- null과 undefined는 숫자형으로 변환
- null은 0, undefined는 NaN으로 변환
- undefined를 다른 값과 비교해서는 안된다.

# if 와 ‘?’를 사용한 조건 처리

- if문과 ‘물음표'연산자라고도 불리는 조건부 연산자 ?를 사용하면 됩니다.

## ‘if’문

if(...)문은 괄호 안에 들어가는 조건을 평가하는데, 그 결과가 true이면 코드 블록이 실행됩니다.

## 불린형으로 변환

- 숫자 0, 빈 문자열"”, null, undefined, NaN은 불린형으로 변환 시 모두 false가 됩니다.
    - ‘faisy’값이라고 부름
- 이 외에는 모두 true
    - ‘truthy’값이라고 부름

## 조건부 연산자 ‘?’

```jsx
let result = condition ? value1 : value2;
```

- condition이 truthyf라면 value1, 그렇지 않으면 value2 반환

# 논리 연산자

> 자바스크립트엔 세 종류의 논리 연산자 ||(OR), &&(AND), !(NOT)이 있습니다.
> 

## OR 연산자

1. 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
    - OR ||을 사용하면 실제 값이 들어있는 변수를 찾고, 그 값을 보여줄 수 있습니다. 변수 모두에 값이 없는 경우엔 익명를 보여줍시다.
    
    ```jsx
    let firstName="";
    let lastName="";
    let nickName="바이올렛";
    alert(firstName || lastName || nickName || "익명"); //바이올렛
    ```
    
2. 단락 평가
    - OR||은 왼쪽부터 시작해서 오른쪽으로 평가를 진행하는데, truthy를 만나면 나머지 값들은 건드리지 않은 채 평가를 멈춥니다.
    
    ```jsx
    true || alert("not printed");
    false || alert("printed");
    ```
    
    - 첫 번째 줄의 || 연산자는 true를 만나자마자 평가를 멈추기 때문에 alert가 실행되지 않습니다.
    단락 평가는 연산자 왼쪽 조건이 falsy일 때만 명령어를 실행하고자 할 때 자주 쓰입니다.
    
    ## AND 연산자
    
    ```jsx
    alert( true && true );   // true
    alert( false && true );  // false
    alert( true && false );  // false
    alert( false && false ); // false
    ```
    
    ## NOT 연산자
    
    - 피연산자를 불린형으로 변환
    - NOT을 두 개 연달아 사용하면 값을 불린형으로 변환 가능
    
    ### 연산자 순위
    
    - || → && → !
    
    # nullish 병합 연산자 ‘??’
    
    > nullish 병합 연산자(nullish coalescing operator) `??`를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 ‘확정되어있는’ 변수를 찾을 수 있습니다.
    > 
    
    ### a ?? b
    
    - a가 null도 아니고 undefined도 아니면 a
    - 그 외의 경우는 b
    
    ### ‘??’와"||’의 차이
    
    - || 는 첫 번째 truthy값을 반환
    - ?? 는 첫 번째 정의된 값을 반환
    
    # while과 for 반복문
    
    ## while 반복문
    
    ```jsx
    while(condition) {
    	//코드
    	//반복문 본문
    }
    condition이 truthy이면 반복문 본문의 코드가 실행
    ```
    
    ## do...while 반복문
    
    ```jsx
    do {
    	//반복문 본문
    } while(condition);
    ```
    
    ## for 반복문
    
    ```jsx
    for(begin; condition; step) {
    	//반복문 본문...
    }
    ```
    
    - 반목문 빠져나오기 `break`
    - 다음 반복문으로 넘어가기 `continue`
    
    <aside>
    💡 ‘?’ 오른쪽엔 break나 continue가 올 수 없습니다!
    
    </aside>
    
    ## break/continue와 레이블
    
    - 레이블(label)은 반복문 앞에 콜론과 함께 쓰이는 식별자
    - 반복문 안에서 `break <labelName>`문을 사용하면 레이블에 해당하는 반복문에 빠져 나올 수 있음
    
    ```jsx
    labelName: for(...) {
    	...
    }
    ```
    
    - break outer는 outer라는 레이블이 붙은 반복문을 찾고, 해당 반복문을 빠져나오게 해줌
    - 따라서 제어 흐름이 (*)에서 alter(’완료!’)로 바로 바뀝니다.
    
    ```jsx
    outer: for (let i =0; i<3; i++) {
    	for (let j=0; j<3; j++) {
    		let input = prompt('${i},${j}의 값');
    		//사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옴
    		if(!input) break outer; //(*)
    		//입력받은 값을 가지고 무언가를 함
    	}
    }
    alter("완료");
    ```
    
    <aside>
    💡 break와 continue는 반복문 안에서만 사용할 수 있고, 레이블은 반드시 break이나 continue 지시자 위에 있어야 합니다
    
    </aside>
    
    # switch문
    
    ```jsx
    switch(x) {
      case 'value1':  // if (x === 'value1')
        ...
        [break]
    
      case 'value2':  // if (x === 'value2')
        ...
        [break]
    
      default:
        ...
        [break]
    }
    ```
    
    - 변수 x의 값과 첫 번째 case문의 값 ‘value1’를 일치 비교한 후, 두 번째 case문의 값 ‘value2’와 비교합니다. 이런 과정이 계속 이어집니다.
    - case문에서 변수 x의 값과 일치하는 값을 찾으면 해당 case문의 아래의 코드가 실행됩니다. 이때, break문을 만나거나 switch 문이 끝나면 코드의 실행은 멈춥니다.
    - 값과 일치하는 case문이 없다면, default문 아래의 코드가 실행됩니다.
    
    # 함수
    
    ## 함수 선언
    
    ```jsx
    function showMessage() {
    	alert('안녕하세요!');
    }
    ```
    
    - function 키워드, 함수 이름, 괄호로 둘러싼 매개변수를 차례로 써주면 함수를 선언할 수 있습니다.
    - 만약 매개변수가 여러 개 있다면 각 매개변수를 콤마로 구분
    - 함수를 구성하는 코드의 모임인 ‘함수 본문'을 중괄호로 감싸 붙여줍니다
    
    ```jsx
    function name(parameters) {
    	..함수 본문..
    }
    ```
    
    - 새롭게 정의한 함수는 함수 이름 옆에 괄호를 붙여 호출할 수 있습니다
    
    ## 지역 변수
    
    > 함수 내에서 선언한 변수인 지역 변수는 함수 안에서만 접근할 수 있습니다
    > 
    
    ```jsx
    function showMessage() {
      let message = "안녕하세요!"; // 지역 변수
    
      alert( message );
    }
    
    showMessage(); // 안녕하세요!
    
    alert( message ); 
    // ReferenceError: message is not defined 
    //(message는 함수 내 지역 변수이기 때문에 에러가 발생합니다.)
    ```
    
    ## 외부 변수
    
    > 함수 내부에서 함수 외부의 변수인 외부 변수에 접근할 수 있습니다
    > 
    
    ```jsx
    let userName = 'John';
    
    function showMessage() {
      let message = 'Hello, ' + userName;
      alert(message);
    }
    
    showMessage(); // Hello, John
    ```
    
    <aside>
    💡 함수에선 외부 변수에 접근하는 것뿐만 아니라, 수정도 할 수 있습니다
    
    </aside>
    
    <aside>
    💡 외부 변수는 지역 변수가 없는 경우에만 사용할 수 있습니다
    
    </aside>
    
    ## 매개변수
    
    > 매개변수를 이용하면 임의의 데이터를 함수 안에 전달할 수 있습니다. 매개변수는 인수라고 불리기도 합니다.
    > 
    
    ```jsx
    function showMessage(from, text) { // 인수: from, text
      alert(from + ': ' + text);
    }
    
    showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
    showMessage('Ann', "What's up?"); // Ann: What's up? (**)
    ```
    
    - (*)*,(***)로 표시한 줄에서 함수를 호출하면, 함수에 전달된 인자는 지역변수 from과 text에 복사됩니다.
    - 그 후 함수는 지역변수에 복사된 값을 사용합니다.
    
    ## 기본값
    
    > 매개변수에 값을 전달하지 않으면 그 값은 undefined가 됩니다.
    > 
    
    ## 반환값
    
    > 함수를 호출했을 때 함수를 호출한 그곳에 특정 값을 반환하게 할 수 있습니다. 이때 이 특정 값을 반환 값이라고 부릅니다
    > 
    
    <aside>
    💡 return문이 없거나 return 지시만 있는 함수는 undefined를 반환합니다
    
    </aside>
    
    # 함수 표현식
    
    > 자바스크립트는 함수를 특별한 종류의 값으로 취급합니다. 다른 언어에서처럼 “특별한 동작을 하는 구조"로 취급되지 않습니다.
    > 
    
    ```jsx
    let sayHi = function() {
      alert( "Hello" );
    };
    ```
    
    ## 콜백 함수
    
    > 함수를 값처럼 전달하는 예시
    > 
    - 매개변수가 3개 있는 함수, ask(question, yes, no)를 작성
        - qestion = 질문
        - yes = “Yes”라고 답한 경우 실행되는 함수
        - no = “No”라고 답한 경우 실행되는 함수
    
    ```jsx
    function ask(question, yes, no) {
      if (confirm(question)) yes()
      else no();
    }
    
    function showOk() {
      alert( "동의하셨습니다." );
    }
    
    function showCancel() {
      alert( "취소 버튼을 누르셨습니다." );
    }
    
    // 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
    ask("동의하십니까?", showOk, showCancel);
    ```
    
- 함수 ask의 인수, showOk 와 showCancel은 콜백함수 또는 콜백이라고 불림

## 함수 표현식 vs 함수 선언문

- 함수 선언문 : 함수는 주요 코드 흐름 중간에 독자적인 구문 형태로 존재합니다
- 함수 표현식 : 함수는 표현식이나 구문 구성 내부에 생성됩니다.

<aside>
💡 함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다. 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다.

</aside>

<aside>
💡 함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있습니다.

</aside>

<aside>
💡 엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있습니다. 하지만 블록 밖에서는 함수에 접근하지 못합니다.

</aside>

# 화살표 함수 기본

> 함수 표현식보다 단순하고 간결한 문법으로 함수를 만들 수 있는 방법이 있습니다.
> 

```jsx
let func = (arg1, arg2,...argN) {
	return expression;
}
```

- 인자 arg1..argN를 받는 함수 func이 만들어집니다. 함수 func는 화살표(=>) 우측의 표현식(expression)을 평가하고, 평가 결과를 반환합니다.