// 프로그래머스 lv. 1️⃣ : 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  return [...Array(10).keys()]
    .filter((ele) => !numbers.includes(ele))
    .reduce((a, b) => a + b);
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
