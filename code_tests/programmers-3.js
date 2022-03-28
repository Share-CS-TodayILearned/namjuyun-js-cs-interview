// 프로그래머스 lv. 1️⃣ : 키패드 누기
// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  const numToCor = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    "*": [4, 1],
    0: [4, 2],
    "#": [4, 3],
  };

  let answer = [];
  let leftPos = [4, 1];
  let rightPos = [4, 3];

  for (let i = 0; i < numbers.length; i++) {
    if ([1, 4, 7].includes(numbers[i])) {
      answer.push("L");
      leftPos = numToCor[numbers[i]];
    } else if ([3, 6, 9].includes(numbers[i])) {
      answer.push("R");
      rightPos = numToCor[numbers[i]];
    } else {
      const numPosition = numToCor[numbers[i]];
      const fromLeft =
        Math.abs(leftPos[0] - numPosition[0]) +
        Math.abs(leftPos[1] - numPosition[1]);
      const fromRight =
        Math.abs(rightPos[0] - numPosition[0]) +
        Math.abs(rightPos[1] - numPosition[1]);

      if (fromLeft < fromRight) {
        answer.push("L");
        leftPos = numPosition;
      } else if (fromLeft > fromRight) {
        answer.push("R");
        rightPos = numPosition;
      } else {
        if (hand === "right") {
          answer.push("R");
          rightPos = numPosition;
        } else {
          answer.push("L");
          leftPos = numPosition;
        }
      }
    }
  }

  return answer.join("");
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right");
