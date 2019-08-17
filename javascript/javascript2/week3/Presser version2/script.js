// Variables
const selectTime = document.querySelector ('select');
const startButton = document.querySelector ('.start-btn');
const replayButton = document.querySelector ('.replay-btn');
const displayCountS = document.querySelector ('.counterLeft');
const displayCountL = document.querySelector ('.counterRight');
let gameTime;
let gameStarted = false;
let countS = 0;
let countL = 0;
// Event listeners
selectTime.addEventListener ('change', function () {
  gameTime = selectTime.value;
  // console.log(gameTime)
});

startButton.addEventListener ('click', function () {
  gameTime = selectTime.value;
  delayTimeInMiliSec = gameTime * 1000;

  if (gameTime === '0') {
    selectTime.style.border = '3px solid red';
  } else {
    gameStarted = true;
    selectTime.style.border = '1px solid gray';
    startCountdown (gameTime);
    startGame ();
    stopCountingKeyPres (delayTimeInMiliSec);
    getMostCounts (delayTimeInMiliSec);
    showTheWinner (delayTimeInMiliSec);
  }
});

replayButton.addEventListener ('click', function () {
  document.location.reload (true);
});

function startGame () {
  document.addEventListener ('keydown', event => {
    let key = event.key.toLowerCase ();
    if (gameStarted === true) {
      if (key === 's') {
        countS++;
        displayCountS.innerHTML = countS;
      } else if (key === 'l') {
        countL++;
        displayCountL.innerHTML = countL;
      }
    }
  });
  startButton.style.display = 'none';
}

//The 'gameStarted' variable will become false again after the game is finished - so it won't count key presses
function stopCountingKeyPres (delayTime) {
  setTimeout (() => {
    gameStarted = false;
  }, delayTime);
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
      displayCountS.innerHTML =
        countS + '<br /> Congratulations <br /> You won!';
      displayCountS.style.color = '#ff80b3';
    } else if (winner === 'l') {
      displayCountS.innerHTML =
        countL + '<br /> Congratulation <br /> You won!';
      displayCountS.style.color = '#ff80b3';
    } else {
      displayCountS.innerHTML = countS + "<br /> It's a draw!";
      displayCountS.innerHTML = countL + "<br /> It's a draw!";
    }
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
