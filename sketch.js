
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pac;
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;

function preload()
{
	
}

function setup() {
	createCanvas(750, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	pac = new Pac(20, 230);
	wall1 = new Wall(60, 160, 90, 10);
	wall2 = new Wall(10, 250, 10, 490);
	wall3 = new Wall(380, 490, 730, 10);
	wall4 = new Wall(740, 250, 10, 490);
	wall5 = new Wall(380, 10, 730, 10);
	wall6 = new Wall(170, 200, 10, 50);
	wall7 = new Wall(210, 220, 90, 10);
	wall8 = new Wall(90, 300, 10, 50);
	wall9 = new Wall(130, 320, 90, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  pac.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  drawSprites();
 
}



