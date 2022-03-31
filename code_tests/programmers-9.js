// 프로그래머스 lv. 1️⃣ : 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  const pickUpperMost = (move) => {
    const column = board.map((ele) => ele[move - 1]);
    const noZeroColumn = column.filter((ele) => ele !== 0);

    if (noZeroColumn.length === 0) {
      return;
    } else {
      const upperMost = noZeroColumn[0];

      // 보드에서 꺼내기
      board[column.indexOf(upperMost)][move - 1] = 0;

      // 보드에서 꺼낸 것
      return upperMost;
    }
  };

  const basket = [];
  let popped = 0;

  moves.forEach((ele) => {
    const pick = pickUpperMost(ele);

    if (pick !== undefined) {
      if (pick === basket[basket.length - 1]) {
        basket.pop();
        popped += 2;
      } else {
        basket.push(pick);
      }
    }
  });

  return popped;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
