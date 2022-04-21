// 프로그래머스 lv. 1️⃣ : 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  const daysInWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = new Date(2016, a - 1, b).getDay();

  return daysInWeek[day];
}

console.log(solution(5, 24));
