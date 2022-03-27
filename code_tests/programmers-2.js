// 프로그래머스 lv. 1️⃣ : 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  const stepOne = new_id.toLowerCase();
  console.log(stepOne);

  const stepTwo = stepOne.match(/[0-9a-z-_.]/g).join("");
  console.log(stepTwo);

  const stepThreeAndFour = stepTwo
    .split(".")
    .filter((ele) => ele !== "")
    .join(".");
  console.log(stepThreeAndFour);

  const stepFive = stepThreeAndFour === "" ? "a" : stepThreeAndFour;
  console.log(stepFive);

  const stepSix =
    stepFive.length > 15
      ? stepFive[14] === "."
        ? stepFive.slice(0, 14)
        : stepFive.slice(0, 15)
      : stepFive;
  console.log("6: ", stepSix);

  const stepSeven =
    stepSix.length < 3
      ? stepSix + stepSix[stepSix.length - 1].repeat(3 - stepSix.length)
      : stepSix;

  return stepSeven;
}

// regex를 사용하면 엄청 깔끔하던데... 와따시는 regex 몰랑 히히 ✨
// 공부해야겠다 정규표현식!!!
