const $screen = document.querySelector("#screen");
const $title = document.querySelector("#title");
const $result = document.querySelector("#result");
const $rank = document.querySelector("#rank");

let startTime;
let endTime;
const records = [];
let timeoutId;
let rankList = [];

$screen.addEventListener("click", (event) => {
  if ($screen.classList.contains("waiting")) {
    $screen.classList.replace("waiting", "ready");
    $title.textContent = "준비하세요! 초록색이 되면 클릭하세요!";

    timeoutId = setTimeout(() => {
      startTime = new Date();
      $screen.classList.replace("ready", "now");
      $title.textContent = "클릭하세요";
    }, Math.floor(Math.random() * 1000) + 2000); // 2000 ~ 3000 사이 수
  } else if ($screen.classList.contains("ready")) {
    clearTimeout(timeoutId);

    $screen.classList.replace("ready", "waiting");
    $title.textContent = "조금 성급했어요. 다시 시작하세요!";
  } else if ($screen.classList.contains("now")) {
    endTime = new Date();
    const current = endTime - startTime;

    records.push(current);
    const average = records.reduce((a, c) => a + c) / records.length; // 평균 구하기
    $result.textContent = `현재: ${current}ms 평균: ${average}ms`;
    rankList = records.sort((a, b) => a - b).slice(0, 5); // 5위까지 순서대로 정렬

    $rank.textContent = "";
    rankList.forEach((top, idx) => {
      $rank.append(`${idx + 1}위: ${top}ms`, document.createElement("br"));
    });

    console.log(rankList);
    startTime = null;
    endTime = null;

    $screen.classList.replace("now", "waiting");
    $title.textContent = "클릭하고 시작하세요!";
  }
});
