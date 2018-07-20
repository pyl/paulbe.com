
// reference to canvas
var canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

function randomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// c.fillRect(100,100,100,100);

//Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.stroke();



// for (i=0; i<3; i++) {
//  var x = Math.random()*window.innerWidth;
//  var y = Math.random()*window.innerHeight;
//   c.beginPath();
//   c.arc(x,y,30,0,Math.PI*2, false);
//   c.stroke();
// }



var x = 200;
var dx = 4;
var y = 200;
var dy = 4;





var radius = 30;
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth,innerHeight);
c.beginPath();
c.arc(x,y,radius,0,Math.PI*2);
c.stroke();

if(x+radius>innerWidth || x - radius < 0) {
  dx=-dx;
}
if(y+radius>innerHeight || y - radius < 0) {
  dy=-dy;
}


x+=dx;
y+=dy;

}

animate();
