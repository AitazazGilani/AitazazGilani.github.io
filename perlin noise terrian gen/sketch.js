// Perlin noise project (terrain generation)
// Aitazaz Gilani
// 14/4/19
//
// Extra for Experts:
// the flag challenage

let x=0;
let y=0;
let tWidth=1;
let start=0;
let highestX=0; //value will hold the highest rect x value

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function drawTerrain(){ //code for terrain generation
  let Highest=height;
  let xOff=start;
  for (let x=0; x<width; x+=tWidth){
    let curHeight=noise(xOff)*height; //terrain generation
    rect(x,curHeight,x+tWidth,height);
    if (curHeight<Highest){ //if statement that will hold values for the highest rect
      Highest=curHeight; 
      highestX=x;
    }
    xOff+=0.01;
  }
  start+=0.01;
  drawFlag(highestX,Highest); //will draw flag from the variables changed from if statement
}



function draw() {
  background(220);
  drawTerrain();
}



function drawFlag(x,y){ //code for the flag
  push();
  scale(0.5);
  translate(x,y);
  strokeWeight(4);
  line(x,y,x,y-50);
  triangle(x,y-50,x+50,y-70,x,y-100);
  pop();
}