// 프로그래머스 lv. 1️⃣ : 체육복
// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  const original = new Array(n).fill(1);
  reserve.forEach((ele) => original[ele - 1]++);
  lost.forEach((ele) => original[ele - 1]--);

  const borrow = (arr, index) => {
    if (arr[index - 1] > 1) {
      arr[index - 1]--;
      arr[index]++;
    } else if (arr[index + 1] > 1) {
      arr[index + 1]--;
      arr[index]++;
    }
  };

  original.forEach((ele, index) => {
    if (ele === 0) {
      borrow(original, index);
    }
  });

  return original.filter((ele) => ele !== 0).length;
}

console.log(solution(5, [2, 4], [3]));
