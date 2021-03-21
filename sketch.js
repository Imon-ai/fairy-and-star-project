var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var stop_options,falling_options;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.loop();

	engine = Engine.create();
	world = engine.world;

	 falling_options = {
		restitution : 0.5
	}

	 stop_options = {
		isStatic: true
	}
	starBody = Bodies.circle(650 , 30 , 5 ,stop_options);
	World.add(world, starBody);

    Engine.run(engine);

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
    fairyVoice.loop();
	
}


function draw() {
  background(bgImg);

  keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here
  if(keyDown(LEFT_ARROW)) {
	  fairy.x = fairy.x - 2;
  }	

  if(keyDown(RIGHT_ARROW)) {
	  fairy.x += 2;
  }

  if(keyDown("space")) {
	  Engine.update(engine);
	  
	starBody = Bodies.circle(650 , 30 , 5 ,falling_options);
	

  if(starBody.position.y < 470) {
	
	starBody = Bodies.circle(650 , 30 , 5 ,stop_options);

	star.y = starBody.position.y;
	
	star.depth = background.depth;
	star.depth += 1;
	 
  }    
 }
}
