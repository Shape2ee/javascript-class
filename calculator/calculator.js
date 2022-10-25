let numOne = "";
let numTwo = "";
let operator = "";

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

/*
const onClickButtonNum = (event) => {
  if (operator) {
    // 비어있지 않다
    if (!numTwo) {
      // 숫자2가 없으면 칸을 비워라
      $result.value = "";
    }
    numTwo += event.target.textContent;
  } else {
    // 비어있다
    numOne += event.target.textContent;
  }
  $result.value += event.target.textContent;
};
*/

// if문 중첩 제거
const onClickButtonNum = (event) => {
  if (!operator) {
    // 비어있다
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  // 비어있지 않다
  if (!numTwo) {
    // 숫자2가 없으면 칸을 비워라
    $result.value = "";
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};

document.querySelector("#num-0").addEventListener("click", onClickButtonNum);
document.querySelector("#num-1").addEventListener("click", onClickButtonNum);
document.querySelector("#num-2").addEventListener("click", onClickButtonNum);
document.querySelector("#num-3").addEventListener("click", onClickButtonNum);
document.querySelector("#num-4").addEventListener("click", onClickButtonNum);
document.querySelector("#num-5").addEventListener("click", onClickButtonNum);
document.querySelector("#num-6").addEventListener("click", onClickButtonNum);
document.querySelector("#num-7").addEventListener("click", onClickButtonNum);
document.querySelector("#num-8").addEventListener("click", onClickButtonNum);
document.querySelector("#num-9").addEventListener("click", onClickButtonNum);

// 고차함수 (High order funtion)
// 함수가 함수를 호출하는것
// 화살표 함수는 중괄호와 return이 만나면 중괄호와 return을 생략가능하다
const onClickOperate = (op) => () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;
      case "/":
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;
      case "*":
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;
      default:
        break;
    }
    $operator.value = "";
    numOne = $result.value;
    numTwo = "";
  }

  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert("숫자를 먼저 입력해주세요!");
  }
};

document.querySelector("#plus").addEventListener("click", onClickOperate("+"));
document.querySelector("#minus").addEventListener("click", onClickOperate("-"));
document
  .querySelector("#divide")
  .addEventListener("click", onClickOperate("/"));
document
  .querySelector("#multiply")
  .addEventListener("click", onClickOperate("*"));

document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;
      case "/":
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;
      case "*":
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;
      default:
        break;
    }
    $operator.value = "";
    numOne = $result.value;
    operator = "";
    numTwo = "";
  } else {
    alert("숫자를 입력해주세요");
  }
});

document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  numTwo = "";
  operator = "";
  $operator.value = "";
  $result.value = "";
});

/* 
function test1() {
  let result = "";

  if (a) {
    if (!b) {
      result = "c";
    }
  } else {
    result = "a";
  }
  result += "b";
  return result;
}

function test2() {
  let result = "";

  if (!a) {
    result = "a";
    result += "b";
    return result;
  }

  if (!b) {
    result = "c";
  }
  result += "b";
  return result;
}
 */
