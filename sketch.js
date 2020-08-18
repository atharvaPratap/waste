const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(1200,400);
    
    

    engine = Engine.create();
	world = engine.world;

 

	ground = new Ground(600,height,1200,20);
  ball = new Ball(100,100,20)  
  
  box1 = new Box(1000,380,200,20);
  box2 = new Box(890,350,20,80);
  box3 = new Box(1110,350,20,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  ball.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){

     Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

  }
}


