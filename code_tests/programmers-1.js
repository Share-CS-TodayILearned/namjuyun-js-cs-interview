// 프로그래머스 lv. 1️⃣ : 신고 결과 받기
// https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  const reports = {};
  id_list.forEach((ele) => (reports[ele] = []));
  report
    .map((ele) => ele.split(" "))
    .forEach((ele) => reports[ele[0]].push(ele[1]));

  for (const key in reports) {
    reports[key] = [...new Set(reports[key])];
  }

  const expelled = {};
  id_list.forEach((ele) => (expelled[ele] = 0));
  Object.values(reports)
    .flat()
    .forEach((ele) => expelled[ele]++);
  const filtered = Object.entries(expelled).filter(
    ([key, value]) => value >= k
  );
  const expelledNames = Object.keys(Object.fromEntries(filtered));

  const reportsArr = Object.values(reports);
  console.log(reportsArr);

  var answer = reportsArr
    .map((ele) => ele.filter((ele) => expelledNames.includes(ele)))
    .map((ele) => ele.length);

  return answer;
}

// 정말 비루... 계속 하다보면 잘 할 수 있겠죠? 화이팅! 👏
