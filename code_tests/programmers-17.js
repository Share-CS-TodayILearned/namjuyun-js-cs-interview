// 프로그래머스 lv. 1️⃣ : 약수의 개수와 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  const getDivisor = (num) => {
    if (num === 1) {
      return 1;
    } else if (num === 2) {
      return 2;
    }

    const divisors = [1, num];

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }

    return divisors.length;
  };

  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (getDivisor(i) % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

console.log(solution(13, 17));
