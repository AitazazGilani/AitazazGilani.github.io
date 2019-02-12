// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x=45;
let xspeed=6;
let randomRgb=[random(),random(),random()];
function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw(){
  background(255);
}
function keyTyped(){
  if (key==="a"){
    rect(mouseX,mouseY,75,100);
  }
}