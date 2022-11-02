const candidate = Array(45)
  .fill(0)
  .map((elem, idx) => idx + 1);
const shuffle = [];

/*
for (let i = candidate.length; i > 0; i--) {
  const random = Math.floor(Math.random() * i); 
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}
*/

// 조건이 간단하면 while이 편하다.
// 몇 번 반복할지 애매할때
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); // 무작위로 숫자뽑기
  const spliceArray = candidate.splice(random, 1); // 배열에서 뽑은 숫자를 잘라내기
  const value = spliceArray[0]; // 뽑아낸 배열의 숫자를 변수에 담기
  shuffle.push(value); // shuffle에 다시 추가해주기
}
console.log(shuffle);

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, bonus);

const $result = document.querySelector("#result");
const $bonus = document.querySelector("#bonus");

const showBall = (number, $target) => {
  const $ball = document.createElement("div");
  $ball.className = "ball";
  $ball.textContent = number;
  $target.appendChild($ball);
};

for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    showBall(winBalls[i], $result);
  }, (i + 1) * 1000);
}

setTimeout(() => {
  showBall(bonus, $bonus);
}, 7000);
