const gameContainer = document.getElementById("game-container");
let target = document.getElementById("target");

let isStarted = false;
let bullseyes = 0;
let targetHeight = 100;
let targetWidth = 100;

target.addEventListener("click", () => {
  bullseyes++;
  generateRandomTargetPosition();
  if (!isStarted) {
    startTimer();
  }

  shrinkTarget();
});

function generateRandomTargetPosition() {
  const randomPositions = getTwoRandomNumbers();
  target.style.top = `${randomPositions[0]}%`;
  target.style.left = `${randomPositions[1]}%`;
}

function getTwoRandomNumbers() {
  let number1 = Math.floor(Math.random() * 90);
  let number2 = Math.floor(Math.random() * 90);

  console.log(number1, number2);
  return [number1, number2];
}

function startTimer() {
  return;
}

function shrinkTarget() {
  if (bullseyes % 2 === 0) {
    targetHeight = targetHeight * 0.75;
    targetWidth = targetWidth * 0.75;
    target.style.height = `${targetHeight}px`;
    target.style.width = `${targetWidth}px`;
    target.textContent = null;
  }
}
