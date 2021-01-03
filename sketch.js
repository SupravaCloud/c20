/*Create Sprites */
var obj1,obj2;

function setup() {
  createCanvas(800,400);
  background("lightyellow");
  obj1=createSprite(400, 200, 50, 50);
  obj1.shapeColor="green";
  
  obj2=createSprite(500,350,50,40);
  obj2.shapeColor="red";
}

function draw() {
  background(255,255,255); 
   obj1.x=World.mouseX;
   obj1.y=World.mouseY;
   
   if((obj1.x-obj2.x) < (obj1.width/2+obj2.width/2) &&
                (obj2.x-obj1.x) < (obj1.width/2+obj2.width/2) )
   {
     obj1.shapeColor = "yellow";
     obj2.shapeColor = "yellow";
   }
   else{
    obj1.shapeColor="green";
    obj2.shapeColor="red";
   }
   
   console.log(obj1.x-obj2.x);
  drawSprites();
}