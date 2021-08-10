function setup() {
  createCanvas(400, 400);
  noStroke()
}

// Reference image:
// https://wallpaperaccess.com/full/812545.jpg
// orange (sky) (251, 202, 83)
// back mountain (215, 117, 122)
// middle mountain (129, 108, 132)
// front mountain (96, 91, 123)

function draw() {
  // sky
  background(251,202,83);
  // back mountain
  push()
  translate(100, 150)
  rotate(PI/4)
  fill(215, 117, 122)
  rect(0, 0, 1000, 1000)
  pop()
  //middle moutain
  push()
  translate(340, 170)
  rotate(PI/3)
  fill(129,108,132)
  rect(0, 0, 1000, 1000)
  pop()
  //front mountain
  push()
  translate(60, 260)
  rotate(PI/6)
  fill(96, 91, 123)
  rect(0, 0, 1000, 1000)
  pop()
}