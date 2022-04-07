// 프로그래머스 lv. 1️⃣ : 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const firstPattern = [1, 2, 3, 4, 5];
  const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const getNumberOfAnswers = (answers, pattern) => {
    const number = answers
      .map(
        (answer, index) =>
          answer ===
          pattern[index > pattern.length - 1 ? index % pattern.length : index]
      )
      .filter((boolean) => boolean).length;

    return number;
  };

  const numberOfAnswers = {
    1: getNumberOfAnswers(answers, firstPattern),
    2: getNumberOfAnswers(answers, secondPattern),
    3: getNumberOfAnswers(answers, thirdPattern),
  };

  const maxNum = Math.max(...Object.values(numberOfAnswers));

  return Object.entries(numberOfAnswers)
    .filter((arr) => arr[1] === maxNum)
    .map((arr) => Number(arr[0]));
}

solution([1, 2, 3, 4, 5]);
