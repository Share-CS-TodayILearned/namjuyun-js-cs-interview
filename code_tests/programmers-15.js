// 프로그래머스 lv. 1️⃣ : 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const numOfChances = nums.length / 2;
  const unique = [...new Set(nums)];

  if (unique.length >= numOfChances) {
    return numOfChances;
  } else {
    return unique.length;
  }
}

solution([3, 3, 3, 2, 2, 4]);
