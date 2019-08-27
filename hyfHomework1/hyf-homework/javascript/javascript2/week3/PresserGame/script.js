//Homework for Hack Your Future - JavaScript2 Week 3
//Fastest presser game
//Made by Lilla Kőrösi

const startButton = document.querySelector ('.start-button');
const replayButton = document.querySelector('.replay-button');
const selectSeconds = document.querySelector ('select');
const seconds = selectSeconds.value;
const mililSeconds = seconds * 1000;
let playAgain;
 
// Count how many times have s and l been pressed.
let displayNumberOfPressesLeft = document.querySelector ('.counterLeft');
let displayNumberOfPressesRight = document.querySelector ('.counterRight');
let countS = 0;
let countL = 0;

//Set event listeners for button
//If 'gameStarted' variable is false, the key press is not counted
let gameStarted = false;
//When button gets clicked, 'gameStarted' becomes true, and key presses are being counted
startButton.addEventListener ('click', function () {
  const numberOfSeconds = selectSeconds.value;
  const mililSeconds = numberOfSeconds * 1000;
  gameStarted = true;

  startGame ();
  startCountdown (numberOfSeconds);
  stopCountingKeyPres (mililSeconds);
});

replayButton.addEventListener('click', function () {
  document.location.reload(true);
})

//The 'gameStarted' variable will become false again after the game is finished - so it won't count key presses
function stopCountingKeyPres (delayTime) {
  setTimeout (() => {
    gameStarted = false;
  }, delayTime);
}

// Get the number of key presses
function startGame () {
  const numberOfSeconds = selectSeconds.value;
  const mililSeconds = numberOfSeconds * 1000;
  startAnimation ();
  document.addEventListener ('keydown', event => {
    let key = event.key.toLowerCase ();
    if (gameStarted === true) {
      if (key === 's') {
        countS++;
        displayNumberOfPressesLeft.innerHTML = countS;
      } else if (key === 'l') {
        countL++;
        displayNumberOfPressesRight.innerHTML = countL;
      }
    }

    replay (mililSeconds);
    getMostCounts (mililSeconds);
    showTheWinner (mililSeconds);
  });
}

//Countdown timer
function startCountdown (seconds) {
  let counter = seconds;
  span = document.getElementById ('countdown');
  setInterval (function () {
    counter--;
    if (counter >= 0) {
      span.innerHTML = counter + ' seconds left';
    }
    if (counter === 0) {
      span.innerHTML = 'Time is over';
      clearInterval (counter);
    }
  }, 1000);
}

//Get who go the highest count
function getMostCounts (delayTime) {
  setTimeout (() => {
    if (countS > countL) {
      winner = 's';
    } else if (countS < countL) {
      winner = 'l';
    } else {
      winner = 'both';
    }
    return winner;
  }, delayTime);
}

//Show the winner
function showTheWinner (delayTime) {
  setTimeout (() => {
    if (winner === 's') {
      displayNumberOfPressesLeft.innerHTML =
        countS + '<br /> Congratulations <br /> You won!';
      displayNumberOfPressesLeft.style.color = '#ff80b3';
    } else if (winner === 'l') {
      displayNumberOfPressesRight.innerHTML =
        countL + '<br /> Congratulation <br /> You won!';
      displayNumberOfPressesRight.style.color = '#ff80b3';
    } else {
      displayNumberOfPressesLeft.innerHTML = countS + "<br /> It's a draw!";
      displayNumberOfPressesRight.innerHTML = countL + "<br /> It's a draw!";
    }
  }, delayTime);
}

//Change button sign
function replay (delayTime) {
  setTimeout (() => {
    startButton.innerHTML = 'Play again!';
  }, delayTime);
}

//Animation
const pressKeySignLeft = document.querySelector ('h2.pressS');
const pressKeySignRight = document.querySelector ('h2.pressL');

pressKeySignLeft.style.webkitAnimationPlayState = 'paused';
pressKeySignRight.style.webkitAnimationPlayState = 'paused';

function startAnimation () {
  pressKeySignLeft.style.webkitAnimationPlayState = 'running';
  pressKeySignRight.style.webkitAnimationPlayState = 'running';
}
