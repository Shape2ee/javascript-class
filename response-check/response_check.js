const $screen = document.querySelector("#screen");
const $result = document.querySelector("#result");

let startTime = "";
let endTime = "";

$screen.addEventListener("click", (event) => {
  if ($screen.classList.contains("waiting")) {
    $screen.classList.replace("waiting", "ready");
    $screen.textContent = "준비하세요! 초록색이 되면 클릭하세요!";

    setTimeout(() => {
      startTime = new Date();
      $screen.classList.replace("ready", "now");
      $screen.textContent = "클릭하세요";
    }, Math.floor(Math.random() * 1000) + 2000); // 2000 ~ 3000 사이 수
  } else if ($screen.classList.contains("ready")) {
    $screen.classList.replace("ready", "waiting");
    $screen.textContent = "조금 성급했어요. 다시 시작하세요!";
  } else if ($screen.classList.contains("now")) {
    endTime = new Date();
    $result.textContent = `${endTime - startTime}`;
    $screen.classList.replace("now", "waiting");
    $screen.textContent = "클릭하고 시작하세요!";
  }
});
