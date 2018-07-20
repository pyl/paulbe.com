
// reference to canvas
var canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

function randomNumber(min,max)
{
    return (Math.random()*(max-min+1)+min);
}

function Circle(x,y,radius,dx,dy) {


  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;

//template of circle being drawn
  this.draw = function() {
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2);
    c.stroke();
  }


//template of circle movement
  this.update = function() {
if(this.x+this.radius>innerWidth || this.x - this.radius < 0) {
  this.dx=-this.dx;
}

if(this.y+this.radius>innerHeight || this.y - this.radius < 0) {
  this.dy=-this.dy;
}
this.x+=this.dx;
this.y+=this.dy;

  }
}




var circleArray = [];

for (var i = 0; i < 100; i++) {
var x = Math.random()*innerWidth;
var dx = randomNumber(-1,1);
var y = Math.random()*innerHeight;
var dy = randomNumber(-1,1);
var radius = 30;
circleArray.push(
  new Circle(x,y,radius,dx,dy))
}

var circle = new Circle(x,y,radius,dx,dy);

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth,innerHeight);

  for (var i = 0; i <circleArray.length; i++) {
    circleArray[i].draw();
    circleArray[i].update();
  }
  circle.draw();
  circle.update();

}

animate();
