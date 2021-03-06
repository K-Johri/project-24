
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObject,paperObject,groundObject

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbinObject = new Bin(1200,650);
paperObject = new Paper(200,450,40);
groundObject = new Ground(width/2,700,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinObject.display();
  groundObject.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x : 85,y : -85});
	}
}



