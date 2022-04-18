// 프로그래머스 lv. 2️⃣ : 뉴스 클러스터링
// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  const makeArray = (str) => {
    const result = [];

    for (let i = 0; i < str.length - 1; i++) {
      if (/^[a-zA-Z]+$/.test(str[i]) && /^[a-zA-Z]+$/.test(str[i + 1]))
        result.push((str[i] + str[i + 1]).toLowerCase());
    }

    return result;
  };

  const firstArr = makeArray(str1);
  const secondArr = makeArray(str2);

  if (firstArr.length === 0 && secondArr.length === 0) {
    return 65536;
  }

  const same = firstArr
    .map((ele) => {
      if (secondArr.includes(ele)) {
        delete secondArr[secondArr.indexOf(ele)];
        return ele;
      }
    })
    .filter((ele) => ele !== undefined);

  const max = [...firstArr, ...secondArr].filter((ele) => ele !== undefined);

  const result = (same.length / max.length) * 65536;

  return Math.floor(result);
}

solution("aa1+aa2", "AAAA12");
