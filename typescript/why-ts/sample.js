// function add(a, b) {
//   return a + b;
// }

// add(10, "20"); // 전부 다 문자열로 취급되어 1020으로 도출

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
