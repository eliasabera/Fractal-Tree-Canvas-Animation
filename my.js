const canvas = document.querySelector("canvas");



const cxt = canvas.getContext("2d");
const friction = 0.9;
const gravity = 0.8;
let colorArray = ["#211C84", "#4D55CC", "#7A73D1", "#B5A8D5"];

class Ball {
  constructor(x, y, r, dy) {
    this.x = x;
    this.y = y;
    this.r = r;
    // this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  }
  draw() {
    cxt.beginPath();
    cxt.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    cxt.stroke();
    cxt.fillStyle = this.color;
    cxt.fill();
    cxt.closePath();
  }
  update() {
    if (this.y + this.r + this.dy > canvas.height) {
      this.dy *= -friction;
    } else {
      this.dy += gravity;
    }
    this.y += this.dy;
    this.draw();
  }
}
let ball;
ball=new Ball(canvas.width/2,canvas.height/2,40,4)

function myanime() {
  requestAnimationFrame(myanime);
  cxt.clearRect(0, 0, innerWidth, innerHeight);
  ball.update()
}
init()
myanime();
