function setup() {
  createCanvas(400, 400);
}

var x = 100
var y =  100

function draw() {
  background(255);
  
  circle(x, y, 50)
  
  if(keyIsDown(LEFT_ARROW)) {
    x -= 1
  }
  if(keyIsDown(RIGHT_ARROW)) {
    x += 1
  }
  if(keyIsDown(UP_ARROW)) {
    y -= 1
  }
  if(keyIsDown(DOWN_ARROW)) {
    y += 1
  }
}