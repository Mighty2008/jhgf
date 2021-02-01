class Block {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = 70;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(random(0,0),random(25,255),random(0,0))
    
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  