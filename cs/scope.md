작성일 : 2022.03.29

# Scope와 Scope Chain

## Scope

> 현재 실행의 맥락(context)<br>
> 어떠한 값, 표현이 visible하며, 참조될 수 있는 맥락

> 변수/함수 등의 식별자의 유효범위, 식별자가 접근될 수 있는 범위

<br>

```jsx
const myName = "Namju";

console.log(myName); // "Namju"
```

`console.log()`가 같은 Scope 내에 있는 변수에 접근하였기 떄문에 불러올 수 있었음

<br>

하지만 스코프 밖의 변수에는 접근하지 못함

```jsx
const callMeByMyName = () => {
  const myName = "Namju";
  console.log("Hey, " + myName);
};

callMeByMyName(); // "Hey, Namju"
console.log(myName); // ReferenceError!!
```

`myName`은 해당 함수의 스코프 안에서 선언된 변수이기 때문에 바깥 스코프(전역)에서 참조할 수 없음

<br>
<br>

## Scope의 장점

1. **안정성**<br>
   Scope가 없다면 프로그램 전체에서 모든 식별자에 대해 접근을 할 수 있음<br>
   그렇게 된다면 의도치 않은 값의 변경 등의 예기치 않은 부작용이 생길 가능성이 큼

2. **식별자 간 충돌 방지**<br>
   똑같은 식별자 이름이 사용되는 경우, 스코프의 경계가 분명해야 어디서는 어떤 변수를 참조하는 것인지 확연히 드러남<br>
   스코프가 정해져야 예측가능하게 똑같은 변수명을 다른 곳에서 여러번 사용할 수 있음

3. **가비지 컬렉션**<br>
   자바스크립트는 메모리 관리가 필요 없는 언어임<br>
   → 한 변수에 대한 사용을 끝내면 자동으로 가비지 컬렉션이 이루어짐<br>
   → 스코프를 통해 더 자주, 더 효율적으로 가비지 컬렉션을 하여 메모리 누수를 방지할 수 있음

<br>
<br>

## Scope의 종류

> Global(전역)<br>
> Local(지역) - Function(함수), Block(블록)

<br>
<br>

### 1. Global Scope

> 함수나 코드블록 밖에서 정의된 모든 변수들

최상위 스코프 = 모든 코드들을 담고 있는 영역 = **1 프로그램 1 전역 스코프**

```jsx
const myName = "Namju";

function sayHi() {
  console.log(`Hi ${myName}`);
}

sayHi(); // "Hi Namju"
```

하지만 전역 변수는 어디서나 접근 가능하고, 어디서나 수정할 수 있기 때문에 조심히 사용하자
그리고 최대한 전역 변수를 안쓰는 것이 메모리 측면에서도 더 좋음

```jsx
let myName = "Namju";

function sayHi() {
  myName = "jujusnake"; // 이름이 재할당
  console.log(`Hi ${myName}`);
}

console.log(myName); // "jujusnake"
sayHi(); // "Hi jujusnake"
```

<br>
<br>

### 2. Function Scope

> 함수 안에서 정의된 변수들은 그 함수 안에서만(+ 그 함수의 nested 함수에서만) 접근 가능하다

<br>
<br>

### 3. Block Scope

> 코드 블록 `{}` 안에서 정의된 변수들은 그 코드 블록 안에서만 접근 가능하다<br>
> ex) if문, for문

**💡 var는 블록 스코프의 영향을 받지 않는다, let/const만 블록 스코프에 한정된다**

```jsx
function calcAge(birthyear) {
  const currentYear = 2021;
  const age = currentYear - birthyear;

  // if문 블록 스코프
  if (age <= 60) {
    var working = true;
    const message = `Peter is still employed!`;
    console.log(message);
  }

  console.log(working); // true → 얘는 접근 가능함

  console.log(message); // ReferenceError: message is not defined at calcAge → 얘는 접근 불가능!
}

calcAge(1975);
```

<br>
<br>

## Lexical Scope

> 스코프의 기준은 함수와 코드 블록을 **선언**한 곳에 있지 **호출**한 곳에 있지 않다

```jsx
const userName = "Peter";

function sayUserName() {
  console.log(userName);
}

function sayUserNameAgain() {
  const userName = "Sarah";
  sayUserName();
}

sayUserNameAgain(); // Peter
```

함수를 호출한 곳에서 scope가 생성된다면 `Sarah`를 불러야겠지만, Lexical Scope이므로 `sayUserName`이 정의된 장소의 스코프를 사용하게 된다.

<br>
<br>

## Scope Chain

> 자바스크립트가 변수를 탐색하는 과정 <br>
> 현재 스코프를 최우선으로 시작하여 계속 상위 스코프로 탐색

```jsx
// Global variable
const userName = "Peter";

// Outer function
function calcAge(birthyear) {
  const currentYear = 2021;
  const age = currentYear - birthyear;

  // inner block
  if (age <= 60) {
    var working = true;
    const message = `Peter is still employed!`;
    console.log(message);
  }

  // inner function
  function yearsToRetire() {
    const retirement = 60 - age;
    console.log(`${userName} will be retired in ${retirement} years!`);
  }

  yearsToRetire();
}

calcAge(1975);
```

예를 들어 `yearsToRetire()` 함수 내부에서는 `retirement`가 정의되어있어 바로 접근 가능하다. <br> 반면 `age`는 먼저 함수 안에서 찾고, 없으니 바깥 함수인 `calcAge()`에서 가져온다.<br>그리고 `userName`은 현재 스코프에도, 바깥함수 스코프에도 없어 전역 스코프까지 나가서 가져온다.

만약 어디에도 찾을 수 없으면 `ReferenceError`를 던진다.<br>
이 프로세스를 **Variable Lookup**이라 부른다.

<br>
<br>
<br>
<br>

> **References** <br> [What is Scope and Scope Chain in JavaScript?](https://dev.to/sumusiriwardana/what-is-scope-and-scope-chain-in-javascript-52j5)
