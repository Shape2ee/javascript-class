const number = Number(prompt("몇 명이 참가하나요?"));

if (number && number != 0) {
  const order = document.querySelector("#order");
  const word = document.querySelector("#word");
  const input = document.querySelector("input");
  const button = document.querySelector("button");

  let newWord = "";
  let wordRepositories = "";

  function onClickButton() {
    if (
      // 제시어가 비어있는가? or 올바른가? and 3글자 인가?
      !wordRepositories ||
      (wordRepositories[wordRepositories.length - 1] === newWord[0] &&
        newWord.length === 3)
    ) {
      wordRepositories = newWord;
      word.textContent = wordRepositories;

      const orderNum = Number(order.textContent);
      if (orderNum < number) {
        order.textContent = orderNum + 1;
      } else {
        order.textContent = 1;
      }

      input.value = "";
    } else {
      alert("올바르지 않은 단어입니다.");

      input.value = "";
      input.focus();
    }
  }

  function onchangeInput(e) {
    newWord = e.target.value;
    console.log(newWord.length);
  }

  button.addEventListener("click", onClickButton);
  input.addEventListener("input", onchangeInput);
}
