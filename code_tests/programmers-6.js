// 프로그래머스 lv. 1️⃣ : 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const chars = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0",
  };

  const answer = Number(
    s.replace(
      /zero|one|two|three|four|five|six|seven|eight|nine/g,
      (char) => chars[char]
    )
  );

  return answer;
}

solution("123");
