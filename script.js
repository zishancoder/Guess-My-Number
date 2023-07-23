'use strict';

//To generate random target number every time page reload
let guessNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;


const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

//Get input from user and check equal to target or not.
function validateUserInput() {
  let userInput =
    document.querySelector('.guess').value == ''
      ? null
      : Number(document.querySelector('.guess').value);
  if (userInput == null) {
    displayMessage('⛔ No Number');
  } else if (userInput == guessNumber) {
    displayMessage('You Win 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = guessNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (userInput != guessNumber) {
      displayMessage( userInput > guessNumber ? '📈 Too High' : '📉 Too Low');
    if (score == 1) {
      displayMessage('💥 You Lose');
      document.querySelector('.number').textContent = guessNumber;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
}

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', () => {
  if (score > 0) {
    validateUserInput();
  }
});

function restart() {
  guessNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
}

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', restart);
