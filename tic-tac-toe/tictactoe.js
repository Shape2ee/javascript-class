// 구조분해할당
const { body } = document;
// const body = document.body

const $table = document.createElement("table");
const $result = document.createElement("div");

let turn = "O";
const rows = [];

// 이차원 배열 이용하기
for (let i = 0; i < 3; i++) {
  const $tr = document.createElement("tr");
  const cells = [];
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement("td");
    cells.push($td);
    $td.addEventListener("click", (event) => {
      // 칸에 글자가 있나?
      if (event.target.textContent) return;

      event.target.textContent = turn;
      // 승부확인
      if (turn === "O") {
        turn = "X";
      } else if (turn === "X") {
        turn = "O";
      }
    });
    $tr.append($td);
  }
  rows.push(cells);
  $table.append($tr);
}

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
const = obj = {
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
