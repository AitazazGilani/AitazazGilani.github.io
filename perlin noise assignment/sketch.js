// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xoff=0;
let rectWidth=100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode();
}

function draw() {
  background(220);
  stroke(0);
  noFill();
  for (let x=0; x<width ; x=x+10){
    rect(x,800,10,random(-800));
  }
  noLoop();

}