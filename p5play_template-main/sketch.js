var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
}

function draw() 
{
  background("yellow");

 /* if(keyIsDown(RIGHT_ARROW)){
box.position.x = box.position.x+5;
  }*/
  if(keyDown(RIGHT_ARROW)){
    background("red");
  }
 
drawSprites();
}




