// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x=45;
let xspeed=6;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(255);
  fill(175,100,270);
  ellipse(x,300,300,125);
  rect(mouseX,400,75,75);
  x += xspeed;
}
