var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "teal";

  movingRect = createSprite(345, 200, 40, 10);
  movingRect.shapeColor = "teal";
}

function draw() {
  background(255,255,255);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if (movingRect.x - fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x - movingRect.x<movingRect.width/2+fixedRect.width/2 && 
    movingRect.y - fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y - movingRect.y<movingRect.height/2+fixedRect.height/2 ) {
      movingRect.shapeColor = "black";
      fixedRect.shapeColor = "black";
    }
    else {
      movingRect.shapeColor = "teal";
      fixedRect.shapeColor = "teal";
    }
  drawSprites();
}