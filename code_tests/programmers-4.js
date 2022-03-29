// 프로그래머스 lv. 1️⃣ : 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const numOfClearWin = lottos.filter((ele) => win_nums.includes(ele)).length;
  const numOfZero = lottos.filter((ele) => ele === 0).length;

  const max =
    7 - (numOfClearWin + numOfZero) === 7 ? 6 : 7 - (numOfClearWin + numOfZero);
  const min = 7 - numOfClearWin === 7 ? 6 : 7 - numOfClearWin;

  var answer = [max, min];
  return answer;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
