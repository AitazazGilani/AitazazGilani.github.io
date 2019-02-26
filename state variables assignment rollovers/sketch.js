// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let mouseOver=false;

function setup() {
  createCanvas(500,500);
  rectMode(CENTER);
}

function draw() {
  background(355);
  line(250,0,250,500);
  line(0,250,500,250);
}
function quad1(){
  if (mouseX>=250 && mouseY<=250 ){
    rect(250,0,250,250);
    fill(0);
    
  }
  else{
    fill(355);
    rect(250,0,250,250);
  }
}
