// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

// JsDoc으로 타입을 지정할 수 있음 → 바로바로 해당 fetch 결과의 타입과, 프로퍼티를 확인할 수 있음

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

function startApp() {
  fetchUser()
    .then(function (response) {
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = `${user.address.suite}, ${user.address.street}, ${user.address.city}`;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
