const $form = document.querySelector("#form");
const $input = document.querySelector("#input");
const $button = document.querySelector("#button");
const $logs = document.querySelector("#logs");

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers = [];
for (let n = 0; n < 9; n++) {
  numbers.push(n + 1);
}

const answer = [];
for (let i = 0; i < 4; i++) {
  // 네 번 반복
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
function checkInput(input) {
  // 검사하는 코드
  if (input.length !== 4) {
    // 4자리의 숫자를 입력했는가?
    return alert("4자리 숫자를 입력해주세요.");
  }
  if (new Set(input).size !== 4) {
    // 중복된 숫자가 있는가
    return alert("숫자를 중복할 수는 없습니다. 다시 입력해주세요.");
  }
  if (tries.includes(input)) {
    // 이미 시도한 값은 아닌가?
    return alert("이미 시도한 값입니다.");
  }
  return true;
}

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = $input.value;
  $input.value = "";
  if (!checkInput(value)) {
    // 에러있음
    return;
  }

  // 입력값 문제 없음

  if (answer.join("") === value) {
    // join() 배열을 문자열로 바꿔주는 함수
    // 예시 [1, 2, 4, 7] -> "1,2,4,7"
    // join("") 함수에 ""를 넣어주면 -> "1247"
    // 반대로 split()는 문자열을 배열로 변경

    $logs.textContent = "홈런!";
    return;
  }

  if (tries.length >= 9) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join("")}`);
    $logs.appendChild(message);
    return;
  }

  tries.push(value);
});
