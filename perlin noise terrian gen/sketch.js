// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tWidth=1;
let start=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function draw() {
  background(220);
  drawTerrain();
}

function drawTerrain(){
  let xOff=start;
  let Highest=height;
  
  let highestX=0;
  for (let x=0; x<width; x+=tWidth){
    fill(0);
    //rect(x,random(height),x+tWidth,height);
    let curHeight=noise(xOff)*height;
    rect(x,curHeight,x+tWidth,height);
    xOff+=0.01;
    //noise(time) 0 to 1

  
  }
  start+=0.01;

}
