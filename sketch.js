var FR, MR;


function setup() {
  createCanvas(800,400);
  FR = createSprite(600, 200, 50, 80);
  MR = createSprite(400, 200, 80, 30);

}

function draw() {
  background(255,255,255); 
  
  MR.x = World.mouseX;
  MR.y = World.mouseY;
  
  if((MR.x - FR.x < FR.width/ 2 + MR.width/2) && 
   (FR.x - MR.x < FR.width/ 2 + MR.width/2) && 
   (MR.y - FR.y < FR.height/ 2 + MR.height/2) && 
   (FR.y - MR.y < FR.height/ 2 + MR.height/2)){

    FR.shapeColor = "pink";
    MR.shapeColor = "blue";

  }
  else{

    FR.shapeColor = "green";
    MR.shapeColor = "green";

  }

  console.log(FR.width/ 2 + MR.width/2);
  console.log(MR.x - FR.x);

  drawSprites();
} 