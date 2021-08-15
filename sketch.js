
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roofobj = new Roof (800,height/4,width/7,20)
	balldiameter = 40
	ballx = width/2
	bally = height/4 + 500
	ball1 = new Ball (ballx-balldiameter * 2,bally,balldiameter)
	ball2 = new Ball (ballx-balldiameter ,bally,balldiameter)
	ball3 = new Ball (ballx,bally,balldiameter)
	ball4 = new Ball (ballx+balldiameter ,bally,balldiameter)
	ball5 = new Ball (ballx+balldiameter * 2,bally,balldiameter)

	rope1 = new Rope (ball1.body,roofobj.body,-balldiameter * 2,0)
	rope2 = new Rope (ball2.body,roofobj.body,-balldiameter * 1,0)
	rope3 = new Rope (ball3.body,roofobj.body,0,0)
	rope4 = new Rope (ball4.body,roofobj.body,balldiameter * 1,0)
	rope5 = new Rope (ball5.body,roofobj.body,balldiameter * 2,0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  roofobj.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45})
	}
}
