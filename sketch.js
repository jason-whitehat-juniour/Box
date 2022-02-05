var box
function setup() {
  createCanvas(600,600);
  box=createSprite(300,200,50,50)
}

function draw() 
{
  background(30);
if(keyDown(RIGHT_ARROW)){
  box.position.x=box.position.x+5                                                 
}
if(keyDown(LEFT_ARROW)){
  box.position.x=box.position.x-5
}


















drawSprites()
}




