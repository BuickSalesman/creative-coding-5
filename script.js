const gameContainer = document.getElementById("game-container");
let target = document.getElementById("target");

target.addEventListener("click", () => {
  generateRandomTargetPosition();
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
