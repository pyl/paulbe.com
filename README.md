# paulbe.com

#


<!--
-------------------------HTML:-----------------------

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="project2.css">
</head>
<body>
<canvas id = "canvas"></canvas>
<script>

var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


var mouse = {
  x: undefined,
  y: undefined
}
var rect = canvas.getBoundingClientRect();
var trueX = mouse.x - rect.left;
var trueY = mouse.y - rect.top;
//changeables-------------
canvas.style.left = "0";
canvas.style.top = "0";
canvas.style.position = "absolute";
var canX = window.innerWidth;
var canY = window.innerHeight;
//------------------------
canvas.width = canX;
canvas.height = canY;
window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  trueX = mouse.x - rect.left;
  trueY = mouse.y - rect.top;
})






</script>



</body>
</html>
------------------------------------------------------->

<!-----------------CSS---------------------------------
body {
  margin: 0;
  overflow: hidden;
}



canvas#canvas {
  background: #e2e1d2;
} -------------------------------------------->
