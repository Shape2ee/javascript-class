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
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);
