// 프로그래머스 lv. 1️⃣ : 예산
// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  // 먼저 다 줄 수 있는 경우를 뺍시다!
  const sum = d.reduce((a, b) => a + b);

  if (sum <= budget) {
    return d.length;
  }

  // 그리고 이외의 경우에 대응합시다 ㅎㅎ
  let total = budget;
  let successArr = [];

  d.sort((a, b) => a - b).forEach((team) => {
    if (total - team >= 0) {
      total -= team;
      successArr.push(team);
    }
  });

  return successArr.length;
}

console.log(solution([1, 3, 2, 5, 4], 9));
// console.log(solution([2, 2, 3, 3], 10));
