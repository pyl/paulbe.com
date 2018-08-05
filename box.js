function Box(x,y,w,h) {
  this.body = Bodies.rectangle(x, y, w, h);
  World.add(world, this.body);
  this.w = w;
  this.h = h;
  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle

    push();

    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke(255);
    fill(127);
    rect(0,0,this.w,this.h);
    pop();

  }


}

function Circle(x,y,r) {
  this.body = Bodies.circle(x, y, r);
  World.add(world, this.body);
  this.r = r;
  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle

    push();

    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke(255);
    fill(127);
    arc(0, 0, r*2, r*2, 0, PI + PI);
    pop();

  }


}
