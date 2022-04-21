// 프로그래머스 lv. 1️⃣ : 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(result)].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
