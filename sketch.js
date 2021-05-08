
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paper;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);

	paper = new Paper(100,150,50);

	//dustbin1 = new Dustbin(500,575,20,205);
	//dustbin2 = new Dustbin(650,575,20,205);
	dustbin3 = new Dustbin(575,580,170,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(234);
  Engine.update(engine);

  ground.display();
  paper.display();
  //dustbin1.display();
  //dustbin2.display();
  dustbin3.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-108.1})
	}
}



