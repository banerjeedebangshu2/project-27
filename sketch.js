const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5; 
var line1, line2, line3, line4, line5;
var roof;
var num;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	num = 50

	//Create the Bodies Here.

	roof = new Ground(400,100,600,30)

	ball1 = new Ball(200,500,num);
	line1 = new Line(ball1.body,roof.body,-200,0)

	ball2 = new Ball(300,500,num);
	line2 = new Line(ball2.body,roof.body,-100,0)

	ball3 = new Ball(400,500,num);
	line3 = new Line(ball3.body,roof.body,0,0)
	
	ball4 = new Ball(500,500,num);
	line4 = new Line(ball4.body,roof.body,100,0)

	ball5 = new Ball(600,500,num);
	line5 = new Line(ball5.body,roof.body,200,0)

	

	Engine.run(engine);
  
}


function draw() {

//	console.log(ball1.js)

	ball1.body.debug = true;

	rectMode(CENTER);
	background(200);
  
	ball1.display(255);
	line1.display()

	ball2.display(255);
	line2.display()

	ball3.display(255);
	line3.display()

	ball4.display(255);
	line4.display()

	ball5.display(255);
	line5.display()

	roof.display("gray");

	drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100})

	}
}

/*
function mouseDragged(){

	Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});

}

function mouseDragged(){

	Matter.Body.setPosition(ball2.body, {x: mouseX , y: mouseY});

}

function mouseDragged(){

	Matter.Body.setPosition(ball3.body, {x: mouseX , y: mouseY});

}

function mouseDragged(){

	Matter.Body.setPosition(ball4.body, {x: mouseX , y: mouseY});

}

function mouseDragged(){

	Matter.Body.setPosition(ball5.body, {x: mouseX , y: mouseY});

}

*/