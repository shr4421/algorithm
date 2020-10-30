var fr,mr;

function setup() {
  createCanvas(800,400);

  fr=createSprite(200,200,50,50);
  fr.shapeColor="green";


  mr=createSprite(600,200,50,50);
  mr.shapeColor="green";

  fr.velocityX=2;
  mr.velocityX=-2;

}

function draw() {

  background("yellow");  

  // mr.x=World.mouseX;
  //mr.y=World.mouseY;

if(mr.x-fr.x<=mr.width/2+fr.width/2 && 
  fr.x-mr.x<=mr.width/2+fr.width/2 &&
  mr.y-fr.y<=mr.height/2+fr.height/2 &&
  fr.y-mr.y<=mr.height/2+fr.height/2){

   mr.velocityX=mr.velocityX*-1;
   fr.velocityX=fr.velocityX*-1;
    //mr.shapeColor="red";
    //fr.shapeColor="red";

}

else{

  mr.velocityX=mr.velocityX;
  fr.velocityX=fr.velocityX;
  
 // mr.shapeColor="green";
 // fr.shapeColor="green";

}

  drawSprites();
}