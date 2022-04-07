// 프로그래머스 lv. 1️⃣ : K번쨰수
// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  const result = commands.map(
    ([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
  );

  return result;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
