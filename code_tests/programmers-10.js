// 프로그래머스 lv. 1️⃣ : 소수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12977

// n의 제곱근까지 나눠보았을 때 나누어지는게 없으면 소수라고 한다...
// 왜냐면 제곱근을 기준으로 곱셈 꼴이 대칭적으로 이루어지기 때문에!

function solution(nums) {
  const isPrime = (num) => {
    const sqrt = Math.sqrt(num);

    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const getAllCombinations = (arr) => {
    const combinations = [];

    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          combinations.push([arr[i], arr[j], arr[k]]);
        }
      }
    }

    return combinations;
  };

  return getAllCombinations(nums).filter((ele) =>
    isPrime(ele.reduce((a, b) => a + b))
  ).length;
}

console.log(solution([1, 2, 7, 6, 4]));
