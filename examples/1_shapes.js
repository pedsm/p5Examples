function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  
  //Shapes
  // x, y, width, height
  rect(10, 10, 100, 100)
  
  // x, y, radius 
  ellipse(170, 60, 100)
  
  // x1,y1,x2,y2,x3,y3
  triangle(230,10, 230, 110, 330, 110)
 
  // Show coordinates on mouse
  text((mouseX + "," + mouseY), mouseX, mouseY)
}