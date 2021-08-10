function setup() {
  createCanvas(600, 600);
  background(255);

}

// green (53, 88, 52)
function draw() {

  noStroke()
  if(mouseIsPressed) {
    fill(53,88,52)
    circle(mouseX, mouseY, 10)
  }

  
}

function keyPressed() {
  if(keyCode == ENTER) {
    background(255)
  }
}