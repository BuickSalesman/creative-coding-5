const gameContainer = document.getElementById("game-container");
let target = document.getElementById("target");
let timerBar = document.getElementById("timer-bar");
let firstLife = document.getElementById("life1");
let secondLife = document.getElementById("life2");
let thirdLife = document.getElementById("life3");

let isTimerStarted = false;
let bullseyes = 0;
let totalScore = 0;
let roundsPassed = 0;
let roundPassed = false;
let targetHeight = 100;
let targetWidth = 100;
let timerWidth = 80;
let livesLeft = 3;
let timerInterval;

target.addEventListener("click", () => {
  bullseyes++;
  totalScore++;
  checkIfFiveBullseyes();
  generateRandomTargetPosition();
  if (!isTimerStarted) {
    timerBar.style.width = `${timerWidth}%`;
    startTimer();
  }
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
  timerInterval = setInterval(() => {
    decreaseTimerWidth();
    if (timerWidth <= 0) {
      clearInterval(timerInterval);
      setTimeout(() => {
        checkIfRoundPassed();
        isTimerStarted = false;
        timerWidth = 80;
        timerBar.style.width = `100%`;
      }, 1000);
    }
  }, 1000);
}

function shrinkTarget() {
  targetHeight = targetHeight * 0.75;
  targetWidth = targetWidth * 0.75;
  target.style.height = `${targetHeight}px`;
  target.style.width = `${targetWidth}px`;
  target.textContent = null;
  bullseyes = 0;
}

function decreaseTimerWidth() {
  timerWidth = timerWidth - 20;
  timerBar.style.width = `${timerWidth}%`;
}

function checkIfRoundPassed() {
  if (bullseyes % 5 === 0) {
    shrinkTarget();
  } else {
    loseLife();
  }
}

function loseLife() {
  livesLeft -= 1;
  clearInterval(timerInterval);

  if (livesLeft === 2) {
    firstLife.style.color = "red";
    bullseyes = 0;
  } else if (livesLeft === 1) {
    secondLife.style.color = "red";
    bullseyes = 0;
  } else if (livesLeft === 0) {
    thirdLife.style.color = "red";
    gameOver();
  }
}

function checkIfFiveBullseyes() {
  if (bullseyes === 5) {
    clearInterval(timerInterval);
    isTimerStarted = false;
    timerWidth = 80;
    timerBar.style.width = `100%`;
    shrinkTarget();
  }
}

function gameOver() {
  alert("GAME OVER");
  location.reload();
}
