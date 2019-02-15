// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw(){
  //background(255);
  textSize(40);
  textFont("Georgia");
  text("Aitazaz", 10, 30);
}

function randomShape(){

}



function keyTyped(){
  if (key==="a"){
    fill(random(0,355),random(0,355),random(0,355));
    rect(mouseX,mouseY,75,100);
  }
  else if (key==="s"){
    fill(random(0,355),random(0,355),random(0,355));
    ellipse(mouseX,mouseY,100,100);
  }
  else if (key==="d"){
    fill(random(0,355),random(0,355),random(0,355));
    quad(mouseX, mouseY, 86, 20, 69, 63, 30, 76);
  }
  else if (key===" "){
    background(255);
  }
 
}
