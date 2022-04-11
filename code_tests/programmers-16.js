// 프로그래머스 lv. 1️⃣ : 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const resultObj = {};

  for (let i = 1; i <= N; i++) {
    resultObj[i] = { stuck: 0, total: 0 };
  }

  stages.forEach((stage) => {
    if (stage !== N + 1) {
      resultObj[stage].stuck++;
    }

    for (let i = 1; i <= stage; i++) {
      if (i !== N + 1) {
        resultObj[i].total++;
      }
    }
  });

  for (let key in resultObj) {
    resultObj[key] = resultObj[key].stuck / resultObj[key].total;
  }

  const result = Object.entries(resultObj)
    .sort((a, b) => b[1] - a[1])
    .map((ele) => Number(ele[0]));

  return result;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
