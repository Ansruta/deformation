var speed,weight;
var car;
var wall;
var deform;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1500, 200, 60, height/2);
  deform=0.5*weight*speed*speed/22500; 
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255); 
  if(deform=>180){
    car.shapeColor="red"
  }else if(deform>100&&deform<180){
    car.shapeColor="yellow"
  }else(deform<100){
    car.shapeColor="green"
  }
  drawSprites();
}