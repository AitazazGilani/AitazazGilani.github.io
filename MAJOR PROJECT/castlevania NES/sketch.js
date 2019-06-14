// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let walkingLeft,WalkingRight,staticLeft,staticRight;
function preload(){
  walkingLeft=loadAnimation('assets/movingLeft 1.png', 'assets/movingLeft 2.png');
  walkingRight=loadAnimation('assets/movingRight 1.png', 'assets/movingRight 2.png');
  staticLeft=loadImage("assets/staticLeft.png");
  staticRight=loadImage("assets/staticRight.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}


