# 타입스크립트 소개와 배경

## 왜 타입스크립트를 쓰면 좋은가요?

> 데이터의 모습들은 코드 상에서 확인할 수 없고,\
> 결국 실제 화면이나 console.log으로만 확인할 수 있음\
> 타입스크립트를 이용하면 이를 훨씬 더 빨리 파악하고, 오류를 잡아낼 수 있음

<br>

```javascript
address.innerText = `${user.address.suite}, ${user.address.street}, ${user.address.city}`;

// user.address는 객체이지만, 이를 찍어보거나 화면에 렌더링 해보기 전까지는 알 수 없을수도.
```

<br>

## 자바스크립트에 타입이 있을 때의 첫 번째 장점

> jsdoc 문법을 사용하여 fetch 결과의 타입과 프로퍼티를 지정해보자!

<br>

```javascript
/**
 *
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 *
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 *
 * @returns {Promise <User>}
 */

function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.city;
});
```

jsdoc의 문법을 활용하여서 미리 타입들과 프로퍼티들을 지정한다면, 잘못 입력한 경우 오류가 떠서 더 쉽게 디버깅을 할 수 있다

→ 타입이 있을 떄의 장점!

<br>

## 자바스크립트에 타입이 있을 때의 두 번째 장점

```jsx
function add(a, b) {
  return a + b;
}

add(10, "20"); // 전부 다 문자열로 취급되어 1020으로 도출
```

해당 함수에 마우스를 호버해보면, `function sum(a: any, b: any): any`라고 뜸
→ 동적 타입!

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20);
```

인자의 타입을 지정해주고, 함수가 return 하는 값까지 명시적으로 타입을 부여할 수 있음
(이 부분은 ts의 타입 추론으로 생략해도 되긴 함)

<br>

**장점 1 : 에러의 사전 방지**

```ts
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, "20"); // 에러 발생!
```

**장점 2: 코드 가이드 및 자동 완성 (개발 생산성 향상)**

타입이 지정되어, 해당 타입에 대한 메소드, API들을 바로 적용할 수 있음\*\*<br>
→ API 오탈자 방지할 수 있음

```ts
function sum(a: number, b: number): number {
  return a + b;
}

let result = sum(10, 20);
result.toLocaleString; // 점을 찍으면 바로 Number에 적용할 수 있는 메소드들의 리스트 보여짐!
```

vscode의 intellisense 기능을 더욱더 잘 활용할 수 있게 됨 (에러 사전 방지)

<br>

## 자바스크립트를 타입스크립트처럼 코딩하는 방법

타입스크립트를 쓰지 않고도 자바스크립트에서 타입을 지정하거나 할 수 있는 방법

```js
// @ts-check

/**
 *
 * @param {number} a 첫번째 숫자를 넣으십시오
 * @param {number} b 두번째 숫자를 넣으십시오
 */

function add(a, b) {
  return a + b;
}

add(10, "20"); // 하지만 ts-check를 안붙여주면 string이 들어와도 오류처리해주지 않음
```

하지만 이렇게 쓰느니 타입스크립트를 사용하는 것이 훨씬 더 좋다!!!
