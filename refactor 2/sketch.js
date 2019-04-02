// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

let rectWidth=240; //value for width of the rectangles
let rectHeight=135; //value for height of the rectangles

function setup(){
  createCanvas(480,270);
}

function draw() {
  background(255);
  backgroundControl(); 
  selectSquares(); 
}
  
function selectSquares(){ //code that holds the highlighting squares (uses the cartesian system)
  if (mouseX<240 && mouseY<135){ //highlights quadrant 2 
    rect(0,0,rectWidth,rectHeight);
  }
  else if (mouseX>240 && mouseY<135){ //highlights quadrant 1
    rect(240,0,rectWidth,rectHeight);
  }
  else if (mouseX<240 && mouseY>135){ // highlights quadrant 4
    rect(0,135,rectWidth,rectHeight);
  }
  else if (mouseX>240 && mouseY>135){ //highlights quadrant 3
    rect(240,135,rectWidth,rectHeight);
  }
}

function backgroundControl(){ //code that holds all the formatting for background
  stroke(0);
  line(240, 0, 240, 270);
  line(0, 135, 480, 135);
  noStroke();
  fill(0);
}