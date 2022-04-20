// 프로그래머스 lv. 2️⃣ : 뉴스 클러스터링
// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  // 알파벳으로만 2개씩 배열을 만들어주는 함수
  const makeArray = (str) => {
    const result = [];

    for (let i = 0; i < str.length - 1; i++) {
      if (/^[a-zA-Z]+$/.test(str[i]) && /^[a-zA-Z]+$/.test(str[i + 1]))
        result.push((str[i] + str[i + 1]).toLowerCase());
    }

    return result;
  };

  // 배열 만들기
  const firstArr = makeArray(str1);
  const secondArr = makeArray(str2);

  // 공집합 두개면 예외처리
  if (firstArr.length === 0 && secondArr.length === 0) {
    return 65536;
  }

  // 교집합 구하기
  const same = firstArr
    .map((ele) => {
      if (secondArr.includes(ele)) {
        // 중복을 대응하기 위해서 second의 배열에서 빼줘야함
        delete secondArr[secondArr.indexOf(ele)];
        return ele;
      }
    })
    // delete를 사용하면 undefined로 되기 때문에 필터링
    .filter((ele) => ele !== undefined);

  // 이미 교집합에 있는 요소들이 secondArr에서 undefined로 바꼈기 때문에 이를 걸러내주면 됨
  const max = [...firstArr, ...secondArr].filter((ele) => ele !== undefined);

  const result = (same.length / max.length) * 65536;

  return Math.floor(result);
}

solution("FRfrANCE", "french");
