//Variables
const canvas = document.querySelector ('canvas');
const context = canvas.getContext ('2d');
const drawButton = document.querySelector ('.draw');
const randomDotsButton = document.querySelector ('.random-dots');
const resetButton = document.querySelector ('.reset');
const followCursorButton = document.querySelector ('.follow-cursor');

// Events
followCursorButton.addEventListener ('click', update);
randomDotsButton.addEventListener ('click', drawRandomCircles);
drawButton.addEventListener ('click', drawWithCursor);
resetButton.addEventListener ('click', function () {
  document.location.reload (true);
});

//Circle
class Circle {
  constructor (x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw () {
    context.beginPath ();
    context.arc (
      this.x,
      this.y,
      this.r,
      this.startAngle * Math.PI,
      this.endAngle * Math.PI
    );
    context.fillStyle = this.fillColor;
    context.fill ();
  }
}

// Draw random circles
function drawRandomCircles () {
  setInterval (() => {
    function getNewCircle () {
      //Random y and x coordinates
      const minCoord = 1;
      const maxCoord = 400;
      const randomCoordinateX =
        Math.floor (Math.random () * (maxCoord - minCoord)) + minCoord;
      const randomCoordinateY =
        Math.floor (Math.random () * (maxCoord - minCoord)) + minCoord;
      //Random radius
      const minRad = 1;
      const maxRad = 100;
      const randRad = Math.floor (Math.random () * (maxRad - minRad)) + minRad;
      //Random colour
      function getRandomColor () {
        return (
          '#' +
          (0x1000000 + Math.random () * 0xffffff).toString (16).substr (1, 6)
        );
      }

      return new Circle (
        randomCoordinateX,
        randomCoordinateY,
        randRad,
        0,
        360,
        getRandomColor ()
      );
    }
    const myRandomCircle = getNewCircle ();
    // console.log (myRandomCircle);
    myRandomCircle.draw ();
  }, 500);
}

// drawRandomCircles ();

// Circle follows the cursor
//Get Mouse Position
const canvasPos = getPosition (canvas);
let mouseX = 0;
let mouseY = 0;

canvas.addEventListener ('mousemove', setMousePosition, false);

function setMousePosition (e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
}

function update () {
  context.clearRect (0, 0, canvas.width, canvas.height);
  const cursorCircle = new Circle (mouseX, mouseY, 10, 0, 360, 'blue');
  cursorCircle.draw ();

  requestAnimationFrame (update);
}

function drawWithCursor () {
  const cursorCircle = new Circle (mouseX, mouseY, 10, 0, 360, 'blue');
  cursorCircle.draw ();

  requestAnimationFrame (drawWithCursor);
}

function getPosition (el) {
  let xPosition = 0;
  let yPosition = 0;

  while (el) {
    xPosition += el.offsetLeft - el.scrollLeft + el.clientLeft;
    yPosition += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }

  return {
    x: xPosition,
    y: yPosition,
  };
}

// update ();
