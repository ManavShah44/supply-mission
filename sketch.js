var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,brick1,brick2,brick3,world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	/*brick1=createSprite(250,600,25,150)
	brick2=createSprite(375,650,250,25)
	brick3=createSprite(500,600,25,150)
	brick1.shapeColor=color("red")
	brick2.shapeColor=color("red")
	brick3.shapeColor=color("red")*/
	brick1 = new Brick(250,600,20,150);
	brick2=new Brick(375,650,250,25)
	brick3=new Brick(500,600,25,150)
	brick1.shapeColor=color("red")
	brick2.shapeColor=color("red")
	brick3.shapeColor=color("red")

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  brick1.display()
  brick2.display()
  brick3.display()
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	 Matter.Body.setStatic(packageBody,false)
	 
    
  }
}



