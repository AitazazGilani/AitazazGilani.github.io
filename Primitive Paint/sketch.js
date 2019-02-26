// Primitive paint
// Aitazaz
// 2/15/2019
//
// Extra for Experts:
// -
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
}
let shapeDrawn = true;
function draw() {
  //background(255);
  textSize(40);
  textFont("Georgia");
  text("Aitazaz", 10, 30);
  randomShapes();
}

function randomShapes() {
  fill(random(0, 355), random(0, 355), random(0, 355));
  rect(random(0, windowWidth), random(0, windowHeight), random(10, 150), random(10, 150));
  ellipse(random(0, windowWidth), random(0, windowHeight), random(10, 150), random(10, 150));
}



function keyTyped() {
  if (key === "a") {
    fill(random(0, 355), random(0, 355), random(0, 355));
    rect(mouseX, mouseY, 75, 100);
  }
  else if (key === "s") {
    fill(random(0, 355), random(0, 355), random(0, 355));
    ellipse(mouseX, mouseY, 100, 100);
  }
  else if (key === "d") {
    fill(random(0, 355), random(0, 355), random(0, 355));
    quad(mouseX, mouseY, 86, 20, 69, 63, 30, 76);
  }
  else if (key === " ") {
    background(255);
  }
}
