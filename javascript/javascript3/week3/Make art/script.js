//Variables
const canvas = document.querySelector ('canvas');

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
    const context = canvas.getContext ('2d');

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

const firstCircle = new Circle (200, 200, 50, 45, 180, 'green');
console.log (firstCircle);
firstCircle.draw ();

const secondCircle = new Circle (100, 100, 20, 0, 360, 'yellow');
secondCircle.draw ();

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
    console.log (myRandomCircle);
    myRandomCircle.draw ();
  }, 500);
}

drawRandomCircles ();
