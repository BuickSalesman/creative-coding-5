const gameContainer = document.getElementById("game-container");
let target = document.getElementById("target");
let timerBar = document.getElementById("timer-bar");

let isTimerStarted = false;
let bullseyes = 0;
let targetHeight = 100;
let targetWidth = 100;
let timerWidth = 100;

target.addEventListener("click", () => {
  bullseyes++;
  generateRandomTargetPosition();

  if (!isTimerStarted) {
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
  isTimerStarted = true;
  let timerInterval = setInterval(() => {
    decreaseTimerWidth();
    if (timerWidth <= 0) {
      clearInterval(timerInterval);
      isTimerStarted = false;
      timerBar.style.width = `100%`;
    }
  }, 1000);
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

function decreaseTimerWidth() {
  timerWidth = timerWidth - 10;
  timerBar.style.width = `${timerWidth}%`;
}
