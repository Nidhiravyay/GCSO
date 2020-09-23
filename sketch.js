var car,wall ; 
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(800,400);


  speed=random(55,90);
  weight=random(400,1500);

 car =  createSprite(0,200,20,20);
 
 wall = createSprite(750,200,10,50);
 car.velocityX = speed ;
}


function draw() {
  background(0);  

   

  if(wall.x - car.x < (wall.width/2 + car.width)/2) {
      car.velocityX = 0 ;
      var deformation =( 0.5*weight*speed*speed) /22500 ; 
      if(deformation >= 180 )
      {
        car.shapeColor = color(255,0,0);
      }
      if(deformation < 180 && deformation  >= 100 ) 
      {
        car.shapeColor = color(230,230,0);
      }
      if(deformation < 100 ) 
      {
        car.shapeColor = color(0,255,0);
      }
    } 
  drawSprites();
}