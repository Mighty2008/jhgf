const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var box1, pig1,bI;

function preload(){

  bI=loadImage("GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,780,1200,20)


    //ball
    ball=new Ball(400,300,50,50)
   rope=new Rope(ball.body,{x:400,y:50})

b1=new Block(800,370)
b2=new Block(800,370)
b3=new Block(800,370)
b4=new Block(800,370)
b5=new Block(800,370)
b6=new Block(800,370)
b7=new Block(800,370)

ba=new Block(900,370)
ba1=new Block(900,370)
ba2=new Block(900,370)

ba3=new Block(900,370)
ba4=new Block(900,370)
ba5=new Block(900,370)
ba6=new Block(900,370)
}

function draw(){
    background(bI);
    Engine.update(engine);
    ball.display();
   ground.display();
  rope.display();

  b1.display();
  b2.display();
  b3.display();

  b4.display();
  b5.display();
  b6.display();
  b7.display();
ba.display();
ba1.display();
ba2.display();

ba3.display();
ba4.display();
ba5.display();
ba6.display();

}

function mouseDragged(){

Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}