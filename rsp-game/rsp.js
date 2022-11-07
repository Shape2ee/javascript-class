const $computer = document.querySelector("#computer");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
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
  if (computerChoice === rspX.scissors) {
    computerChoice = "rock";
  } else if (computerChoice === rspX.rock) {
    computerChoice = "paper";
  } else if (computerChoice === rspX.paper) {
    computerChoice = "scissors";
  }

  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  // 변수를 넣어주는 것이기 때문에 rspX.computerChoice가 아니라 []안에 넣어줘야 한다.
  $computer.style.backgroundSize = "auto 200px";
};
setInterval(changeComputerHand, 50);
