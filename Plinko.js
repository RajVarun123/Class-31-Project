class Plinko {
  constructor(x, y, radius) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.circle(x, y, 20, options);
    this.radius = 10;
    World.add(world, this.body);
  }

 display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill(255);
    ellipse(0, 0, this.radius);
    pop();
  }
};