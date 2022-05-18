# 메서드와 this

### 메서드 만들기

- 객체 프로퍼티에 할당된 함수를 메서드(Method)라고 부른다.

```jsx
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("안녕하세요!");
};

user.sayHi(); // 안녕하세요!
```

### 메소드 단축 구문

- 객체 리터럴 안에 메소드를 선언할때 사용할수 있는 단축 문법
- 아래 두 객체는 동일하게 작동함
- user에 할당된 sayHi가 메소드가 된다.

```jsx
user = {
  sayHi: function() {
    alert("Hello");
  }
};

//단축구문
user = {
  sayHi() { // "sayHi: function()"과 동일
    alert("Hello");
  }
};
```

- fucntion을 생략해도 메소드를 정의 할 수 있다.

### 메소드와 this

- 메소드 내부에서 `this` 키워드를 사용하면 객체에 접근 할 수 있다.

```jsx
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체'를 나타냅니다.
    alert(this.name);
  }

};

user.sayHi(); // John
```

- this를 사용하지 않고도 외부 변수를 참조해 접근하는 것도 가능하다.

```jsx
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // 'this' 대신 'user'를 이용함
  }

};
```

- 외부 변수를 사용해 객체를 잠조하면 예상치 못한 에러가 발생할 수 있다.

```jsx
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // Error: Cannot read property 'name' of null
  }

};

let admin = user;
user = null; // user를 null로 덮어씁니다.

admin.sayHi(); // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생했습니다.
```

- null값을 참조하게 되버림
- user.name대신 this.name을 인수로 받았다면 에러가 발생하지 않았을 것

### 자유로운 this

- JS의 this는 다른 프로그래밍 언어의 this와 동작 방식이 다르다.
- 모든 함수에 this를 사용할 수 있다.

```jsx
function sayHi() {
  alert( this.name );
}
```

- this의 값은 런타임에 결정되고 컨텍스트에 따라 달라진다.
- 동일한 함수라도 다른 객체에서 호출했다면 this가 참조하는 값이 달라진다.

```jsx
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// 별개의 객체에서 동일한 함수를 사용함
user.f = sayHi;
admin.f = sayHi;

// 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
// this 값이 달라짐
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (점과 대괄호는 동일하게 동작함)
```

### 객체 없이 this를 호출 할 수 있다.

- this == undefined
- 엄격모드에서 실행하면 this에는 undefined가 할당된다.
- 엄격모드가 아닐 때에는 this가 전역 객체를 참조한다.

→ 대개 실수로 작성된 경우가 많다.

### 자유로운 this가 만드는 결과

- 다른 언어를 사용하다 자바스크립트로 넘어온 개발자는 this는 메소드가 정의된 객체를 참조할 것이라고 착각함
    - bound this
- 자바 스크립트의 this는 런타임에 결정된다.
    - 점앞의 객체가 무엇인가에 따라 자유롭게 결정된다
- 런타임에 결정되면 장단점
    - 장점 : 메소드를 하나만 만들어서 여러 객체에 재사용 할 수 있다
    - 단점 : 이런 유연함이 실수로 이어질 수 있다

<aside>
💡 this의 동작방식을 충분히 이해하고 장점을 취하면서 실수를 피하는데 집중하면 된다!

</aside>

### this가 없는 화살표 함수

- 화살표 함수는 일반 함수와 달리 고유한 this를 가지지 않는다.
- this를 참조한 다는 것은 화살표 함수가 아닌 외부 함수에서 this값을 가져온다.

```jsx
let user = {
  firstName: "보라",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // 보라
```

- 별개의 this가 만들어지는 건 원치않고, 외부 컨텍스트 안에 있는 this를 이용하고 싶은 경우 화살표 함수가 유용하다.

---

요약

- 객체 프로퍼티에 저장된 함수를 '메서드’라고 부릅니다.
- object.doSomthing()은 객체를 '행동’할 수 있게 해줍니다.
- 메서드는 this로 객체를 참조합니다.
- this 값은 런타임에 결정됩니다.
- 함수를 선언할 때 this를 사용할 수 있습니다. 다만, 함수가 호출되기 전까지 this엔 값이 할당되지 않습니다
- 함수를 복사해 객체 간 전달할 수 있습니다.
- 함수를 객체 프로퍼티에 저장해 object.method()같이 ‘메서드’ 형태로 호출하면 this는 object를 참조합니다.
- 화살표 함수는 자신만의 this를 가지지 않는다는 점에서 독특합니다. 화살표 함수 안에서 this를 사용하면, 외부에서 this 값을 가져옵니다.