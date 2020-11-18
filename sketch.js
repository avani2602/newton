
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rod;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	rod = new Rod(400,50,600,30);


	bob1 = new Bob(260, 450, 70, 70);	
	bob2 = new Bob(330, 450, 70, 70);
	bob3 = new Bob(400, 450, 70, 70);
	bob4 = new Bob(470, 450, 70, 70);
	bob5 = new Bob(540, 450, 70, 70);

	rope1 = new Rope(bob1.body, rod.body,-bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  
  rod.display();
  bob1.display(); 
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();


 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x: -10, y: -10});
	}
}


