const number = Number(prompt("몇 명이 참가하나요?"));
const button = document.querySelector("button");
const input = document.querySelector("input");
const span = document.querySelector("#word");
const order = document.querySelector("#order");
const wordList = document.querySelector("#word-list");

let word = ""; // 제시어
let newWord = ""; // 새로운 단어

const onClickButton = () => {
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    span.textContent = word;

    const orderNum = Number(order.textContent);
    if (orderNum + 1 > number) {
      order.textContent = 1;
    } else {
      order.textContent = orderNum + 1;
    }

    input.value = "";
    input.focus();

    let list = document.createElement("li");
    list.textContent = newWord;

    wordList.appendChild(list);
  } else {
    alert("올바르지 않은 단어입니다.");

    input.value = "";
    input.focus();
  }
};

const onInput = (e) => {
  newWord = e.target.value;
};

button.addEventListener("click", onClickButton);
input.addEventListener("input", onInput);
