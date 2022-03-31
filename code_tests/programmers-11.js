// 프로그래머스 lv. 1️⃣ : 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  // sort를 이용한 풀이
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (sortedParticipant[i] !== sortedCompletion[i]) {
      return sortedParticipant[i];
    }
  }

  // Map을 이용한 풀이
  const myMap = new Map();

  for (let i = 0; i < participant.length; i++) {
    if (myMap.has(participant[i])) {
      myMap.set(participant[i], myMap.get(participant[i]) + 1);
    } else {
      myMap.set(participant[i], 1);
    }
  }

  for (let i = 0; i < completion.length; i++) {
    myMap.set(completion[i], myMap.get(completion[i]) - 1);
  }

  for (let [key, value] of myMap) {
    if (value > 0) {
      return key;
    }
  }
}

console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
