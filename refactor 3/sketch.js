//Refactor No.3
//Black and White Target

const xyLocation = 200; //const variable for the x and y locations OF circles

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(240);
  drawTarget(); 
}

function drawTarget(){ //code for target
  for (let reduceSize=400;reduceSize>0;reduceSize-=40){ //loop that will reduce the value of height and width as it goes
    ellipse(xyLocation,xyLocation,reduceSize,reduceSize); 
  }
}