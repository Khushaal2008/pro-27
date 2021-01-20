
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(350,100,300,30)

bob = new Bob(250,300)
bob2 = new Bob(300,300)
bob3 = new Bob(350,300)
bob4 = new Bob(400,300)
bob5 = new Bob(450,300)
	

rope = new Rope(bob.body,roof.body,-100,0)
rope2 = new Rope(bob2.body,roof.body,-50,0)
rope3 = new Rope(bob3.body,roof.body,0,0)
rope4 = new Rope(bob4.body,roof.body,50,0)
rope5 = new Rope(bob5.body,roof.body,100,0)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("pink");
Engine.update(engine)


rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

bob.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

roof.display();
  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:-600,y:0})
	} 
}
