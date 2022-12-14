const $tbody = document.querySelector("#table tbody");
const $result = document.querySelector("#result");
const row = 10;
const cell = 10;
const mine = 10;
const CODE = {
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  MINE: -6,
};

let data;
function plantMine() {
  const candidate = Array(row * cell)
    .fill()
    .map((arr, i) => {
      return i;
    });

  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }

  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell); // 몇 번째 줄인지 구하는 코드
    const hor = shuffle[k] % cell; // 몇 번째 칸인지
    data[ver][hor] = CODE.MINE;
  }
  return data;
}

function changeClassName(target, status = "", txt = "") {
  target.className = status;
  target.textContent = txt;
}

function onRightClick(event) {
  event.preventDefault();
  const target = event.target;
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;
  const cellData = data[rowIndex][cellIndex];
  // console.log(cellData, rowIndex, cellIndex);
  if (cellData === CODE.MINE) {
    data[rowIndex][cellIndex] = CODE.QUESTION_MINE;
    changeClassName(target, "question", "?");
  } else if (cellData === CODE.QUESTION_MINE) {
    data[rowIndex][cellIndex] = CODE.FLAG_MINE;
    changeClassName(target, "flag", "!");
  } else if (cellData === CODE.FLAG_MINE) {
    data[rowIndex][cellIndex] = CODE.MINE;
    changeClassName(target, "", "X");
  } else if (cellData === CODE.NORMAL) {
    data[rowIndex][cellIndex] = CODE.QUESTION;
    changeClassName(target, "question", "?");
  } else if (cellData === CODE.QUESTION) {
    data[rowIndex][cellIndex] = CODE.FLAG;
    changeClassName(target, "flag", "!");
  } else if (cellData === CODE.FLAG) {
    data[rowIndex][cellIndex] = CODE.NORMAL;
    changeClassName(target);
  }
}

function drawTable() {
  data = plantMine();
  data.forEach((row) => {
    const $tr = document.createElement("tr");
    row.forEach((cell) => {
      const $td = document.createElement("td");
      if (cell === CODE.MINE) {
        $td.textContent = "X";
      }
      $tr.append($td);
    });
    $tbody.append($tr);
    $tbody.addEventListener("contextmenu", onRightClick);
  });
}
drawTable();
