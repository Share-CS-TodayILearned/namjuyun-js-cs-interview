// 프로그래머스 lv. 1️⃣ : 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  const originalNumbers = absolutes.map((ele, index) => {
    if (signs[index]) {
      return ele;
    } else {
      return -ele;
    }
  });

  return originalNumbers.reduce((a, b) => a + b);
}

console.log(solution([4, 7, 12], [true, false, true]));
