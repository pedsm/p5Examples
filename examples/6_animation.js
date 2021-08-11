var redChar;
var cyanChar;
var yellowChar;
var greenChar;

function preload() {
  redChar = loadImage('https://raw.githubusercontent.com/pedsm/p5Examples/main/assets/red.png')
  cyanChar = loadImage('https://raw.githubusercontent.com/pedsm/p5Examples/main/assets/cyan.png')
  yellowChar = loadImage('https://raw.githubusercontent.com/pedsm/p5Examples/main/assets/yellow.png')
  greenChar = loadImage('https://raw.githubusercontent.com/pedsm/p5Examples/main/assets/green.png')
}

function setup() {
  createCanvas(800, 800);

}

var x = 100
var y =  100
var counter = 0

function draw() {
  background(255);
  
  image(redChar, x, y, 41, 50)
  
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
  
  counter += 0.01
  offset = (Math.sin(counter) + 1) / 2
  image(cyanChar, lerp(100, 200, offset), 200, 41, 50)
  image(yellowChar, 600, lerp(50, 700, offset), 41, 50)
  image(greenChar, lerp(100, 700, offset), lerp(650, 700, offset), 41, 50)
}