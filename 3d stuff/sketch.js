// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let angle=5;
let x=0;
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function draw() {
  angle=map(mouseX,0,width,0,40);
  background(220);
  push();

  for (let i=0;i<360;i+=45){
    x=x+45;
    push();
    //rotate(radians(i));
    boxes(70);

  
    pop();
  }
  pop();
}

function boxes(size){
  if (size>20){
    rotateZ(radians(angle));
    translate(size*1.5,0);
    box(size);
    boxes(size*0.8);
  }

}