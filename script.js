
// reference to canvas
var can = document.getElementById("can");
var canv = can.getContext("2d");



function resizeCanvas() {
  can.style.width = window.innerWidth + "px";
  // artifical delay so innerHeight is correct
  setTimeout(function() {
    can.style.height = window.innerHeight + "px";
  }, 0);
};


window.onresize = resizeCanvas;

//fire it manually...
resizeCanvas();



canv.fillStyle = "blue";
canv.fillRect(75, 75, 20, 20);
