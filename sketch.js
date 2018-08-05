




// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var circles = [];
var ground;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,height,width,10, options)
  World.add(world,ground);

}


function mouseDragged() {
  boxes.push(new Box(mouseX,mouseY,20,20));
}

function mousePressed() {
  circles.push(new Circle(mouseX,mouseY,40,40));
}


function draw() {
  background(51);
for (var i = 0; i < boxes.length; i++) {
  boxes[i].show();
}

for (var i = 0; i < circles.length; i++) {
  circles[i].show();
}

stroke(170);
strokeWeight(4);
line(0,height,width,height);
}
