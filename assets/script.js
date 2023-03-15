const options = document.querySelectorAll('.option');
const playerOptions = document.querySelector('.player-options');
const enemyOptions = document.querySelector('.enemy-options');
const result = document.querySelector('.result');
let playerScore = 0;
let enemyScore = 0;

const getRandomOption = () => {
  const index = Math.floor(Math.random() * options.length);
  const option = options[index].cloneNode(true);
  enemyOptions.innerHTML = '';
  enemyOptions.appendChild(option);
};

const showResult = (player, enemy) => {
  const playerOpt = player.getAttribute('opt');
  const enemyOpt = enemy.getAttribute('opt');
  let message = '';

  if (playerOpt === enemyOpt) {
    message = 'Tie!';
  } else if (
    (playerOpt === 'rock' && enemyOpt === 'scissor') ||
    (playerOpt === 'paper' && enemyOpt === 'rock') ||
    (playerOpt === 'scissor' && enemyOpt === 'paper')
  ) {
    message = 'You won!';
    playerScore++;
  } else {
    message = 'You lost!';
    enemyScore++;
  }

  result.textContent = message;

  // Update score
  const playerScoreElem = document.querySelector('.player-score');
  const enemyScoreElem = document.querySelector('.enemy-score');
  playerScoreElem.textContent = playerScore;
  enemyScoreElem.textContent = enemyScore;

  // Show play again button
  playAgainBtn.style.display = 'block';
};

options.forEach((option) => {
  option.addEventListener('click', () => {
    playerOptions.innerHTML = '';
    playerOptions.appendChild(option.cloneNode(true));
    getRandomOption();

    setTimeout(() => {
      const player = document.querySelector('.player-options .option img');
      const enemy = document.querySelector('.enemy-options .option img');
      showResult(player, enemy);
    }, 1500);
  });
});

