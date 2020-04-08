
var r = 0;
var g = 50;
var b=255;

function setup(){

  createCanvas(1200,400);
}


function draw(){
background(r,g-30,b*3);
  // change the value of Red based on the mouse movement about the X axis
  r = map(mouseX,0,1200,200,300);
  // change the value of Green based on the mouse movement about the X axis
  g = map(mouseX,300,900,200,300);
  // change the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,600,800,200,300);

  // Create an ellipse that will move around with you mouse about the X axis.
  fill("white");
  ellipse(mouseX,200,40,40);
  
}
