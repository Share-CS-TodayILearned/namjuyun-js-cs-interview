// 프로그래머스 lv. 1️⃣ : 부족한 금액 계산하기
// https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  const counts = [...Array(count).keys()];
  const sum = counts.map((ele) => (ele + 1) * price).reduce((a, b) => a + b);

  if (sum - money > 0) {
    return sum - money;
  } else {
    return 0;
  }
}

console.log(solution(3, 20, 4));
