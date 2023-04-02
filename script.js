let randomNumber = Math.floor(Math.random() * 100) + 1;
// let randomNumber = 4;
const inputNumber = document.querySelector(".guessing-number");
const submitButton = document.querySelector(".submit-button");
const outputField = document.querySelector(".output-field");
const previousInput = document.querySelector(".previous-input");
const resetBtn = document.querySelector(".resetBtn");

let guessCount = 1;
resetBtn.disabled = true;

submitButton.addEventListener("click", checkGuess);
function checkGuess() {
  const checkGuess = Number(inputNumber.value);
  resetBtn.disabled = true;
  if (guessCount === 1) {
    previousInput.textContent = "Previous guess: ";
  }
  previousInput.textContent += checkGuess + " ";

  if (checkGuess === randomNumber) {
    outputField.textContent = "You won.";
    outputField.style.backgroundColor = "green";
    setGameOver();
  } else if (guessCount === 5) {
    outputField.textContent = "Game over, bad luck";
    outputField.textContent = `the number was ${randomNumber}`;
    outputField.style.backgroundColor = "red";
    setGameOver();
  } else {
    if (checkGuess > randomNumber) {
      outputField.textContent = "Too far away from the number";
      outputField.style.backgroundColor = "yellow";
    } else if (checkGuess < randomNumber) {
      outputField.textContent = "Too less to the number";
      outputField.style.backgroundColor = "yellow";
    }
  }
  guessCount++;
  inputNumber.value = "";
  inputNumber.focus();
}

function setGameOver() {
  inputNumber.disabled = true;
  submitButton.disabled = true;
  resetBtn.disabled = false;
  resetBtn.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const guessFields = document.querySelectorAll(".guessField p");
  for (const g of guessFields) {
    g.textContent = "";
  }
  //   resetButton.parentNode.removeChild(resetButton);
  inputNumber.disabled = false;
  submitButton.disabled = false;
  inputNumber.focus();
  inputNumber.value = "";
  previousInput.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
