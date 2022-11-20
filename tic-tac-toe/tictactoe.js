// 구조분해할당
const { body } = document;
// const body = document.body

const $table = document.createElement("table");
const $result = document.createElement("div");

let turn = "O";
const rows = [];

// [
//   [td, td, td]
//   [td, td, td]
//   [td, td, td]
// ]

const checkWinner = (target) => {
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;

  // 세 칸 다 채워졌나?
  let hasWinner = false;

  //  가로줄 검사
  if (
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
  ) {
    hasWinner = true;
  }

  // 세로줄 검사
  if (
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
  ) {
    hasWinner = true;
  }

  // 대각선 검사
  if (
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn
  ) {
    hasWinner = true;
  }

  if (
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn
  ) {
    hasWinner = true;
  }

  return hasWinner;
};

const checkWinnerAndDrew = (target) => {
  const hasWinner = checkWinner(target);
  // 승부확인
  if (hasWinner) {
    console.log("승리");
    $result.textContent = `${turn}님이 승리입니다.`;
    $table.removeEventListener("click", onCheckCells);
    return;
  }

  // 무승부 검사
  // 모두 차있으면 true, 아니면 false
  const draw = rows.flat().every((cell) => cell.textContent);
  /* let draw = true;
    rows.forEach((row) => {
      row.forEach((cell) => {
        if (!cell.textContent) {
          draw = false;
        }
      });
    }); */
  if (draw) {
    $result.textContent = `무승부입니다.`;
    return;
  }

  // 턴을 넘긴다
  turn = turn === "O" ? "X" : "O";
  // changeTurn();
  /* 
    if (turn === "O") {
      turn = "X";
    } else if (turn === "X") {
      turn = "O";
    }
    */
};

let clickable = true;
const onCheckCells = (event) => {
  if (!clickable) return;
  // 칸에 글자가 있나?
  if (event.target.textContent !== "") {
    console.log("빈칸이 아닙니다");
    return;
  }
  console.log("빈칸입니다.");
  event.target.textContent = turn;

  // 승부판단하기
  checkWinnerAndDrew(event.target);

  if (turn === "X") {
    clickable = false;

    setTimeout(() => {
      const emptyCells = rows.flat().filter((v) => !v.textContent);
      const randomCells =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      randomCells.textContent = turn;

      checkWinnerAndDrew(randomCells);
      clickable = true;
    }, 1000);
  }
};

// 이차원 배열 이용하기
for (let i = 0; i < 3; i++) {
  const $tr = document.createElement("tr");
  const cells = [];
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement("td");
    cells.push($td);
    $tr.append($td);
  }
  rows.push(cells);
  $table.append($tr);
}
$table.addEventListener("click", onCheckCells);
body.append($table);
body.append($result);

/* 
구조분해 예제

1.
const obj = {
  a: "hello",
  b: {
    c: "hi",
    d: { e: 'wow' },
  },
};
===
const { a, b : { c, d : { e } } } = obj
a = 'hello';
c = 'hi';
d = 'wow';

2. 
const obj = {
  a: 'hello',
  b: {
    d: { e : 'wow },
  },
};
===
const { a, b } = obj
const { d: { e } } = b
a = 'hello';
d = 'wow';
 */
