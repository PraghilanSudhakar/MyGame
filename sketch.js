var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground,groundImage
var asteroid,asteroidImage
var rocket,rocketIMG


function preload(){

  
  groundImage = loadImage("BGimage.jpg");
 asteroidImage=loadImage("ast.png")
 rocketIMG=loadImage("download.png")
  
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  ground = createSprite(0,0,windowWidth,windowHeight);
  ground.addImage("ground",groundImage);
  ground.scale=2.2
  ground.x = ground.width /2;
  rocket=createSprite(200,200)
  rocket.addImage(rocketIMG)


}


function draw() {
  
background("groundImage");


  asteroids()
  drawSprites();
  
}
function asteroids(){
asteroid=createSprite(400,400)
asteroid.addImage("asteroid", asteroidImage)
asteroid.scale=0.1;
}