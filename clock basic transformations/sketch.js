// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  push();
  translate(width/2,height/2);
  strokeWeight(3);
  ellipse(0,0,500,500);
  for (let i=0;i<360;i+=6){
    push();
    rotate(radians(i));
    if (i%30===0){
      strokeWeight(3);
      line(180,0,240,0);
    }
    else{
      strokeWeight(1);
      line(180,0,240,0);
    }
    line(180,0,240,0);
    pop();
  }
//hands
  push();
  rotate(radians(frameCount));
  strokeWeight(2);
  line(0,0,220,0);
  pop();
  push();
  rotate(radians(frameCount/6));
  strokeWeight(5);
  line(0,0,0,-150);
  pop();

  pop();
  
}
