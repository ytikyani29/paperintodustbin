
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftSide;
var rightSide;


function setup() {
	createCanvas( 500, 500);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options ={
		isStatic:false,
        restitution:0.3,
		friction:0,
		density:1.2
	}
    ball = Bodies.circle(10,50,10,ball_options);
  World.add(world,ball);
  groundObj=new Ground(width/2,480,width,20);
  leftSide = new Ground(300,410,20,120);
  rightSide = new Ground(450,410,20,120);
	//Engine.run(engine);
  
  ellipseMode(RADIUS);
  console.log(rightSide);
  console.log(groundObj);
  console.log(leftSide);
}


function draw() {
  
  background(180);
  Engine.update(engine);
  
  groundObj.show();
  leftSide.show();
  rightSide.show();
  
  ellipse (ball.position.x,ball.position.y,10);
  if (keyDown("w") ) {
    console.log("keyPressed");
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-5})
  }
}

function keyPressed() {
  
}


