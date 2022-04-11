작성일 : 2022.04.11 (월)

# 불변 객체 (Immutable Object)

객체 내부 프로퍼티를 변경할 때마다

- 새로운 객체를 만들어 재할당하기로 정하거나
- 자동으로 새로운 객체를 만드는 도구를 활용하여 (ex. immutable.js, immer.js 등의 라이브러리)

➡️ **불변성** 확보

<br>

### 불변 객체가 필요한 경우

객체에 변화를 가해도 원본이 그대로 남아있어야 하는 경우<br>
ex) 정보가 바뀌었으면 알림 전송하는 경우, 바뀌기 전의 정보와 바뀐 후의 정보를 보여줘야하는 경우 등

<br>

```jsx
var user = {
  name: "namju",
  gender: "male",
};

var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, "yun");

// 아래의 if문은 무시되어 지나침
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // yun yun
console.log(user === user2); // true
```

<br>
<br>

## 불변 객체 만들기

### 새 객체를 하드코딩

```jsx
var user = {
  name: "namju",
  gender: "male",
};

var changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

var user2 = changeName(user, "yun");

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다."); // 유저 정보가 변경되었습니다.
}

console.log(user.name, user2.name); // namju yun
console.log(user === user2); // false
```

➡️ 👎 객체에 프로퍼티가 많을수록 하드코딩해야하는 수고가 너무 늘어남

프로퍼티 개수에 상관 없이 **모든 프로퍼티를 복사하는 함수**를 만드는 것이 좋음

<br><br>

### 얕은 복사

> 바로 아래 단계의 값들만 복사하는 방법

: `for in` 반복문으로 새 객체에 원래 객체의 프로퍼티들을 복사하는 함수

```jsx
var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};
```

이 함수를 이용해 새로운 객체를 만들어 프로퍼티를 변경할 수 있음

```jsx
var user = {
  name: "namju",
  gender: "male",
};

var user2 = copyObject(user);
user2.name = "yun";

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다."); // 유저 정보가 변경되었습니다.
}

console.log(user.name, user2.name); // namju yun
console.log(user === user2); // false
```

👎 이 방법의 단점

- 프로토타입 체이닝 상의 모든 프로퍼티를 복사
- getter / setter는 복사하지 않음
- 얕은 복사만 수행함

➡️ 게다가 협업하는 모든 개발자들에게 무조건 copyObject 함수를 사용하기로 합의시키는 것이 어려움!

<br>

> **프로토타입 체이닝**<br>
> 모든 객체(함수 포함)에는 프로토타입 객체가 포함되어 있음<br>
> 그렇기 떄문에 얕은 복사를 한 객체는 부모(원본) 객체의 프로토타입에도 접근할 수 있어짐<br>
> (스코프 체이닝처럼 계속 상위로 가서 탐색을 하는 식)

<br><br>

### 깊은 복사

> 내부의 모든 값들을 하나하나 찾아서 전부 복사하는 방법

얕은 복사 만으로는 중첩된 객체를 제대로 복사할 수 없음 (바로 아래 단계의 값들만 새로운 데이터 주소로 복사시키는 것)

```jsx
var user = {
  name: "namju",
  info: {
    hobby: "bike",
    location: "seoul",
    happy: true,
  },
};

var user2 = copyObject(user);
user.name = "yun namju";
user.info.hobby = "read";
user.info.location = "busan";

console.log(user.name === user2.name); // false
console.log(user.info.hobby === user2.info.hobby); // true : 두 객체가 모두 변경됨
console.log(user.info.location === user2.info.location); // true : 두 객체가 모두 변경됨
```

한 단계 더 nesting 된 info 객체의 프로퍼티들에는 기존의 데이터를 그대로 참조하고 있는 것!

➡️ 이런 nested 된 모든 프로퍼티들에 대한 복사를 **재귀적으로** 수행해야 **깊은 복사**가 됨

<br>

_객체의 깊은 복사를 수행하는 함수_

