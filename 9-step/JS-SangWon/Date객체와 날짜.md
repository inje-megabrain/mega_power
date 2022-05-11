### Date객체란?

- 날짜를 저장 할 수 있고, 날짜와 관련된 메서드를 제공해주는 내장 객체
- 생성 및 수정 시간을 저장하거나 시간을 측정가능, 날짜를 출력하는 용도 등으로 사용가능

### 객체 생성하기

---

```jsx
let now = new Date();
alert( now ); // 현재 날짜 및 시간이 출력됨

//new Date(milliseconds)
// 1970년 1월 1일 0시 0분 0초(UTC+0)를 나타내는 객체
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// 1970년 1월 1일의 24시간 후는 1970년 1월 2일(UTC+0)임
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
```

- UTC 기준(UTC+0) 1970년 1월 1일 0시 0분 0초에서 milliseconds 밀리초(1/1000 초) 후의 시점이 저장된 Date 객체가 반환

### new Date(`datestring`)

---

```jsx
let date = new Date("2017-01-26");
alert(date);
// 인수로 시간은 지정하지 않았기 때문에 GMT 자정이라고 가정하고
// 코드가 실행되는 시간대(timezone)에 따라 출력 문자열이 바뀝니다.
// 따라서 얼럿 창엔
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// 혹은
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)등이 출력됩니다.
```

- 문자열이라면 해당 문자열을 자동으로 구문 분석(parsed)됨

### new Date(`year`, `month`, `date`, `hours`, `minutes`, `seconds`, `ms`)

---

```jsx
new Date(2011, 0, 1, 0, 0, 0, 0); // 2011년 1월 1일, 00시 00분 00초
new Date(2011, 0, 1); // hours를 비롯한 인수는 기본값이 0이므로 위와 동일

//최소 정밀도는 1밀리초(1/1000초)
let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 2011년 1월 1일, 02시 03분 04.567초
```

- 주어진 인수를 조합해 만들 수 있는 날짜가 저장된 객체를 반환(지역 시간대 기준)
- 첫 번째 두 번째 인수만 필드값
- 규칙
    - `year`는 반드시 네 자리 숫자
    - `month`는 0(1월)부터 11월(12월)사이의 숫자
    - `date`는 일을 나타내는데, 값이 없는 경우엔 1일로 처리
    - `hours`/`minutes`/`seconds`/`ms` 에 값이 없는 경우엔 0으로 처리

### 날짜 구성요소 얻기

---

- `Date` 객체의 메서드를 사용하면 연, 월, 일 등의 값을 얻을 수 있음
- 메서드
    
    
    | getFullYear() | 연도(네 자릿수) 반환 |
    | --- | --- |
    | getMonth() | 월을 반환(0~11사이) |
    | getDate() | 일을 반환(1~31) |
    | getHours() | 시간 |
    | getMinutes() | 분 |
    | getSeconds() | 초 |
    | getMilliseconds() | ms |
    | getDay() | 요일 반환(일요일인 0부터 토요일인 6까지) |
    - `getYear()`말고 `getFullYear()`를 사용해야하는 이유
        - 여러 자바스크립트 엔진은 더는 사용되지 않는 비표준 메서드 `getYear()`을 구현하고 있음
        - 이 메서드는 자릿수 연도를 반환하는 경우가 있기 때문에 사용해선 안됨
    - 위의 메서드들은 모두 현지 시간 기준 날짜 구성요소를 반환
        - 표준시(UTC + 0)기준의 날짜 구성 요소를 반환해주는 메서드 get다음에 UTC를 붙혀주면 됨
            
            `getUTCFullYear()`,  `getUTCMonth()`, `getUTCDay()`가 있음
            

### 날짜 구성요소 설정하기

---

- 메서드
    - `setFullYear(year, [month], [date])`
    - `setMonth(month, [date])`
    - `setDate(date)`
    - `setHours(hour, [min], [sec], [ms])`
    - `setMinutes(min, [sec], [ms])`
    - `setSeconds(sec, [ms])`
    - `setMilliseconds(ms)`
    - `setTime(milliseconds)`
    
    ```jsx
    let today = new Date();
    
    today.setHours(0);
    alert(today); // 날짜는 변경되지 않고 시만 0으로 변경됩니다.
    
    today.setHours(0, 0, 0, 0);
    alert(today); // 날짜는 변경되지 않고 시, 분, 초가 모두 변경됩니다(00시 00분 00초).
    ```
    

