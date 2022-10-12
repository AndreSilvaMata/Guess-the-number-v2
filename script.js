const message = document.querySelector('.message');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
let guess = document.querySelector('.guess')
let number = document.querySelector('.number');
let score = document.querySelector('.score');;
let highscore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// number.textContent = secretNumber;

let counter = 20;
let highscoreCounter = 0;

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'no number ⛔';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '7rem';
    number.style.textAlign = 'center';
    number.style.fontSize = '5.5rem';
    number.textContent = secretNumber;
    if (counter > highscoreCounter) {
      highscoreCounter = counter;
      highscore.textContent = highscoreCounter;
    }

  } else if (guess > secretNumber) {
    if (counter > 1) {
      message.textContent = 'Too high! ⏫';
      counter--;
      score.textContent = counter;
    } else {
      message.textContent = '💣 You lost the game!'
    }

  } else if (guess < secretNumber) {
    if (counter > 1) {
      message.textContent = 'Too low! ⏬';
      counter--;
      score.textContent = counter;
    } else {
      message.textContent = '💣 You lost the game!'
    }
  } 
});

again.addEventListener('click', () => {
  counter = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  score.textContent = counter;
  guess.value = '';
  document.querySelector('body').style.backgroundColor = '#e8e4e0';
  number.textContent = '?';
});