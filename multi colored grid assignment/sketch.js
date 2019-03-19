// Multi colored grid assigment
// Aitazaz Gilani
// 8/3/2019
//
// Extra for Experts:
// didnt do it.

let x = 0; // x coordinate for the squares
let y = 0; // y coordinate for squares
let h=50; // height of squares
let w=50; // width of squares
let pushToX=50; // controls the amount of space between each square in x dir
let pushToY=50; // controls the amount of space between each square in y dir
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255);
  grids();
  keyPressed();
  mousePressed();
  
  

}
function grids() { // code for the grid itself
  for (let x = 0; x < width; x += pushToX) {
    for (let y = 0; y < height; y += pushToY) {
      fill(random(0, 255),random(0, 255),random(0, 255));
      rect(x, y, w, h);
    }
  }
}


function keyPressed(){ // code controls the refresh (color change)
  grids();
}

function mousePressed(){ // code for the mouse controls
  if (mouseButton=== LEFT){// decreases size of squares
    w=w/2;
    h=h/2;
    pushToX=pushToX/2;
    pushToY=pushToY/2;
    grids();
  }
  else if (mouseButton===RIGHT){// increases size of squares
    w=w*2;
    h=h*2;
    pushToX=pushToX*2;
    pushToY=pushToY*2;
    grids();
  }
}



