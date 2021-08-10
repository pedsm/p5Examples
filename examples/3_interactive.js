function setup() {
  createCanvas(800, 800);

}

// white (248, 244, 249)
// blue (46, 64, 82)

function draw() {
  background(248,244,249);
  noStroke()
  
  ellipse(400, 400, mouseX, mouseY)

  // follow the mouse
  fill(255)
  circle(mouseX, mouseY, 60)
  fill(46,64,82)
  circle(mouseX, mouseY, 50)
  
 
}