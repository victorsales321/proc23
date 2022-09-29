
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane
var rotate1,rotate2
var vent1,vent2,vent3
var angle=60;
var angle1=70
var angle2=80

var ball,ball1,ball2
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }

	var plane_options ={
		isStatic: true
	  };

	//Crie os Corpos aqui.
    fill("red")
	plane = Bodies.rectangle(200,600,1000,5000,plane_options);
	World.add(world,plane);

	ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball1 = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball1);
  ball2 = Bodies.circle(150,10,20,ball_options);
  World.add(world,ball2);
	
	rotate1 = Bodies.rectangle(100,400,80,20,plane_options);
	World.add(world,rotate1); 
	
	rotate2 = Bodies.rectangle(1000,400,80,20,plane_options);
	World.add(world,rotate2); 
	vent1 = Bodies.rectangle(550,200,150,20,plane_options);
	World.add(world,vent1); 
	vent2 = Bodies.rectangle(550,200,150,20,plane_options);
	World.add(world,vent2); 
	vent3 = Bodies.rectangle(550,200,150,20,plane_options);
	World.add(world,vent3); 
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  drawSprites();
  Engine.update(engine)
  
 
  Matter.Body.rotate(vent1,angle)
 push();
  translate(vent1.position.x,vent1.position.y);
  rotate(angle);
 rect(0,0,200,20);
  pop();
  
  angle +=1;
  Matter.Body.rotate(vent2,angle1)
 push();
  translate(vent2.position.x,vent2.position.y);
  rotate(angle1);
 rect(0,0,200,20);
  pop();
  
  angle1 +=2;
  Matter.Body.rotate(vent3,angle2)
 push();
  translate(vent3.position.x,vent3.position.y);
  rotate(angle2);
 rect(0,0,200,20);
  pop();
  
  angle2 +=3;
  rect(rotate2.position.x,rotate2.position.y,400,20);
  rect(rotate1.position.x,rotate1.position.y,400,20);
  rect(plane.position.x,plane.position.y,6000,20);

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);


}



