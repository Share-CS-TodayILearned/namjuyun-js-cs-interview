// 프로그래머스 lv. 1️⃣ : 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  const answer = a.map((ele, index) => ele * b[index]).reduce((a, b) => a + b);
  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
