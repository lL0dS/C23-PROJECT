const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, plate1, plate2;

var ball2, ball3;

var rote1, rote2, rote3;

var angle1 = 60;
var angle2 = 60; 
var angle3 = 60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine=Engine.create();
	world=engine.world;

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution:0.90,
		frictionAir:0.01
	}
	
	var ground_options ={
		isStatic: true
	}

	var rote_options = {
		isStatic: true
	}

	//Crie os Corpos aqui.
	ball = Bodies.circle(400,10,20,ball_options);
	World.add(world,ball);

	ball2 = Bodies.circle(300,10,20,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(500,10,20,ball_options);
	World.add(world,ball3);

	ground = Bodies.rectangle(400,690,400,20,ground_options);
	World.add(world,ground);

	plate1 = Bodies.rectangle(200,400,100,20,ground_options);
	World.add(world,plate1);
	plate2 = Bodies.rectangle(600,400,100,20,ground_options);
	World.add(world,plate2);

	rote1 = Bodies.rectangle(400,350,100,200,rote_options);
	World.add(world,rote1);

	rote2 = Bodies.rectangle(400,350,100,200,rote_options);
	World.add(world,rote2);

	rote3 = Bodies.rectangle(400,350,100,200,rote_options);
	World.add(world,rote3);

	Engine.run(engine);

}


function draw() {
  	rectMode(CENTER);
  	background(100);
  
	Engine.update(engine);

	ellipse(ball.position.x,ball.position.y,20);

	ellipse(ball2.position.x,ball2.position.y,20);

	ellipse(ball3.position.x,ball3.position.y,20);
	
	rect(ground.position.x,ground.position.y,800,20);

	rect(plate1.position.x,plate1.position.y,100,20);

	rect(plate2.position.x,plate2.position.y,100,20);

	Matter.Body.rotate(rote1,angle1);
	push();
	translate(rote1.position.x,rote1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1+=11;


	Matter.Body.rotate(rote2,angle2);
	push();
	translate(rote2.position.x,rote2.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2+=2;


	Matter.Body.rotate(rote3,angle3);
	push();
	translate(rote2.position.x,rote2.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3+=20;

  	drawSprites();
}



