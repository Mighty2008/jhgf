class Ball {

 constructor(x,y,width,height){

var options={
friction:0.5,
density:1


}

this.width=width;
this.height=height;
this.body=Bodies.rectangle(x,y,width,height,options)
this.image=loadImage("Superhero-01.png")
World.add(world,this.body)


}
display(){
    push();
fill("lightBlue")
rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,this.width,this.height)
pop()

}
}