// Variables
const buttonallAtOnce = document.querySelector ('#all-at-once-button');
const buttonSeparately = document.querySelector ('#separately-button');
const buttonReset = document.querySelector ('#reset-button');
const span = document.querySelector ('span');
const redCircle = document.querySelector ('#red-circle');
const blueCircle = document.querySelector ('#blue-circle');
const greenCircle = document.querySelector ('#green-circle');

const positions = {
  top: 20,
  right: 20,
  bottom: 300,
  left: 400,
};

const targets = {
  red: {
    x: positions.right - parseInt (redCircle.style.left),
    y: positions.bottom - parseInt (redCircle.style.top),
  },
  blue: {
    x: positions.left - parseInt (blueCircle.style.left),
    y: positions.top - parseInt (blueCircle.style.top),
  },
  green: {
    x: positions.left - parseInt (greenCircle.style.left),
    y: positions.bottom - parseInt (greenCircle.style.top),
  },
};
// Functions moving the circles
function moveRed () {
  return moveElement (redCircle, targets.red);
}
function moveBlue () {
  return moveElement (blueCircle, targets.blue);
}
function moveGreen () {
  return moveElement (greenCircle, targets.green);
}

// Translate one by one
function translateOneByOne () {
  return new Promise ((resolve, reject) => {
    moveRed ();
    setTimeout (() => {
      moveBlue ();
    }, 2000);
    setTimeout (() => {
      moveGreen ();
    }, 4000);
    setTimeout (() => {
      resolve ('all moved seperately');
      reject (new Error ());
    }, 6000);
  });
}

// Event listeners for buttons
buttonallAtOnce.addEventListener ('click', function () {
  Promise.all ([moveRed (), moveGreen (), moveBlue ()])
    .then (() => console.log ('all moved'))
    .catch (console.log);
});

buttonSeparately.addEventListener ('click', function () {
  translateOneByOne ();
});

buttonReset.addEventListener ('click', function () {
  document.location.reload (true);
});
