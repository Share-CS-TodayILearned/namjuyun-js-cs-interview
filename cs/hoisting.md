# Hoisting이란 도대체 무엇인가...

## ✨ 기본 정의

자바스크립트 인터프리터가 변수, 함수, 클래스의 선언을 코드 실행 전에 최상단으로 옮기는 것(처럼 보이는?) 과정

🚧 변수 / 클래스 선언의 경우도 호이스팅이 되지만, <u>예기치 못한 에러</u>를 발생시킬 수
있음

> 인터프리터(interpreter) : 소스코드를 바로 실행하는 컴퓨터 프로그램, 환경 <br> 원시 코드를 기계어로 번역하는 컴파일러와 대비됩니다

<br/>
<br/>

## 함수 호이스팅

: 함수를 선언 전에 호출할 수 있도록 도와줌

```jsx
catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}

// 코드 상 함수 선언 전에 호출이 가능하다!
```

<br/>

## 변수 호이스팅

: 코드 상에서 변수 선언 / 초기화 이전에도 변수를 호출할 수 있음.

**💡 하지만 자바스크립트는 선언만 호이스팅하고, 초기화는 호이스팅하지 않음!!!**

→ 선언 코드에 다다를 때까지 변수는 default 초기화 값을 가지고 있음

(var = undefined | const, let = uninitialized)

> **변수 호이스팅**
>
> = 변수 선언 과정에서 선언과 초기화를 분리 시킨 후 → 선언만 위로 옮기는 과정

<br>

### 1. `var` 호이스팅

> var의 변수 선언 과정
>
> 선언 + 디폴트 초기화 (undefined) → 제대로 된 초기화 + 할당

var의 경우 런타임 이전에 선언과 디폴트 초기화가 일어남

→ 할당 부분은 호이스팅이 되지 않기 때문에 `undefined` 를 도출해냄

<br>

- 선언과 초기화를 따로할 경우

  ```jsx
  console.log(init); // undefined
  var init; // 선언
  console.log(init); // undefined
  init = "Initialized?"; // 초기화 + 할당
  console.log(init); // "Initialized?"
  ```

- 선언과 초기화를 같이할 경우

  ```jsx
  console.log(init); // undefined
  var init = "Initialized?"; // 선언 + 초기화 + 할당
  console.log(init); // "Initialized?"
  ```

- 선언부를 빼먹은 경우 : 아예 끌어올릴 선언부가 없으니까 RefError가 뜬다

  ```jsx
  console.log(init); // ReferenceError
  init = 'Initialized?"
  ```

  _선언부 없는 초기화는 선언까지 함께 일어난다 (물론 잘못된 Practice)_

<br>

### 2. `let`, `const` 호이스팅

let과 const는 선언과 동시에 디폴트값으로 초기화가 되지 않는다.

let const는 선언이 되고 일시적 사각 지대(Temporal Dead Zone)가 있어, 선언 이후에 TDZ 이후에 초기화와 할당이 일어난다.

```jsx
console.log(greet); // ReferenceError!!
let greet = "Hello!";
```

<br>

### 3. `class` 호이스팅

클래스 또한 호이스팅 됨 BUT! 디폴트 초기화 값이 없음 → `ReferenceError`

> **Reference** <br> [Hoisting - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
