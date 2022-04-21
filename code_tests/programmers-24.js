// 프로그래머스 lv. 1️⃣ : 가운데 글자 가져오기
// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const half = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s[half - 1] + s[half];
  } else {
    return s[half];
  }
}