```jsx
var copyObjectDeep = function (target) {
  var result = {};

  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]); // 재귀적 호출
    }
  } else {
    result = target;
  }

  return result;
};
```

➕ `hasOwnProperty` 메서드를 통해 프로토타입 체이닝을 통해 상속된 프로퍼티는 복사하지 않도록 할 수 있음
➕ ES6, ES2017의 경우 `Object.getOwnPropertyDescriptor`, `Object.getOwnPropertyDescriptors`를 통해 getter/setter를 복사할 수 있음

<br>

✨ 깊은 복사를 하는 다른 방법 - `JSON`

객체를 JSON 문법의 문자열로 만들었다가 다시 JSON 객체로 만드는 것 (`JSON.stringify`, `JSON.parse`)

- 메서드, `__proto__`, getter/setter는 JSON으로 변경 불가능하여 무시됨
- `httpRequest`로 받은 데이터 등의 순수한 정보를 다룰 때 활용

<br>

---

<br>

# undefined와 null

둘 다 '**없음**'을 나타내지만 의미가 다르고 사용 목적도 다르다

<br>

## undefined

사용자가 명시적으로 지정하거나, 자바스크립트 엔진이 자동으로 부여함

<br>

### 자바스크립트 엔진이 부여하는 경우

1. 데이터 영역의 메모리 주소를 지정하지 않은 식별자에 접근<br> (var를 선언하기만 하고 할당은 하지 않으면 undefined로 초기화 됨)

2. 객체 내부의 존재하지 않는 프로퍼티에 접근할 때

3. return 문이 없거나 호출되지 않는 함수의 결과

```jsx
// 1
var a;
console.log(a); // undefined

// 2
var obj = { a: 1 };
console.log(obj.b); // undefined

// 3
var c = function () {};
console.log(c()); // undefined
```

<br>

### undefined와 배열

크기가 3인 빈 배열을 만들면 undefined 조차 할당이 되어있지 않음

```jsx
var arr1 = [];
arr1.length = 3;
console.log(arr1); // [empty x 3]

var arr2 = new Array(3);
console.log(arr2); // [empty x 3]

var arr3 = [undefined, undefined, undefined];
console.log(arr3); // [undefined, undefined, undefined]
```

'비어있는 요소'와 'undefined가 할당된 요소'는 출력 결과부터 다름<br>
➕ 비어있는 요소는 **배열 메서드의 순회 대상에서 제외됨**

```jsx
var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach((v) => console.log(v)); // undefined 1
arr2.forEach((v) => console.log(v)); // 1 (아예 첫번째는 무시)
```

빈 배열 요소 = 아직 존재하지 않는 객체 프로퍼티 <br>
➡️ 특정 인덱스에 값을 지정하기 전까지는 빈 공간을 확보하고, 인덱스를 이름으로 정하고, 데이터의 주소값을 저장하는 동작을 하지 않음!

하지만 `undefined`는 그 자체로 하나의 값 <br>
➡️ **명시적으로 undefined를 할당한다면** 고유의 프로퍼티로 실존하게 되고 순회의 대상이 될 수 있음

<br>

> ✨ 사용자가 명시적으로 할당한 undefined는 하나의 실존 데이터<br>
> ✨ 하지만 자바스크립트 엔진이 반환하는 undefined는 문자 그대로 값이 없음, 아직 존재하지 않음!

➡️ 여기서 오는 혼돈을 피하기 위해 우리는 우리가 명시적으로 undefined를 주는 일을 없게 해야함
→ 그 대신에 `null` 사용

> 명시적으로 값 없음을 나타낼 때엔 무조건 `null`을 사용해라

<br><br>
<br><br>

> **레퍼런스**<br> > [[JS Core]JavaScript 프로토타입 체이닝(Prototype Link, Prototype Object)](https://velog.io/@sik2/JS-CoreJavaScript-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EC%B2%B4%EC%9D%B4%EB%8B%9DPrototype-Link-Prototype-Object)