### 자동 고침

---

- 범위를 벗어나는 값을 설정하려고 하면 자동 고침 기능이 활성화되면서 값이 자동으로 수정됨
    
    ```jsx
    let date = new Date(2013, 0, 32); // 2013년 1월 32일은 없습니다.
    alert(date); // 2013년 2월 1일이 출력됩니다.
    
    //윤년인지 아닌지 파악
    let date = new Date(2016, 1, 28);
    date.setDate(date.getDate() + 2);
    
    alert( date ); // 2016년 3월 1일
    
    //70초 후 
    let date = new Date();
    date.setSeconds(date.getSeconds() + 70);
    
    alert( date ); // 70초 후의 날짜가 출력됨
    
    //0이나 음수를 날짜 구성요소에 설정하는 것도 가능
    let date = new Date(2016, 0, 2); // 2016년 1월 2일
    
    date.setDate(1); // 1일로 변경합니다.
    alert( date ); // 01 Jan 2016
    
    date.setDate(0); // 일의 최솟값은 1이므로 0을 입력하면 전 달의 마지막 날을 설정한 것과 같은 효과를 봅니다.
    alert( date ); // 31 Dec 2015
    ```
    

### Date 객체를 숫자로 변경해 시간차 측정하기

---

- 숫자형으로 변경하면 타임스탬프(`date.getTime()`을 호출 시 반환되는 값)가 됨
    
    ```jsx
    let date = new Date();
    alert(+date); // 타임스탬프(date.getTime()를 호출한 것과 동일함)
    
    //날짜에 마이너스 연산자를 적용해 밀리초 기준 시차를 구할 수 있음
    //스톱워치 예
    let start = new Date(); // 측정 시작
    
    // 원하는 작업을 수행
    for (let i = 0; i < 100000; i++) {
      let doSomething = i * i * i;
    }
    
    let end = new Date(); // 측정 종료
    
    alert( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` );
    ```
    

### Date.now()

---

- `Date` 객체를 만들지 않고도 시차를 측정하는 방법
- 현재 타임스탬프를 반환하는 메서드
- `new Date().getTime()`과 의미론적으로 동일, 중간에 `Date` 객체를 만들지 않는다는 점이 다름
    - 빠르고 가비치 컬렉터의 일을 덜어준다는 장점

```jsx
let start = Date.now(); // 1970년 1월 1일부터 현재까지의 밀리초

// 원하는 작업을 수행
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` ); // Date 객체가 아닌 숫자끼리 차감
```

### 벤치마크 테스트

---

- 비교 대상을 두고 성능을 비교하여 시험하고 평가할 때 쓰임
- CPU를 많이 잡아먹는 함수의 신뢰할만한 벤치마크(평가 기준)를 구하려면 상당한 주의 필요

```jsx
// 두 함수 중 date1과 date2의 차이를 어떤 함수가 더 빨리 반환할까요?
function diffSubtract(date1, date2) {
  return date2 - date1;
}

// 반환 값은 밀리초입니다.
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}
```

- 두 함수는 완전히 동일한 작업을 수행하지만 한 함수는 밀리초 단위로 얻기 위해 `getTime()`를 사용
    
    다른 함수는 마이너스 연산자를 적용 시 객체가 숫자형으로 변화한다는 특징을 사용
    

```jsx
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Da
te.now() - start;
}

alert( 'diffSubtract를 십만번 호출하는데 걸린 시간: ' + bench(diffSubtract) + 'ms' );
alert( 'diffGetTime을 십만번 호출하는데 걸린 시간: ' + bench(diffGetTime) + 'ms' );
```

- 형 변환이 없어서 엔진 최적화에 드는 자원이 줄어들어 `getTime()`을 이용한 방법이 훨씬 빠름