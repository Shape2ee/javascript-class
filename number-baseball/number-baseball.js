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

let out = 0;
const $li = document.createElement("li");

function defeated() {
  const message = document.createTextNode(`패배! 정답은 ${answer.join("")}`);
  $logs.appendChild(message);
  $form.removeEventListener("submit", onSubmit);
}

const onSubmit = (event) => {
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

    const $homrun = document.createElement("span");
    $homrun.textContent = "홈런!";
    $homrun.style.color = "blue";
    $logs.append($homrun);
    return;
  }

  if (tries.length >= 9) {
    defeated();
    return;
  }

  // 볼, 스트라이크 검사하기
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) {
      // 일치하는 숫자 발견
      if (index === i) {
        // 자릿수도 같으면
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }
  if (strike === 0 && ball === 0) {
    out += 1;

    const $out = document.createElement("span");
    $out.textContent = out + "아웃!";
    $out.style.color = "red";

    $li.append(`${value} : `, $out);
    $logs.append($li);
  } else {
    const $strike = document.createElement("span");
    const $ball = document.createElement("span");

    $strike.style.color = "orange";
    $ball.style.color = "green";
    $strike.textContent = strike;
    $ball.textContent = ball;

    $li.append(`${value} : `, $strike, `스트라이크 `, $ball, `볼`);
    $logs.append($li);
  }

  if (out === 3) {
    defeated();
    return;
  }

  tries.push(value);
};

$form.addEventListener("submit", onSubmit);
