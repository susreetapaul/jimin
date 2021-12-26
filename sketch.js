
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	Engine = Engine.create();
	World = Engine.world;
    var ball_options={
	isStatic:false,
	restitution:0.3,
	fricton:0,
	density:0.2
    World.Bodies.circle(x ,y ,radius ,[options] ,[maxSide])


	}




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



