const $computer = document.querySelector("#computer");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const $score = document.querySelector("#score");
const IMG_URL = "./rsp.png";

$computer.style.width = "142px";
$computer.style.height = "200px";

const rspX = {
  scissors: "0", // 가위
  rock: "-220px", // 바위
  paper: "-440px", // 보
};

let computerChoice = "scissors";

const changeComputerHand = () => {
  if (computerChoice === "scissors") {
    computerChoice = "rock";
  } else if (computerChoice === "rock") {
    computerChoice = "paper";
  } else if (computerChoice === "paper") {
    computerChoice = "scissors";
  }

  // 변수, 즉 값을 넣어주는 것이기 때문에 rspX.computerChoice가 아니라 []안에 넣어줘야 한다.
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = "auto 200px";
};

let intervalId = setInterval(changeComputerHand, 50);
// 방법 3 - 추천하는 방법
let clickable = true;
let messages = "";
let me = 0;
let com = 0;
const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

const clickButton = (e) => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;
    const myChoice = e.target.id;
    const myScore = scoreTable[myChoice];
    const computerScore = scoreTable[computerChoice];
    const diff = myScore - computerScore;
    // 승리조건 2, -1 패배조건 -2, 1
    if ([2, -1].includes(diff)) {
      me += 1;
      messages = "승리";
    } else if ([-2, 1].includes(diff)) {
      com += 1;
      messages = "패배";
    } else {
      messages = "무승부";
    }

    if (me >= 3) {
      $score.textContent = `나의 승리 ${me} : ${com}`;
    } else if (com >= 3) {
      $score.textContent = `컴퓨터 승리 ${me} : ${com}`;
    } else {
      $score.textContent = `${messages} 내점수 : ${me} 컴퓨터점수 : ${com}`;
      setTimeout(() => {
        clickable = true;
        intervalId = setInterval(changeComputerHand, 50);
      }, 1000);
    }
  }
};

/*
오류해결 방법1
clearInterval을 setTimeout 안, 비동기 안에 넣어줌으로써 해결
const clickButton = () => {
  if (clickable) {
    clearInterval(intervalId);
    setTimeout(() => {
      clearInterval(intervalId);
      intervalId = setInterval(changeComputerHand, 50);
    }, 1000);
  }
};

방법2
버튼을 클릭하면 removeEventListener를 이용해 이벤트를 지우고 다시 add해준다
const clickButton = () => {
  clearInterval(intervalId);
  $rock.removeEventListener("click", clickButton);
  $scissors.removeEventListener("click", clickButton);
  $paper.removeEventListener("click", clickButton);
  
  setTimeout(() => {
    intervalId = setInterval(changeComputerHand, 50);
    $rock.addEventListener("click", clickButton);
    $scissors.addEventListener("click", clickButton);
    $paper.addEventListener("click", clickButton);
  }, 1000);
};
*/

$rock.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);
