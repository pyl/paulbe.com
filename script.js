
// reference to canvas
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

function randomNumber(min,max)
{
    return (Math.random()*(max-min+1)+min);
}

//create mouse object
var mouse = {
  x: undefined,
  y: undefined
}

var colorArray = [
  "#C84127",
  "#67C5C2",
  "#3D2117",
  "#FEFCE8",
  "#000000",
  "",
];

window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

var maxRadius = 50;
//var minRadius = radius;
function Circle(x,y,radius,dx,dy) {


  this.x = x;
  this.y = y;
  this.radius = radius;
  this.minRadius = radius;
  this.dx = dx;
  this.dy = dy;
  this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
//template of circle being drawn
  this.draw = function() {
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2);
    c.stroke();
    c.fillStyle = this.color;
    c.fill();
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

//interactivity

//when mouse close
if (mouse.x - this.x < 100 && mouse.x - this.x > -100
  && mouse.y - this.y < 100 && mouse.y - this.y > -100
  ) {
    if (this.radius < maxRadius) {
      this.radius += 2;
    }
} else if (this.radius > this.minRadius) {
  this.radius -=0.2;
}

  }
}




var circleArray = [];

for (var i = 0; i < 800; i++) {
var x = Math.random()*innerWidth;
var dx = randomNumber(-1,1);
var y = Math.random()*innerHeight;
var dy = randomNumber(-1,1);
var radius = Math.random()*3+2;
circleArray.push(
  new Circle(x,y,radius,dx,dy))
}



function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth,innerHeight);

  for (var i = 0; i <circleArray.length; i++) {
    circleArray[i].draw();
    circleArray[i].update();
  }


}

animate();
